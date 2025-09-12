import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Star, Store, Award, Users, Sparkles, Mail } from 'lucide-react';
import hero from "@/assets/hero-reading.jpg";

const Retail = () => {
  const vision = [
    {
      icon: ShoppingBag,
      title: "Global Access",
      description:
        "Stock our titles in airports, tourist destinations, hotels, supermarkets, bookshops, and international online platforms so African stories travel the world."
    },
    {
      icon: Users,
      title: "Ambassadors",
      description:
        "Run workshops for retail floor staff, equipping them to be passionate champions of African books."
    },
    {
      icon: Star,
      title: "Buzz & Connection",
      description:
        "Host author signings and live events in bookshops, sparking excitement and building reader–writer bonds."
    },
    {
      icon: Award,
      title: "Celebrate Retail Champions",
      description:
        "Launch recognition awards, success stories, and a Retail Newsletter to showcase outstanding partners."
    }
  ];

  // Placeholder stockists (replace with Alice’s provided list later)
  const hallOfFame = [
    {
      name: "Bookstop Yaya",
      quote: "Redhot books fly off our shelves – kids ask for them by name!",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Prestige Bookshop",
      quote: "Stocking African children’s books is a statement of pride for us.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Airport Duty-Free Nairobi",
      quote: "Travelers love taking a piece of African storytelling home.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-main overflow-hidden md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Retail background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 drop-shadow-lg mt-20">
              Redhot Retail Vision
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We dream about how to make Redhot books unmissable. Our retail journey is still
              taking shape — and we’d love your ideas on how to bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-red-100 dark:bg-red-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Vision
            </Badge>
            <h2 className="text-4xl font-bold text-submain mb-6">
              Where do we see Redhot Retail?
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              From airports to supermarkets, from bookshops to online platforms — African children’s
              stories deserve to shine everywhere. And we want retailers to be the torchbearers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vision.map((item, index) => (
              <Card
                key={item.title}
                className="group border-0 bg-card hover:shadow-float transition-all duration-300 hover:-translate-y-2 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-submain mb-4">{item.title}</h3>
                  <p className="text-black leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-20 bg-main text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-yellow-500 mb-4 px-4 py-2">
              <Store className="w-4 h-4 mr-2" />
              Retail Hall of Fame
            </Badge>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">Our Champions</h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Meet the retailers who already stock Redhot titles. They are the pioneers, proudly
              showcasing African stories to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hallOfFame.map((retailer, index) => (
              <Card
                key={retailer.name}
                className="group border-0 bg-red-900 hover:shadow-magical transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-6">
                  <img
                    src={retailer.image}
                    alt={retailer.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">{retailer.name}</h3>
                  <p className="italic text-white/80 text-sm leading-relaxed">
                    “{retailer.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-20 bg-white text-white text-center">
        <div className="container py-28 rounded-lg mx-auto bg-main px-4">
          <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Are you a bookstore, supermarket, airport store, or hotel gift shop? Join us in making
            African children’s books impossible to miss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-submain hover:bg-white/90 transition-all duration-300"
            >
              Become a Partner
            </Button>
            <Button
              size="lg"
              className="border-white text-white bg-gold-gradient hover:bg-white hover:text-submain"
            >
              Subscribe to Retail Newsletter
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retail;
