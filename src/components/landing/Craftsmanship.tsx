"use client";

import { motion } from "framer-motion";

const specs = [
  {
    category: "Structure",
    details: "An RCC-framed monolith designed for eternal resilience and silence within."
  },
  {
    category: "Entrances",
    details: "Teak wood portals, polished to a mirror finish, welcoming you with organic luxury."
  },
  {
    category: "Surfaces",
    details: "Premium vitrified expanses meeting granite-clothed lobbies and staircases."
  },
  {
    category: "Climate",
    details: "Three-track UPVC apertures that invite the breeze while ensuring unobstructed vistas."
  }
];

export function Craftsmanship() {
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
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-primary/10 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                
                {/* Floating accent */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-sm border border-primary/20">
                  <p className="text-sm text-primary/90 font-light italic leading-relaxed">
                    "We build with intent, not just measurements."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-primary/40" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                    Specifications
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                  The Anatomy of{" "}
                  <span className="italic font-light text-primary/90">Excellence</span>
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed">
                  Every material is selected for its tactile resonance and its ability to age with grace.
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-6">
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex gap-4 p-6 border border-primary/10 bg-card/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-500">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary font-serif text-sm group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-serif text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {spec.category}
                        </h3>
                        <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                          {spec.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
