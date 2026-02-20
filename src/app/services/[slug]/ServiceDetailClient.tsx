"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Layers, Sparkles } from "lucide-react";
import { LanguageProvider, useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import OptionalImage from "@/components/OptionalImage";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const serviceAccents = [
  {
    gradient: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    glow: "shadow-blue-500/10",
  },
  {
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    glow: "shadow-violet-500/10",
  },
  {
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "shadow-emerald-500/10",
  },
  {
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    glow: "shadow-amber-500/10",
  },
  {
    gradient: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/30",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    glow: "shadow-rose-500/10",
  },
];

function ServiceDetailContent({ slug }: { slug: string }) {
  const { lang } = useLang();
  const labels = content.serviceDetailLabels;

  const serviceIndex = content.services.items.findIndex(
    (p) => p.slug === slug
  );

  if (serviceIndex === -1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/" className="text-accent hover:underline">
            {labels.backToHome[lang]}
          </Link>
        </div>
      </div>
    );
  }

  const service = content.services.items[serviceIndex];
  const detail =
    content.serviceDetails[slug as keyof typeof content.serviceDetails];
  const style = serviceAccents[serviceIndex];

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm mb-8"
            >
              <ArrowLeft size={16} />
              {labels.backToHome[lang]}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span
                className={`font-mono text-sm ${style.accent} tracking-wider`}
              >
                SERVICE {service.number}
              </span>
              {service.product && (
                <>
                  <span className="w-8 h-px bg-border" />
                  <span className="text-sm text-muted font-mono">
                    {t(service.product, lang)}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.title[lang]}
            </h1>
            <p className="text-muted text-xl max-w-3xl leading-relaxed">
              {detail.heroDesc[lang]}
            </p>
          </motion.div>
        </div>

        {/* Hero image - Browser mockup */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl ${style.glow}`}>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a2e] border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-3">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 max-w-xs">
                  <div className={`w-1.5 h-1.5 rounded-full ${style.accent.replace('text-', 'bg-')}`} />
                  <span className="text-[10px] text-white/30 font-mono truncate">
                    {t(service.product, lang) || service.title[lang]}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/9] bg-[#0a0a1a]">
              <OptionalImage
                src={service.image}
                alt={service.title[lang]}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={`font-mono text-sm ${style.accent} tracking-wider mb-4`}>
              {labels.overview[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {labels.overviewTitle[lang]}
            </h2>
            <div
              className={`rounded-2xl border ${style.border} bg-gradient-to-r ${style.gradient} p-8 md:p-10`}
            >
              <p className="text-foreground/90 text-lg leading-relaxed">
                {detail.overview[lang]}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Technology Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className={`font-mono text-sm ${style.accent} tracking-wider mb-4`}>
              {labels.tech[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {labels.techTitle[lang].text}{" "}
              <span className="gradient-text">
                {labels.techTitle[lang].highlight}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {detail.techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border ${style.border} bg-surface/50 p-6 hover:bg-surface/80 transition-colors`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${style.bg}`}>
                    <Layers size={18} className={style.accent} />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {tech.title[lang]}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {tech.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Capabilities */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className={`font-mono text-sm ${style.accent} tracking-wider mb-4`}>
              {labels.capabilities[lang]}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {labels.capabilitiesTitle[lang].text}{" "}
              <span className="gradient-text">
                {labels.capabilitiesTitle[lang].highlight}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detail.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-white/5 bg-background/50 p-6 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-1.5 rounded-md ${style.bg}`}>
                    <Sparkles size={16} className={style.accent} />
                  </div>
                  <h3 className="text-sm font-semibold">
                    {cap.title[lang]}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  {cap.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      {detail.videoId && (
        <>
          <div className="section-divider max-w-5xl mx-auto" />
          <section className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <p className={`font-mono text-sm ${style.accent} tracking-wider mb-4`}>
                  {labels.video[lang]}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {labels.videoTitle[lang].text}{" "}
                  <span className="gradient-text">
                    {labels.videoTitle[lang].highlight}
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <YouTubeEmbed
                  videoId={detail.videoId}
                  title={service.title[lang]}
                />
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border ${style.border} bg-gradient-to-r ${style.gradient} p-10 text-center`}
          >
            <p className="text-xl md:text-2xl font-semibold mb-6">
              {labels.cta[lang]}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors"
            >
              {labels.ctaButton[lang]}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function ServiceDetailClient({ slug }: { slug: string }) {
  return (
    <LanguageProvider>
      <ServiceDetailContent slug={slug} />
    </LanguageProvider>
  );
}
