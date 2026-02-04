"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/best-bedroom-furniture-colour-combination.webp",
  "/colour-combinations-for-halls-for-indian-homes-1200x673.webp",
  "/Modular-Kitchen-Layouts-Kitchen-Furniture-Designs_600_900.jpg.webp",
];

export function Philosophy() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-background overflow-hidden border-b border-primary/5">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                The Philosophy
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Destined for the{" "}
              <span className="italic font-light text-primary/90">Discerning Few</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              A celebration of architectural excellence and quiet prestige—a sanctuary where your legacy is honored.
            </p>
          </motion.div>

          {/* Auto-scrolling Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 md:mb-20"
          >
            <div className="relative aspect-[16/9] max-w-5xl mx-auto overflow-hidden border border-primary/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${images[currentImage]}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-1 transition-all duration-500 ${
                      index === currentImage 
                        ? 'w-8 bg-primary' 
                        : 'w-1 bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="border border-primary/10 p-8 h-full hover:border-primary/30 transition-all duration-500 bg-card/30">
                <div className="mb-6">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-6">
                    <span className="text-2xl font-serif text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    Architectural Mastery
                  </h3>
                </div>
                <p className="text-muted-foreground/80 font-light leading-relaxed">
                  Every detail reflects a commitment to timeless design. From grand entrances to meticulously crafted interiors, each element speaks to those who appreciate the finer things.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="border border-primary/10 p-8 h-full hover:border-primary/30 transition-all duration-500 bg-card/30">
                <div className="mb-6">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-6">
                    <span className="text-2xl font-serif text-primary">02</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    Legacy Address
                  </h3>
                </div>
                <p className="text-muted-foreground/80 font-light leading-relaxed">
                  Positioned in Hebbal's most coveted enclave, this is more than a home—it's a statement where sophistication meets serenity, and your family's story continues for generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group"
            >
              <div className="border border-primary/10 p-8 h-full hover:border-primary/30 transition-all duration-500 bg-card/30">
                <div className="mb-6">
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-6">
                    <span className="text-2xl font-serif text-primary">03</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    Curated Excellence
                  </h3>
                </div>
                <p className="text-muted-foreground/80 font-light leading-relaxed">
                  With only a select number of residences, Winstone Castle ensures privacy, exclusivity, and an unparalleled living experience reserved for those who have earned their place among the elite.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
