"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Locale } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionaries)["zh"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("app_locale") as Locale;
      if (saved && (saved === "zh" || saved === "en")) {
        setLocaleState(saved);
      }
    } catch {
      // Ignore in SSR / private browsing
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("app_locale", newLocale);
    } catch {
      // Ignore in SSR
    }
  };

  const value = {
    locale,
    setLocale,
    t: dictionaries[locale] || dictionaries.zh,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: "zh" as Locale,
      setLocale: () => {},
      t: dictionaries.zh,
    };
  }
  return context;
};
