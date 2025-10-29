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
import Calendar from 'react-calendar';
import { motion } from 'framer-motion';
import 'react-calendar/dist/Calendar.css';
import hero from "@/assets/hero-reading.jpg";
import PodcastSection from '@/components/PodcastSection';

const events = [
  {
    id: '1',
    title: "African Storytelling Festival",
    date: "2025-09-05",
    time: "10:00 AM - 4:00 PM",
    location: "National Library, Nairobi",
    type: "Festival",
    description:
      "A day-long celebration of African children's literature featuring author readings, storytelling sessions, and interactive workshops.",
    attendees: 150,
    ageGroup: "All Ages"
  },
  {
    id: '2',
    title: "Princess Njinga Book Launch",
    date: "2025-09-12",
    time: "6:00 PM - 8:00 PM",
    location: "Goethe Institute, Kampala",
    type: "Book Launch",
    description:
      "Join author Emily Khalayi Wekulo for the official launch of 'Princess Njinga: Bane of the Portuguese' with readings and Q&A.",
    attendees: 75,
    ageGroup: "Ages 10+"
  },
  {
    id: '3',
    title: "Wildlife Detective Stories Workshop",
    date: "2025-09-25",
    time: "2:00 PM - 5:00 PM",
    location: "Children's Museum, Cape Town",
    type: "Workshop",
    description:
      "Interactive workshop exploring wildlife conservation through the SUDEF detective series with activities and crafts.",
    attendees: 50,
    ageGroup: "Ages 8-12"
  },
  {
    id: '4',
    title: "Reading Champions Awards",
    date: "2025-10-10",
    time: "4:00 PM - 7:00 PM",
    location: "Cultural Centre, Lagos",
    type: "Awards",
    description:
      "Celebrating young readers and their achievements in African children's literature with awards ceremony and performances.",
    attendees: 200,
    ageGroup: "All Ages"
  }
];

const Events = () => {
  const [selectedFormat, setSelectedFormat] = useState<'ics' | 'pdf'>('ics');

  const today = new Date();
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(today.getDate() + 14);

  let aroundTheCorner = events.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate >= today && eventDate <= twoWeeksFromNow;
  });
  let moreEvents = events.filter(e => {
    const eventDate = new Date(e.date);
    return eventDate > twoWeeksFromNow;
  });

  if (aroundTheCorner.length === 0 && moreEvents.length === 0) {
    moreEvents = events;
  }

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

  const tileContent = ({ date }: { date: Date }) => {
    const hasEvent = events.find(e => new Date(e.date).toDateString() === date.toDateString());
    if (hasEvent) {
      return (
        <div className="w-2 h-2 rounded-full bg-red-500 mx-auto mt-1" title={hasEvent.title}></div>
      );
    }
    return null;
  };

  return (
    <Layout>
     
      <section className="relative py-20 bg-gradient-redhot overflow-hidden text-white text-center md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Books background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-main/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          
          <h1 className="text-5xl md:text-5xl font-bold mb-8 mt-14">Redhot Live</h1>

          <p className='text-xl text-gray-200'>We don’t just launch books, we engineer adventures. The Redhot Experiences team transforms pages into buzzing book clubs, high-stakes challenges, musical takeovers, and story-fuelled competitions. Every event they craft flips reading into a live experience that lingers long after the final page.</p>
         
        </motion.div>
      </section>

      <PodcastSection />

      {/* Around the Corner */}
      <section className="py-20 bg-red-100 dark:bg-red-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="bg-submain/10 text-submain mb-4 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Around the Corner
            </Badge>
            <h2 className="text-4xl font-bold text-submain">Upcoming Events</h2>
            <p className="text-black mt-2">
              Events with deadlines coming up soon — secure your spot now.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {aroundTheCorner.length === 0 ? (
              <p className="text-center col-span-2 text-muted-foreground">
                No events in the next two weeks — check upcoming ones below!
              </p>
            ) : (
              aroundTheCorner.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <Card className="group bg-card dark:bg-main border-0 hover:shadow-magical transition-all hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="flex justify-between mb-4">
                        <Badge className="bg-gradient-sunset text-white">{event.type}</Badge>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-submain mb-4">{event.title}</h3>
                      <p className="text-black mb-4">{event.description}</p>
                      <div className="space-y-2 text-black text-sm">
                        <div className="flex gap-2 items-center"><CalendarIcon className="w-4 h-4" /> {formatDate(event.date)}</div>
                        <div className="flex gap-2 items-center"><Clock className="w-4 h-4" /> {event.time}</div>
                        <div className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> {event.location}</div>
                        <div className="flex gap-2 items-center"><Users className="w-4 h-4" /> {event.attendees} attendees</div>
                      </div>
                      <Button className="w-full mt-6 bg-gold-gradient">Register Now</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* More Upcoming Events */}
      <section className="py-20 bg-main">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-yellow-500 text-center mb-12"
          >
            More Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Card className="group bg-card dark:bg-red-800 border-0 hover:shadow-float transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-submain/10 text-submain">{event.type}</Badge>
                    <h4 className="text-lg font-semibold text-submain mb-2">{event.title}</h4>
                    <p className="text-sm text-black mb-3">{event.description}</p>
                    <div className="space-y-1 text-black text-sm">
                      <div className="flex gap-2 items-center"><CalendarIcon className="w-4 h-4" /> {formatDate(event.date)}</div>
                      <div className="flex gap-2 items-center"><Clock className="w-4 h-4" /> {event.time}</div>
                      <div className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> {event.location}</div>
                    </div>
                    <Button className="w-full mt-4 bg-submain">Learn More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Download with Preview */}
      <section className="py-20 bg-red-50 dark:bg-red-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 text-center"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-submain" />
          <h2 className="text-3xl font-bold text-submain mb-2">Redhot Event Calendar</h2>
          <p className="text-black mb-6 max-w-xl mx-auto">
             Your backstage pass to every Redhot adventure. Track upcoming book clubs, competitions, and stage takeovers, so you never miss a moment where stories come alive.
          </p>

          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Calendar
                className="rounded-xl shadow-md p-4 bg-white dark:bg-main"
                tileContent={tileContent}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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
          </motion.div>

          <p className="text-sm text-black mt-3">
            {selectedFormat === 'ics'
              ? 'Download as ICS file to import into your calendar app (Google Calendar, Outlook, etc.)'
              : 'Download as text file for printing or manual entry'}
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Events;
