import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageSquare, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import hero from "@/assets/hero-reading.jpg";
import Layout from "@/components/Layout";

const faqSections = [
  {
    title: "Publishing & Submissions",
    faqs: [
      {
        q: "Can I submit my manuscript to Redhot?",
        a: "No. We don’t accept unsolicited submissions. However, if you are an already published writer, you can apply to join our immersive Redhot workshops. (Suggest link be created for submissions/landing page)."
      },
      {
        q: "What are Redhot Workshops?",
        a: "Hands-on labs where selected authors get guided through the complex research and development behind our books, from African history and wildlife sleuthing to detective plotting and cultural deep dives."
      },
      {
        q: "Do authors get paid?",
        a: "Yes. Redhot Authors sign publishing contracts and earn royalties."
      },
      {
        q: "Who owns the rights to my story?",
        a: "Copyright is shared with Storymoja. Authors earn a standard 10% NET ROYALTY. Our process is collaborative and rewarding, guiding you from research and plotting to editing, publishing and launch."
      }
    ]
  },
  {
    title: "About Redhot Books",
    faqs: [
      {
        q: "Why Redhot?",
        a: "Children deserve more than exam prep. Our mission is to make kids LOVE books — to laugh, question, imagine and crave the next story. We speak directly to children’s hearts and minds."
      },
      {
        q: "What kinds of stories do you publish?",
        a: "High-quality African stories driven by social justice, African history, detective fiction and live storytelling. All designed to spark critical thinking, build values and grow African pride."
      },
      {
        q: "What ages are your books for?",
        a: `Redhot Novels (+15 years)
Best African Series (+12 years)
Shizu Historical Fiction (11–14 years)
SUDEF Wildlife Detectives (9–13 years)
Case Crackers (7–9 years)
Redhot Picture Books (<9 years)`
      },
      {
        q: "Are your books in Kiswahili too?",
        a: "Yes, some already — with more on the way."
      }
    ]
  },
  {
    title: "Campaigns & Storymoja",
    faqs: [
      {
        q: "What’s the relationship between Storymoja, Start A Library, and Redhot?",
        a: `Same family, different missions. 
• Storymoja: “Get a Book in Every Hand.” Focuses on CBC curriculum, teacher training, competitions at scale. 
• Redhot: “Books? Yes. But only the kind that make your kid argue, laugh, and plot a better world.” Focuses on high-quality literature and immersive creative experiences.
• Start A Library: Storymoja’s nonprofit arm. Sets up libraries, gets books into kids’ hands, and runs the annual Storymoja Read Aloud.`
      },
      {
        q: "How can I get involved?",
        a: `You can: 
• Share reviews of our books 
• Join the monthly Storymoja Festival Bookclub 
• Tune into and share the Storymoja Festival Podcast 
• Visit our stands at book fairs 
• Volunteer as a Reading Ambassador 
• Support live campaigns like Wild Legacy`
      }
    ]
  },
  {
    title: "Safeguarding",
    faqs: [
      {
        q: "What is your safeguarding policy?",
        a: "Storymoja is committed to a safe environment for everyone. Respect is non-negotiable — no harassment, abuse, or violence EVER. Allegations are taken seriously and may involve legal authorities. As a children’s brand, we take extra care to avoid inappropriate content or conduct. Protecting kids – and the community around them – is at the heart of everything we do."
      }
    ]
  }
];

const accents = [
  {
    bg: "bg-white",
    ring: "border-primary/40 hover:border-primary/70",
    bar: "bg-primary",
    chip: "bg-primary/10 text-primary",
    icon: "text-primary"
  },
  {
    bg: "bg-yellow-50",
    ring: "border-yellow-300/70 hover:border-yellow-400",
    bar: "bg-yellow-400",
    chip: "bg-yellow-400/15 text-yellow-700",
    icon: "text-yellow-600"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => setOpenIndex(openIndex === id ? null : id);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-main overflow-hidden md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="FAQ hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg mt-20">
            Redhot FAQs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mt-4">
            Everything you need to know about Redhot Africa — publishing,
            workshops, campaigns, and safeguarding.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 space-y-16">
          {faqSections.map((section, secIndex) => (
            <div key={section.title}>
              <div className="text-center mb-10">
                <Badge className="bg-primary/10 text-submain px-4 py-2 mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  {section.title}
                </Badge>
                <h2 className="text-3xl font-bold text-submain">
                  {section.title}
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {section.faqs.map((f, i) => {
                  const acc = accents[i % accents.length];
                  const id = `${secIndex}-${i}`;
                  const isOpen = openIndex === id;

                  return (
                    <motion.div
                      key={id}
                      whileHover={{ scale: 1.01 }}
                      className={`relative rounded-2xl ${acc.bg} border ${acc.ring} shadow-sm hover:shadow-xl transition-all`}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full w-1.5 ${acc.bar} rounded-l-2xl`}
                      />

                      <button
                        onClick={() => toggle(id)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-4 p-6 text-left"
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${acc.chip}`}
                          >
                            FAQ
                          </span>
                          <span className="font-semibold text-primary">
                            {f.q}
                          </span>
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18
                          }}
                          className={`shrink-0 ${acc.icon}`}
                        >
                          {isOpen ? (
                            <MessageSquare className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`content-${id}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                              {f.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout >
  );
}
