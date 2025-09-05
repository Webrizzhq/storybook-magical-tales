import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";



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
            <NavLink to="/" className="flex items-center gap-5 text-center">
                          <img src="/Redhot_logo_curves_white.png" alt="" className=' w-32' />
                           <img src="/Storymoja_logo_1.png" alt="" className=' w-28' />
                          
                        </NavLink>
          </div>

          <motion.p
            className="text-xl font-semibold text-yellow-500 leading-relaxed"
            variants={fadeInUp}
            custom={0.5}
          >
            Books that burn boring to the ground.
          </motion.p>

          <motion.p
            className="text-yellow-400 leading-relaxed"
            variants={fadeInUp}
            custom={0.6}
          >
           
          Our Redhot Africa books are made with love and heart, and help children imagine, think and learn. Our SHIZU books uncover African's legends and ancient kingdoms. Our SUDEF Wildlife Detectives solve awful crimes against Africa's amazing wildlife. Our REDHOT PICTURE BOOKS are fun, feisty frolics that stimulate imagination and nurture a love of stories. 
          </motion.p>

         
          <motion.p
            className="text-lg font-bold text-yellow-500"
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
                  className="hover:text-white text-yellow-300 transition-colors duration-200 cursor-pointer"
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
            <div className="space-y-4 text-yellow-300">
              <motion.div
                className="flex items-center space-x-3"
                variants={fadeInUp}
                custom={1.2}
              >
                <Mail className="w-5 h-5 text-yellow-300" />
                <span>redhot@storymojaafrica.co.ke</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                variants={fadeInUp}
                custom={1.3}
              >
                <Phone className="w-5 h-5 text-yellow-300" />
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
                  <Icon className="w-6 h-6 cursor-pointer text-yellow-300 hover:text-white" />
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
        <p className="text-xs text-yellow-300">
          © {new Date().getFullYear()} Redhot Africa. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
