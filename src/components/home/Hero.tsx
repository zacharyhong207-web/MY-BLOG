"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="space-y-6 pt-12 md:pt-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-zinc-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>{t.hero.badge}</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.1]">
        {t.hero.title}
      </h1>
      <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
        {t.hero.subtitle}
      </p>
    </section>
  );
};
