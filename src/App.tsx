import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Events from "./pages/Events";
import Campaigns from "./pages/Campaigns";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Comments from "./components/Comments";
import Gamification from "./components/Gamification";
import DownloadableCalendar from "./components/DownloadableCalendar";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import { AnimatedLayout } from "./components/AnimatedLayout";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopButton />
          <DarkModeToggle />
          <Routes>
            <Route element={<AnimatedLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/books" element={<Books />} />
              <Route path="/book/:id" element={<BookDetail />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/calendar" element={<DownloadableCalendar />} />
              <Route path="/events" element={<Events />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

