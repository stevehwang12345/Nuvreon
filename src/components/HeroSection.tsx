"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";
import ParticleBackground from "./ParticleBackground";

const brandName = "Nuvreon";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const { lang } = useLang();
  const c = content.hero;
  const h = c.headline[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[128px]" />
      </div>

      {/* Particle burst animation */}
      <ParticleBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono tracking-wider mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {c.tag[lang]}
        </motion.div>

        {/* Animated brand name */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          {brandName.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={i === 0 ? "text-accent inline-block" : "inline-block"}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
        >
          {h.line2}{" "}
          <span className="gradient-text">{h.highlight2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {c.subtext[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-200"
          >
            {c.cta1[lang]}
            <ChevronRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border rounded-lg text-foreground hover:border-accent/50 hover:bg-surface transition-all duration-200"
          >
            {c.cta2[lang]}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pointer-events-auto cursor-pointer hover:text-accent transition-colors"
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.button>
      </motion.div>
    </section>
  );
}
