import { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react"; // For chat bubble and close icons

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);

    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);

    try {
      const payload = JSON.stringify({ message: input });
      console.log("Sending payload:", payload); // Debug client-side payload
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.details || `HTTP error ${res.status}`);
      }

      const botMsg: Message = { role: "assistant", content: data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      console.error("Client error:", err);
      const errorMessage = err.message || "Something went wrong. Please try again.";
      setError(errorMessage);
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: `⚠️ ${errorMessage}` },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-500 text-white rounded-full p-4 shadow-lg hover:bg-yellow-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[32rem] rounded-lg shadow-xl flex flex-col transform transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Redhot AI Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-900 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center">Start chatting with me!</p>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={`mb-3 p-2 rounded-lg max-w-[80%] ${
                    m.role === "user"
                      ? "bg-blue-100 ml-auto text-blue-900"
                      : "bg-green-100 mr-auto text-green-900"
                  }`}
                >
                  <p className="text-sm">
                    <b>{m.role === "user" ? "You" : "Assistant"}:</b> {m.content}
                  </p>
                </div>
              ))
            )}
            {error && (
              <div className="mb-3 p-2 rounded-lg max-w-[80%] bg-red-100 mr-auto text-red-900">
                <p className="text-sm"><b>Error:</b> {error}</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me something..."
                disabled={isLoading}
                aria-label="Chat input"
              />
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}