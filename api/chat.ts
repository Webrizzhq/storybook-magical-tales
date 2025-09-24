import { GoogleGenerativeAI } from "@google/generative-ai";
import faqs from "../src/data/faqs.json";

// Define minimal types (optional)
interface Request {
  body: string;
}

interface Response {
  status: (code: number) => Response;
  json: (data: any) => void;
}

// Flatten FAQs for searching
const flattenedFaqs = (faqs as any[]).flatMap(section =>
  section.faqs.map((f: any) => ({ q: f.q, a: f.a }))
);

function findBestMatch(userQuestion: string) {
  const lowerQ = userQuestion.toLowerCase();
  let best = flattenedFaqs[0];

  for (const faq of flattenedFaqs) {
    if (lowerQ.includes(faq.q.toLowerCase().split(" ")[0])) {
      best = faq;
      break;
    }
  }
  return best;
}

export default async function handler(req: Request, res: Response) {
  try {
    const { message } = JSON.parse(req.body);

    const faq = findBestMatch(message);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
You are Redhot's helpful AI assistant.
Always prioritize the following FAQ context:
Q: ${faq.q}
A: ${faq.a}

If the user's question is unrelated, politely say you only know about Redhot Books.
User asked: ${message}
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    res.status(200).json({ reply });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}