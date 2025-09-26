import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Users, Globe, Target, Share2 } from 'lucide-react';
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
      name: "Linda Were",
      image: "Team/Were.jpg",
      quote: "Call me the story surgeon. I cut the fluff, stitch the soul, and save the plot."
    },
    {
      name: "Cecilia Wambui",
      image: "Team/cecilia.jpg",
      quote: "Stories are puzzles, I fit the tiniest pieces till they shine."
    },
    {
      name: "Clifford Jibran Bukheri",
      image: "Team/JB.jpg",
      quote: "I see what you missed… and I’ll laugh with you while fixing it."
    },
    {
      name: "Linet Kerubo Okui",
      image: "Team/Linet.jpg",
      quote: "I polish pages with the discipline of a teacher and the imagination of a dreamer."
    },
    {
      name: "Grace Aloyo Nyapal",
      image: "Team/Grace.jpg",
      quote: "I delete. Therefore I AM."
    },
    {
      name: "Faith Kyalo",
      image: "Team/Faith.png",
      quote: "I cut the clutter so the story can finally breathe."
    },
    {
      name: "Samuel Musungu Moturi",
      image: "Team/Samuel.JPG",
      quote: "Even the boldest tales need roots, I make sure they hold firm."
    },
    {
      name: "Anita Jebiwott",
      image: "Team/Anita.jpg",
      quote: "I carry light in my pockets and sprinkle it on every story I touch."
    },
    {
      name: "Vanesser Wangui",
      image: "Team/Vanessa.jpg",
      quote: "CTRL + ALT + EDIT. I am fluent in tech & typos."
    },
    {
      name: "Muthoni Garland",
      image: "Team/Muthoni.jpg",
      quote: "Like a current, I float through plots, protagonists, place, and prose, guiding writers and editors toward deeper, clearer waters."
    },
    
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20  bg-main overflow-hidden h-[400px] ">
        <div className="absolute inset-0">
          <img
            src='about-hero.png' 
            alt="Books background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" /> 
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg mt-20">
              Our Story
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-red-100 dark:bg-red-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2 inline-flex items-center gap-2">
            <Target className="w-4 h-4" /> Our Mission?
          </Badge>
          <h2 className="text-4xl font-bold text-submain mb-6">
            Relevant stories rooted in Africanicity
          </h2>
          <p className="text-lg text-black leading-relaxed mb-6">
            Ignite young minds everywhere. Build a global community of storytellers, dreamers and rebels.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gradient-magic hover:shadow-glow transition-all duration-300">
              Our Books
            </Button>
            <Button variant="outline" className="hover:bg-submain hover:text-submain-foreground transition-all duration-300">
              Join Our WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              What do we stand for?
            </h2>
            <p className="text-xl text-white max-w-4xl mx-auto">
              We tell stories that taste like nyama choma and sound like the stomp of Zulu dancers when their feet hit the ground. Redhot Africa is where imagination meets identity.
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
                  <p className="text-black leading-relaxed">
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
            <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2 inline-flex items-center gap-2">
              <Users className="w-4 h-4" /> Meet Our Team
            </Badge>
            <h2 className="text-4xl font-bold text-submain mb-6">
              The Squad
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Guided by experience, creativity, and passion for African storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {team.map((member, index) => (
              <div key={member.name} className="relative flex justify-center">
                {/* Card */}
                <Card className="border-0 bg-card hover:shadow-magical transition-all duration-500 hover:-translate-y-2 animate-fade-in-up text-center w-72">
                  <CardContent className="p-6">
                   <div className="text-6xl mb-4">
  <img src={member.image} alt={member.name} className="w-[250px] h-[250px] object-cover" />
</div>
                    <h3 className="text-xl font-bold text-submain mb-2 text-center">{member.name}</h3>
                    <p className=' text-sm italic'>“{member.quote}”</p>
                    
                  </CardContent>
                </Card>

                {/* Thought Bubble 
                <div className="absolute -top-12 w-64">
                  <div className="relative bg-yellow-100 text-black p-4 rounded-2xl shadow-xl transform rotate-[-3deg]">
                    <p className="text-sm font-medium">“{member.quote}”</p>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-yellow-100"></div>
                  </div>
                  
                </div>
                */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <Partners />

      {/* Social CTA */}
      <section className="py-20 md:mx-20 mx-2 mb-20 rounded-md bg-gradient-redhot text-white">
        <div className="container mx-auto px-4 text-center">
          <Share2 className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Follow us on social media and subscribe to our newsletter.
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
