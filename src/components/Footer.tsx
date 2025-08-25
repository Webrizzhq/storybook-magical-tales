import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-main text-submain font-display px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side: Brand + Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
          className="space-y-6"
        >
          <div>
            <motion.h1
              className="text-white text-5xl font-pacifico"
              variants={fadeInUp}
              custom={0.2}
            >
              Redhot Africa
            </motion.h1>
            <motion.p
              className="text-white tracking-[0.2em] text-xs font-bold mt-1"
              variants={fadeInUp}
              custom={0.3}
            >
              BOOKS TO LOVE
            </motion.p>
            <motion.p
              className="text-[#B39B47] italic text-sm font-semibold"
              variants={fadeInUp}
              custom={0.4}
            >
              Storymoja Gold Standard
            </motion.p>
          </div>

          <motion.p
            className="text-xl font-semibold text-submain leading-relaxed"
            variants={fadeInUp}
            custom={0.5}
          >
            Books that burn boring to the ground.
          </motion.p>

          <motion.p
            className="text-submain/90 leading-relaxed"
            variants={fadeInUp}
            custom={0.6}
          >
            We publish{" "}
            <span className="font-semibold text-white/80">
              wild, witty, and wonder-packed African stories
            </span>{" "}
            that speak in{" "}
            <span className="font-semibold">English</span> and whisper in{" "}
            <span className="italic">Kiswahili, Shona, Acholi, Igbo</span> and{" "}
            <span className="italic">Ma</span>.
          </motion.p>

          <motion.p
            className="text-submain/80 leading-relaxed"
            variants={fadeInUp}
            custom={0.7}
          >
            From <span className="font-semibold">ancient kingdoms</span> to{" "}
            <span className="font-semibold">future tech</span>, from{" "}
            <span className="font-semibold">wildlife detectives</span> to{" "}
            <span className="font-semibold">warrior queens</span> — our books
            are made with love, fire, and heart.
          </motion.p>

          <motion.p
            className="text-lg font-bold text-submain"
            variants={fadeInUp}
            custom={0.8}
          >
            Bilingual. Bold. Built for Dreamers.
          </motion.p>
        </motion.div>

        {/* Right Side: Links + Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="grid sm:grid-cols-2 gap-12"
        >
          {/* Policies */}
          <div>
            <motion.h5
              className="text-lg font-bold text-white mb-4"
              variants={fadeInUp}
              custom={1.1}
            >
              Our Policies
            </motion.h5>
            <ul className="space-y-2">
              {[
                "FAQs",
                "Terms & Conditions",
                "Safeguarding Policy",
                "Children's Policy",
                "Legal Frameworks",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                  variants={fadeInUp}
                  custom={1.2 + i * 0.1}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <motion.h5
              className="text-lg font-bold text-white mb-4"
              variants={fadeInUp}
              custom={1.1}
            >
              Contact Us
            </motion.h5>
            <div className="space-y-4 text-submain/90">
              <motion.div
                className="flex items-center space-x-3"
                variants={fadeInUp}
                custom={1.2}
              >
                <Mail className="w-5 h-5 text-submain" />
                <span>redhot@storymojaafrica.co.ke</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={fadeInUp}
                custom={1.3}
              >
                <Phone className="w-5 h-5 text-submain" />
                <span>
                  +254 733 838161
                  <br />+254 202 089595
                </span>
              </motion.div>
            </div>

            {/* Social icons */}
            <motion.div
              className="flex space-x-5 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 cursor-pointer text-submain/80 hover:text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-submain/30 mt-16 pt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <p className="text-xs text-submain/70">
          © {new Date().getFullYear()} Redhot Africa. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
