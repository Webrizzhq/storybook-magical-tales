import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Star,
  BookOpen,
  Download
} from 'lucide-react';

const events = [
  {
    id: '1',
    title: "African Storytelling Festival",
    date: "2024-03-15",
    time: "10:00 AM - 4:00 PM",
    location: "National Library, Nairobi",
    type: "Festival",
    description:
      "A day-long celebration of African children's literature featuring author readings, storytelling sessions, and interactive workshops.",
    featured: true,
    attendees: 150,
    ageGroup: "All Ages"
  },
  {
    id: '2',
    title: "Princess Njinga Book Launch",
    date: "2024-03-22",
    time: "6:00 PM - 8:00 PM",
    location: "Goethe Institute, Kampala",
    type: "Book Launch",
    description:
      "Join author Emily Khalayi Wekulo for the official launch of 'Princess Njinga: Bane of the Portuguese' with readings and Q&A.",
    featured: false,
    attendees: 75,
    ageGroup: "Ages 10+"
  },
  {
    id: '3',
    title: "Wildlife Detective Stories Workshop",
    date: "2024-04-05",
    time: "2:00 PM - 5:00 PM",
    location: "Children's Museum, Cape Town",
    type: "Workshop",
    description:
      "Interactive workshop exploring wildlife conservation through the SUDEF detective series with activities and crafts.",
    featured: true,
    attendees: 50,
    ageGroup: "Ages 8-12"
  },
  {
    id: '4',
    title: "Reading Champions Awards",
    date: "2024-04-18",
    time: "4:00 PM - 7:00 PM",
    location: "Cultural Centre, Lagos",
    type: "Awards",
    description:
      "Celebrating young readers and their achievements in African children's literature with awards ceremony and performances.",
    featured: false,
    attendees: 200,
    ageGroup: "All Ages"
  }
];

const Events = () => {
  const [selectedFormat, setSelectedFormat] = useState<'ics' | 'pdf'>('ics');

  const featured = events.filter(e => e.featured);
  const upcoming = events.filter(e => !e.featured);

  const getEventTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'reading':
        return <BookOpen className="w-4 h-4" />;
      case 'workshop':
      case 'discussion':
        return <Users className="w-4 h-4" />;
      case 'launch':
      case 'festival':
      case 'awards':
      default:
        return <CalendarIcon className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  const convertTo24Hour = (time12h: string) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier === 'PM') hours = (parseInt(hours, 10) + 12).toString();
    return `${hours}:${minutes}:00`;
  };

  const formatICSDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const downloadCalendar = (format: 'ics' | 'pdf') => {
    if (format === 'ics') {
      let icsContent = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Redhot Africa//Reading Events//EN\n';
      events.forEach(event => {
        const time = event.time.split(' - ')[0];
        const start = new Date(`${event.date}T${convertTo24Hour(time)}`);
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
        icsContent += `BEGIN:VEVENT\nUID:${event.id}@redhotafrica.com\n`;
        icsContent += `DTSTART:${formatICSDate(start)}\nDTEND:${formatICSDate(end)}\n`;
        icsContent += `SUMMARY:${event.title}\nDESCRIPTION:${event.description}\n`;
        icsContent += `LOCATION:${event.location}\nEND:VEVENT\n`;
      });
      icsContent += 'END:VCALENDAR';

      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'redhot-events.ics';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      let txt = 'REDHOT AFRICA EVENTS CALENDAR\n\n';
      events.forEach(event => {
        txt += `${event.title}\nDate: ${formatDate(event.date)}\nTime: ${event.time}\n`;
        txt += `Location: ${event.location}\nAudience: ${event.ageGroup}\n${event.description}\n\n---\n\n`;
      });
      const blob = new Blob([txt], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'redhot-events.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-redhot overflow-hidden text-white/50 text-center">
        <div className="container mx-auto px-4 relative z-10">
          <CalendarIcon className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Redhot Live: From Page to Stage</h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">Celebrate Africa — one Redhot event at a time.</p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Featured Events
            </Badge>
            <h2 className="text-4xl font-bold text-submain">Don't Miss These!</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((event, i) => (
              <Card
                key={event.id}
                className="group bg-card dark:bg-main border-0 hover:shadow-magical transition-all hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between mb-4">
                    <Badge className="bg-gradient-sunset text-white">{event.type}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-submain mb-4">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div className="flex gap-2 items-center"><CalendarIcon className="w-4 h-4" /> {formatDate(event.date)}</div>
                    <div className="flex gap-2 items-center"><Clock className="w-4 h-4" /> {event.time}</div>
                    <div className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> {event.location}</div>
                    <div className="flex gap-2 items-center"><Users className="w-4 h-4" /> {event.attendees} attendees</div>
                  </div>
                  <Button className="w-full mt-6 bg-gold-gradient">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-main">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-submain text-center mb-12">More Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map(event => (
              <Card key={event.id} className="group bg-card dark:bg-red-800 border-0 hover:shadow-float transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <Badge className="mb-2 bg-submain/10 text-submain">{event.type}</Badge>
                  <h4 className="text-lg font-semibold text-submain mb-2">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div className="flex gap-2 items-center"><CalendarIcon className="w-4 h-4" /> {formatDate(event.date)}</div>
                    <div className="flex gap-2 items-center"><Clock className="w-4 h-4" /> {event.time}</div>
                    <div className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> {event.location}</div>
                  </div>
                  <Button  className="w-full mt-4 bg-submain">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Download */}
      <section className="py-20 bg-red-50 dark:bg-red-800">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-submain" />
          <h2 className="text-3xl font-bold text-submain mb-2">Download Full Event Calendar</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay organized—add our events to your favorite calendar or print them out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <div className="flex gap-2">
    <Button
      variant={selectedFormat === 'ics' ? 'default' : 'outline'}
      onClick={() => setSelectedFormat('ics')}
    >
      ICS
    </Button>
    <Button
      variant={selectedFormat === 'pdf' ? 'default' : 'outline'}
      onClick={() => setSelectedFormat('pdf')}
    >
      Text
    </Button>
  </div>
  <Button onClick={() => downloadCalendar(selectedFormat)} className="bg-gradient-magic">
    <Download className="w-4 h-4 mr-2" />
    Download {selectedFormat.toUpperCase()}
  </Button>
</div>

<p className="text-sm text-muted-foreground mt-3">
  {selectedFormat === 'ics'
    ? 'Download as ICS file to import into your calendar app (Google Calendar, Outlook, etc.)'
    : 'Download as text file for printing or manual entry'}
</p>

        </div>
      </section>
    </Layout>
  );
};

export default Events;
