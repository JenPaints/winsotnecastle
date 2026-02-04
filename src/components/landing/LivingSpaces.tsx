"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LivingSpaces() {
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
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-primary/40" />
                  <span className="text-[9px] uppercase tracking-[0.5em] text-primary/80 font-semibold">
                    Living Spaces
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                  Where{" "}
                  <span className="italic font-light text-primary/90">Light</span>
                  <br />
                  Meets Form
                </h2>

                <p className="text-lg md:text-xl text-muted-foreground/90 font-light leading-relaxed">
                  Step into interiors defined by the gentle interplay of morning light and expansive flow.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-primary/20" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Natural Harmony</h3>
                    <p className="text-muted-foreground/80 font-light leading-relaxed">
                      Our residences are canvases of stone, wood, and air—volumes that invite the breeze to dance through every room.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-primary/20" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Sensory Connection</h3>
                    <p className="text-muted-foreground/80 font-light leading-relaxed">
                      Ensuring pure ventilation and a sensory connection to the outdoors, where premium surfaces meet natural materials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-primary/20" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Timeless Design</h3>
                    <p className="text-muted-foreground/80 font-light leading-relaxed">
                      Every detail crafted to create spaces that transcend trends, offering enduring elegance and comfort.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
              />
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-primary/10 group">
                <div className="absolute inset-0 bg-[url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7e28ff35-03ce-4c83-b285-18159c550bb5/page5_image1-1769515890829.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-[3s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                
                {/* Floating accent */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-sm border border-primary/20">
                  <p className="text-sm text-primary/90 font-light italic leading-relaxed">
                    "The cool touch of premium surfaces meets the warmth of natural materials."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
