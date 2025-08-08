import Layout from '@/components/Layout';
import DownloadableCalendar from '@/components/DownloadableCalendar';

const CalendarPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <DownloadableCalendar />
      </div>
    </Layout>
  );
};

export default CalendarPage;

