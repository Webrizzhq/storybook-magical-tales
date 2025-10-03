import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Footer from './Footer';
import DarkModeToggle from './ui/DarkModeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: '/icons/Home.png' },
    { to: '/books', label: 'Books', icon: '/icons/Books.png' },
    { to: '/events', label: 'Events', icon: '/icons/Redhot Live.png' },
    { to: '/campaigns', label: 'Campaigns', icon: '/icons/Campaigns.png' },
    { to: '/retail', label: 'Redhot-Retail', icon: '/icons/Redhot Retail.png' },
    { 
      to: '/about', 
      label: (
        <>
          Team <img src="/emoji.png" alt="emoji" className="-ml-2 w-7 inline" />
        </>
      ), 
      icon: '/icons/Team.png'
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Magical Navigation */}
      <nav className="sticky top-0 z-50 bg-main backdrop-blur-md border-b border-b-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-5 text-center">
              <img src="icons/Redhot logo for website.png" alt="" className="w-32" />
              <img src="icons/Storymoja logo for website.png" alt="" className="w-28" />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {navItems.map(({ to, label, icon }) => (
                <NavLink key={to} to={to}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? 'default' : 'ghost'}
                      className={`gap-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-gold-gradient text-primary-foreground shadow-glow'
                          : 'hover:bg-primary/10 hover:text-primary text-yellow-500'
                      }`}
                    >
                      <img src={icon} alt="" className="w-4 h-4" />
                      {label}
                    </Button>
                  )}
                </NavLink>
              ))}
              <div className="ml-">
                <DarkModeToggle />
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center text-white gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="w-10 h-10" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-main shadow-lg transform transition-transform duration-300 z-50 flex flex-col p-6 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-white">Menu</span>
          <Button variant="ghost" size="lg" onClick={() => setMobileOpen(false)}>
            <X className="w-10 h-10 text-white" />
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-gold-gradient text-primary-foreground shadow-glow'
                    : 'text-submain hover:bg-primary/10 hover:text-primary'
                }`
              }
            >
              <img src={icon} alt="" className="w-5 h-5" />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Footer actions inside drawer */}
        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-white/20">
          <DarkModeToggle />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Magical Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
