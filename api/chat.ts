import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@prisma/client';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const prisma = new PrismaClient();

interface KnowledgeMatch {
  title: string;
  content: string;
  sources: string[];
}

async function findBestMatch(question: string): Promise<KnowledgeMatch> {
  const lowerQ = question.toLowerCase();
  const entries = await prisma.knowledgeEntry.findMany();
  let bestScore = 0;
  let best = { title: 'Unknown', content: 'Sorry, I only have information about Redhot Books.', sources: [] };

  for (const entry of entries) {
    const keywords = entry.keywords.map((k: string) => k.toLowerCase());
    const contentStr = JSON.stringify(entry.content).toLowerCase();
    let score = keywords.filter(k => lowerQ.includes(k)).length / (keywords.length || 1);
    score += lowerQ.split(' ').filter(word => contentStr.includes(word)).length / lowerQ.split(' ').length * 0.5;
    if (score > bestScore) {
      bestScore = score;
      best = { title: entry.title, content: JSON.stringify(entry.content), sources: entry.sources };
    }
  }
  return bestScore >= 0.3 ? best : { title: 'Unknown', content: 'Sorry, I only have information about Redhot Books.', sources: [] };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { message } = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!message) return res.status(400).json({ error: 'No message' });

    const match = await findBestMatch(message);
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('No API key');

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = `You are Redhot's AI assistant for Storymoja Africa. Use this context: Title: ${match.title}\nContent: ${match.content}\nSources: ${match.sources.join(', ')}\nAnswer naturally based on it. User: ${message}`;
    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.status(200).json({ reply });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  } finally {
    await prisma.$disconnect();
  }
}