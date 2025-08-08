import { useState } from 'react';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { books, categories, getBooksByCategory, getBooksByAge } from '@/data/books';
import { BookOpen, Filter, Star } from 'lucide-react';

// Mapping display categories to actual book categories
const categoryMap = {
  "All Books": "All Books",
  "RedHot Picture Books (< 8yrs)": "Picture Books",
  "SUDEF ( 8-10 yrs )": "SUDEF Wildlife Detective Fiction",
  "Shizu ( 10 - 14 yrs )": "Shizu Historical Fiction",
  "Best African Series (13+ yrs )": "Best African Series"
};

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [selectedAge, setSelectedAge] = useState("All Ages");

  // Get books based on the mapped category
  const getBooksForDisplay = (category: string) => {
    const actualCategory = categoryMap[category] || category;
    return getBooksByCategory(actualCategory).filter(book => 
      selectedAge === "All Ages" || book.ageRange.includes(selectedAge.split(" ")[1])
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-redhot overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold text-white/50 mb-6">
              Page Turners and Mind Twisters
            </h1>
            <p className="text-xl text-white/40 leading-relaxed">
              Explore our curated collection of African children's literature. 
              History Reloaded. Culture Remixed. Claws, Clues and Canning kids.
              See. Feel. Imagine.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12  bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-muted text-muted-foreground mb-3 px-4 py-2">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Category:
            </Badge>
            {Object.keys(categoryMap).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-gold-gradient shadow-glow' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="text-center mt-6 ">
            <p className="text-muted-foreground">
              Showing {selectedCategory !== "All Books" ? 1 : Object.keys(categoryMap).length - 1} {selectedCategory !== "All Books" ? 'section' : 'sections'}
              {selectedCategory !== "All Books" && ` for ${selectedCategory}`}
            </p>
          </div>
        </div>
      </section>

      {/* Books Sections */}
      <section className="py-16 bg-red-100 dark:bg-main">
        <div className="container mx-auto px-4">
          {selectedCategory === "All Books" ? (
            Object.keys(categoryMap).filter(cat => cat !== "All Books").map(category => {
              const categoryBooks = getBooksForDisplay(category);
              if (categoryBooks.length > 0) {
                return (
                  <div key={category} className="mb-12">
                    <h3 className="text-2xl font-bold text-primary mb-4">{category}</h3>
                    <div className="grid grid-cols-4 gap-4">
                      {categoryBooks.map((book, index) => (
                        <div key={book.id} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <BookCard book={book} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{selectedCategory}</h3>
              <div className="grid grid-cols-4 gap-4">
                {getBooksForDisplay(selectedCategory).map((book, index) => (
                  <div key={book.id} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories 
      <section className="py-16 bg-white">
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
              { range: "Ages 5-7", category: "RedHot Picture Books (< 8yrs)", count: books.filter(b => b.ageRange.includes("5")).length, color: "bg-gradient-sunset" },
              { range: "Ages 8-10", category: "SUDEF ( 9-12 yrs )", count: books.filter(b => b.ageRange.includes("8")).length, color: "bg-gradient-ocean" },
              { range: "Ages 11-15", category: "Shizu ( 10 - 14 yrs )", count: books.filter(b => b.ageRange.includes("11") || b.ageRange.includes("14")).length, color: "bg-gradient-magic" }
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
                  onClick={() => setSelectedCategory(ageGroup.category)}
                >
                  Explore Books
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </Layout>
  );
};

export default Books;