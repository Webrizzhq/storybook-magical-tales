import { GoogleGenerativeAI } from "@google/generative-ai";

interface Request {
  body: string;
}

interface Response {
  status: (code: number) => Response;
  json: (data: any) => void;
}

async function loadFaqs() {
  const faqs = await import("../src/data/faqs.json");
  return faqs.default;
}

const findBestMatch = (faqs: any[], userQuestion: string) => {
  const lowerQ = userQuestion.toLowerCase();
  const flattenedFaqs = faqs.flatMap(section =>
    section.faqs.map((f: any) => ({ q: f.q, a: f.a }))
  );
  for (const faq of flattenedFaqs) {
    if (lowerQ.includes(faq.q.toLowerCase().split(" ")[0])) {
      return faq;
    }
  }
  return { q: "Unknown", a: "Sorry, I only have information about Redhot Books." };
};

export default async function handler(req: Request, res: Response) {
  try {
    const { message } = JSON.parse(req.body);
    const faqs = await loadFaqs();
    const faq = findBestMatch(faqs, message);
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
    console.error("Error in /api/chat:", err);
    res.status(500).json({ error: "Internal server error", details: err.message });
  }
}