import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CampaignModal from '@/components/CampaignModal';

export default function CampaignPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [subModalData, setSubModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: JSX.Element[];
  }>({ isOpen: false, title: '', content: [] });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Also close sub-modal if open
    setSubModalData({ ...subModalData, isOpen: false });
  };

  const openSubModal = (title: string, content: JSX.Element[]) => {
    setSubModalData({ isOpen: true, title, content });
  };

  const closeSubModal = () => {
    setSubModalData({ ...subModalData, isOpen: false });
  };

  const campaignData = {
    id: 1,
    title: "The Wild Legacy Campaign",
    description: "Support the creation and distribution of children's books celebrating Africa's rich wildlife heritage.",
    impact: "700 books distributed • 10 communities engaged • 400 children inspired",
    image: "/Latest/wild-legacy.png",
    featured: true,
    icon: Leaf,
    color: "bg-gradient-forest",
    learnMore: [
      <div key="about" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">About the Campaign</h3>
        <p>
          Co-led by Storymoja and Start a Library Trust, the Wild Legacy campaign seeks to reach one million children in Kenya through culturally relevant wildlife-themed books, teacher trainings, school book clubs, and immersive experiences.
        </p>
      </div>,
      <div key="vision" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Vision</h3>
        <p className="text-white">
          Cultivate a living legacy of environmental protectors by empowering 1 million children with wildlife conservation books and participation in school programs and competitions that spark empathy, ignite curiosity, and inspire lasting action.
        </p>
      </div>,
      <div key="why" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Why?</h3>
        <p className="text-white">
          Research shows that conservation is still perceived by Kenyan children as something led by foreigners, disconnected from their own identities and environments. African youth feel alienated from mainstream conservation narratives, and are especially unaware of the sea as part of their own cultural and ecological heritage.
        </p>
      </div>,
      <div key="experience" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Our Experience</h3>
        <p className="text-white">
          Storymoja & Start A Library Trust (SAL) bring experience in book development (600 titles), and in organising school programs & teacher training at scale e.g. National Read aloud, SAL library launches, Quest to Publish Children competition, 100 Storymoja Festival Bookclubs, Online Safety Code Schools Competition, Annual CBC Teacher Training. See this: <a href="https://www.youtube.com/watch?feature=shared&v=pnlZAwsuuEI" target="_blank" className="underline text-blue-500">Watch on YouTube</a>.
        </p>
      </div>,
      <div key="partners" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Consortium Partners Bring</h3>
        <ul className="text-white list-disc list-inside space-y-1">
          <li>Conservation Expertise</li>
          <li>Experience & Credibility lend knowledge and weight to the campaign.</li>
          <li>Community Access: Direct connections or programs with schools, youth groups, conservation clubs, or civic organizations.</li>
          <li>Reach & Influence: Connections that can amplify campaign nationally & globally.</li>
        </ul>
      </div>,
      <div key="phase1" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Phase One - Aug/Sept</h3>
        <p className="text-white mb-2">Join Consortium</p>
        <ul className="text-white list-disc list-inside space-y-1 mb-0">
          <li>Sign the MOU to formalize Consortium partnership</li>
          <li>Assign a Dedicated Point Person with decision-making authority.</li>
          <li>Input to shape the campaign & clarify roles & process.</li>
          <li>Share creative assets</li>
        </ul>
      </div>,
      <div key="phase2" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Phase Two - Sept-Nov</h3>
        <p className="text-white mb-2">Fundraise</p>
        <ul className="text-white list-disc list-inside space-y-1 mb-0">
          <li>Partner pre-order commitment of 2,000+ books via Kickstarter or Indiegogo affiliate link by Oct.</li>
          <li>Partner promotes to crowdfund 20,000+ books through own networks in Nov.</li>
          <li>Host a Consortium Strategy Meeting Sept 2026</li>
        </ul>
      </div>,
      <div key="phase3" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Phase Three - Jan-Sept 2026</h3>
        <p className="text-white mb-2">Launch and deliver the 4 pillars of the Conservation Campaign at scale</p>
        <ul className="text-white list-disc list-inside space-y-1 mb-0">
          <li>Impact Monitoring & Evaluation</li>
          <li>Review & plan next 2 years to cement the legacy.</li>
        </ul>
      </div>,
      <div key="goals" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">2026 Goals</h3>
        <p className="text-white">
          Distribute 200,000 books, train 3,000 teachers, engage 500,000 students in wildlife-themed competitions, and rally a million readers in a Guinness World Record read-aloud from <a href="http://localhost:8080/book/boy-and-lion" target="_blank" className="underline text-blue-500">The Boy and The Lion</a>.
        </p>
      </div>,
      <div key="mission" className="mb-4 p-4 bg-white/10 shadow-md border-l-4 border-yellow-500 text-white rounded-lg">
        <h3 className="text-xl font-bold mb-2 text-yellow-500">Mission</h3>
        <p className="text-white">
          Empower children to see themselves as protectors, storytellers, and stewards of Africa’s ecological future.
        </p>
      </div>
    ],
    getInvolved: [
      <div key="support" className="mb-4 p-4 bg-white/10 border-l-4 border-yellow-500 text-white rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Support the Books</h3>
        <p className="text-white">Purchase or donate SUDEF Wildlife Detective Series, The Matatu from Watamu, The Boy & the Lion, The Forever Tree, and My Amazing Rhino to schools.</p>
      </div>,
      <div key="volunteer" className="mb-4 p-4 bg-white/10 rounded-lg shadow-sm border-l-4 border-yellow-500 text-white">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Volunteer</h3>
        <p className="text-white">Become a Reading Ambassador: <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0-JhcnZclgWPVQf3ReEYhSvTz0OI20xf8ecsd4W4zDllxoQ/viewform" target="_blank" className="underline text-blue-500">Sign up here</a>.</p>
      </div>,
      <div key="record" className="mb-4 p-4 bg-white/10 rounded-lg shadow-sm border-l-4 border-yellow-500 text-white">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Join the Record Attempt</h3>
        <p className="text-white">Support Kenyan Children in the World Record Read-Aloud: <a href="#" className="underline text-blue-500">Link coming soon</a>.</p>
      </div>
    ]
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-2xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="group border-0 bg-main hover:shadow-xl transition-all duration-500 overflow-hidden rounded-2xl flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Introductory Header */}
            <div className="p-6 text-center border-b border-white/10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                Check out our top campaign!
              </h2>
              <p className="text-white/80 text-sm">
                Discover how you can help preserve Africa's wildlife stories through literature.
              </p>
            </div>

            {/* Campaign Image */}
            <div className="relative h-48 w-full">
              <img
                src={campaignData.image}
                alt={campaignData.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className={`${campaignData.color} p-2 rounded-lg`}>
                  <campaignData.icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Campaign Content */}
            <CardContent className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                {campaignData.title}
              </h3>
              <p className="text-white/90 text-base leading-relaxed mb-3">
                {campaignData.description}
              </p>
              <p className="text-sm text-yellow-300 mb-6 font-medium">
                {campaignData.impact}
              </p>

              {/* Buttons for Learn More and Get Involved */}
              <div className="flex gap-4 mt-auto">
                {campaignData.learnMore && (
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => openSubModal(campaignData.title, campaignData.learnMore)}
                  >
                    Learn More
                  </Button>
                )}
                {campaignData.getInvolved && (
                  <Button
                    className="bg-gold-gradient hover:shadow-glow flex-1"
                    onClick={() => openSubModal(campaignData.title, campaignData.getInvolved)}
                  >
                    Get Involved
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Sub-Modal for Learn More / Get Involved */}
          <CampaignModal
            isOpen={subModalData.isOpen}
            onClose={closeSubModal}
            title={subModalData.title}
            content={subModalData.content}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}