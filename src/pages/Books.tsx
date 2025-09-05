import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { books, getBooksByCategory } from "@/data/books";
import { BookOpen, Filter } from "lucide-react";
import hero from "@/assets/hero-reading.jpg";

// Skeleton Loader for Books Grid
const BooksGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-80"
        />
      ))}
    </div>
  );
};

// Mapping display categories to actual book categories
const categoryMap = {
  "All Books": "All Books",
  "RedHot Picture Books (< 8yrs)": "Picture Books",
  "SUDEF ( 8-10 yrs )": "SUDEF Wildlife Detective Fiction",
  "Shizu ( 10 - 14 yrs )": "Shizu Historical Fiction",
  "Best African Series (13+ yrs )": "Best African Series",
};

// Display order from oldest to youngest
const categoryAgeOrder = [
  "Best African Series (13+ yrs )",
  "Shizu ( 10 - 14 yrs )",
  "SUDEF ( 8-10 yrs )",
  "RedHot Picture Books (< 8yrs)",
];

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay for skeletons
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedAge]);

  // Get books based on category and age, sorted oldest → youngest
  const getBooksForDisplay = (category: string) => {
    const actualCategory = categoryMap[category] || category;

    const ageNumber = selectedAge.match(/\d+/)?.[0]; // safe age extraction

    const filteredBooks = getBooksByCategory(actualCategory).filter(
      (book) =>
        selectedAge === "All Ages" ||
        (ageNumber && book.ageRange.includes(ageNumber))
    );

    // Sort by minimum age descending (oldest first)
    return filteredBooks.sort((a, b) => {
      const getMinAge = (range: string) => {
        const match = range.match(/\d+/);
        return match ? parseInt(match[0], 10) : 0;
      };
      return getMinAge(b.ageRange) - getMinAge(a.ageRange);
    });
  };

  return (
    <Layout>
      {/* Hero Section (optional) */}
      
      <section className="relative py-20 bg-main h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Books background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="text-3xl md:text-6xl mt-20 font-bold text-white mb-6 drop-shadow-lg">
              Our Books
            </h1>
            
          </div>
        </div>
      </section>
    

      {/* Category Filter */}
      <section className="py-12 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-muted text-muted-foreground mb-3 px-4 py-2 flex items-center">
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
                    ? "bg-gold-gradient shadow-glow"
                    : "hover:bg-primary/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 bg-red-100 dark:bg-main">
        <div className="container mx-auto px-4">
          {loading ? (
            <BooksGridSkeleton />
          ) : selectedCategory === "All Books" ? (
            categoryAgeOrder.map((category) => {
              const categoryBooks = getBooksForDisplay(category);
              if (categoryBooks.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
            })
          ) : (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {selectedCategory}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
