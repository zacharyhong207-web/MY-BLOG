import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { GlassDock } from "@/components/ui/GlassDock";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zachary Bo | Tech & Design Engineering",
  description: "Personal engineering lab, Apple ecosystem workflows, and software experiments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen selection:bg-white/20 selection:text-white`}>
        <LanguageProvider>
          <div className="noise-overlay" />
          <div className="ambient-glow" />
          <GlassDock />
          <main className="relative z-0">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
