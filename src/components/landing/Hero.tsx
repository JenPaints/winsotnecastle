"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero({ onOpenForm }: { onOpenForm: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    const wavePaths = [
      "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      "M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,240C672,245,768,203,864,170.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ];

    const landPaths = [
      "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      "M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,181.3C672,192,768,224,864,245.3C960,267,1056,277,1152,266.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
      "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ];

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background isolate">
      {/* Dynamic Brochure-inspired background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,oklch(0.35_0.15_220)_0%,transparent_60%)] opacity-20 blur-[120px]" />
        
          {/* Shadow Background Image (Building Render) */}
          <motion.div style={{ y: yParallax }} className="absolute inset-0 opacity-25 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/page7_image2-1769516484732.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          </motion.div>

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

        {/* Multi-layered Wave elements from brochure */}
        <div className="absolute bottom-0 left-0 w-full h-[35vh]">
          {/* Main Wave (Teal/Cyan) */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-0 w-full z-0"
          >
            <svg className="w-full h-[25vh]" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#4facfe" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ d: wavePaths[0] }}
                animate={{ d: wavePaths }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                fill="url(#wave-grad)" 
              />
            </svg>
          </motion.div>

          {/* Secondary Wave (Yellow Land Frame) */}
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
            className="absolute bottom-0 w-full z-10"
          >
            <svg className="w-full h-[22vh]" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <motion.path 
                initial={{ d: landPaths[0] }}
                animate={{ d: landPaths }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                fill="var(--primary)" 
              />
            </svg>
          </motion.div>
        </div>
      </div>

        <motion.div style={{ opacity: opacityHero, scale: scaleHero }} className="container relative z-50 px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center mb-10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="h-[1px] bg-primary mb-8"
              />
              <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-bold">
                Winstone Projects
              </span>
            </div>
              
            <h1 className="mb-8 text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.85] tracking-tighter text-white max-w-6xl">
              <span className="block">Winstone</span>
              <span className="italic font-light text-primary/90 block">Castle.</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              className="mb-16 text-base md:text-lg font-light text-white italic tracking-[0.2em] max-w-2xl leading-relaxed opacity-80"
            >
              "Crafting a legacy of luxury, where every detail is a masterpiece of pure living."
            </motion.p>
    
            <div className="w-full flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenForm}
                className="group relative px-16 py-6 overflow-hidden z-50 bg-background/20 backdrop-blur-xl border border-primary/30"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold text-white group-hover:text-primary-foreground transition-colors duration-500">
                  Explore Leadership
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>


    </section>
  );
}
