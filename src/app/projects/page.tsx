"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";
import { Sparkles, ExternalLink, Code2, Layers } from "lucide-react";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen px-6 pt-32 pb-24 max-w-5xl mx-auto">
      {/* 头部区域 */}
      <section className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono uppercase tracking-widest text-zinc-400">
          <Sparkles size={12} className="text-amber-400" />
          <span>{t.projectsPage.badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.projectsPage.title}
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          {t.projectsPage.subtitle}
        </p>
      </section>

      {/* 作品卡片列表 */}
      <div className="space-y-8">
        {t.projectsPage.items.map((project) => (
          <div
            key={project.id}
            className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_40px_-15px_rgba(0,0,0,0.7)] hover:border-white/20 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {project.name}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-500">
                  {project.category}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors shadow-sm self-start md:self-auto"
              >
                <span>{t.projectsPage.visitProject}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-3xl">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-400 border border-white/5 bg-white/[0.02]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
