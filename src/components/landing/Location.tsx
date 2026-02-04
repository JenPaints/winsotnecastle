"use client";

import { motion } from "framer-motion";
import { Plane, ShoppingBag } from "lucide-react";

const locationHighlights = [
  {
    category: "Connectivity",
    icon: Plane,
    details: ["Hebbal Flyover (2 mins)", "NH 44 Access", "Manyata Tech Park (5 mins)"]
  },
  {
    category: "Lifestyle",
    icon: ShoppingBag,
    details: ["Patels Inn", "Premium Fitness Centers", "Luxury Retail Hubs"]
  }
];

export function Location() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Map Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-primary/10 group bg-white">
                <div className="absolute inset-0 p-4 bg-[url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/ChatGPT-Image-Jan-30-2026-01_08_20-PM-1769758732304.png?width=8000&height=8000&resize=contain')] bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                
                {/* Location Label - Repositioned to top */}
                <div className="absolute top-4 left-8 right-8 p-5 bg-background/90 backdrop-blur-sm border border-primary/20">
                  <span className="text-primary text-[9px] uppercase tracking-[0.4em] mb-2 block font-semibold">
                    The Setting
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                    Hebbal,{" "}
                    <span className="text-primary/90 italic font-light">North Bangalore</span>
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-primary/40" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                    Location Narrative
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                  Connected to{" "}
                  <span className="italic font-light text-primary/90">the Pulse</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed mb-6">
                  Hebbal is more than a location; it is the gateway to Bangalore's future.
                </p>
                
                <p className="text-muted-foreground/80 font-light leading-relaxed">
                  Winstone Castle offers the rare luxury of being minutes away from everything that matters, while remaining a private sanctuary above the city's rhythmic movement.
                </p>
              </div>

              {/* Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {locationHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                          <Icon size={18} className="text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-primary text-[10px] uppercase tracking-wider font-semibold">
                          {highlight.category}
                        </span>
                      </div>
                      <ul className="space-y-3 pl-13">
                        {highlight.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground/70 font-light flex items-center gap-2 group-hover:text-muted-foreground/90 transition-colors">
                            <div className="w-1 h-1 rounded-full bg-primary/30" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1.2, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
