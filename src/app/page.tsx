"use client";

import React from "react";
import { Hero } from "@/components/home/Hero";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { PillarsSection } from "@/components/home/PillarsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      {/* 1. 首页Hero标题 */}
      <Hero />

      {/* 2. 核心探索领域与动态图腾 */}
      <PillarsSection />

      {/* 3. 精选工程展台 */}
      <FeaturedProject />
    </div>
  );
}

