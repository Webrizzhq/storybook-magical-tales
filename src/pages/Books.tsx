import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { books, getBooksByCategory, getNonEnglishBooks } from "@/data/books"; // 🔹 Added getNonEnglishBooks
import { BookOpen, Filter, Globe } from "lucide-react"; // 🔹 Added Globe icon
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
  "Redhot Novels (+15 years)": "Redhot Novels",
  "Shizu Historical Series (+14 years)": "Shizu Historical Series",
  "Best African Series (13+ years)": "Best African Series",
  "SUDEF Wildlife Detective Series (8–11 years)": "SUDEF Wildlife Detective Series",
  "Case Crackers (7–8 years)": "Case Crackers",
  "Redhot Picture Books (<9 years)": "Redhot Picture Books",
  "Redhot Reality (All Ages)": "Redhot Reality",
};

// Display order from oldest to youngest
const categoryAgeOrder = [
  "Redhot Novels (+15 years)",
  "Shizu Historical Series (+14 years)",
  "Best African Series (13+ years)",
  "SUDEF Wildlife Detective Series (8–11 years)",
  "Case Crackers (7–8 years)",
  "Redhot Picture Books (<9 years)",
  "Redhot Reality (All Ages)", // stays last since it's universal
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

  // Get non-English books for special section
  const nonEnglishBooks = getNonEnglishBooks();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-main md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Books background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mx-auto">
            <h1 className="text-3xl md:text-5xl mt-8 font-bold text-white mb-14 drop-shadow-lg">
              Redhot Page Turners & Mind Twisters 
            </h1>

            <p className="md:text-lg text-gray-200">
              Explore our curated collection of African Children's Literature.
              African History Reloaded. Culture Remixed. Claws, Clues and Cunning kids. 
              Redhot Books star African children who solve, invent, rebel and rise. 
              They do not wait for rescue. They are not sidekicks or victims. 
              They are the main characters reimagining Africa on their own terms.
            </p>
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
            <>
              {/* Main Categories */}
              {categoryAgeOrder.map((category) => {
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
              })}

              {/* 🔹 Non-English Books Section - Always shown at bottom */}
              {nonEnglishBooks.length > 0 && (
                <div className="mt-20 pt-12 border-t border-border/50">
                  <div className=" mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex  gap-3">
                      <Globe className="w-8 h-8 text-accent" />
                      Other Languages
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                      Discover our books in other diverse languages
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {nonEnglishBooks.map((book, index) => (
                      <div
                        key={book.id}
                        className="text-center animate-fade-in-up"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <BookCard book={book} />
                      </div>
                    ))}
                  </div>

                
                </div>
              )}
            </>
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