"use client";

import { motion } from "framer-motion";
import { Code, Brain, Building2, User } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";
import OptionalImage from "./OptionalImage";

const icons = [Code, Brain, Building2];

export default function AboutSection() {
  const { lang } = useLang();
  const c = content.about;

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {c.title[lang].line1}
              <br />
              <span className="gradient-text">{c.title[lang].highlight}</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {c.desc1[lang]}
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              {c.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground text-lg font-medium">
                    {point[lang]}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Optional about image */}
            <div className="relative rounded-xl overflow-hidden aspect-video border border-border">
              <OptionalImage
                src="/images/about.jpg"
                alt="Nuvreon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface to-background" />
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid gap-4">
            {c.cards.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t(item.title, lang)}</h3>
                    <p className="text-sm text-muted">{t(item.desc, lang)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-8 text-center">
            {c.teamLabel[lang]}
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {c.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center group"
              >
                <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-accent/50 transition-colors">
                  <OptionalImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-surface/60 flex items-center justify-center">
                    <User size={32} className="text-muted" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted mt-1">{member.role[lang]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
