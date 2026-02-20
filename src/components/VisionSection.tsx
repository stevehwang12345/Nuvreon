"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

export default function VisionSection() {
  const { lang } = useLang();
  const c = content.vision;

  return (
    <section id="vision" className="relative py-32 px-6">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/-Aod47WJtLg?autoplay=1&mute=1&loop=1&playlist=-Aod47WJtLg"
                title="Nuvreon Vision"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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
