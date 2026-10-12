"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-zinc-400">
        <Sparkles size={12} className="text-amber-400" />
        <span>{t.hero.badge}</span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
        {t.hero.title}
      </h1>

      <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
        {t.hero.subtitle}
      </p>
    </section>
  );
};
