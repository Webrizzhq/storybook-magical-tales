// api/chat.ts

import { GoogleGenerativeAI } from "@google/generative-ai";

// Import data directly from the new .ts file
import faqs from "../src/data/faqs.ts";

interface Request {
  body: string | any; // Allow string or object
  headers: { [key: string]: string | undefined };
}

interface Response {
  status: (code: number) => Response;
  json: (data: any) => void;
}

// Simplified function to return the already loaded faqs data
function loadFaqs() {
  return faqs; 
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
    // Log for debugging
    console.log("Request headers:", req.headers);
    console.log("Raw req.body:", req.body);
    console.log("Content-Type:", req.headers["content-type"]);

    // Validate Content-Type
    const contentType = req.headers["content-type"]?.toLowerCase();
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error(`Invalid Content-Type: ${contentType || "none"}. Expected application/json`);
    }

    // Handle empty body
    if (!req.body) {
      throw new Error("Request body is empty");
    }

    // Parse req.body
    let body;
    if (typeof req.body === "string") {
      try {
        body = JSON.parse(req.body);
      } catch (parseErr) {
        console.error("JSON parse error:", parseErr);
        throw new Error(`Invalid JSON in request body: ${req.body}`);
      }
    } else {
      body = req.body; // If already parsed (unlikely in Vercel)
    }

    // Validate message field
    const { message } = body;
    if (!message || typeof message !== "string") {
      throw new Error("Message field is missing or invalid");
    }

    const faqsData = loadFaqs(); // No need for await anymore
    const faq = findBestMatch(faqsData, message);
    
    // **CRITICAL REMINDER**: Ensure GEMINI_API_KEY is set in Vercel environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set.");
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
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