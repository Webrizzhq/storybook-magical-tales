import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Sparkles, BookOpen, Mic, Star } from 'lucide-react';


interface Event {
  id: string;
  title: string;
  type: 'reading' | 'workshop' | 'author-visit' | 'storytelling';
  date: string;
  location: string;
  description: string;
  featured?: boolean;
  image?: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Storytelling Under the Stars',
    type: 'storytelling',
    date: 'Every Saturday, 7:00 PM',
    location: 'Community Garden Pavilion',
    description: 'Join us for magical evening storytelling sessions where children and families gather to hear tales from our featured books come alive under the starlit sky.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1571297288850-80fb170a3f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBldmVudHN8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '2',
    title: 'Meet Hellen Akeyo - Queen Mkabayi Author',
    type: 'author-visit',
    date: 'March 15, 2024',
    location: 'Central Library Auditorium',
    description: 'An intimate conversation with author Hellen Akeyo about bringing historical figures to life and the research behind Queen Mkabayi Zulu Kingmaker.',
    featured: true,
    image: 'https://images.unsplash.com/photo-1571297288850-80fb170a3f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBldmVudHN8ZW58MHx8MHx8fDA%3D'

  },
  {
    id: '3',
    title: 'Wildlife Detective Workshop',
    type: 'workshop',
    date: 'March 22, 2024',
    location: 'Nature Discovery Center',
    description: 'Learn real wildlife conservation techniques and solve mysteries just like the characters in our SUDEF Wildlife Detective series. Perfect for ages 8-12.'
  },
  {
    id: '4',
    title: 'Young Writers Circle',
    type: 'workshop',
    date: 'Every Thursday, 4:00 PM',
    location: 'Shizu Stories Studio',
    description: 'A supportive space for young writers to share their stories, get feedback, and learn from published authors in our community.'
  },
  {
    id: '5',
    title: 'Family Reading Hour',
    type: 'reading',
    date: 'Every Sunday, 2:00 PM',
    location: 'Various Locations',
    description: 'Bring the whole family for guided reading sessions featuring our picture books and early reader stories. Snacks and activities included!'
  }
];

const eventIcons = {
  reading: BookOpen,
  workshop: Users,
  'author-visit': Mic,
  storytelling: Sparkles
};

const eventColors = {
  reading: 'bg-secondary text-secondary-foreground',
  workshop: 'bg-blue-400 text-white',
  'author-visit': 'bg-primary text-primary-foreground',
  storytelling: 'bg-gradient-magic text-white'
};

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-red-100 dark:bg-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
           
          <div className="relative inline-block">
             <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2">
                          <Star className="w-4 h-4 mr-2" />
                          Featured Events
                        </Badge>
            <h2 className="text-4xl mt-5 lg:text-4xl font-display font-bold text-main dark:text-submain">
              Cultural Calendar
            </h2>
            
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our vibrant community of storytellers, readers, and dreamers. 
            From author visits to storytelling circles, there's always something magical happening.
          </p>
        </div>

        {/* Featured Events */}
        {/* Featured Events */}
<div className="mb-16">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    {events.filter(event => event.featured).map((event, index) => (
      <div
        key={event.id}
        className="group bg-white dark:bg-red-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
      >
        {/* Event Image */}
        <div className="relative overflow-hidden">
          <img
            src={event.image} // Use your real event images
            alt={event.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#204359]/70 via-transparent to-transparent"></div>

          {/* Event Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
              FEATURED EVENT
            </span>
          </div>

          {/* Event Date & Location */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="text-white">
              <p className="text-sm font-semibold mb-1">{event.date}</p>
              <p className="text-xs opacity-90">{event.location}</p>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-main transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>

          <Button
            className="inline-flex items-center px-6 py-3 bg-gold-gradient text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* All Events */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-12 mt-20">
            Upcoming Events
          </h3>
          
          <div className="editorial-grid">
            {events.filter(event => !event.featured).map((event, index) => {
              const IconComponent = eventIcons[event.type];
              return (
                <Card 
                  key={event.id} 
                  className="story-card border-0 shadow-lg hover:bg-card/95 dark:bg-main"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <CardHeader className="space-y-4">
                    <Badge className={eventColors[event.type]} variant="outline">
                      <IconComponent className="h-3 w-5 mr-1" />
                      {event.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                    
                    <CardTitle className="text-xl font-display leading-tight">
                      {event.title}
                    </CardTitle>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {event.description}
                    </CardDescription>
                    
                    <Button  className="w-full bg-submain">
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-main p-12 rounded-3xl text-white space-y-6">
            <h3 className="text-3xl font-display text-submain font-bold">
              Never Miss a Story
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get notified about new books, author visits, and special events. 
              Join our community of storytellers and dreamers.
            </p>
            <Button size="lg" className="bg-gold-gradient text-white hover:bg-white/90 text-base px-8 py-4 h-auto">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;