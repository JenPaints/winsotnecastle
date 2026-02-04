"use client";

import { motion } from "framer-motion";

export function CTA({ onOpenForm }: { onOpenForm: () => void }) {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-b border-primary/5">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-[1px] w-12 bg-primary/40" />
              <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                Final Opportunity
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Your Legacy{" "}
              <span className="italic font-light text-primary/90">Starts Here</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground/90 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the discerning few who call Hebbal's most iconic tower home. A statement of achievement, reserved for those who demand more.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onOpenForm}
                className="group relative px-12 py-5 overflow-hidden bg-primary hover:bg-primary/90 transition-colors duration-300"
              >
                <span className="relative text-[10px] uppercase tracking-[0.4em] font-bold text-primary-foreground">
                  Explore Ownership
                </span>
              </button>
              <button 
                onClick={onOpenForm}
                className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/60 hover:text-primary transition-colors duration-300 px-6 py-5 border border-primary/20 hover:border-primary/40"
              >
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
