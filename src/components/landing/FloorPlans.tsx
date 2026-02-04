"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Layers, Box } from "lucide-react";

const floorPlans = [
  {
    id: "2d",
    title: "Master Layout",
    subtitle: "2D Technical Perspective",
    icon: Layers,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/page8_image1-1769757434217.jpg",
    description: "A meticulously engineered layout maximizing every square inch of your residence.",
    features: ["Super Built Up: 902.037 SFT", "3 Bedrooms", "Spacious Living & Dining", "Optimized Ventilation"]
  },
  {
    id: "3d-isometric",
    title: "Spatial Experience",
    subtitle: "3D Isometric View",
    icon: Box,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/page9_image2-1769757434489.jpg",
    description: "Visualize the volume and atmosphere of your future home with depth and dimension.",
    features: ["High Ceilings", "Luxury Finishes", "Open Plan Concept", "Natural Light Flow"]
  },
  {
    id: "3d-perspective",
    title: "Elite Perspective",
    subtitle: "3D Elevation View",
    icon: Maximize2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/page9_image1-1769757821143.jpg",
    description: "Architectural grandeur showcasing sophisticated spatial distribution of elite units.",
    features: ["Architectural Depth", "Fluid Spatial Design", "Premium Layout", "Enhanced Aesthetics"]
  }
];

export function FloorPlans() {
  const [activePlan, setActivePlan] = useState(floorPlans[0]);

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
                Architectural Vision
              </span>
              <div className="h-[1px] w-12 bg-primary/40" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              Exquisite{" "}
              <span className="italic font-light text-primary/90">Floor</span>{" "}
              Layouts
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed max-w-3xl mx-auto">
              Crafted with precision and a deep understanding of luxury living, offering the perfect balance of grand spaces and private sanctuaries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Plan Selector */}
            <div className="lg:col-span-4 space-y-4">
              {floorPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <motion.button
                    key={plan.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setActivePlan(plan)}
                    className={`group relative w-full flex items-center gap-5 p-6 transition-all duration-500 text-left border ${
                      activePlan.id === plan.id 
                        ? "bg-background/50 border-primary/30" 
                        : "bg-background/20 border-primary/10 hover:border-primary/20 hover:bg-background/30"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center border transition-all duration-500 ${
                      activePlan.id === plan.id 
                        ? "border-primary/40 bg-primary/10 text-primary" 
                        : "border-primary/20 text-primary/60 group-hover:border-primary/30"
                    }`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-serif transition-colors duration-500 ${
                        activePlan.id === plan.id ? "text-white" : "text-white/70 group-hover:text-white/90"
                      }`}>
                        {plan.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mt-1">
                        {plan.subtitle}
                      </p>
                    </div>
                    {activePlan.id === plan.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* Active Plan Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="pt-6 border-t border-primary/10 space-y-6"
                >
                  <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                    {activePlan.description}
                  </p>
                  <div className="space-y-3">
                    {activePlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className="h-[1px] w-4 bg-primary/30 group-hover:w-6 transition-all duration-300" />
                        <span className="text-sm text-white/70 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Image Display */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] bg-background/30 border border-primary/10 p-6 md:p-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePlan.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activePlan.image}
                      alt={activePlan.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/30" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-primary/30" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-primary/30" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
