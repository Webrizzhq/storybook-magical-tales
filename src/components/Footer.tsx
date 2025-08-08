import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-main text-submain font-display py-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div  className="flex flex-col items-center text-center">
          {/* Top line: Redhot Africa */}
          <span className="text-white text-4xl font-normal font-pacifico leading-tight">
            Redhot Africa
          </span>
        
          {/* Middle line: BOOKS TO LOVE */}
          <span className="text-white tracking-[0.2em] text-sm font-bold mt-[-4px]">
            BOOKS TO LOVE
          </span>
        
          {/* Bottom line: Storymoja Gold Standard */}
          <span className="text-[#B39B47] italic text-sm font-semibold mt-[-2px]">
            Storymoja Gold Standard
          </span>
        </div>
        

        {/* Tagline */}
        <p className="text-lg leading-relaxed">
          <span className="font-semibold text-submain">Books that burn boring to the ground.</span>
          <br />
          We don’t do dull. We publish <span className="text-white/50 font-semibold">wild, witty, and wonder-packed African stories</span> for kids who crave more than textbooks and tired tales.
        </p>

        <p className="leading-relaxed">
          Our books shout in <span className="font-semibold">English</span> and whisper in <span className="italic">Kiswahili, Shona, Acholi, Igbo</span> and <span className="italic">Ma</span>.
          <br />
          They leap between <span className="font-semibold">ancient kingdoms</span> and <span className="font-semibold">future tech</span>. From wildlife detectives to warrior queens and myth-busting rebels…
        </p>

        <p className="text-xl font-bold text-submain">Bilingual. Bold. Built for Dreamers.</p>

        <p className="leading-relaxed text-submain/90">
          From picture books to epic adventures, every title we create is made with <span className="font-semibold">love, fire</span>, and a whole lot of heart.
        </p>

        {/* Divider */}
        <div className="border-t border-submain/30 pt-10" />

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 text-left text-submain/90">
          {/* Policies */}
          <div className="space-y-3 md:ml-16">
            <h5 className="text-lg font-bold text-white mb-2">Our Policies</h5>
            <p className="hover:text-white cursor-pointer transition">FAQs</p>
            <p className="hover:text-white cursor-pointer transition">Terms & Conditions</p>
            <p className="hover:text-white cursor-pointer transition">Safeguarding Policy</p>
            <p className="hover:text-white cursor-pointer transition">Children's Policy</p>
            <p className="hover:text-white cursor-pointer transition">Legal Frameworks</p>
          </div>

          {/* Contact */}
          <div className="space-y-5 md:mr-16">
            <h5 className="text-lg font-bold text-white mb-2">Contact Us</h5>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-submain" />
              <span>redhot@storymojaafrica.co.ke</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-submain" />
              <span>
                +254 733 838161
                <br />
                +254 202 089595
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
