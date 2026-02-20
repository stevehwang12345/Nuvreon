"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  BarChart3,
  LayoutGrid,
  Users,
  Zap,
  LineChart,
  Target,
  Tag,
  Monitor,
  Cpu,
  Bell,
  Database,
  Box,
  Shield,
  Handshake,
  MapPin,
  Activity,
  Coins,
  MessageSquare,
  Brain,
  ArrowRight,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";
import OptionalImage from "./OptionalImage";

const featureIcons = [
  [TrendingUp, Search, BarChart3, LayoutGrid],
  [Users, Zap, LineChart, Target],
  [Tag, Monitor, Cpu, Bell],
  [Database, Box, Shield, Handshake],
  [MapPin, Activity, Coins, MessageSquare],
];

const serviceStyles = [
  {
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    dot: "bg-blue-400",
    glow: "shadow-blue-500/10",
  },
  {
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    dot: "bg-violet-400",
    glow: "shadow-violet-500/10",
  },
  {
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    dot: "bg-emerald-400",
    glow: "shadow-emerald-500/10",
  },
  {
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    dot: "bg-amber-400",
    glow: "shadow-amber-500/10",
  },
  {
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    dot: "bg-rose-400",
    glow: "shadow-rose-500/10",
  },
];

function BrowserMockup({
  src,
  alt,
  accentDot,
  glowClass,
}: {
  src: string;
  alt: string;
  accentDot: string;
  glowClass: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl ${glowClass}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a2e] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 max-w-xs">
            <div className={`w-1.5 h-1.5 rounded-full ${accentDot}`} />
            <span className="text-[10px] text-white/30 font-mono truncate">
              {alt}
            </span>
          </div>
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/9] bg-[#0a0a1a]">
        <OptionalImage
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
        />
        {/* Bottom fade to blend into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const { lang } = useLang();
  const c = content.services;

  const coreItems = c.items.filter((s) => s.category === "core");
  const sideItems = c.items.filter((s) => s.category === "side");

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-4">
            {c.label[lang]}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {c.title[lang].text}{" "}
            <span className="gradient-text">{c.title[lang].highlight}</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{c.desc[lang]}</p>
        </motion.div>

        {/* Core Products */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-xs tracking-widest mb-6"
          >
            {c.coreLabel[lang]}
          </motion.p>
        </div>

        <div className="space-y-12 mb-24">
          {coreItems.map((service, index) => {
            const style = serviceStyles[index];
            const icons = featureIcons[index];

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative rounded-2xl border ${style.border} bg-gradient-to-b ${style.color} overflow-hidden p-8 md:p-10`}
              >
                <div className="absolute top-4 right-6 text-8xl font-bold text-white/[0.03] select-none">
                  {service.number}
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <span
                      className={`font-mono text-sm ${style.accent} tracking-wider`}
                    >
                      SERVICE {service.number}
                    </span>
                    {service.product && (
                      <>
                        <span className="hidden md:block w-8 h-px bg-border" />
                        <span className="text-sm text-muted font-mono">
                          {t(service.product, lang)}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {service.title[lang]}
                  </h3>
                  <p className="text-muted text-lg mb-8 max-w-3xl">
                    {service.purpose[lang]}
                  </p>

                  {/* Browser mockup screenshot */}
                  <div className="mb-8">
                    <BrowserMockup
                      src={service.image}
                      alt={t(service.product, lang) || service.title[lang]}
                      accentDot={style.dot}
                      glowClass={style.glow}
                    />
                  </div>

                  {/* Features grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {service.features.map((feature, fi) => {
                      const Icon = icons[fi] || Brain;
                      return (
                        <div
                          key={fi}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-background/30 border border-white/5"
                        >
                          <div className={`p-1.5 rounded-md ${style.bg}`}>
                            <Icon size={16} className={style.accent} />
                          </div>
                          <span className="text-sm text-foreground/80">
                            {feature[lang]}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-2 ${style.accent} hover:underline font-medium text-sm transition-colors`}
                    >
                      {content.serviceDetailLabels.learnMore[lang]}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Side Projects */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted font-mono text-xs tracking-widest mb-6"
          >
            {c.sideLabel[lang]}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideItems.map((service, index) => {
            const styleIndex = index + coreItems.length;
            const style = serviceStyles[styleIndex] || serviceStyles[index];
            const icons = featureIcons[styleIndex] || featureIcons[index];

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-xl border border-white/10 bg-surface/30 overflow-hidden p-6`}
              >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-muted/60 tracking-wider">
                      {service.number}
                    </span>
                    {service.product && (
                      <>
                        <span className="w-4 h-px bg-border" />
                        <span className="text-xs text-muted font-mono">
                          {t(service.product, lang)}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {service.title[lang]}
                  </h3>
                  <p className="text-muted text-sm mb-5 line-clamp-2">
                    {service.purpose[lang]}
                  </p>

                  {/* Compact browser mockup */}
                  <div className="mb-5">
                    <BrowserMockup
                      src={service.image}
                      alt={t(service.product, lang) || service.title[lang]}
                      accentDot={style.dot}
                      glowClass=""
                    />
                  </div>

                  {/* Compact features list */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, fi) => {
                      const Icon = icons[fi] || Brain;
                      return (
                        <div
                          key={fi}
                          className="flex items-center gap-2 text-xs text-foreground/60"
                        >
                          <Icon size={12} className="text-muted/50 shrink-0" />
                          <span className="truncate">{feature[lang]}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-muted hover:text-foreground text-xs font-medium transition-colors"
                  >
                    {content.serviceDetailLabels.learnMore[lang]}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
