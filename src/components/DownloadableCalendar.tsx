import React, { useState } from 'react';
import { Calendar, Download, Clock, BookOpen } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'story' | 'event' | 'reading-time';
}

const DownloadableCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const events: CalendarEvent[] = [
    {
      id: '1',
      title: 'The Magic Forest Adventure',
      date: '2024-01-15',
      time: '19:00',
      description: 'Evening story time with magical creatures',
      type: 'story'
    },
    {
      id: '2',
      title: 'Reading Challenge Week',
      date: '2024-01-22',
      time: '10:00',
      description: 'Special reading challenge for young readers',
      type: 'event'
    },
    {
      id: '3',
      title: 'Daily Reading Time',
      date: '2024-01-20',
      time: '20:00',
      description: 'Your daily 30-minute reading session',
      type: 'reading-time'
    },
    {
      id: '4',
      title: 'The Enchanted Castle',
      date: '2024-01-25',
      time: '18:30',
      description: 'New story release - Fantasy adventure',
      type: 'story'
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const generateICSFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Storybook Magical Tales//Reading Calendar//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      ...events.map(event => [
        'BEGIN:VEVENT',
        `UID:${event.id}@storybook-magical-tales.com`,
        `DTSTART:${event.date.replace(/-/g, '')}T${event.time.replace(':', '')}00Z`,
        `DTEND:${event.date.replace(/-/g, '')}T${(parseInt(event.time.split(':')[0]) + 1).toString().padStart(2, '0')}${event.time.split(':')[1]}00Z`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `CATEGORIES:${event.type.toUpperCase()}`,
        'END:VEVENT'
      ]).flat(),
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `storybook-calendar-${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'story':
        return <BookOpen size={16} className="text-blue-500" />;
      case 'event':
        return <Calendar size={16} className="text-green-500" />;
      case 'reading-time':
        return <Clock size={16} className="text-purple-500" />;
      default:
        return <Calendar size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-background">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="text-primary" size={24} />
          <h2 className="text-2xl font-bold text-foreground font-child-friendly">Reading Calendar</h2>
        </div>
        <button
          onClick={generateICSFile}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Download size={16} />
          Download Calendar
        </button>
      </div>

      {/* Month/Year Selector */}
      <div className="flex gap-4 mb-6">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
          className="px-3 py-2 border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className="px-3 py-2 border rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i).map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Calendar Preview */}
      <div className="bg-card p-6 rounded-lg shadow-sm border mb-6">
        <h3 className="text-lg font-semibold mb-4 text-card-foreground">
          {months[selectedMonth]} {selectedYear} - Upcoming Events
        </h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-3 p-3 bg-background rounded-lg border">
              <div className="mt-1">{getEventIcon(event.type)}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                  <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                  <span>🕐 {event.time}</span>
                  <span className="capitalize">📚 {event.type.replace('-', ' ')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
          <BookOpen className="mx-auto mb-2 text-blue-500" size={32} />
          <h3 className="font-semibold text-card-foreground mb-2">Story Schedules</h3>
          <p className="text-sm text-muted-foreground">Never miss a new story release or reading session</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
          <Calendar className="mx-auto mb-2 text-green-500" size={32} />
          <h3 className="font-semibold text-card-foreground mb-2">Special Events</h3>
          <p className="text-sm text-muted-foreground">Reading challenges, author visits, and more</p>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
          <Clock className="mx-auto mb-2 text-purple-500" size={32} />
          <h3 className="font-semibold text-card-foreground mb-2">Reading Reminders</h3>
          <p className="text-sm text-muted-foreground">Daily reading time and habit tracking</p>
        </div>
      </div>

      {/* Download Instructions */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">How to use your calendar:</h4>
        <ol className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
          <li>1. Click "Download Calendar" to get the .ics file</li>
          <li>2. Open the file with your calendar app (Google Calendar, Apple Calendar, Outlook)</li>
          <li>3. All reading events will be automatically added to your calendar</li>
          <li>4. Set up notifications to never miss a story time!</li>
        </ol>
      </div>
    </div>
  );
};

export default DownloadableCalendar;

