"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, FolderCode, BookOpen, Github } from "lucide-react";

export const GlassDock = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "探索", href: "/", icon: Compass },
    { name: "教程", href: "/blog", icon: BookOpen },
    { name: "作品", href: "/projects", icon: FolderCode },
  ];

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-2xl shadow-apple-glass">
        <Link className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white" href="/">
          ZACHARY.
        </Link>
        <div className="h-4 w-px bg-white/10 mx-1" />
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white/15 text-white shadow-inner"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={14} />
              <span>{item.name}</span>
            </Link>
          );
        })}
        <div className="h-4 w-px bg-white/10 mx-1" />
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          aria-label="GitHub"
        >
          <Github size={15} />
        </a>
      </nav>
    </header>
  );
};
