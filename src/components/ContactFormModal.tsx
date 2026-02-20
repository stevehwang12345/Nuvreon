"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  categoryLabel: string;
}

const labels = {
  name: { en: "Name", ko: "성함" },
  email: { en: "Email", ko: "이메일" },
  company: { en: "Company (Optional)", ko: "회사명 (선택)" },
  message: { en: "Message", ko: "문의 내용" },
  send: { en: "Send Message", ko: "메시지 전송" },
  sending: { en: "Sending...", ko: "전송 중..." },
  success: { en: "Message sent successfully!", ko: "메시지가 성공적으로 전송되었습니다!" },
  successSub: { en: "We will get back to you soon.", ko: "빠른 시일 내에 답변 드리겠습니다." },
  error: { en: "Failed to send. Please try again.", ko: "전송에 실패했습니다. 다시 시도해주세요." },
  close: { en: "Close", ko: "닫기" },
  placeholders: {
    name: { en: "Your full name", ko: "이름을 입력하세요" },
    email: { en: "your@email.com", ko: "이메일 주소를 입력하세요" },
    company: { en: "Company name", ko: "회사명을 입력하세요" },
    message: { en: "Tell us about your needs...", ko: "문의 내용을 작성해주세요..." },
  },
};

export default function ContactFormModal({
  isOpen,
  onClose,
  category,
  categoryLabel,
}: ContactFormModalProps) {
  const { lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, category }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-background shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h3 className="font-semibold text-lg">{categoryLabel}</h3>
                <p className="text-xs text-muted mt-0.5">sp.hwang@hantech.io</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-muted hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            {status === "success" ? (
              <div className="px-6 py-12 text-center">
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                <p className="font-semibold text-lg mb-1">{labels.success[lang]}</p>
                <p className="text-sm text-muted mb-6">{labels.successSub[lang]}</p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  {labels.close[lang]}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-medium">
                    {labels.name[lang]} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder={labels.placeholders.name[lang]}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-medium">
                    {labels.email[lang]} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder={labels.placeholders.email[lang]}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-medium">
                    {labels.company[lang]}
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    placeholder={labels.placeholders.company[lang]}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-muted mb-1.5 font-medium">
                    {labels.message[lang]} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder={labels.placeholders.message[lang]}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface/50 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={14} />
                    {labels.error[lang]}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {labels.sending[lang]}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {labels.send[lang]}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
