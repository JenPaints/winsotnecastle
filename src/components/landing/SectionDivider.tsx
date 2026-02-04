"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      <motion.div
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent w-1/3 blur-sm"
      />
    </div>
  );
}
