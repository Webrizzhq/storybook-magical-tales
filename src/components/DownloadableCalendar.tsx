import React, { useState } from 'react';
import { Calendar, Download, Clock, MapPin, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'reading' | 'workshop' | 'launch' | 'discussion';
  description: string;
  ageGroup?: string;
}

const DownloadableCalendar = () => {
  const [selectedFormat, setSelectedFormat] = useState<'ics' | 'pdf'>('ics');

  const events: CalendarEvent[] = [
    {
      id: '1',
      title: 'Shizu Historical Fiction Reading Session',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Nairobi Public Library',
      type: 'reading',
      description: 'Join us for an interactive reading session of our latest Shizu historical fiction series.',
      ageGroup: 'Ages 8-12'
    },
    {
      id: '2',
      title: 'SUDEF Wildlife Detective Workshop',
      date: '2024-02-22',
      time: '2:00 PM',
      location: 'Virtual Event',
      type: 'workshop',
      description: 'Learn about wildlife conservation through our detective fiction series.',
      ageGroup: 'Ages 10-15'
    },
    {
      id: '3',
      title: 'New Book Launch: Juba Adventures',
      date: '2024-03-01',
      time: '6:00 PM',
      location: 'Redhot Africa Headquarters',
      type: 'launch',
      description: 'Celebrate the launch of our newest adventure series with the author.',
      ageGroup: 'All Ages'
    },
    {
      id: '4',
      title: 'Parent-Child Reading Circle',
      date: '2024-03-08',
      time: '11:00 AM',
      location: 'Community Center',
      type: 'discussion',
      description: 'A special reading circle for parents and children to enjoy stories together.',
      ageGroup: 'Ages 5-10'
    },
    {
      id: '5',
      title: 'Multilingual Storytelling Event',
      date: '2024-03-15',
      time: '3:00 PM',
      location: 'Cultural Center',
      type: 'reading',
      description: 'Stories told in multiple African languages with English translations.',
      ageGroup: 'All Ages'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'reading': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'workshop': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'launch': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'discussion': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'reading': return <BookOpen className="w-4 h-4" />;
      case 'workshop': return <Users className="w-4 h-4" />;
      case 'launch': return <Calendar className="w-4 h-4" />;
      case 'discussion': return <Users className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const downloadCalendar = (format: 'ics' | 'pdf') => {
    if (format === 'ics') {
      // Generate ICS file content
      let icsContent = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Redhot Africa//Reading Events//EN\n';
      
      events.forEach(event => {
        const startDate = new Date(`${event.date}T${convertTo24Hour(event.time)}`);
        const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
        
        icsContent += 'BEGIN:VEVENT\n';
        icsContent += `UID:${event.id}@redhotafrica.com\n`;
        icsContent += `DTSTART:${formatICSDate(startDate)}\n`;
        icsContent += `DTEND:${formatICSDate(endDate)}\n`;
        icsContent += `SUMMARY:${event.title}\n`;
        icsContent += `DESCRIPTION:${event.description}\n`;
        icsContent += `LOCATION:${event.location}\n`;
        icsContent += 'END:VEVENT\n';
      });
      
      icsContent += 'END:VCALENDAR';
      
      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'redhot-africa-reading-events.ics';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // For PDF, we'll create a simple text version
      // In a real app, you'd use a PDF library like jsPDF
      let pdfContent = 'REDHOT AFRICA READING EVENTS CALENDAR\n\n';
      
      events.forEach(event => {
        pdfContent += `${event.title}\n`;
        pdfContent += `Date: ${formatDate(event.date)}\n`;
        pdfContent += `Time: ${event.time}\n`;
        pdfContent += `Location: ${event.location}\n`;
        pdfContent += `Age Group: ${event.ageGroup}\n`;
        pdfContent += `Description: ${event.description}\n\n`;
        pdfContent += '---\n\n';
      });
      
      const blob = new Blob([pdfContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'redhot-africa-reading-events.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const convertTo24Hour = (time12h: string) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    return `${hours}:${minutes}:00`;
  };

  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
          <Calendar className="w-8 h-8" />
          Reading Events Calendar
        </h2>
        <p className="text-muted-foreground">
          Stay updated with our latest reading events, workshops, and book launches
        </p>
      </div>

      {/* Download Options */}
      <Card className="border-2 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Download Calendar</h3>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex gap-2">
              <Button
                variant={selectedFormat === 'ics' ? 'default' : 'outline'}
                onClick={() => setSelectedFormat('ics')}
                size="sm"
              >
                ICS Format
              </Button>
              <Button
                variant={selectedFormat === 'pdf' ? 'default' : 'outline'}
                onClick={() => setSelectedFormat('pdf')}
                size="sm"
              >
                Text Format
              </Button>
            </div>
            <Button 
              onClick={() => downloadCalendar(selectedFormat)}
              className="bg-gradient-magic hover:shadow-glow"
            >
              <Download className="w-4 h-4 mr-2" />
              Download {selectedFormat.toUpperCase()}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {selectedFormat === 'ics' 
              ? 'Download as ICS file to import into your calendar app (Google Calendar, Outlook, etc.)'
              : 'Download as text file for printing or manual entry'
            }
          </p>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-primary">Upcoming Events</h3>
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <Badge className={`${getEventTypeColor(event.type)} flex items-center gap-1`}>
                      {getEventTypeIcon(event.type)}
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    {event.ageGroup && (
                      <Badge variant="outline">{event.ageGroup}</Badge>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                  <p className="text-muted-foreground mb-3">{event.description}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                  <Button size="sm" className="bg-gradient-magic">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DownloadableCalendar;

