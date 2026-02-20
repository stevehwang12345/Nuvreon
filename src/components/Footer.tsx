"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Youtube, Mail } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const c = content.footer;

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {c.rights[lang]}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          {c.links.map((link) => (
            <Link
              key={link.href}
              href={resolveHref(link.href)}
              className="hover:text-foreground transition-colors"
            >
              {t(link.label, lang)}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={c.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-red-400 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a
            href={`mailto:${c.email}`}
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
