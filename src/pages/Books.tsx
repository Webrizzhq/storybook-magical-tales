import { useState } from 'react';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { books, categories, getBooksByCategory, getBooksByAge } from '@/data/books';
import { BookOpen, Filter, Star } from 'lucide-react';

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const filteredBooks = getBooksByCategory(selectedCategory)
  .filter(book => selectedAge === "All Ages" || book.ageRange.includes(selectedAge.split(" ")[1]));



  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-sunset overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
          <div className="absolute top-32 right-16 w-16 h-16 bg-secondary/20 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-sparkle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-white/60 animate-bounce-gentle" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white/90  mb-6">
              Discover Amazing Stories
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Explore our curated collection of African children's literature, where every page opens a new world of wonder, learning, and adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-muted text-muted-foreground mb-3 px-4 py-2">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Category:
            </Badge>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gradient-magic shadow-glow' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          
          
          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} 
              {selectedCategory !== "All Books" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                No books found
              </h3>
              <p className="text-muted-foreground">
                Try selecting a different category to discover more stories.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredBooks.map((book, index) => (
                <div 
                  key={book.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-accent mx-auto mb-4 animate-sparkle" />
            <h2 className="text-3xl font-bold text-primary mb-4">
              Explore by Age Group
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect stories for every stage of childhood, carefully curated for different reading levels and interests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { range: "Ages 5-7", category: "Picture Books", count: books.filter(b => b.ageRange.includes("5")).length, color: "bg-gradient-sunset" },
              { range: "Ages 8-10", category: "Wildlife Detective Fiction", count: books.filter(b => b.ageRange.includes("8")).length, color: "bg-gradient-ocean" },
              { range: "Ages 11-15", category: "Historical Fiction & Anthologies", count: books.filter(b => b.ageRange.includes("11") || b.ageRange.includes("14")).length, color: "bg-gradient-magic" }
            ].map((ageGroup, index) => (
              <div 
                key={ageGroup.range}
                className="group p-8 rounded-2xl bg-card border hover:shadow-magical transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${ageGroup.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">{ageGroup.count}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{ageGroup.range}</h3>
                <p className="text-muted-foreground mb-4">{ageGroup.category}</p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => setSelectedCategory(ageGroup.category.includes("Detective") ? "SUDEF Wildlife Detective Fiction" : ageGroup.category)}
                >
                  Explore Books
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Books;