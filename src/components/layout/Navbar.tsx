import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experts", href: "#experts" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50 mix-blend-difference"
      >
        <button 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-neutral-900 text-white flex flex-col justify-center px-12 md:px-24"
          >
            <button 
              className="absolute top-8 left-8 w-12 h-12 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            
            <div className="flex flex-col gap-6 lg:gap-8 max-w-4xl mx-auto w-full">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), ease: [0.25, 1, 0.5, 1], duration: 0.8 }}
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-6xl md:text-8xl font-display font-medium text-white hover:text-white/60 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 rounded-full bg-white text-black font-bold text-xl inline-block text-center w-max uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
