import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-main text-submain font-display px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side: Brand + Mission */}
        <div className="space-y-6">
          {/* Brand */}
          <div>
            <h1 className="text-white text-5xl font-pacifico">Redhot Africa</h1>
            <p className="text-white tracking-[0.2em] text-xs font-bold mt-1">
              BOOKS TO LOVE
            </p>
            <p className="text-[#B39B47] italic text-sm font-semibold">
              Storymoja Gold Standard
            </p>
          </div>

          {/* Short punchy tagline */}
          <p className="text-xl font-semibold text-submain leading-relaxed">
            Books that burn boring to the ground.
          </p>

          {/* Mission statement */}
          <p className="text-submain/90 leading-relaxed">
            We publish{" "}
            <span className="font-semibold text-white/80">
              wild, witty, and wonder-packed African stories
            </span>{" "}
            that speak in{" "}
            <span className="font-semibold">English</span> and whisper in{" "}
            <span className="italic">Kiswahili, Shona, Acholi, Igbo</span> and{" "}
            <span className="italic">Ma</span>.  
          </p>

          <p className="text-submain/80 leading-relaxed">
            From <span className="font-semibold">ancient kingdoms</span> to{" "}
            <span className="font-semibold">future tech</span>, from{" "}
            <span className="font-semibold">wildlife detectives</span> to{" "}
            <span className="font-semibold">warrior queens</span> — our books
            are made with love, fire, and heart.
          </p>

          <p className="text-lg font-bold text-submain">
            Bilingual. Bold. Built for Dreamers.
          </p>
        </div>

        {/* Right Side: Links + Contact */}
        <div className="grid sm:grid-cols-2 gap-12">
          {/* Policies */}
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Our Policies</h5>
            <ul className="space-y-2">
              {[
                "FAQs",
                "Terms & Conditions",
                "Safeguarding Policy",
                "Children's Policy",
                "Legal Frameworks",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Contact Us</h5>
            <div className="space-y-4 text-submain/90">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-submain" />
                <span>redhot@storymojaafrica.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-submain" />
                <span>
                  +254 733 838161
                  <br />+254 202 089595
                </span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex space-x-5 mt-6">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <Icon
                  key={i}
                  className="w-6 h-6 cursor-pointer text-submain/80 hover:text-white transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-submain/30 mt-16 pt-6 text-center">
        <p className="text-xs text-submain/70">
          © {new Date().getFullYear()} Redhot Africa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
