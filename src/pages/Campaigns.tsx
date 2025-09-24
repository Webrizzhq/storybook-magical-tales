import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users } from 'lucide-react';
import hero from "@/assets/hero-reading.jpg";
import CampaignModal from '@/components/CampaignModal';
import { campaigns } from '@/data/campaignData';

const Campaigns: React.FC = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: string[] | JSX.Element[];
  }>({ isOpen: false, title: '', content: [] });

  const openModal = (title: string, content: string[] | JSX.Element[]) => {
    setModalData({ isOpen: true, title, content });
  };

  const closeModal = () => setModalData({ ...modalData, isOpen: false });

  // Categorize campaigns
  const topCampaigns = campaigns.filter(c => c.featured).slice(0, 2);
  const otherFeatured = campaigns.filter(c => c.featured && !topCampaigns.includes(c));
  const otherCampaigns = campaigns.filter(c => !c.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-redhot md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Books background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-main/20" />
        </div>
        {/* */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-20">Redhot Campaigns</h1>
          <p>
            Our Campaigns connect readers to powerful African stories that inspire change.
            Stories matter. They shape minds, spark empathy and transform lives.
          </p>
        </div>
      </section>

      {/* Top Campaigns */}
      {topCampaigns.length > 0 && (
        <section className="py-20 bg-red-50 dark:bg-red-900">
          <div className="container mx-auto px-4">
           
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <Badge className="bg-gold-gradient text-white px-4 py-2 mb-4">Top Campaigns</Badge>
               {/* 
              <h2 className="text-4xl font-bold text-primary mb-4">Our Current Priorities</h2>
              <p className="text-lg text-black">
                These two campaigns are at the heart of our mission right now — preserving African heritage and empowering the next generation with safe, inspiring stories.
              </p>
               */}
            </div>
           
            <div className="grid md:grid-cols-2 gap-8">
              {topCampaigns.map(c => (
                <Card key={c.id} className="border-0 bg-main shadow-magical">
                  <CardContent className="p-8 flex flex-col">
                    <div className={`w-20 h-20 ${c.color} rounded-full flex items-center justify-center mb-6`}>
                      <c.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-yellow-500 mb-4">{c.title}</h3>
                    <p className="text-white mb-6 leading-relaxed">{c.description}</p>
                    {c.impact && (
                      <div className="bg-muted/90 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Track Milestones:</h4>
                        <p className="text-sm text-black">{c.impact}</p>
                      </div>
                    )}
                    <div className="flex gap-4 mt-auto">
                      {c.learnMore && (
                        <Button
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground"
                          onClick={() => openModal(c.title, c.learnMore)}
                        >
                          Learn More
                        </Button>
                      )}
                      {c.getInvolved && (
                        <Button
                          className="bg-gold-gradient hover:shadow-glow"
                          onClick={() => openModal(c.title, c.getInvolved)}
                        >
                          Get Involved
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Featured Campaigns */}
      {otherFeatured.length > 0 && (
        <section className="py-20 bg-red-100 dark:bg-red-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2 flex items-center justify-center gap-2">
                <Target className="w-4 h-4" /> Featured Campaigns
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-4">Excite. Empower. Inspire.</h2>
              <p className="text-lg text-black">
                Beyond our top priorities, these featured campaigns are shaping communities and building a love for African literature.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {otherFeatured.map(c => (
                <Card key={c.id} className="group border-0 bg-main hover:shadow-magical transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${c.color} rounded-full flex items-center justify-center`}>
                        <c.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-yellow-500 mb-2">{c.title}</h3>
                        {c.goal && <p className="text-white text-sm">{c.goal}</p>}
                      </div>
                    </div>
                    <p className="text-white mb-6 leading-relaxed">{c.description}</p>
                    {c.impact && (
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold text-black mb-2">Track Milestones:</h4>
                        <p className="text-sm text-black">{c.impact}</p>
                      </div>
                    )}
                    <div className="flex gap-3">
                      {c.learnMore && (
                        <Button
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground"
                          onClick={() => openModal(c.title, c.learnMore)}
                        >
                          Learn More
                        </Button>
                      )}
                      {c.getInvolved && (
                        <Button
                          className="flex-1 bg-gold-gradient hover:shadow-glow max-w-28"
                          onClick={() => openModal(c.title, c.getInvolved)}
                        >
                          Get Involved
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Campaigns */}
      {/* Other Campaigns / Push the Plot Forward */}
{otherCampaigns.length > 0 && (
  <section className="py-20 bg-white dark:bg-red-700">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4">Push the Plot Forward</h2>
        <p className="text-lg text-black">
          Every campaign adds a new chapter to Africa’s story. Explore more ways you can make a difference in young readers’ lives.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {otherCampaigns.map(c => (
          <Card key={c.id} className="group border-0 bg-main hover:shadow-magical transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8 flex flex-col">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${c.color} rounded-full flex items-center justify-center`}>
                  <c.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">{c.title}</h3>
                  {c.goal && <p className="text-white text-sm">{c.goal}</p>}
                </div>
              </div>

              {/* Description */}
              <p className="text-white mb-6 leading-relaxed">{c.description}</p>

              {/* Track Milestones / Impact */}
              {c.impact && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Track Milestones:</h4>
                  <p className="text-sm text-black">{c.impact}</p>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {c.learnMore && (
                  <Button
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground flex-1"
                    onClick={() => openModal(c.title, c.learnMore)}
                  >
                    Learn More
                  </Button>
                )}
                {c.getInvolved && (
                  <Button
                    className="bg-gold-gradient hover:shadow-glow flex-1"
                    onClick={() => openModal(c.title, c.getInvolved)}
                  >
                    Get Involved
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)}


      {/* Call to Action */}
      <section className="my-10 bg-main mx-20 py-20 text-primary-foreground rounded-md">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-yellow-500 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">Start Your Own Campaign</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have an idea for promoting African children's literature in your community? We'd love to help you turn your vision into reality.
          </p>
          <Button size="lg" className="bg-submain text-accent-foreground hover:bg-accent/90">
            Propose a Campaign
          </Button>
        </div>
      </section>

      {/* Modal */}
      <CampaignModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        content={modalData.content}
      />
    </Layout>
  );
};

export default Campaigns;
