import { useState } from 'react';
import Layout from '@/components/Layout';
import BookCard from '@/components/BookCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { books, categories, getBooksByCategory, getBooksByAge } from '@/data/books';
import { BookOpen, Filter, Star } from 'lucide-react';
import hero from "@/assets/hero-reading.jpg"

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
      <section className="relative py-20 bg-main overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={hero} // <-- replace with your own image path
            alt="Books background"
            className="w-full h-full  object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" /> {/* overlay */}
        </div>

        {/* Floating shapes */}
        

        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <BookOpen className="md:w-16 md:h-16 w-12 h-12 text-white/70 animate-bounce-gentle" />
            </div>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Page Turners and Mind Twisters
            </h1>
            <p className="md:text-xl text-base text-white/80 leading-relaxed">
              Explore our curated collection of African children's literature.
              History Reloaded. Culture Remixed. Claws, Clues and Canning kids.
              See. Feel. Imagine.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-red-100 dark:bg-red-900">
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

          <div className="text-center mt-6">
            <p className="text-muted-foreground">
              Showing {selectedCategory !== "All Books" ? 1 : Object.keys(categoryMap).length - 1}{" "}
              {selectedCategory !== "All Books" ? 'section' : 'sections'}
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
                    <div className="grid md:grid-cols-4 gap-4">
                      {categoryBooks.map((book, index) => (
                        <div
                          key={book.id}
                          className="text-center animate-fade-in-up"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
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
                  <div
                    key={book.id}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Books;
