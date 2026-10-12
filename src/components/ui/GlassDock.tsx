"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, BookOpen, FolderGit2 } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export const GlassDock = () => {
  const pathname = usePathname();
  const { t, locale, setLocale } = useTranslation();

  const navItems = [
    { name: t.nav.explore, href: "/", icon: Compass },
    { name: t.nav.tutorials, href: "/blog", icon: BookOpen },
    { name: t.nav.projects, href: "/projects", icon: FolderGit2 },
  ];

  const getActiveIndex = () => {
    if (pathname === "/") return 0;
    if (pathname.startsWith("/blog")) return 1;
    if (pathname.startsWith("/projects")) return 2;
    return 0;
  };

  const activeIndex = getActiveIndex();
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
      setMounted(true);
    }
  }, [activeIndex, pathname, locale]);

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto relative flex items-center gap-1.5 p-1.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-2xl shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2),0_20px_40px_-15px_rgba(0,0,0,0.8)]">
        <Link className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white hover:opacity-80 transition-opacity" href="/">
          ZACHARY.
        </Link>

        <div className="h-4 w-px bg-white/10 mx-0.5" />

        {/* 主导航项容器 */}
        <div className="flex items-center gap-1 relative">
          {mounted && indicatorStyle.width > 0 && (
            <motion.div
              className="absolute top-0 bottom-0 rounded-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.15) 100%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow:
                  "inset 0 1.5px 1px 0 rgba(255,255,255,0.6), inset 0 0 12px 0 rgba(255,255,255,0.1), 0 4px 16px rgba(0,0,0,0.5)",
              }}
              animate={{
                x: indicatorStyle.left,
                width: indicatorStyle.width,
                scaleX: [1, 1.15, 0.96, 1],
                scaleY: [1, 0.88, 1.04, 1],
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 24,
                mass: 0.65,
              }}
            >
              <div className="absolute inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            </motion.div>
          )}

          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                className={`relative z-10 px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 transition-colors duration-200 ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon size={14} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="h-4 w-px bg-white/10 mx-0.5" />

        {/* 语言切换分段控制器 */}
        <div className="relative flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/10">
          <motion.div
            className="absolute top-0.5 left-0.5 w-[28px] h-[20px] rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 100%)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow:
                "inset 0 1px 0 0 rgba(255,255,255,0.5), 0 2px 6px -1px rgba(0,0,0,0.5)",
            }}
            animate={{
              x: locale === "zh" ? 0 : 28,
            }}
            transition={{
              type: "spring",
              stiffness: 480,
              damping: 30,
              mass: 0.6,
            }}
          />

          <button
            type="button"
            onClick={() => setLocale("zh")}
            className={`relative z-10 w-[28px] h-[20px] flex items-center justify-center text-[10px] font-mono tracking-wider rounded-full transition-colors ${
              locale === "zh" ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            ZH
          </button>

          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`relative z-10 w-[28px] h-[20px] flex items-center justify-center text-[10px] font-mono tracking-wider rounded-full transition-colors ${
              locale === "en" ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            EN
          </button>
        </div>

        <div className="h-4 w-px bg-white/10 mx-0.5" />

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </nav>
    </header>
  );
};
