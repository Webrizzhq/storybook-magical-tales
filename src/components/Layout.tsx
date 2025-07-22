import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, Info, Sparkles } from 'lucide-react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { to: '/', label: 'Home', icon: Sparkles },
    { to: '/books', label: 'Books', icon: BookOpen },
    { to: '/events', label: 'Events', icon: Calendar },
    { to: '/campaigns', label: 'Campaigns', icon: Users },
    { to: '/about', label: 'About', icon: Info }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Magical Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Sparkles className="w-8 h-8 text-accent animate-sparkle" />
              <span className="bg-gradient-magic bg-clip-text text-transparent">
                RedHot Africa
              </span>
            </NavLink>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`gap-2 transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-magic text-primary-foreground shadow-glow' 
                          : 'hover:bg-primary/10 hover:text-primary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Button>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Magical Footer */}
      <Footer />
    </div>
  );
};

export default Layout;