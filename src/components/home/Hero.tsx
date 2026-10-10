"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="space-y-8 max-w-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="flex items-center gap-3"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
          Design Engineer
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.1 }}
        className="text-4xl md:text-5xl font-medium tracking-tight -tracking-[0.03em] leading-tight"
      >
        Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">industrial precision</span>.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 25, delay: 0.2 }}
        className="text-lg text-zinc-400 leading-relaxed"
      >
        Specializing in modern web architectures, fluid physical interactions, and uncompromising attention to detail.
      </motion.p>
    </div>
  );
}
