"use client";

import { motion } from "framer-motion";

const moments = [
  {
    title: "The Art of Arrival",
    description: "A secure sanctuary where every home-coming feels like a prestigious event.",
  },
  {
    title: "Light & Air",
    description: "Cross-ventilation and natural light that breathes life into your day.",
  },
  {
    title: "Pure Foundations",
    description: "Branded excellence in every fixture, ensuring a legacy of quality.",
  },
  {
    title: "Elevated Service",
    description: "From lift access to dedicated management, every detail is elevated.",
  },
];

export function Amenities() {
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
            className="text-center mb-16 md:mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                The Experience
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              A Symphony of{" "}
              <span className="italic font-light text-primary/90">Comfort</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Amenities at Winstone Castle are not a checklist, but a sequence of orchestrated moments designed to elevate the everyday.
            </p>
          </motion.div>

          {/* Moments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {moments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 border border-primary/10 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-500">
                  <span className="text-[10px] text-primary/60 font-mono mb-6 block tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-serif text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                    {moment.description}
                  </p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
