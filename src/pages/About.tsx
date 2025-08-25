import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Globe, Target, Sparkles, Share2 } from 'lucide-react';
import Partners from '@/components/Partners';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cultural Celebration",
      description: "We champion African heritage through authentic storytelling that honors diverse cultures, traditions, and languages across the continent."
    },
    {
      icon: BookOpen,
      title: "Literacy Excellence", 
      description: "Promoting high-quality children's literature that inspires learning, critical thinking, and lifelong love for reading."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating connections between authors, readers, educators, and families to build a thriving literary ecosystem."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Ensuring African children's stories reach audiences worldwide while maintaining their authentic voice and perspective."
    }
  ];

  // Leadership only
  const team = [
    {
      name: "Dr. Amara Okafor",
      role: "Founder & Editorial Director",
      bio: "Passionate advocate for African children's literature with 15 years in educational publishing.",
      image: "👩🏾‍🎓"
    },
    {
      name: "Kwame Asante",
      role: "Chief Marketing Lead", 
      bio: "Strategist connecting Redhot Africa with global readers and communities.",
      image: "👨🏿‍💼"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Chief Editor",
      bio: "Ensuring quality storytelling and cultural authenticity in every book.",
      image: "👩🏽‍💻"
    }
  ];

  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 bg-main overflow-hidden "
        
      >
        <div className="absolute inset-0">
                  <img
                    src='about-hero.png' // <-- replace with your own image path
                    alt="Books background"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-main/20" /> {/* overlay */}
                </div>

       
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-sparkle text-gold-400" />
            <h1 className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Our Story
            </h1>
            <p className="md:text-xl text- text-white/90 leading-relaxed drop-shadow">
              When you can't see yourself in the story, flip the script.
              <br /><br />
              Redhot Africa books star smart African kids who solve, invent, rebel
              and rise. They are not waiting for rescue, they are not sidekicks or victims.
              They are the main characters reimagining Africa on their own terms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-100 dark:bg-red-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Our Mission?
              </Badge>
              <h2 className="text-4xl font-bold text-submain mb-6">
                Relevant stories rooted in Africanicity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ignite young minds everywhere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Build a global community of storytellers, dreamers and rebels.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-magic hover:shadow-glow transition-all duration-300">
                  Our Books
                </Button>
                <Button variant="outline" className="hover:bg-submain hover:text-submain-foreground transition-all duration-300">
                  Join Our WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-main rounded-3xl p-8 shadow-magical">
                <div className="grid grid-cols-2 gap-6 text-center text-submain">
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-white/80">Books Curated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-white/80">African Authors</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">25</div>
                    <div className="text-white/80">Countries Represented</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10K+</div>
                    <div className="text-white/80">Young Readers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-submain mb-6">
              What do we stand for?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We tell stories that taste like nyama choma and sound like the stomp of Zulu dancers when their feet hit the ground. We re-vibrate excitement into childrens' minds by drawing universes where they are heroes. Redhot Africa is where imagination meets identity. We publish books that make kids laugh, gasp, question and cheer, all the while proudly repping African Culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group border-0 bg-card dark:bg-red-800 hover:shadow-float transition-all duration-300 hover:-translate-y-2 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-submain mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-submain mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by experience, creativity, and passion for African storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name}
                className="group border-0 bg-card hover:shadow-magical transition-all duration-500 hover:-translate-y-2 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-submain mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-4 bg-accent/10 text-accent">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <Partners />

      {/* Social CTA */}
      <section className="py-20 bg-gradient-redhot text-white">
        <div className="container mx-auto px-4 text-center">
          <Share2 className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Follow us on social media and subscribe to our newsletter to keep up with new books, campaigns, and opportunities to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-submain hover:bg-white/90 transition-all duration-300">
              Follow on Social Media
            </Button>
            <Button size="lg" className="border-white text-white bg-gold-gradient hover:bg-white hover:text-submain">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
