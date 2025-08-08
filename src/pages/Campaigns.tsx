import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Shield, PenTool, Heart, Mic, Trophy, Star, Book, DollarSign, Target, Users } from 'lucide-react';

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

  const featuredCampaigns = campaigns.filter(campaign => campaign.featured);
  const otherCampaigns = campaigns.filter(campaign => !campaign.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-redhot overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-12 h-12 bg-white/20 rounded-full animate-float" />
          <div className="absolute top-40 right-24 w-8 h-8 bg-white/15 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-white/25 rounded-full animate-sparkle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reading Campaigns
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              When kids read tales rooted in their heritage, they grow taller in spirit and
bolder in thought. 

Our campaigns put African books into the hands of the next generation so
they can imagine more, believe bigger and be the leaders Africa aspires for.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20 bg-red-100 dark:bg-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Featured Campaigns
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">
              EXCITE. EMPOWER. INSPIRE. REPEAT
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your support helps us reach more children and communities with the transformative power of storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCampaigns.map((campaign, index) => (
              <Card 
                key={campaign.id}
                className="group border-0 bg-main hover:shadow-magical transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${campaign.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <campaign.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {campaign.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {campaign.goal}
                      </p>
                    </div>
                  </div>

                  
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Impact So Far:</h4>
                    <p className="text-sm text-foreground">
                      {campaign.impact}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gold-gradient hover:shadow-glow transition-all duration-300">
                      Support Campaign
                    </Button>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Learn More
                    </Button>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              PUSH THE PLOT FORWARD
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              While some build shelves, you build legacies.

Got a vision? Got vibes? Let's Go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherCampaigns.map((campaign, index) => (
              <Card 
                key={campaign.id}
                className="group border-0 bg-main hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 ${campaign.color} rounded-full flex items-center justify-center`}>
                      <campaign.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary">
                        {campaign.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {campaign.goal}
                      </p>
                    </div>
                  </div>

                 
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  <div className=" rounded-lg p-3 mb-4">
                    <p className="text-xs text-muted-foreground">
                      {campaign.impact}
                    </p>
                  </div>
                  
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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
          <h2 className="text-4xl font-bold mb-6">
            Start Your Own Campaign
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Have an idea for promoting African children's literature in your community? We'd love to help you turn your vision into reality.
          </p>
          <Button size="lg" className="bg-submain text-accent-foreground hover:bg-accent/90 transition-all duration-300">
            Propose a Campaign
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
