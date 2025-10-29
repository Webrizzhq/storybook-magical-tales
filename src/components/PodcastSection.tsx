import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Headphones, Star, Clock, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const podcasts = [
  {
    id: 1,
    title: "Tales from the Magical Library",
    host: "Sarah the Storyteller",
    description: "Weekly enchanting stories from around Africa, bringing folklore and modern tales to life.",
    duration: "25 mins",
    rating: 4.8,
    episodeCount: 45,
    coverImage: "/Latest/magical-library-podcast.jpg",
    category: "Stories & Folklore"
  },
  {
    id: 2,
    title: "Young Authors Corner",
    host: "Professor Wisdom",
    description: "Inspiring young writers to create their own magical stories with expert guidance and creative tips.",
    duration: "20 mins",
    rating: 4.9,
    episodeCount: 32,
    coverImage: "/Latest/young-authors-podcast.jpg",
    category: "Writing & Creativity"
  },
  {
    id: 3,
    title: "Wildlife Whispers",
    host: "Ranger Maya",
    description: "Educational stories about African wildlife, combining adventure with nature conservation.",
    duration: "22 mins",
    rating: 4.7,
    episodeCount: 28,
    coverImage: "/Latest/wildlife-whispers-podcast.jpg",
    category: "Nature & Adventure"
  }
];

const PodcastSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Magical Story Podcasts
          </motion.h2>
          <p className="text-muted-foreground text-lg">
            Listen to enchanting stories and creative discussions for young minds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((podcast) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Headphones className="w-16 h-16 text-primary/40" />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {podcast.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {podcast.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {podcast.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {podcast.rating}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {podcast.episodeCount} episodes
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button  className="w-full bg-gold-gradient text-primary-foreground hover:shadow-glow">
                      <Headphones className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;