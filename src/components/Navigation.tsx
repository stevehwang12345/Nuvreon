"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";

export default function Navigation() {
  const { lang, toggleLang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasLogo, setHasLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {hasLogo ? (
            <Image
              src="/images/logo.svg"
              alt="Nuvreon"
              width={120}
              height={28}
              onError={() => setHasLogo(false)}
              className="h-7 w-auto"
            />
          ) : (
            <span className="text-xl font-bold tracking-tight">
              <span className="text-accent">N</span>uvreon
            </span>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {t(link.label, lang)}
            </Link>
          ))}

          <Link
            href={resolveHref("#contact")}
            className="text-sm px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent hover:bg-accent/20 transition-all duration-200"
          >
            {t(content.nav.cta, lang)}
          </Link>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors duration-200 px-2.5 py-1.5 rounded-md border border-border hover:border-accent/30"
          >
            <Globe size={14} />
            {lang === "en" ? "KO" : "EN"}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm text-muted hover:text-foreground px-2 py-1.5 rounded-md border border-border"
          >
            <Globe size={14} />
            {lang === "en" ? "KO" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted hover:text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {content.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={resolveHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-foreground py-2"
                >
                  {t(link.label, lang)}
                </Link>
              ))}
              <Link
                href={resolveHref("#contact")}
                onClick={() => setMobileOpen(false)}
                className="text-sm px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent text-center mt-2"
              >
                {t(content.nav.cta, lang)}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
