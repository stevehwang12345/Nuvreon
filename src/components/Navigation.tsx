"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";

export default function Navigation() {
  const { lang, toggleLang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hasLogo, setHasLogo] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  // Find the services link with children
  const servicesLink = content.nav.links.find(
    (l) => "children" in l && l.children
  );
  const servicesChildren = servicesLink && "children" in servicesLink ? servicesLink.children : null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => {
            const hasChildren = "children" in link && link.children;

            if (hasChildren) {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors duration-200"
                  >
                    {t(link.label, lang)}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && servicesChildren && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="w-72 rounded-xl border border-border bg-surface/95 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden">
                          {/* All Services link */}
                          <Link
                            href={resolveHref(link.href)}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-sm text-muted hover:text-foreground hover:bg-white/5 transition-colors border-b border-border"
                          >
                            <span className="font-medium">
                              {lang === "en" ? "All Services" : "전체 서비스"}
                            </span>
                            <ChevronRight size={14} />
                          </Link>

                          {/* Core Products */}
                          <div className="px-4 pt-3 pb-1">
                            <p className="text-[10px] font-mono text-accent/70 tracking-widest uppercase">
                              {t(servicesChildren.core.label, lang)}
                            </p>
                          </div>
                          {servicesChildren.core.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex flex-col gap-0.5 px-4 py-2.5 hover:bg-white/5 transition-colors"
                            >
                              <span className="text-sm font-medium text-foreground">
                                {t(item.label, lang)}
                              </span>
                              <span className="text-xs text-muted">
                                {t(item.desc, lang)}
                              </span>
                            </Link>
                          ))}

                          {/* Side Projects */}
                          <div className="px-4 pt-3 pb-1 border-t border-border mt-1">
                            <p className="text-[10px] font-mono text-muted/50 tracking-widest uppercase">
                              {t(servicesChildren.side.label, lang)}
                            </p>
                          </div>
                          {servicesChildren.side.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex flex-col gap-0.5 px-4 py-2 hover:bg-white/5 transition-colors"
                            >
                              <span className="text-sm text-foreground/70">
                                {t(item.label, lang)}
                              </span>
                              <span className="text-[11px] text-muted/60">
                                {t(item.desc, lang)}
                              </span>
                            </Link>
                          ))}
                          <div className="h-2" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={resolveHref(link.href)}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {t(link.label, lang)}
              </Link>
            );
          })}

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

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {content.nav.links.map((link) => {
                const hasChildren = "children" in link && link.children;

                if (hasChildren && servicesChildren) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full text-sm text-muted hover:text-foreground py-2.5"
                      >
                        {t(link.label, lang)}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 border-l border-border ml-2">
                              {/* All Services */}
                              <Link
                                href={resolveHref(link.href)}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-muted hover:text-foreground py-2"
                              >
                                {lang === "en" ? "All Services" : "전체 서비스"}
                              </Link>

                              {/* Core */}
                              <p className="text-[10px] font-mono text-accent/70 tracking-widest uppercase mt-2 mb-1">
                                {t(servicesChildren.core.label, lang)}
                              </p>
                              {servicesChildren.core.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-foreground/80 hover:text-foreground py-1.5"
                                >
                                  {t(item.label, lang)}
                                </Link>
                              ))}

                              {/* Side */}
                              <p className="text-[10px] font-mono text-muted/50 tracking-widest uppercase mt-3 mb-1">
                                {t(servicesChildren.side.label, lang)}
                              </p>
                              {servicesChildren.side.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-sm text-foreground/60 hover:text-foreground py-1.5"
                                >
                                  {t(item.label, lang)}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={resolveHref(link.href)}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm text-muted hover:text-foreground py-2.5"
                  >
                    {t(link.label, lang)}
                  </Link>
                );
              })}

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
