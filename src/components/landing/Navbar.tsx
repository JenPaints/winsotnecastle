"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar({ onOpenForm }: { onOpenForm: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "philosophy", "spaces", "location", "investment", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Spaces", href: "#spaces" },
    { name: "Location", href: "#location" },
    { name: "Investment", href: "#investment" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-xl py-4 border-b border-primary/10"
      >
        <div className="container px-6 mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xl md:text-2xl font-serif tracking-[0.25em] text-white uppercase transition-colors group-hover:text-primary">Winstone</span>
            <span className="text-xl md:text-2xl font-light tracking-[0.25em] text-primary uppercase">Castle</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 relative group py-2 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919535774179"
              className="hidden lg:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm tracking-wider font-medium">+91 95357 74179</span>
            </a>
            
            <button 
              onClick={onOpenForm}
              className="hidden sm:block px-8 py-2.5 bg-primary/10 border border-primary/30 text-primary text-[10px] uppercase tracking-[0.4em] hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-medium"
            >
              Enquire
            </button>
            
            <button 
              className="md:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif tracking-widest text-white uppercase">Winstone</span>
                <span className="text-xl font-light tracking-widest text-primary uppercase">Castle</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-primary p-2">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif tracking-wider text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+919535774179"
                className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors mt-4"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg tracking-wider font-medium">+91 95357 74179</span>
              </motion.a>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.3em] font-medium"
              >
                Enquire Now
              </motion.button>
            </div>

            <div className="mt-auto border-t border-white/5 pt-8 text-white/40 text-[10px] uppercase tracking-widest">
              Hebbal, North Bangalore • Limited Edition Residences
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
