import type { Metadata } from "next";
import { GlassDock } from "@/components/ui/GlassDock";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zachary's Apple Blog",
  description: "A high-end personal blog with Apple Liquid Glass aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen relative selection:bg-white/30 selection:text-white">
        <div className="noise-overlay" />
        <div className="ambient-glow" />
        <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32">
          {children}
        </main>
        <GlassDock />
      </body>
    </html>
  );
}
