import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, Star, BookOpen } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "African Storytelling Festival",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "National Library, Nairobi",
      type: "Festival",
      description: "A day-long celebration of African children's literature featuring author readings, storytelling sessions, and interactive workshops.",
      featured: true,
      attendees: 150
    },
    {
      id: 2,
      title: "Princess Njinga Book Launch",
      date: "March 22, 2024", 
      time: "6:00 PM - 8:00 PM",
      location: "Goethe Institute, Kampala",
      type: "Book Launch",
      description: "Join author Emily Khalayi Wekulo for the official launch of 'Princess Njinga: Bane of the Portuguese' with readings and Q&A.",
      featured: false,
      attendees: 75
    },
    {
      id: 3,
      title: "Wildlife Detective Stories Workshop",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM", 
      location: "Children's Museum, Cape Town",
      type: "Workshop",
      description: "Interactive workshop exploring wildlife conservation through the SUDEF detective series with activities and crafts.",
      featured: true,
      attendees: 50
    },
    {
      id: 4,
      title: "Reading Champions Awards",
      date: "April 18, 2024",
      time: "4:00 PM - 7:00 PM",
      location: "Cultural Centre, Lagos", 
      type: "Awards",
      description: "Celebrating young readers and their achievements in African children's literature with awards ceremony and performances.",
      featured: false,
      attendees: 200
    }
  ];

  const featuredEvents = events.filter(event => event.featured);
  const upcomingEvents = events.filter(event => !event.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-magic overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-16 h-16 bg-accent/20 rounded-full animate-float" />
          <div className="absolute top-32 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-bounce-gentle" />
          <div className="absolute bottom-24 left-1/3 w-8 h-8 bg-accent/30 rounded-full animate-sparkle" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <Calendar className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Literary Events
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Join us for exciting events celebrating African children's literature. From book launches to storytelling festivals, discover magical moments that bring stories to life.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Featured Events
            </Badge>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Don't Miss These Amazing Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Special celebrations and gatherings that showcase the best of African storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="group border-0 bg-card hover:shadow-magical transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-gradient-sunset text-white">
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary-glow transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-accent" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button className="w-full bg-gradient-magic hover:shadow-glow transition-all duration-300">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              More Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mark your calendars for these exciting literary gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="group border-0 bg-card hover:shadow-float transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    {event.type}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary animate-bounce-gentle" />
          <h2 className="text-4xl font-bold text-primary mb-6">
            Host Your Own Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Interested in organizing a reading event in your community? We'd love to help you bring African stories to life for children in your area.
          </p>
          <Button size="lg" className="bg-gradient-magic hover:shadow-glow transition-all duration-300">
            Contact Us About Events
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Events;