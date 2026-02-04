"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LuxuryQuoteProps {
  text: string;
  className?: string;
  motionProps?: any;
}

export function LuxuryQuote({ text, className, motionProps }: LuxuryQuoteProps) {
  return (
    <motion.div 
      {...motionProps}
      className={cn(
        "bg-[#0a1525] border border-primary/20 p-8 md:p-10 max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20",
        className
      )}
    >
      <div className="relative">
        <span className="text-primary text-2xl absolute -top-4 -left-2 opacity-80">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 18L5.33333 0H10.6667L8 18H0ZM13.3333 18L18.6667 0H24L21.3333 18H13.3333Z" fill="currentColor"/>
          </svg>
        </span>
        <p className="text-white font-serif italic text-lg md:text-xl leading-relaxed pl-4">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
