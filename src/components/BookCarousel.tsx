import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Book {
  id: string;
  title: string;
  author: string;
  series: string;
  ageRange: string;
  cover: string;
  featured: boolean;
  description: string;
}

const BookCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const hotReads: Book[] = [
    {
      id: '1',
      title: 'Queen Mkabayi Zulu Kingmaker',
      author: 'Hellen Akeyo',
      series: 'Shizu Historical Fiction',
      ageRange: 'Ages 11–13',
      cover: '/api/placeholder/300/400',
      featured: true,
      description: 'Twins, Kaya and Vusi time travel to the 18th Century Zulu Kingdom...'
    },
    {
      id: '2',
      title: 'Princess Njinga Bane of the Portuguese',
      author: 'Emily Khalayi Wekulo',
      series: 'Shizu Historical Fiction',
      ageRange: 'Ages 11–13',
      cover: '/api/placeholder/300/400',
      featured: true,
      description: 'Twins Lara and Moises time travel back to the 17th century...'
    },
    {
      id: '3',
      title: 'Case of Targeted Turtles',
      author: 'Shaleen Keshavjee-Gulam',
      series: 'SUDEF Wildlife Detective Fiction',
      ageRange: 'Ages 8–10',
      cover: '/api/placeholder/300/400',
      featured: true,
      description: 'Sandeep promises his dying grandfather to protect the eggs...'
    },
    {
      id: '4',
      title: 'Deception and Other Stories',
      author: 'Multiple Authors',
      series: 'Anthologies',
      ageRange: 'Ages 14–15',
      cover: '/api/placeholder/300/400',
      featured: true,
      description: 'See the world from an insider\'s point of view...'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotReads.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotReads.length) % hotReads.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-bright-yellow mb-4 font-child-friendly">
          HOT READS
        </h2>
        <p className="text-white/80 text-lg">Featured Book Collection</p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-red-900/30 backdrop-blur-sm border border-red-800/30">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {hotReads.map((book, index) => (
            <div key={book.id} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Book Cover */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    <div className="w-64 h-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-4 bg-white/10 rounded border border-white/20">
                        <div className="p-4 h-full flex flex-col justify-between">
                          <div>
                            <Badge className="bg-bright-yellow text-redhot-red text-xs mb-2">
                              {book.ageRange}
                            </Badge>
                            <Badge className="bg-bright-yellow text-redhot-red text-xs mb-4">
                              Featured
                            </Badge>
                          </div>
                          <div className="text-center">
                            <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                              {book.title}
                            </h3>
                            <p className="text-white/80 text-sm">by {book.author}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                  <Badge className="bg-bright-yellow text-redhot-red w-fit mx-auto lg:mx-0 mb-4">
                    {book.series}
                  </Badge>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-bright-yellow mb-4 font-child-friendly leading-tight">
                    {book.title}
                  </h3>
                  
                  <p className="text-xl text-white/90 mb-2">by {book.author}</p>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                    {book.description}
                  </p>

                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-bright-yellow text-bright-yellow" />
                      ))}
                    </div>
                    <span className="text-white/80">4.8 (124 reviews)</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button className="bg-bright-yellow text-redhot-red hover:bg-bright-yellow/90 px-8 py-3 font-semibold">
                      Read Now
                    </Button>
                    <Button variant="outline" className="border-bright-yellow text-bright-yellow hover:bg-bright-yellow hover:text-redhot-red px-8 py-3">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-bright-yellow/20 hover:bg-bright-yellow/30 text-bright-yellow p-3 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-bright-yellow/20 hover:bg-bright-yellow/30 text-bright-yellow p-3 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {hotReads.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-bright-yellow' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCarousel;

