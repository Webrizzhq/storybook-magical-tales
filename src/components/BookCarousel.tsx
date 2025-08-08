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
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            <BookOpen 
              className="w-8 h-8 text-white animate-float" 
              style={{
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          </div>
        ))}
        
        {/* Sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Sparkles 
              className="w-4 h-4 text-yellow-300 animate-sparkle opacity-60" 
              style={{
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          </div>
        ))}
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
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl transform rotate-6"></div>
                <div className="relative bg-transparent rounded-2xl p-10  shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={currentBook.coverImage}
                    alt={currentBook.title}
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
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
                  className="w-20 h-28 object-cover rounded-lg shadow-lg"
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
                  className="w-20 h-28 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Book Information */}
          <div className="text-white space-y-6">
            {/* Category Badge */}
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              {currentBook.category}
            </Badge>

            {/* Title with Gradient */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                {currentBook.title}
              </span>
            </h1>

            {/* Author and Age */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-yellow-300 font-semibold">by {currentBook.author}</span>
              <Badge variant="outline" className="border-white/30 text-white">
                {currentBook.ageRange}
              </Badge>
            </div>

            {/* Synopsis */}
            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              {currentBook.synopsis.length > 200 
                ? `${currentBook.synopsis.substring(0, 200)}...` 
                : currentBook.synopsis}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={`/books/${currentBook.id}`}>
                <Button size="lg" className="bg-gold-gradient hover:from-yellow-500 hover:to-orange-600 text-white  px-8 py-4  shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Read More
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white bg-white/10 hover:bg-white/30 px-8 py-4 "
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              >
                {isAutoPlaying ? (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    Pause Tour
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Resume Tour
                  </>
                )}
              </Button>
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

