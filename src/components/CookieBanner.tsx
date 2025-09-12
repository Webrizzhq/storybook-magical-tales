// src/components/CookieBanner.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Optionally, you could store a "declined" flag or just close the banner
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 md:left-6 left-4 z-50"
        >
          <div className="bg-white rounded-sm text-black p-5 w-[400px] flex flex-col gap-3 border-4 border-yellow-500">
            <h1 className="font-bold text-lg text-center">We value your privacy</h1>

            {/* Icon + Text */}
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl animate-bounce mt-1">📚</span>
              <p className="text-sm leading-snug">
                We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3 justify-center">
              <button
                onClick={acceptCookies}
                className="bg-main/90 text-yellow-400 rounded-sm text-sm px-4 py-2 hover:bg-main/60 transition-all shadow-md"
              >
                Accept All
              </button>
              <button
                onClick={declineCookies}
                className="bg-main/90 text-yellow-400 rounded-sm text-sm px-4 py-2  hover:bg-main/60 transition-all shadow-md"
              >
                Reject All
              </button>
              <Link
                to="/cookie-policy"
                className="bg-transparent text-[#660000] border-2 border-[#660000]/60 font-semibold rounded-sm px-4 py-2 hover:bg-main/60 transition-all text-sm flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
