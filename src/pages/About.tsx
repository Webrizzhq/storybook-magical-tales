import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Globe, Star, Target, Award, Sparkles } from 'lucide-react';
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

  const team = [
    {
      name: "Dr. Amara Okafor",
      role: "Founder & Editorial Director",
      bio: "Passionate advocate for African children's literature with 15 years in educational publishing.",
      image: "👩🏾‍🎓"
    },
    {
      name: "Kwame Asante",
      role: "Community Outreach Manager", 
      bio: "Dedicated to connecting stories with communities across Africa and the diaspora.",
      image: "👨🏿‍💼"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Digital Programs Coordinator",
      bio: "Technology enthusiast bringing African stories to the digital age.",
      image: "👩🏽‍💻"
    },
    {
      name: "Themba Mthembu",
      role: "Events & Partnerships Director",
      bio: "Building bridges between authors, schools, and reading communities.",
      image: "👨🏾‍🏫"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-redhot overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-20 h-20 bg-accent/20 rounded-full animate-float" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-accent/30 rounded-full animate-sparkle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white/50">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-sparkle" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/40 leading-relaxed">
              When you can't see yourself in the story, flip the script.

Redhot Africa books star smart African kids who solve, invent, rebel
and rise.


They are not waiting for rescue, they are not sidekicks or victims.
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
                  Join Our Community
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
               This crew? All killer, no filler.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We fuse literature, education, tech, and grassroots grit to light up young minds and build a unique African
storyverse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-redhot text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're an author, educator, parent, or simply someone who believes in the power of stories, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-submain hover:bg-white/90 transition-all duration-300">
              Get Involved
            </Button>
            <Button  size="lg" className="border-white text-white bg-gold-gradient hover:bg-white hover:text-submain">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;