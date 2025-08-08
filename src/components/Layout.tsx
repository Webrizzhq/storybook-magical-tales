import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Users, Info, Sparkles, Bell } from 'lucide-react';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/events', label: 'REDHOT LIVE' },
    { to: '/books', label: 'BOOKS' },
    { to: '/campaigns', label: 'CAMPAIGNS' },
    { to: '/about', label: 'US', hasNotification: true }
  ];

  return (
    <div className="min-h-screen bg-redhot-red">
      {/* RedHot Africa Navigation - Matching PDF Design */}
      <nav className="bg-redhot-red border-b border-red-800/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Matching PDF */}
            <NavLink to="/" className="flex flex-col text-left">
              <span className="text-2xl font-bold text-bright-yellow font-child-friendly">
                RedHot Africa
              </span>
              <span className="text-xs text-bright-yellow/80 tracking-wider">
                BOOKS TO LOVE
              </span>
            </NavLink>

            {/* Navigation Links - Matching PDF Layout */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(({ to, label, hasNotification }) => (
                <NavLink key={to} to={to}>
                  {({ isActive }) => (
                    <div className="relative">
                      <span
                        className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                          isActive 
                            ? 'text-bright-yellow border-b-2 border-bright-yellow pb-1' 
                            : 'text-white hover:text-bright-yellow'
                        }`}
                      >
                        {label}
                      </span>
                      {hasNotification && (
                        <div className="absolute -top-1 -right-2 w-4 h-4 bg-bright-yellow rounded-full flex items-center justify-center">
                          <span className="text-xs text-redhot-red font-bold">1</span>
                        </div>
                      )}
                    </div>
                  )}
                </NavLink>
              ))}
              
              {/* Auth Links */}
              <div className="flex items-center gap-4 ml-8 border-l border-red-800/30 pl-8">
                <NavLink to="/signin">
                  <span className="text-sm font-medium text-white hover:text-bright-yellow transition-colors">
                    SIGN IN
                  </span>
                </NavLink>
                <NavLink to="/login">
                  <span className="text-sm font-medium text-white hover:text-bright-yellow transition-colors">
                    LOG IN
                  </span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-bright-yellow">
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-redhot-red">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;