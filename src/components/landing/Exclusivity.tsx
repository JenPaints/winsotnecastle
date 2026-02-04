"use client";

import { motion } from "framer-motion";
import { Shield, Home, Leaf, Zap, MapPin, Sparkles } from "lucide-react";

const standardPillars = [
  {
    icon: Shield,
    title: "Uncompromising Privacy",
    description: "Strategic orientation ensuring absolute discretion and acoustic sanctuary.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Curation",
    description: "Tactile perfection with Italian-inspired finishes and handcrafted joinery.",
  },
  {
    icon: Zap,
    title: "Intuitive Intelligence",
    description: "Seamlessly integrated smart infrastructure for effortless environment control.",
  },
  {
    icon: Leaf,
    title: "Ecological Harmony",
    description: "Design optimized for natural cross-ventilation and optimized sunlight.",
  },
  {
    icon: MapPin,
    title: "Iconic Proximity",
    description: "Minutes from the international airport and Bangalore's primary business hubs.",
  },
  {
    icon: Home,
    title: "Structural Excellence",
    description: "Built with monolithic casting and premium grade materials for timeless endurance.",
  }
];

export function Exclusivity() {
  return (
    <section className="py-20 md:py-28 bg-card/50 relative overflow-hidden border-y border-primary/5">
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
                The Gold Standard
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Redefining the{" "}
              <span className="italic font-light text-primary/90">Benchmark</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Meticulously engineered standards of life designed for those who refuse to compromise on the essence of existence.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {standardPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="h-full p-8 border border-primary/10 bg-background/30 hover:border-primary/30 hover:bg-background/50 transition-all duration-500">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider text-primary/40 font-mono whitespace-nowrap mt-1">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
