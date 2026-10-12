"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Locale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof dictionaries.zh;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("preferred-locale") as Locale;
    if (saved && (saved === "zh" || saved === "en")) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("preferred-locale", newLocale);
  };

  const t = dictionaries[locale] || dictionaries.zh;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {/* 
        To avoid hydration errors from text mismatch between SSR (always "zh") and Client (maybe "en"),
        we can hide the children until mounted. However, we MUST wrap children inside the Provider 
        so that context hooks don't throw. 
      */}
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // 降级保护，避免服务端首屏或外部挂载时抛错崩溃
    return {
      locale: "zh" as Locale,
      setLocale: () => {},
      t: dictionaries.zh,
    };
  }
  return context;
};
