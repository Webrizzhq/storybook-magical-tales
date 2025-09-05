import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Shield, PenTool, Heart, Mic, Trophy, Star, Book, DollarSign, Target, Users } from 'lucide-react';
import hero from "@/assets/hero-reading.jpg"

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "The Wild Legacy Campaign",
      goal: "Preserve African wildlife stories in literature",
      progress: 70,
      description: "Support the creation and distribution of children's books celebrating Africa's rich wildlife heritage, fostering environmental awareness through storytelling.",
      impact: "700 books distributed • 10 communities engaged • 400 children inspired",
      featured: true,
      icon: Leaf,
      color: "bg-gradient-forest"
    },
    {
      id: 2,
      title: "Online Safety Campaign",
      goal: "Educate 5,000 children on digital safety",
      progress: 55,
      description: "Empowering young readers with knowledge to navigate the digital world safely through engaging stories and interactive online safety workshops.",
      impact: "2,750 children trained • 50 schools involved • 100 parent sessions held",
      featured: true,
      icon: Shield,
      color: "bg-gradient-sky"
    },
    {
      id: 3,
      title: "Writer and Editor Workshops",
      goal: "Train 200 aspiring writers and editors",
      progress: 65,
      description: "Offering professional workshops to nurture African talent in writing and editing children's literature, building a vibrant literary community.",
      impact: "130 participants trained • 10 books edited • 5 new authors published",
      featured: true,
      icon: PenTool,
      color: "bg-gradient-dawn"
    },
    {
      id: 4,
      title: "Join the Shizu Movement",
      goal: "Build a network of 1,000 young readers",
      progress: 80,
      description: "Inspiring a movement of young African readers to share stories, exchange ideas, and celebrate their love for literature through community events.",
      impact: "800 members joined • 20 reading clubs formed • 600 books shared",
      featured: true,
      icon: Heart,
      color: "bg-gradient-blaze"
    },
    {
      id: 5,
      title: "Read Aloud",
      goal: "Host 100 read-aloud sessions in communities",
      progress: 45,
      description: "Bringing stories to life with read-aloud events in rural areas, encouraging literacy and a love for storytelling among children and families.",
      impact: "45 sessions held • 1,500 attendees • 300 books donated",
      featured: true,
      icon: Mic,
      color: "bg-gradient-horizon"
    },
    {
      id: 6,
      title: "Writing Competition",
      goal: "Showcase 50 young African writers",
      progress: 90,
      description: "A vibrant competition to discover and celebrate young African writers, providing mentorship and publication opportunities for their stories.",
      impact: "45 stories submitted • 10 winners awarded • 3 anthologies published",
      featured: true,
      icon: Trophy,
      color: "bg-gradient-starlight"
    },
    {
      id: 7,
      title: "Become a Reading Ambassador Volunteer in Your School",
      goal: "Recruit 500 reading ambassadors",
      progress: 30,
      description: "Encouraging students to volunteer as reading ambassadors to promote literacy and organize reading activities in their schools.",
      impact: "150 ambassadors recruited • 25 schools involved • 1,000 books read",
      featured: false,
      icon: Star,
      color: "bg-gradient-magic"
    },
    {
      id: 8,
      title: "Donate Redhot Books to Start a Library",
      goal: "Establish 20 new community libraries",
      progress: 50,
      description: "Support the creation of community libraries by donating vibrant, engaging African children's books to inspire a new generation of readers.",
      impact: "10 libraries started • 2,000 books donated • 1,500 readers reached",
      featured: false,
      icon: Book,
      color: "bg-gradient-sunset"
    },
    {
      id: 9,
      title: "Donate to a Writing Program",
      goal: "Fund writing programs for 1,000 students",
      progress: 25,
      description: "Contribute to programs that provide writing resources, mentorship, and workshops to help young African students develop their storytelling skills.",
      impact: "250 students supported • 5 programs funded • 50 stories created",
      featured: false,
      icon: DollarSign,
      color: "bg-gradient-ocean"
    }
  ];

  // Pick top 2 featured campaigns
  const topCampaigns = campaigns.filter(c => c.featured).slice(0, 2);
  const otherFeatured = campaigns.filter(c => c.featured && !topCampaigns.includes(c));
  const otherCampaigns = campaigns.filter(c => !c.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-redhot h-[400px] overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={hero} 
            alt="Books background"
            className="w-full h-full  object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" /> {/* overlay */}
        </div>
       
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
         
            <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-20">
              Reading Campaigns
            </h1>
           
          </div>
        </div>
      </section>

      {/* Top Campaigns */}
      <section className="py-20 bg-red-50 dark:bg-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <Badge className="bg-gold-gradient text-white px-4 py-2 mb-4">
              Top Campaigns
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Current Priorities
            </h2>
            <p className="text-lg text-black">
              These two campaigns are at the heart of our mission right now —
              preserving African heritage and empowering the next generation with
              safe, inspiring stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {topCampaigns.map((campaign) => (
              <Card key={campaign.id} className="border-0 bg-main shadow-magical">
                <CardContent className="p-8 flex flex-col">
                  <div className={`w-20 h-20 ${campaign.color} rounded-full flex items-center justify-center mb-6`}>
                    <campaign.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-yellow-500 mb-4">{campaign.title}</h3>
                  <p className="text-white mb-6 leading-relaxed">{campaign.description}</p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Impact So Far:</h4>
                    <p className="text-sm text-black">{campaign.impact}</p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <Button className="bg-gold-gradient hover:shadow-glow">Support</Button>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Featured Campaigns */}
      <section className="py-20 bg-red-100 dark:bg-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Featured Campaigns
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Excite. Empower. Inspire.
            </h2>
            <p className="text-lg text-black">
              Beyond our top priorities, these featured campaigns are shaping
              communities and building a love for African literature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {otherFeatured.map((campaign) => (
              <Card key={campaign.id} className="group border-0 bg-main hover:shadow-magical transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${campaign.color} rounded-full flex items-center justify-center`}>
                      <campaign.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-yellow-500 mb-2">{campaign.title}</h3>
                      <p className="text-white text-sm">{campaign.goal}</p>
                    </div>
                  </div>
                  <p className="text-white mb-6 leading-relaxed">{campaign.description}</p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-black mb-2">Impact So Far:</h4>
                    <p className="text-sm text-black">{campaign.impact}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gold-gradient hover:shadow-glow">Support</Button>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Campaigns */}
      <section className="py-20 bg-white dark:bg-red-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Push the Plot Forward
            </h2>
            <p className="text-lg text-black">
              Every campaign adds a new chapter to Africa’s story. Explore more
              ways you can make a difference in young readers’ lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherCampaigns.map((campaign) => (
              <Card key={campaign.id} className="group border-0 bg-main hover:shadow-float transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${campaign.color} rounded-full flex items-center justify-center`}>
                      <campaign.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-500">{campaign.title}</h3>
                      <p className="text-sm text-white">{campaign.goal}</p>
                    </div>
                  </div>
                  <p className="text-white text-sm mb-4 leading-relaxed">{campaign.description}</p>
                  <div className="rounded-lg p-3 mb-4">
                    <p className="text-xs text-white">{campaign.impact}</p>
                  </div>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    Join Campaign
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-accent animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">Start Your Own Campaign</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have an idea for promoting African children's literature in your community? We'd love to help you turn your vision into reality.
          </p>
          <Button size="lg" className="bg-submain text-accent-foreground hover:bg-accent/90">
            Propose a Campaign
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
