"use client";

import React, { useRef } from "react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { ArrowUpRight, Sparkles, Layers, Wifi } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";

export const FeaturedProject = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-150, 150], [10, -10]);
  const rotateY = useTransform(smoothX, [-200, 200], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${useTransform(smoothX, [-200, 200], [0, 100])}% ${useTransform(smoothY, [-150, 150], [0, 100])}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  return (
    <section className="my-16 relative">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-[100%] blur-[100px] pointer-events-none -z-10" />

      <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
        <Sparkles className="text-amber-400" size={13} />
        <span>{t.featured.badge}</span>
      </div>
      <LiquidGlassCard className="p-8 md:p-10 relative overflow-visible">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] text-zinc-300 mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
              <Layers size={12} />
              <span>{t.featured.tag}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 drop-shadow-md">
              CardCraft
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {t.featured.desc}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400 mb-8">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Gyroscope API</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">IndexedDB</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5">Liquid Shader</span>
            </div>
            <a
              href="https://cardcraft-iota.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>{t.featured.btn}</span>
              <motion.div whileHover={{ rotate: 45 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                <ArrowUpRight size={14} className="text-zinc-900 group-hover:text-black" />
              </motion.div>
            </a>
          </div>

          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black/90 flex items-center justify-center p-6 [perspective:1000px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative w-[280px] h-[175px] rounded-2xl border border-white/20 shadow-2xl flex flex-col justify-between p-5 transform-style-3d group overflow-hidden bg-gradient-to-tr from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]"
            >
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none opacity-50 mix-blend-overlay"
                style={{ background: glareBackground }}
              />

              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

              <div className="flex justify-between items-center z-30">
                <div className="w-10 h-8 rounded-md bg-gradient-to-br from-yellow-500/80 to-yellow-600/80 border border-yellow-400/50 flex flex-col justify-evenly px-1 shadow-sm">
                  <div className="w-full h-px bg-yellow-900/30" />
                  <div className="w-full h-px bg-yellow-900/30" />
                  <div className="w-full h-px bg-yellow-900/30" />
                </div>
                <Wifi className="w-6 h-6 text-white/50 rotate-90 opacity-70" />
              </div>

              <div className="z-30 mt-auto">
                <div className="text-sm font-mono tracking-[0.25em] text-zinc-300 drop-shadow-md mb-2">
                  •••• •••• •••• 2026
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-mono text-zinc-400 tracking-wider">
                    ZACHARY HONG
                  </div>
                  <div className="flex relative items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500/80 to-rose-600/80 mix-blend-screen" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/80 to-orange-500/80 mix-blend-screen -ml-3" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_0_0_1px_rgba(255,255,255,0.1)] pointer-events-none z-30" />
            </motion.div>
          </div>
        </div>
      </LiquidGlassCard>
    </section>
  );
};
