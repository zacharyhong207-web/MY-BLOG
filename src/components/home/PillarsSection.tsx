"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTranslation } from "@/context/LanguageContext";
import { Sparkles, Terminal, Cpu, ShieldCheck, Play, Camera } from "lucide-react";

// 可交互 macOS 终端图腾
const InteractiveTerminal = ({ cmd, status }: { cmd: string; status: string }) => {
  const [logs, setLogs] = useState<string[]>([
    "$ " + cmd,
    "> Eligibility daemon checked: OK",
  ]);
  const [isInjecting, setIsInjecting] = useState(false);

  const handleExecute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInjecting) return;
    setIsInjecting(true);
    setLogs((prev) => [...prev.slice(-2), "> Overriding MobileGestalt cache..."]);
    setTimeout(() => {
      setLogs((prev) => [...prev.slice(-2), "> Apple Intelligence: UNLOCKED [M4]"]);
      setIsInjecting(false);
    }, 450);
  };

  return (
    <div
      onClick={handleExecute}
      className="relative w-full h-52 rounded-2xl bg-black/60 border border-white/10 p-4 flex flex-col justify-between overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] cursor-pointer group-hover:border-white/25 transition-all"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-40" />

      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-[10px] font-mono text-zinc-500 ml-2">daemon.sh — zsh</span>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleExecute}
          className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/20 transition-colors"
        >
          <Play size={8} className={isInjecting ? "animate-spin" : ""} />
          <span>{isInjecting ? "PATCHING" : "EXEC"}</span>
        </motion.button>
      </div>

      <div className="font-mono text-[11px] space-y-1 relative z-10 py-1">
        {logs.map((log, i) => (
          <p
            key={i}
            className={
              log.includes("UNLOCKED")
                ? "text-amber-300 font-semibold"
                : log.startsWith("$")
                ? "text-zinc-500"
                : "text-zinc-300"
            }
          >
            {log}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-2 relative z-10">
        <span>{status}</span>
        <span className="text-emerald-400/90 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE KERNEL
        </span>
      </div>
    </div>
  );
};

// 可交互光学镜头与快门曝光动效
const InteractiveLens = ({ status }: { status: string }) => {
  const [shutterFlash, setShutterFlash] = useState(false);
  const [fStop, setFStop] = useState(1.4);

  const triggerShutter = () => {
    setShutterFlash(true);
    setFStop((prev) => (prev === 1.4 ? 1.2 : 1.4));
    setTimeout(() => setShutterFlash(false), 220);
  };

  return (
    <div
      onClick={triggerShutter}
      className="relative w-full h-52 rounded-2xl bg-black/60 border border-white/10 p-4 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.15)] cursor-pointer group-hover:border-white/25 transition-all"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

      {shutterFlash && (
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-white z-30 pointer-events-none"
        />
      )}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute w-40 h-40 rounded-full border border-dashed border-white/20 flex items-center justify-center pointer-events-none"
      >
        <div className="w-32 h-32 rounded-full border border-white/10" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute w-28 h-28 rounded-full border border-white/15 pointer-events-none"
      />

      <motion.div
        animate={{ scale: shutterFlash ? 0.88 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative z-10 w-14 h-14 rounded-2xl border border-amber-400/40 bg-amber-400/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_24px_rgba(251,191,36,0.18)]"
      >
        <Cpu className="text-amber-300" size={24} />
      </motion.div>

      <div className="absolute inset-x-8 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <div className="absolute inset-y-8 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span>{status}</span>
        <span className="text-zinc-400 flex items-center gap-1">
          <Camera size={10} />
          f/{fStop} SHUTTER
        </span>
      </div>
    </div>
  );
};

// 带有光标跟随高光与按压物理形变的卡片容器
const TactileCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_40px_-15px_rgba(0,0,0,0.7)] hover:border-white/20 transition-all duration-300 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(255,255,255,0.08), transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const PillarsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-16 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles className="text-amber-400" size={12} />
          <span>{t.pillars.badge}</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          {t.pillars.title}
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
          {t.pillars.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TactileCard>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/90 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                {t.pillars.system.tag}
              </span>
              <Terminal className="text-zinc-500 group-hover:text-white transition-colors" size={16} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {t.pillars.system.title}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
              {t.pillars.system.desc}
            </p>
            <p className="text-[11px] font-mono text-zinc-500 mb-6 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              {t.pillars.system.hint}
            </p>
          </div>
          <InteractiveTerminal cmd={t.pillars.system.cmd} status={t.pillars.system.status} />
        </TactileCard>

        <TactileCard>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                {t.pillars.hardware.tag}
              </span>
              <Cpu className="text-zinc-500 group-hover:text-white transition-colors" size={16} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {t.pillars.hardware.title}
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
              {t.pillars.hardware.desc}
            </p>
            <p className="text-[11px] font-mono text-zinc-500 mb-6 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t.pillars.hardware.hint}
            </p>
          </div>
          <InteractiveLens status={t.pillars.hardware.status} />
        </TactileCard>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="relative p-7 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.01] backdrop-blur-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            <ShieldCheck className="text-zinc-300" size={12} />
            <span>CRAFTSMANSHIP</span>
          </div>
          <h4 className="text-base font-bold text-white">
            {t.pillars.manifesto.title}
          </h4>
          <p className="text-zinc-400 text-xs md:text-sm max-w-2xl leading-relaxed">
            {t.pillars.manifesto.desc}
          </p>
        </div>
        <div className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 shrink-0">
          {t.pillars.manifesto.badge}
        </div>
      </motion.div>
    </section>
  );
};
