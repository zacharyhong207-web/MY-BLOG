"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Locale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof dictionaries.zh;
}

const defaultContextValue: LanguageContextType = {
  locale: "zh",
  setLocale: () => {},
  t: dictionaries.zh,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred-locale") as Locale;
      if (saved && (saved === "zh" || saved === "en")) {
        setLocale(saved);
      }
    } catch {
      // Ignore localStorage errors in SSR / private browsing
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem("preferred-locale", newLocale);
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = dictionaries[locale] || dictionaries.zh;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // 降级保护：在 SSR、测试或静态构建阶段如果 context 暂时为 undefined，默认返回中文词典，绝不 throw Error
    return defaultContextValue;
  }
  return context;
};
