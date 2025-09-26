// api/chat.ts

import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Define the type structure for the FAQ data
interface Faq {
  q: string;
  a: string;
}

interface FaqSection {
  title: string;
  faqs: Faq[];
}

// 2. Data Inlined (and type-cast for type safety)
const faqsData: FaqSection[] = [
  {
    "title": "General Conversation",
    "faqs": [
      {
        "q": "Hello",
        "a": "Hello there! I'm Redhot's helpful AI assistant, ready to answer any questions you have about Redhot Books, our workshops, and our mission."
      },
      {
        "q": "Hi",
        "a": "Hi! Welcome. I'm here to help you with information on Redhot Books."
      },
      {
        "q": "Hey",
        "a": "Hey! How can I assist you today? I specialize in information about Redhot Books."
      },
      {
        "q": "Who are you",
        "a": "I am Redhot's helpful AI assistant. My knowledge is focused on Redhot Books, our publishing activities, and our campaigns."
      },
      {
        "q": "How are you",
        "a": "I'm functioning perfectly and ready to answer your questions about Redhot Books!"
      },
      // You can add other common conversational starters here
    ]
  },
  {
    "title": "Publishing & Submissions",
    "faqs": [
      {
        "q": "Can I submit my manuscript to Redhot?",
        "a": "No. We don’t accept unsolicited submissions. However, if you are an already published writer, you can apply to join our immersive Redhot workshops."
      },
      {
        "q": "What are Redhot Workshops?",
        "a": "Hands-on labs where selected authors get guided through the complex research and development behind our books, from African history and wildlife sleuthing to detective plotting and cultural deep dives."
      },
      {
        "q": "Do authors get paid?",
        "a": "Yes. Redhot Authors sign publishing contracts and earn royalties."
      },
      {
        "q": "Who owns the rights to my story?",
        "a": "Copyright is shared with Storymoja. Authors earn a standard 10% NET ROYALTY."
      }
    ]
  },
  {
    "title": "About Redhot Books",
    "faqs": [
      {
        "q": "Why Redhot?",
        "a": "Children deserve more than exam prep. Our mission is to make kids LOVE books."
      },
      {
        "q": "What kinds of stories do you publish?",
        "a": "High-quality African stories driven by social justice, African history, detective fiction and live storytelling."
      },
      {
        "q": "What ages are your books for?",
        "a": "Redhot Novels (+15 years), Best African Series (+12 years), Shizu Historical Fiction (11–14 years), SUDEF Wildlife Detectives (9–13 years), Case Crackers (7–9 years), Redhot Picture Books (<9 years)"
      },
      {
        "q": "Are your books in Kiswahili too?",
        "a": "Yes, some already — with more on the way."
      }
    ]
  },
  {
    "title": "Campaigns & Storymoja",
    "faqs": [
      {
        "q": "What’s the relationship between Storymoja, Start A Library, and Redhot?",
        "a": "Same family, different missions..."
      },
      {
        "q": "How can I get involved?",
        "a": "You can: Share reviews, join the bookclub, tune into the podcast, volunteer, support campaigns."
      }
    ]
  },
  {
    "title": "Safeguarding",
    "faqs": [
      {
        "q": "What is your safeguarding policy?",
        "a": "Storymoja is committed to a safe environment for everyone. Respect is non-negotiable."
      }
    ]
  }
];


interface Request {
  body: string | any; // Allow string or object
  headers: { [key: string]: string | undefined };
}

interface Response {
  status: (code: number) => Response;
  json: (data: any) => void;
}

// Keeping this function for structure, though it just returns the inlined data
function loadFaqs(): FaqSection[] {
  return faqsData; 
}

// Note: The 'data' parameter is now correctly typed as FaqSection[]
const findBestMatch = (data: FaqSection[], userQuestion: string): Faq => { 
  const lowerQ = userQuestion.toLowerCase();
  
  // Flattening and mapping maintains type safety
  const flattenedFaqs = data.flatMap(section => 
    section.faqs.map(f => ({ q: f.q, a: f.a }))
  );
  
  for (const faq of flattenedFaqs) {
    // This is the simplified matching logic: checks if user input contains the first word of the FAQ question
    if (lowerQ.includes(faq.q.toLowerCase().split(" ")[0])) {
      return faq;
    }
  }
  // Default fallback answer (must match the expected Faq return type)
  return { q: "Unknown", a: "Sorry, I only have information about Redhot Books." };
};

export default async function handler(req: Request, res: Response) {
  try {
    // ... (Input validation and parsing remains the same) ...

    // Parse req.body
    let body: { message?: string } = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    
    // Validate message field
    const { message } = body;
    if (!message || typeof message !== "string") {
      throw new Error("Message field is missing or invalid");
    }

    // --- Core Logic ---
    const faqsDataToUse = loadFaqs();
    const faq = findBestMatch(faqsDataToUse, message);
    
    // The unified prompt logic
    const prompt = `
You are Redhot's helpful AI assistant.
Always prioritize the following FAQ context:
Q: ${faq.q}
A: ${faq.a}

If the FAQ context provides a specific answer (including a greeting), use that context to formulate a helpful response.
If the FAQ context returned the default answer ("Sorry, I only have information about Redhot Books."), then adhere strictly to that.
User asked: ${message}
    `;

    // **CRITICAL REMINDER**: Ensure GEMINI_API_KEY is set in Vercel environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not set.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    res.status(200).json({ reply });
  } catch (err: any) {
    console.error("Error in /api/chat:", err);
    res.status(500).json({ error: "Internal server error", details: err.message });
  }
}