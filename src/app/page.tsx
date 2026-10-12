"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { PillarsSection } from "@/components/home/PillarsSection";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      {/* 1. 首页Hero标题 */}
      <Hero />

      {/* 2. 核心探索领域与动态图腾（位于第一屏前置位） */}
      <PillarsSection />

      {/* 3. 精选交互工程展台（CardCraft） */}
      <section className="mt-28 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
          {t.works.title}
        </h2>
        <p className="text-zinc-400 text-sm">
          {t.works.subtitle}
        </p>
      </section>
      <FeaturedProject />
    </div>
  );
}
