import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Book } from '@/data/books';

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden transition-all duration-500 hover:shadow-magical hover:-translate-y-2 bg-transparent border-0 text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Book Cover Placeholder */}
        <div 
          className={`relative p-3 rounded-none bg-blue-800 mx-auto ${
            featured ? 'h-48 w-36' : 'h-40 w-32'
          }`}
        >
          <div className="w-full h-full bg-blue-900/80 rounded-sm flex items-center justify-center overflow-hidden">
            <span className="text-white text-xs text-center p-2">{book.title}</span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <div className="space-y-2">
            {/* Title */}
            <h3 className={`font-bold text-bright-yellow leading-tight font-child-friendly ${
              featured ? 'text-lg' : 'text-base'
            }`}>
              {book.title}
            </h3>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookCard;

