"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ko";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
});

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("nuvreon-lang");
  if (stored === "en" || stored === "ko") return stored;
  // Detect browser locale: default to Korean for Korean users
  const browserLang = navigator.language || "";
  if (browserLang.startsWith("ko")) return "ko";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLang(getInitialLang());
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    if (mounted) {
      localStorage.setItem("nuvreon-lang", lang);
    }
  }, [lang, mounted]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ko" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
