import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, Info, Sparkles } from 'lucide-react';
import MultilingualSupport from './MultilingualSupport';
import Footer from './Footer';
import DarkModeToggle from './ui/DarkModeToggle';


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { to: '/', label: 'Home', icon: Sparkles },
     { to: '/events', label: 'REDHOT LIVE', icon: Calendar },
    { to: '/books', label: 'Books', icon: BookOpen },
   
    { to: '/campaigns', label: 'Campaigns', icon: Users },
    { to: '/about', label: 'US', icon: Info }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Magical Navigation */}
      <nav className="sticky top-0 z-50 bg-main backdrop-blur-md ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex flex-col items-center text-center">
  {/* Top line: Redhot Africa */}
  <span className="text-white text-2xl font-normal font-pacifico leading-tight">
    Redhot Africa
  </span>

  {/* Middle line: BOOKS TO LOVE */}
  <span className="text-white tracking-[0.2em] text-xs font-bold mt-[-4px]">
    BOOKS TO LOVE
  </span>

  {/* Bottom line: Storymoja Gold Standard */}
  <span className="text-[#B39B47] italic text-sm font-semibold mt-[-2px]">
    Storymoja Gold Standard
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
                          ? 'bg-gold-gradient text-primary-foreground shadow-glow' 
                          : 'hover:bg-primary/10 hover:text-primary text-submain'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </Button>
                  )}
                </NavLink>
              ))}

              <div className='ml-10'>
                <DarkModeToggle />
              </div>
              
            

              
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <MultilingualSupport />
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