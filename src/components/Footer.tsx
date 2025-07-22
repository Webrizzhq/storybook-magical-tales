import { Heart, Book, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-storytelling-earth text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-display font-bold text-storytelling-orange">
                RedHot Africa
              </h3>
              <p className="text-white/40 mt-2 text-sm">Books To Love</p>
            </div>
            
            <p className="text-white/70 leading-relaxed text-sm">
              A Pan-African publishing imprint dedicated to sparking curiosity, storytelling, and self-awareness among African children through bilingual, age-aligned, and culturally rich books.
            </p>
            
            <div className="flex items-center text-storytelling-orange">
              <Heart className="h-5 w-5 mr-2" />
              <span className="text-sm">Made with love for young storytellers</span>
            </div>
          </div>

          {/* Quick Links */}
<div className="space-y-6">
  <h4 className="text-xl font-display font-bold">Explore</h4>
  <nav className="space-y-3">
    <Link
      to="/books"
      className="block text-white/80 hover:text-storytelling-orange transition-colors"
    >
      Books
    </Link>
    <Link
      to="/events"
      className="block text-white/80 hover:text-storytelling-orange transition-colors"
    >
      Events &amp; Workshops
    </Link>
    <Link
      to="/campaigns"
      className="block text-white/80 hover:text-storytelling-orange transition-colors"
    >
      Our Campaigns
    </Link>
    <Link
      to="/about"
      className="block text-white/80 hover:text-storytelling-orange transition-colors"
    >
      About RedHot Africa
    </Link>
  </nav>
</div>

{/* Book Collections */}
<div className="space-y-6">
  <h4 className="text-xl font-display font-bold">Book Collections</h4>
  <nav className="space-y-3">
    <Link
      to="/books"
      className="block text-white/80 hover:text-storytelling-orange transition-colors flex items-center"
    >
      <Book className="h-4 w-4 mr-2" />
      Historical Fiction (Ages 11-13)
    </Link>
    <Link
      to="/books"
      className="block text-white/80 hover:text-storytelling-orange transition-colors flex items-center"
    >
      <Book className="h-4 w-4 mr-2" />
      Wildlife Detective (Ages 8-10)
    </Link>
    <Link
      to="/books"
      className="block text-white/80 hover:text-storytelling-orange transition-colors flex items-center"
    >
      <Book className="h-4 w-4 mr-2" />
      Picture Books (Ages 5-7)
    </Link>
    <Link
      to="/books"
      className="block text-white/80 hover:text-storytelling-orange transition-colors flex items-center"
    >
      <Book className="h-4 w-4 mr-2" />
      Anthologies (Ages 14-15)
    </Link>
  </nav>
</div>
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold">Connect With Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-storytelling-orange" />
                <div>
                  <p className="text-white/80">hello@redhotafrica.com</p>
                  <p className="text-white/60 text-sm">For general inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-storytelling-orange" />
                <div>
                  <p className="text-white/80">+254 700 123 456</p>
                  <p className="text-white/60 text-sm">Author visits & events</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-storytelling-orange" />
                <div>
                  <p className="text-white/80">Nairobi, Kenya</p>
                  <p className="text-white/60 text-sm">Storymoja Publishers Westlands</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 RedHot Africa. Celebrating African storytelling traditions.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-storytelling-orange text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-storytelling-orange text-sm transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-white/60 hover:text-storytelling-orange text-sm transition-colors">
              Support Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;