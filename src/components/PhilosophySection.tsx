"use client";

import { motion } from "framer-motion";
import { Layers, Brain, Workflow, Server } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

const icons = [Layers, Brain, Workflow, Server];

export default function PhilosophySection() {
  const { lang } = useLang();
  const c = content.philosophy;

  return (
    <section id="philosophy" className="relative py-32 px-6">
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {c.principles.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
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
  );
}
