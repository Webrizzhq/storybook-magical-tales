import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book } from '@/data/books';
import { ExternalLink } from 'lucide-react';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group overflow-hidden transition-all duration-500 hover:shadow-magical hover:-translate-y-2 bg-card border-0 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Book Cover */}
        <div className={`relative overflow-hidden ${featured ? 'h-80' : 'h-64'}`}>
          <img 
            src={book.coverImage} 
            alt={book.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Magical Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          {/* Age Badge */}
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-medium">
            {book.ageRange}
          </Badge>
          
          {/* Featured Badge */}
          {featured && (
            <Badge className="absolute top-3 right-3 bg-gradient-sunset text-white font-medium animate-bounce-gentle">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-6">
          <div className="space-y-3">
            {/* Category */}
            <Badge variant="outline" className="text-xs">
              {book.category}
            </Badge>
            
            {/* Title */}
            <h3 className={`font-bold text-foreground leading-tight ${
              featured ? 'text-xl' : 'text-lg'
            }`}>
              {book.title}
            </h3>
            
            {/* Author */}
            <p className="text-sm text-muted-foreground font-medium">
              by {book.author}
            </p>
            
            {/* Synopsis */}
            <p className={`text-sm text-muted-foreground leading-relaxed ${
              featured ? 'line-clamp-4' : 'line-clamp-3'
            }`}>
              {book.synopsis}
            </p>
            
            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Link to={`/book/${book.id}`} className="flex-1">
                <Button 
                  className="w-full bg-gradient-magic hover:shadow-glow transition-all duration-300"
                  size={featured ? "default" : "sm"}
                >
                  Read More
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size={featured ? "default" : "sm"}
                className="gap-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Where to Buy
              </Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookCard;