"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";
import OptionalImage from "./OptionalImage";

export default function VisionSection() {
  const { lang } = useLang();
  const c = content.vision;

  return (
    <section id="vision" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <OptionalImage
                src="/images/vision.jpg"
                alt="Vision"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Flow diagram overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  {[
                    { en: "Digital", ko: "디지털" },
                    { en: "Adaptive", ko: "적응형" },
                    { en: "Operational", ko: "운영" },
                  ].map((label, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="px-4 py-2 rounded-lg bg-surface/80 border border-border backdrop-blur-sm text-sm font-medium">
                        {label[lang]}
                      </div>
                      {i < 2 && (
                        <ArrowRight size={16} className="text-accent/50" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-mono text-sm tracking-wider mb-4">
              {c.label[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {c.title[lang].text}{" "}
              <span className="gradient-text">{c.title[lang].highlight}</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {c.desc[lang]}
            </p>

            {/* Positioning statement */}
            <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
              <p className="text-foreground/90 leading-relaxed">
                {c.positioning[lang]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
