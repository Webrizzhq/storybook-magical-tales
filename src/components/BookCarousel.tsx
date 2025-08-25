import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, BookOpen, Heart, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { books, getFeaturedBooks } from '@/data/books';

const BookCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const featuredBooks = getFeaturedBooks();
  const allBooks = books.slice(0, 8); 

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allBooks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, allBooks.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allBooks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allBooks.length) % allBooks.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentBook = allBooks[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#660000] via-[#670000] to-[#630000]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Books Animation */}
       
        
        
      </div>

      {/* Main Carousel Content */}
      <div className="container mx-auto px-4 relative z-10 -mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Book Showcase */}
          <div className="relative">
            {/* Main Book Display */}
            <div className="relative group">
              {/* Book Cover with 3D Effect */}
              <div className="relative transform transition-all duration-700 hover:scale-105 hover:rotate-y-12">
                
                <div className="relative bg-transparent rounded-2xl p-5 shadow-2xl transform  transition-transform duration-500">
                  <img
                    src={currentBook.coverImage}
                    alt={currentBook.title}
                    className="w-full md:h-[450px] h-[300px] object-contain rounded-xl "
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400';
                    }}
                  />
                  
                  {/* Floating Badge */}
                  {currentBook.featured && (
                    <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 animate-bounce-gentle">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </div>

              {/* Surrounding Mini Books */}
              <div className="absolute -left-8 top-1/4 transform -rotate-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={allBooks[(currentIndex - 1 + allBooks.length) % allBooks.length]?.coverImage}
                  alt="Previous book"
                  className="w-16 h-24 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400';
                  }}
                />
              </div>
              
              <div className="absolute -right-8 bottom-1/4 transform rotate-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={allBooks[(currentIndex + 1) % allBooks.length]?.coverImage}
                  alt="Next book"
                  className="w-16 h-24 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Book Information */}
          <div className="text-white space-y-6 md:-mt-20">
            {/* Category Badge */}
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm md:mb-6 ">
              {currentBook.category}
            </Badge>

            {/* Title with Gradient */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:mb-5">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                {currentBook.title}
              </span>
            </h1>

            {/* Author and Age */}
            <div className="flex items-center gap-4 md:text-lg">
              <span className="text-yellow-300 font-semibold py-5">by {currentBook.author}</span>
              <Badge variant="outline" className="border-white/30 text-white">
                {currentBook.ageRange}
              </Badge>
            </div>

            {/* Synopsis */}
            <p className="md:text-base text-sm text-white/90 leading-relaxed max-w-xl">
              {currentBook.synopsis.length > 200 
                ? `${currentBook.synopsis.substring(0, 200)}...` 
                : currentBook.synopsis}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={`/books/${currentBook.id}`}>
                <Button size="lg" className="bg-gold-gradient hover:from-yellow-500 hover:to-orange-600 text-white  px-8 py-4  shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {allBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-yellow-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-white/30 text-white bg-white/10 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Progress Bar */}
       
      </div>

      
    </section>
  );
};

export default BookCarousel;

