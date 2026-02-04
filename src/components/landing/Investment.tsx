"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Landmark } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    description: "North Bangalore's airport corridor remains the most resilient micro-market in the city."
  },
  {
    icon: ShieldCheck,
    title: "Scarcity Premium",
    description: "Limited land parcels in Hebbal command a long-term rarity premium for owners."
  },
  {
    icon: Landmark,
    title: "Stable Yields",
    description: "Proximity to tech parks ensures a sustained ecosystem of high-profile tenants."
  }
];

export function Investment() {
  return (
    <section className="relative py-20 md:py-28 bg-card/30 overflow-hidden border-b border-primary/5">
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
                Investment Perspective
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              The Logic of{" "}
              <span className="italic font-light text-primary/90">Prestige</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Winstone Castle represents a limited opportunity in Hebbal—an area witnessing unprecedented demand. Scarcity is the ultimate luxury.
            </p>
          </motion.div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 border border-primary/10 bg-background/30 hover:border-primary/30 hover:bg-background/50 transition-all duration-500">
                    <div className="w-12 h-12 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500">
                      <Icon className="text-primary" size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                      {insight.description}
                    </p>
                    
                    {/* Bottom accent */}
                    <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-primary to-primary/0 group-hover:w-full transition-all duration-700" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative p-10 md:p-12 border border-primary/10 bg-background/30 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />
            <div className="relative">
              <p className="italic text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-4xl font-serif">
                "Real estate in North Bangalore is no longer just about square footage; it's about strategic proximity to the city's future economic engine."
              </p>
              <footer className="mt-6 text-[10px] uppercase tracking-wider text-primary/80 font-semibold">
                — Strategic Market Analysis, 2026
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
