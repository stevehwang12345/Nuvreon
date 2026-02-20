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
  },
  {
    color: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

export default function ServicesSection() {
  const { lang } = useLang();
  const c = content.services;

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

        <div className="space-y-8">
          {c.items.map((service, index) => {
            const style = serviceStyles[index];
            const icons = featureIcons[index];

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative rounded-2xl border ${style.border} bg-gradient-to-r ${style.color} overflow-hidden`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image area */}
                  <div className="relative lg:w-72 h-48 lg:h-auto shrink-0">
                    <OptionalImage
                      src={`/images/service-0${index + 1}.jpg`}
                      alt={service.title[lang]}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 lg:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent -z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex-1 relative">
                    <div className="absolute top-4 right-6 text-8xl font-bold text-white/[0.03] select-none">
                      {service.number}
                    </div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
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
                      <p className="text-muted text-lg mb-8">
                        {service.purpose[lang]}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3">
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
