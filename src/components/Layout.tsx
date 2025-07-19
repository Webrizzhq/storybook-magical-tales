import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, Info, Sparkles } from 'lucide-react';

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
                Storybook Hub
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
      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
                Storybook Hub
              </div>
              <p className="text-primary-foreground/80">
                A magical cultural hub celebrating African children's literature and storytelling.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <div className="space-y-2">
                {navItems.slice(1).map(({ to, label }) => (
                  <NavLink 
                    key={to} 
                    to={to} 
                    className="block text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-primary-foreground/80">
                Join our community of storytellers and book lovers.
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 Storybook Hub. Celebrating African stories for young minds.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;