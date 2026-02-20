"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PhilosophySection from "@/components/PhilosophySection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PhilosophySection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
