"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/context/LanguageContext";
import { Sparkles, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      {/* 头部标题区域 */}
      <section className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles size={12} className="text-amber-400" />
          <span>{t.tutorialsPage.badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.tutorialsPage.title}
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {t.tutorialsPage.subtitle}
        </p>
      </section>

      {/* 教程列表 */}
      <div className="space-y-6">
        {t.tutorialsPage.posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 mb-3">
              <span className="text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readTime} {t.tutorialsPage.readTime}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-3">
              {post.title}
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {post.summary}
            </p>

            <span className="inline-flex items-center text-xs font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
              {t.tutorialsPage.readMore} &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
