import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookCarousel from '@/components/BookCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedBooks } from '@/data/books';
import { Star } from 'lucide-react';
import Partners from '@/components/Partners';
import HomeCampaignHighlights from '@/components/HomeCampaignHighlights';
import FAQSection from '@/components/FAQSection';
import { motion } from "framer-motion";
import { books, getBooksByCategory } from "@/data/books";

const Index = () => {
  const featuredBooks = getFeaturedBooks();


const seriesCategories = [
  { key: "Redhot Picture Books", label: "Redhot Picture Books", ageRange: "<9 years" },
  { key: "SUDEF Wildlife Detective Series", label: "SUDEF Wildlife Detective Series", ageRange: "8–11 years" },
  { key: "Shizu Historical Series", label: "Shizu Historical Series", ageRange: "+14 years" },
  { key: "Case Crackers", label: "Case Crackers", ageRange: "7–8 years" },
  { key: "Redhot Novels", label: "Redhot Novels", ageRange: "+15 years" },
  { key: "Redhot Reality", label: "Redhot Reality", ageRange: "All Ages" },
  { key: "Best African Series", label: "Best African Series", ageRange: "13+ years" }
];


  return (
    <Layout>
      <BookCarousel />

      <div className="pt-20">
        <HomeCampaignHighlights />
      </div>

      {/* Categories Showcase */}
      <section className="py-20 bg-main">
        <div className="container mx-auto px-4">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-primary/10 text-yellow-400 mb-14 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Read Redhot Africa
            </Badge>
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              SMART STORIES FOR SHARP MINDS
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Fuel for curious minds. Books with a Redhot Africa spine because bland stories are for
              boring kids.
            </p>
          </motion.div>

          {/* Categories Tags Row */}
<motion.div
  className="flex flex-wrap justify-center gap-4 mb-12"
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }}
  viewport={{ once: true }}
>
  {[
    "Redhot Picture Books",
    "SUDEF Wildlife Detective Series",
    "Shizu Historical Series",
    "Case Crackers",
    "Redhot Novels",
    "Redhot Reality",
    "Best African Series"
  ].map((tag, index) => (
    <motion.div
      key={index}
      variants={{ hidden: { opacity: 0, scale: 0.8, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center gap-2 bg-primary/10 text-yellow-400 px-6 py-2 rounded-full font-mono text-sm"
    >
      <Star className="w-4 h-4" />
      {tag}
    </motion.div>
  ))}
</motion.div>

{/* Category Cards */}
<div className="grid md:grid-cols-3 gap-8">
  {[
     {
    title: "Redhot Novels",
    ageRange: "+15 years",
    description: "Novels for older teens, exploring gripping narratives and adventures.",
    image: "https://images.unsplash.com/photo-1622567905740-74539aa99bcf?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    books: "Infestations, Other Titles Coming Soon",
    tag: "Upcoming Series"
  },
  {
    title: "Shizu Historical Series",
    ageRange: "+14 years",
    description: "Rich historical fiction and thought provoking anthologies.",
    image: "https://images.unsplash.com/photo-1726347915002-c8bc173e995c?q=80&w=1264&auto=format&fit=crop",
    books: "Princess Njinga, Zero Tolerance Stories",
    tag: null
  },
  {
    title: "Best African Series",
    ageRange: "13+ years",
    description: "Collections of diverse African voices for young readers.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1170&auto=format&fit=crop",
    books: "African Futures, Stories of Us",
    tag: null
  },
  {
    title: "SUDEF Wildlife Detective Series",
    ageRange: "8–11 years",
    description: "Exciting detective stories featuring African wildlife and conservation.",
    image: "https://images.unsplash.com/photo-1627907228041-fe3291346dfb?q=80&w=1074&auto=format&fit=crop",
    books: "Case of Targeted Turtles, Persecuted Pangolins",
    tag: null
  },
  {
    title: "Case Crackers",
    ageRange: "7–8 years",
    description: "New thrilling cases for young detectives, stay tuned!",
    image: "case-crackers.png",
    books: "Coming Soon",
    tag: "Upcoming Series"
  },
  {
    title: "Redhot Picture Books",
    ageRange: "<9 years",
    description: "Colorful illustrations and simple stories perfect for beginning readers.",
    image: "https://images.unsplash.com/photo-1608120663473-a4aa3472786b?q=80&w=1170&auto=format&fit=crop",
    books: "Matatu From Watamu, The Boy and the Lion",
    tag: null
  },
  {
    title: "Redhot Reality",
    ageRange: "All Ages",
    description: "Non fiction and reality based stories for curious minds.",
    image: "https://images.unsplash.com/photo-1662060180911-9bbf84c40122?q=80&w=1235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    books: "Our African Animals",
    tag: "Upcoming Series"
  }
  ].map((category, index) => (
    <motion.div
      key={category.title}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card className="group border-0 bg-card dark:bg-red-900 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
        {/* Top Image with Overlay */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/0"></div>
          <Badge className="absolute top-4 left-4 bg-primary/90 text-white text-xs">
            {category.ageRange}
          </Badge>
          {category.tag && (
            <Badge className="absolute top-4 right-4 bg-yellow-500 text-black text-xs">
              {category.tag}
            </Badge>
          )}
        </div>

        {/* Card Content */}
        <CardContent className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-primary mb-3">
            {category.title}
          </h3>
          <p className="text-black mb-4 leading-relaxed flex-grow">
            {category.description}
          </p>
          <p className="text-sm text-black mb-4 font-medium">
            Featured: {category.books}
          </p>
          <Link to="/books">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-gold-gradient hover:shadow-lg transition-all duration-300">
                Browse Stories
              </Button>
            </motion.div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      <Partners />
     
    </Layout>
  );
};

export default Index;
