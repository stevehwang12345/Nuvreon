"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Brain,
  Workflow,
  Server,
  Database,
  Cpu,
  Globe,
  Monitor,
  Shield,
  Check,
  ChevronRight,
} from "lucide-react";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const philosophyIcons = [Layers, Brain, Workflow, Server];
const stackIcons = [Database, Cpu, Globe, Monitor];

function TechnologyContent() {
  const { lang } = useLang();
  const c = content.technology;

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm mb-8"
            >
              <ArrowLeft size={16} />
              {content.serviceDetailLabels.backToHome[lang]}
            </Link>

            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.label[lang]}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {c.title[lang].text}{" "}
              <span className="gradient-text">{c.title[lang].highlight}</span>
            </h1>
            <p className="text-muted text-xl max-w-3xl leading-relaxed">
              {c.desc[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Philosophy */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.principles.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {c.principles.title[lang].text}{" "}
              <span className="gradient-text">
                {c.principles.title[lang].highlight}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {c.principles.items.map((item, i) => {
              const Icon = philosophyIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-xl border border-border bg-surface/30 hover:border-accent/30 hover:bg-surface/60 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">
                        {item.title[lang]}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.desc[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.stack.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {c.stack.title[lang].text}{" "}
              <span className="gradient-text">
                {c.stack.title[lang].highlight}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {c.stack.categories.map((cat, i) => {
              const Icon = stackIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-surface/30 p-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">{cat.title[lang]}</h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <ChevronRight
                          size={14}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Architecture Pipeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.architecture.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {c.architecture.title[lang].text}{" "}
              <span className="gradient-text">
                {c.architecture.title[lang].highlight}
              </span>
            </h2>
            <p className="text-muted text-lg max-w-3xl">
              {c.architecture.desc[lang]}
            </p>
          </motion.div>

          <div className="relative">
            {c.architecture.layers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center shrink-0">
                    <span className="text-accent font-mono text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < c.architecture.layers.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1 pb-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {layer.title[lang]}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {layer.desc[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Security */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.security.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {c.security.title[lang].text}{" "}
              <span className="gradient-text">
                {c.security.title[lang].highlight}
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface/30 p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <Shield size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-lg">
                {c.security.title[lang].text} {c.security.title[lang].highlight}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {c.security.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-muted">{item[lang]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/10 to-accent/5 p-10 text-center"
          >
            <p className="text-xl md:text-2xl font-semibold mb-6">
              {c.ctaText[lang]}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors"
            >
              {content.serviceDetailLabels.ctaButton[lang]}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function TechnologyPage() {
  return (
    <LanguageProvider>
      <TechnologyContent />
    </LanguageProvider>
  );
}
