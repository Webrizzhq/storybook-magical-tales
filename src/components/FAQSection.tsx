import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Star, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "How can I order books for my school?",
    a: "You can place bulk orders through our education portal or contact our education team directly. We offer special pricing for schools and educational institutions."
  },
  {
    q: "Do you offer virtual author visits?",
    a: "Yes! We offer both in-person and virtual author visits. Virtual sessions can accommodate schools anywhere in the world and are available in English, Kiswahili, or French."
  },
  {
    q: "Are teaching resources really free?",
    a: "Absolutely! All our teaching guides, activity sheets, and educational resources are completely free for educators. Just download them from our resources page."
  },
  {
    q: "Can I request a specific book or topic?",
    a: "We love hearing from our readers! While we can't guarantee publication, we welcome all suggestions and consider them in our publishing decisions."
  },
  {
    q: "How do I become a Redhot Africa author?",
    a: "We accept manuscript submissions through our parent company, Storymoja Publishers. Please check our submission guidelines or contact our editorial team."
  },
  {
    q: "How can I support your campaigns?",
    a: "You can support by donating, partnering with us, or simply spreading the word. Visit our campaigns page to learn more and get involved."
  }
];

// alternating accents for each FAQ card
const accents = [
  {
    ring: "border-primary/40 hover:border-primary/70",
    bar: "bg-primary",
    chip: "bg-primary/10 text-primary",
    icon: "text-primary"
  },
  {
    ring: "border-yellow-300/70 hover:border-yellow-400",
    bar: "bg-yellow-400",
    chip: "bg-yellow-400/15 text-yellow-700",
    icon: "text-yellow-600"
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, when: "beforeChildren" }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 22 }
    }
  };

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-20 bg-main/10">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-10 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute right-[-6%] bottom-6 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-yellow-600 mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Quick Answers to Common Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Redhot Africa — from books to campaigns, support, and more.
          </p>
        </div>

        {/* FAQ Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((f, i) => {
            const acc = accents[i % accents.length];
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;

            return (
              <motion.div
                key={i}
                variants={item}
                layout
                className={`relative rounded-2xl bg-white border ${acc.ring} shadow-sm hover:shadow-xl transition-all`}
              >
                {/* accent bar */}
                <div className={`absolute left-0 top-0 h-full w-1.5 ${acc.bar} rounded-l-2xl`} />

                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="group flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${acc.chip}`}>
                      FAQ
                    </span>
                    <span className="font-semibold text-primary">{f.q}</span>
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`shrink-0 ${acc.icon}`}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      key={`content-${i}`}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      
      </div>
    </section>
  );
}
