import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book } from '@/data/books';
import { ExternalLink } from 'lucide-react';
import ColorThief from 'colorthief';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [bgColor, setBgColor] = useState('rgb(239,68,68)'); // fallback color
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const extractColor = () => {
      try {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        // Lighten the extracted color for a subtle background
        const lighten = (value: number) => Math.round(value + (255 - value) * 0.3);
        setBgColor(`rgb(${lighten(color[0])}, ${lighten(color[1])}, ${lighten(color[2])})`);
      } catch (error) {
        console.error('Color extraction failed:', error);
      }
    };

    if (img.complete) {
      extractColor();
    } else {
      img.addEventListener('load', extractColor);
    }

    return () => img.removeEventListener('load', extractColor);
  }, [book.coverImage]);

  return (
    <Card 
      className={`group overflow-hidden transition-all duration-500 hover:shadow-magical hover:-translate-y-2 bg-card dark:bg-red-900 border-0 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Book Cover */}
        <div 
  className={`relative p-3 rounded-2xl bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 ${
    featured ? 'h-80' : 'h-64'
  }`}
>
  <div className="w-full h-full bg-transparent rounded-xl flex items-center justify-center overflow-hidden">
    <img 
      ref={imgRef}
      src={book.coverImage} 
      alt={book.title}
      crossOrigin="anonymous"
      className={`max-w-full max-h-full object-contain transition-transform duration-700 ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
    />
  </div>

          
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
            <div className="flex justify-center items-center gap-3 pt-2">
              <Link to={`/book/${book.id}`} className="flex justify-center items-center">
                <Button 
                  className=" bg-gold-gradient hover:shadow-glow transition-all duration-300"
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
