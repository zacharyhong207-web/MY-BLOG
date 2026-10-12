import type { Metadata } from "next";
import { GlassDock } from "@/components/ui/GlassDock";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zachary Bo | Tech & Engineering Blog",
  description: "Personal engineering blog & interactive projects showcase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="dark bg-black">
      <body className="min-h-screen bg-black text-white antialiased selection:bg-white/30 selection:text-white relative">
        <LanguageProvider>
          <div className="noise-overlay" />
          <div className="ambient-glow" />
          <GlassDock />
          <main className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
