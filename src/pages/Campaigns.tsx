import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, BookOpen, Award, Globe } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "1000 Books for Africa",
      goal: "Distribute 1000 books to rural schools",
      progress: 75,
      description: "Help us get African children's books into the hands of young readers across rural communities. Every book donated creates a new opportunity for a child to discover the magic of reading.",
      impact: "750 books donated • 15 schools reached • 500 children impacted",
      featured: true,
      icon: BookOpen,
      color: "bg-gradient-magic"
    },
    {
      id: 2,
      title: "Author in Schools Program", 
      goal: "Connect 50 schools with African authors",
      progress: 60,
      description: "Bringing African children's book authors directly to classrooms for inspiring talks, reading sessions, and writing workshops that ignite young imaginations.",
      impact: "30 schools visited • 20 authors participating • 1,200 students engaged",
      featured: true,
      icon: Users,
      color: "bg-gradient-sunset"
    },
    {
      id: 3,
      title: "Digital Library Access",
      goal: "Provide digital access to 100 communities",
      progress: 40,
      description: "Expanding access to African children's literature through digital platforms, ensuring no child is left behind in the digital reading revolution.",
      impact: "40 communities connected • 500 digital readers distributed • 2,000 families served",
      featured: false,
      icon: Globe,
      color: "bg-gradient-ocean"
    },
    {
      id: 4,
      title: "Young Writers Contest",
      goal: "Discover and nurture new storytelling talent", 
      progress: 85,
      description: "Encouraging the next generation of African storytellers through writing competitions, mentorship programs, and publication opportunities.",
      impact: "200 submissions received • 15 winners selected • 5 stories published",
      featured: false,
      icon: Award,
      color: "bg-gradient-magic"
    }
  ];

  const featuredCampaigns = campaigns.filter(campaign => campaign.featured);
  const otherCampaigns = campaigns.filter(campaign => !campaign.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sunset overflow-hidden">
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
              Join our mission to spread the joy of African children's literature. Together, we can ensure every child has access to stories that celebrate their heritage and inspire their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Featured Campaigns
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Make a Difference Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your support helps us reach more children and communities with the transformative power of storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredCampaigns.map((campaign, index) => (
              <Card 
                key={campaign.id}
                className="group border-0 bg-card hover:shadow-magical transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
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

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">Progress</span>
                      <span className="text-sm font-bold text-primary">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`${campaign.color} h-3 rounded-full transition-all duration-1000 animate-fade-in-up`}
                        style={{ 
                          width: `${campaign.progress}%`,
                          animationDelay: `${index * 300 + 500}ms`
                        }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Impact So Far:</h4>
                    <p className="text-sm text-muted-foreground">
                      {campaign.impact}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-magic hover:shadow-glow transition-all duration-300">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              More Ways to Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore additional campaigns that are making a difference in children's literacy across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherCampaigns.map((campaign, index) => (
              <Card 
                key={campaign.id}
                className="group border-0 bg-card hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
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

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-foreground">Progress</span>
                      <span className="text-xs font-bold text-primary">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`${campaign.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
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
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300">
            Propose a Campaign
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Campaigns;
