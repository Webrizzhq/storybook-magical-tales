import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CampaignModal from "@/components/CampaignModal";
import { campaignData } from "@/data/campaigns";
import { useBooks } from "@/hooks/useBooks";
import { urlFor } from "@/lib/imageUrl";

const BookCarousel = () => {
  const { books, loading } = useBooks();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoadedMap, setImageLoadedMap] = useState<{ [id: string]: boolean }>({});
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState("");
  const [campaignModalContent, setCampaignModalContent] = useState<JSX.Element[] | string[]>([]);

  
  // helper: extract min age number
  const getMinAge = (range: string) => {
    const match = range.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // sort/filter books same as before
  const sortedBooks = [...books]
  .filter(
    (book) =>
      book.category !== "Case Crackers" &&
      !book.comingSoon // exclude all coming soon books
  )
  .sort((a, b) => getMinAge(b.ageRange) - getMinAge(a.ageRange));


  // insert campaign cards exactly as before
  const allBooks: any[] = [];
  const campaignBaseId = "campaign-wild-legacy";
  let campaignCount = 0;

  allBooks.push({
    category: "Campaign",
    coverImage: campaignData.image,
    title: campaignData.title,
    featured: campaignData.featured,
    ageRange: "All",
    author: "Storymoja & Partners",
    synopsis: campaignData.description,
    learnMore: campaignData.learnMore,
    getInvolved: campaignData.getInvolved,
    id: `${campaignBaseId}-${campaignCount}`,
  });

  let groupCounter = 0;
  for (let i = 0; i < sortedBooks.length; i++) {
    allBooks.push(sortedBooks[i]);
    groupCounter++;

    if (groupCounter === 3) {
      campaignCount++;
      allBooks.push({
        category: "Campaign",
        coverImage: campaignData.image,
        title: campaignData.title,
        featured: campaignData.featured,
        ageRange: "All",
        author: "Storymoja & Partners",
        synopsis: campaignData.description,
        learnMore: campaignData.learnMore,
        getInvolved: campaignData.getInvolved,
        id: `${campaignBaseId}-${campaignCount}`,
      });
      groupCounter = 0;
    }
  }

  // auto-play
  useEffect(() => {
    if (!isAutoPlaying || allBooks.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allBooks.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, allBooks.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allBooks.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allBooks.length) % allBooks.length);
  const goToSlide = (index: number) => setCurrentIndex(index);
  const handleImageLoad = (id: string) => {
    setImageLoadedMap((prev) => ({ ...prev, [id]: true }));
  };

  const currentBook = allBooks[currentIndex];

  if (loading || !currentBook)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#630000] text-white text-xl">
        Loading books...
      </div>
    );


    const visibleDots = 5; // Number of dots to show at a time
const half = Math.floor(visibleDots / 2);
const start = Math.max(0, currentIndex - half);
const end = Math.min(allBooks.length, currentIndex + half + 1);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#660000] via-[#670000] to-[#630000] pb-40">
      <div className="container mx-auto px-4 relative z-10 mt-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Book Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentBook._id || currentBook.id}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative group"
              >
                <div className="relative bg-transparent rounded-2xl p-5 shadow-2xl">
                  <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                    {currentBook.category}
                  </Badge>

                  {!imageLoadedMap[currentBook._id || currentBook.id] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-t-yellow-400 border-r-transparent border-b-yellow-400 border-l-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  <img
                    src={
                      currentBook.category === "Campaign"
                        ? currentBook.coverImage
                        : currentBook.coverImage?.url
                        ? currentBook.coverImage.url
                        : "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
                    }
                    alt={currentBook.title}
                    className="w-full md:h-[450px] h-[300px] object-contain rounded-xl"
                    onLoad={() => handleImageLoad(currentBook._id || currentBook.id)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400";
                      handleImageLoad(currentBook._id || currentBook.id);
                    }}
                  />

                  {currentBook.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="absolute -top-3 -right-3"
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Book Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={(currentBook._id || currentBook.id) + "-info"}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white space-y-6 md:-mt-14"
            >
              <Badge variant="outline" className="border-white/50 text-white px-4 py-2">
                Age {currentBook.ageRange}
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight md:mb-5">
                <span className="bg-yellow-500 bg-clip-text text-transparent">
                  {currentBook.title}
                </span>
              </h1>

              <div className="flex items-center gap-4 md:text-lg">
                <span className="text-yellow-300 font-semibold py-5">
                  by {currentBook.author}
                </span>
              </div>

              <p className="md:text-base text-sm text-white/90 leading-relaxed max-w-xl">
                {currentBook.synopsis.length > 200
                  ? `${currentBook.synopsis.substring(0, 200)}...`
                  : currentBook.synopsis}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="sm:flex space-x-5 flex-col sm:flex-row gap-4 pt-4 mb-10"
              >
                {currentBook.category === "Campaign" ? (
                  <>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => {
                        setCampaignModalTitle(currentBook.title);
                        setCampaignModalContent(currentBook.learnMore || [currentBook.synopsis]);
                        setCampaignModalOpen(true);
                      }}
                      className="hover:bg-primary hover:text-primary-foreground flex-1 text-primary"
                    >
                      Learn More
                    </Button>

                    <Button
                      size="lg"
                      className="bg-gold-gradient hover:shadow-glow flex-1"
                      onClick={() => {
                        setCampaignModalTitle(currentBook.title + " — Get Involved");
                        setCampaignModalContent(currentBook.getInvolved || [currentBook.synopsis]);
                        setCampaignModalOpen(true);
                      }}
                    >
                      Get Involved
                    </Button>
                  </>
                ) : (
                  <Link to={`/book/${currentBook._id}`}>
                    <Button
                      size="lg"
                      className="bg-gold-gradient hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      View Collection
                    </Button>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute -bottom-[60px] left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          <motion.div whileTap={{ scale: 0.85 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-white/30 bg-white/10 text-white backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </motion.div>

          <div className="flex gap-2">
  {allBooks.slice(start, end).map((_, i) => {
    const index = start + i;
    return (
      <motion.button
        key={index}
        onClick={() => goToSlide(index)}
        whileHover={{ scale: 1.2 }}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentIndex
            ? "bg-yellow-400 scale-125"
            : "bg-white/30 hover:bg-white/50"
        }`}
      />
    );
  })}
</div>

          <motion.div whileTap={{ scale: 0.85 }}>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-white/30 text-white bg-white/10 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Campaign Modal */}
      <CampaignModal
        isOpen={campaignModalOpen}
        onClose={() => setCampaignModalOpen(false)}
        title={campaignModalTitle}
        content={campaignModalContent}
      />
    </section>
  );
};

export default BookCarousel;
