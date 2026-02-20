"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Building2, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { content, t } from "@/lib/content";
import ContactFormModal from "./ContactFormModal";

const infoIcons = [Building2, MapPin, Mail];

const categoryKeys = ["partnership", "investor", "enterprise", "global"];

export default function ContactSection() {
  const { lang } = useLang();
  const c = content.contact;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const openForm = (index: number) => {
    setSelectedCategory(categoryKeys[index]);
    setSelectedLabel(c.cards[index].title[lang]);
    setModalOpen(true);
  };

  return (
    <>
      <section id="contact" className="relative py-32 px-6">
        <div className="section-divider mb-32" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-mono text-sm tracking-wider mb-4">
                {c.label[lang]}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {c.title[lang].text}{" "}
                <span className="gradient-text">{c.title[lang].highlight}</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-10">
                {c.desc[lang]}
              </p>

              <div className="space-y-6">
                {c.info.map((item, i) => {
                  const Icon = infoIcons[i];
                  const value = t(item.value, lang);
                  const isEmail =
                    typeof value === "string" && value.includes("@");
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-accent/10">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider">
                          {t(item.label, lang)}
                        </p>
                        {isEmail ? (
                          <button
                            onClick={() => {
                              setSelectedCategory("general");
                              setSelectedLabel(
                                lang === "en" ? "General Inquiry" : "일반 문의"
                              );
                              setModalOpen(true);
                            }}
                            className="font-medium hover:text-accent transition-colors text-left"
                          >
                            {value}
                          </button>
                        ) : (
                          <p className="font-medium">{value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {c.cards.map((card, i) => (
                <motion.button
                  key={i}
                  onClick={() => openForm(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex items-center justify-between w-full text-left p-6 rounded-xl border border-border bg-surface/30 hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                      {card.title[lang]}
                    </h3>
                    <p className="text-sm text-muted">{card.desc[lang]}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent shrink-0 ml-4 transition-colors"
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
        categoryLabel={selectedLabel}
      />
    </>
  );
}
