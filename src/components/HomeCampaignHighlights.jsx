import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeCampaignHighlights() {
  const highlights = [
    {
      id: 1,
      title: "The Wild Legacy Campaign",
      goal: "Preserve African wildlife stories in literature",
      description:
        "Africa's gift to the world is its living model of coexistence with wildlife. By engaging with powerful wildlife stories, this campaign will inspire 1 million Kenyan children to rediscover that heritage and protect their natural world",
      icon: Leaf,
      color: "bg-gradient-forest",
      image: "wild-legacy.png",
    },
    {
      id: 2,
      title: "Online Safety Campaign in partnership with Meta",
      goal: "Educate 5,000 children on digital safety",
      description:
        "100+ school book clubs were inspired by stories from Deception and Other Stories to create their own online safety codes",
      icon: Shield,
      color: "bg-gradient-sky",
      image: "online-campaign.png",
    },
  ];

  return (
    <section className="bg-white dark:bg-red-900">
      <div className="mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 mt-40">
            Live Campaigns
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Redhot Experiences bring books to life. Through book clubs, gamified challenges, competitions, immersive launches and musicals, we transform stories into experiences that ignite a love of reading and create lasting change
          </p>
        </motion.div>

        {/* Campaign cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {highlights.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 bg-main hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden rounded-2xl">
                {/* Campaign Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div
                      className={`w-12 h-12 ${campaign.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <campaign.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Campaign Content */}
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-3">{campaign.goal}</p>
                  <p className="text-white/90 text-base leading-relaxed mb-6 flex-grow">
                    {campaign.description}
                  </p>

                  {/* Support Campaign Button */}
                  <Link to={`/campaigns/${campaign.id}`} className="mt-auto">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="bg-gold-gradient text-white px-6 py-2 rounded-lg hover:shadow-md transition-all duration-300"
                      >
                        Get Involved
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pb-40"
        >
          <Link to="/campaigns">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gold-gradient text-lg px-8 py-6 rounded-xl hover:shadow-glow transition-all duration-300"
              >
                Browse All Campaigns
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
