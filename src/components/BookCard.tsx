import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book } from "@/hooks/useBooks"; // use Sanity Book type
import { urlFor } from "@/lib/imageUrl";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "/BookCovers/placeholder.png";
    setLoaded(true);
  };

  // Get image URL from Sanity
// Get image URL safely
const coverUrl = typeof book.coverImage === "string"
  ? book.coverImage
  : "/BookCovers/placeholder.png";




  return (
    <Card
      className={`group overflow-hidden transition-all duration-500 hover:shadow-magical hover:-translate-y-2 bg-card border-0 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Book Cover */}
        <div className="relative p-3 rounded-2xl" style={{ backgroundColor: "rgb(239,68,68)" }}>
          <div className="w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-xl relative">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-xl" />
            )}

            <img
              src={coverUrl}
              alt={book.title}
              className={`max-w-full max-h-full object-contain transition-transform duration-700 ${
                isHovered ? "scale-105" : "scale-100"
              } ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
              onError={handleImageError}
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Badges */}
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-medium">
            {book.ageRange}
          </Badge>

          {featured && (
            <Badge className="absolute top-3 right-3 bg-gradient-sunset text-white font-medium animate-bounce-gentle">
              Featured
            </Badge>
          )}
        </div>

        {/* Book Info */}
        <CardContent className="p-6">
          <div className="space-y-3">
            <Badge variant="outline" className="text-xs">
              {book.category}
            </Badge>

            <h3 className={`font-bold text-foreground leading-tight ${featured ? "text-xl" : "text-lg"}`}>
              {book.title}
            </h3>

            <p className="text-sm text-muted-foreground font-medium">by {book.author}</p>

            <p className={`text-sm text-black leading-relaxed ${featured ? "line-clamp-4" : "line-clamp-3"}`}>
              {book.synopsis}
            </p>

            <div className="flex justify-center items-center gap-3 pt-2">
              <Link to={`/book/${book._id}`} className="flex justify-center items-center">
                <Button
                  className="bg-gold-gradient hover:shadow-glow transition-all duration-300"
                  size={featured ? "default" : "sm"}
                >
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookCard;
