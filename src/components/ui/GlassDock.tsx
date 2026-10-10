"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, BookOpen, FolderGit2 } from "lucide-react";

export const GlassDock = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "探索", href: "/", icon: Compass },
    { name: "教程", href: "/blog", icon: BookOpen },
    { name: "作品", href: "/projects", icon: FolderGit2 },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1.5 p-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_20px_40px_-15px_rgba(0,0,0,0.7)]">
        <Link
          href="/"
          className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white hover:opacity-80 transition-opacity"
        >
          ZACHARY.
        </Link>

        <div className="h-4 w-px bg-white/10 mx-0.5" />

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 ${
                isActive
                  ? "bg-white/15 text-white font-medium shadow-inner"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {Icon && <Icon size={14} />}
              <span>{item.name}</span>
            </Link>
          );
        })}

        <div className="h-4 w-px bg-white/10 mx-0.5" />

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </nav>
    </header>
  );
};
