import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import BookCarousel from '@/components/BookCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedBooks } from '@/data/books';
import { BookOpen, Calendar, Users, ArrowRight, Sparkles, Star, Heart } from 'lucide-react';
import EventsSection from '@/components/EventsSection';
import Partners from '@/components/Partners';

const Index = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <Layout>
      
      <BookCarousel />

     

      {/* Featured Books */}
      <section className="py-20 bg-red-100 dark:bg-main/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2 uppercase" />
              Read Redhot Africa
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-main/80 dark:text-submain mb-8 mt-14">
              SMART STORIES FOR SHARP KIDS
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ">
              Fuel for curious minds. Books with a Redhot Africa spine because bland stories are for
boring kids
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
          
          <div className="text-center bg-gray-50 dark:bg-red-900  rounded-lg">
          <div className="bg-storybook rounded-3xl p-12 space-y-6">
            <h3 className="text-3xl font-display font-bold text-foreground">
              Ready for More Adventures?
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These are just the beginning of countless stories waiting to be discovered. 
              Join our community of young storytellers and explorers.
            </p>
            <Link to={'/books'}>
            <Button className="bg-gold-gradient text-lg px-8 py-4 h-auto mt-5">
              Explore All Stories
            </Button>
            </Link>
          </div>
        </div>
        </div>
      </section>

       <Partners />

      {/* Categories Showcase */}
      <section className="py-20 bg-main">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Badge className="bg-primary/10 text-submain mb-14 px-4 py-2">
        <Star className="w-4 h-4 mr-2" />
        Categories by Age
      </Badge>
      <h2 className="text-3xl font-bold text-submain mb-6">
        Stories for Every Age
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        From picture books for little ones to anthologies for young adults,
        discover age-appropriate stories that grow with your child.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Picture Books",
          ageRange: "Ages 5-7",
          description: "Colorful illustrations and simple stories perfect for beginning readers",
          image: "https://images.unsplash.com/photo-1608120663473-a4aa3472786b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          books: "Matatu From Watamu, The Boy and the Lion"
        },
        {
          title: "SUDEF Wildlife Detective Fiction",
          ageRange: "Ages 8-10",
          description: "Exciting detective stories featuring African wildlife and conservation",
          image: "https://images.unsplash.com/photo-1627907228041-fe3291346dfb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          books: "Case of Targeted Turtles, Persecuted Pangolins"
        },
        {
          title: "Shizu Historical Fiction",
          ageRange: "Ages 11-15",
          description: "Rich historical fiction and thought-provoking anthologies",
          image: "https://images.unsplash.com/photo-1726347915002-c8bc173e995c?q=80&w=1264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          books: "Princess Njinga, Zero Tolerance Stories"
        }
      ].map((category, index) => (
        <Card
          key={category.title}
          className="group border-0 bg-card dark:bg-red-900 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Top Image with Overlay */}
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0"></div>
            <Badge className="absolute top-4 left-4 bg-primary/90 text-white text-xs">
              {category.ageRange}
            </Badge>
          </div>

          {/* Card Content */}
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-primary mb-3">
              {category.title}
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {category.description}
            </p>
            <p className="text-sm text-muted-foreground mb-4 font-medium">
              Featured: {category.books}
            </p>
            <Link to="/books">
              <Button className="w-full bg-gold-gradient hover:shadow-lg transition-all duration-300">
                Explore Stories
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      <EventsSection />

     
      
    </Layout>
  );
};

export default Index;
