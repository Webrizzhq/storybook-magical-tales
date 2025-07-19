import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Globe, Star, Target, Award, Sparkles } from 'lucide-react';

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
      <section className="relative py-20 bg-gradient-magic overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-20 h-20 bg-accent/20 rounded-full animate-float" />
          <div className="absolute top-32 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-accent/30 rounded-full animate-sparkle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-sparkle" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We believe every child deserves to see themselves reflected in the stories they read. Our mission is to celebrate, promote, and preserve African children's literature for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Celebrating African Stories for Young Minds
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Storybook Hub serves as a vibrant cultural center dedicated to African children's literature. We curate, celebrate, and share stories that reflect the rich diversity, wisdom, and imagination of African cultures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Through our platform, we connect young readers with authentic African narratives, support emerging authors, and foster a global community that values cultural storytelling as a cornerstone of childhood development.
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-magic hover:shadow-glow transition-all duration-300">
                  Our Books
                </Button>
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Join Our Community
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-ocean rounded-3xl p-8 shadow-magical">
                <div className="grid grid-cols-2 gap-6 text-center text-white">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from book curation to community building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="group border-0 bg-card hover:shadow-float transition-all duration-300 hover:-translate-y-2 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-magic rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
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
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Passionate About Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise in literature, education, technology, and community building
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
                  <h3 className="text-xl font-bold text-primary mb-2">
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-accent mx-auto mb-4 animate-bounce-gentle" />
            <h2 className="text-4xl font-bold text-primary mb-6">
              Recognition & Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our work has been recognized by organizations dedicated to literacy, education, and cultural preservation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UNESCO Literacy Award",
                year: "2023",
                description: "Recognized for outstanding contribution to African children's literacy"
              },
              {
                title: "African Union Cultural Heritage Prize",
                year: "2023", 
                description: "Honored for preserving and promoting African storytelling traditions"
              },
              {
                title: "Global Reading Initiative Partner",
                year: "2024",
                description: "Selected as a key partner in worldwide literacy advancement efforts"
              }
            ].map((award, index) => (
              <Card 
                key={award.title}
                className="border-0 bg-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {award.title}
                  </h3>
                  <Badge className="mb-3 bg-primary/10 text-primary">
                    {award.year}
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're an author, educator, parent, or simply someone who believes in the power of stories, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300">
              Get Involved
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;