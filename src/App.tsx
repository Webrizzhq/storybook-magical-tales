import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Events from "./pages/Events";
import Campaigns from "./pages/Campaigns";
import About from "./pages/About";
import GamificationPage from "./pages/Gamification";
import CalendarPage from "./pages/Calendar";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import { AnimatedLayout } from "./components/AnimatedLayout";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTopButton />
     
        <Routes>
          <Route element={<AnimatedLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/about" element={<About />} />
          <Route path="/gamification" element={<GamificationPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          </Route>
          

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
