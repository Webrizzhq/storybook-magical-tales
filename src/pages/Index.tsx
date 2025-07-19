import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedBooks } from '@/data/books';
import { BookOpen, Calendar, Users, ArrowRight, Sparkles, Star, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-sparkle" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-accent/60 rounded-full animate-float" />
          <Sparkles className="absolute top-20 right-20 w-8 h-8 text-accent animate-sparkle" />
          <Star className="absolute bottom-32 left-16 w-6 h-6 text-secondary animate-bounce-gentle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <Badge className="bg-accent text-accent-foreground mb-6 px-4 py-2 text-sm font-medium animate-bounce-gentle">
              ✨ Discover African Stories
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Stories Come
              <span className="block bg-gradient-sunset bg-clip-text text-transparent">
                Alive
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              Embark on magical journeys through African children's literature. From wildlife adventures to historical tales, discover stories that inspire, educate, and delight young minds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/books">
                <Button size="lg" className="bg-gradient-magic hover:shadow-glow transition-all duration-300 text-lg px-8 py-6">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Books
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Featured Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Must-Read Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked stories that captivate, educate, and inspire. Each book opens a doorway to new worlds of wonder and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredBooks.map((book, index) => (
              <div 
                key={book.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <BookCard book={book} featured />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/books">
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                View All Books
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Stories for Every Age
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From picture books for little ones to anthologies for young adults, discover age-appropriate stories that grow with your child.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Picture Books",
                ageRange: "Ages 5-7", 
                description: "Colorful illustrations and simple stories perfect for beginning readers",
                icon: Heart,
                color: "bg-gradient-sunset",
                books: "Matatu From Watamu, The Boy and the Lion"
              },
              {
                title: "Wildlife Adventures", 
                ageRange: "Ages 8-10",
                description: "Exciting detective stories featuring African wildlife and conservation",
                icon: Users,
                color: "bg-gradient-ocean",
                books: "Case of Targeted Turtles, Persecuted Pangolins"
              },
              {
                title: "Historical Tales",
                ageRange: "Ages 11-15", 
                description: "Rich historical fiction and thought-provoking anthologies",
                icon: BookOpen,
                color: "bg-gradient-magic", 
                books: "Princess Njinga, Zero Tolerance Stories"
              }
            ].map((category, index) => (
              <Card 
                key={category.title}
                className="group border-0 bg-card hover:shadow-magical transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    {category.ageRange}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6 font-medium">
                    Featured: {category.books}
                  </p>
                  
                  <Link to="/books">
                    <Button className="w-full bg-gradient-magic hover:shadow-glow transition-all duration-300">
                      Explore Stories
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-accent animate-sparkle" />
          <h2 className="text-4xl font-bold mb-6">
            Join Our Reading Community
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Stay updated with new book releases, author events, and reading campaigns that celebrate African storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                View Events
              </Button>
            </Link>
            <Link to="/campaigns">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Users className="w-5 h-5 mr-2" />
                Join Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
