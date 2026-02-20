import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Nuvreon | AI Software Infrastructure for Intelligent Operations",
  description: `${siteConfig.description} ${siteConfig.descriptionKo}`,
  keywords: [
    // Primary English keywords
    "AI", "Artificial Intelligence", "Robot Control", "Robot Automation",
    "AI Investment", "Future Technology", "AI Startup",
    "SaaS Platform", "Synthetic Data", "Influencer Analytics",
    "Machine Learning", "Digital Transformation", "Smart Factory",
    // Primary Korean keywords
    "인공지능", "로봇 관제", "로봇 자동화", "AI 투자", "투자",
    "미래사업", "미래 기술", "AI 스타트업", "AI 로봇",
    "합성 데이터", "인플루언서 분석", "디지털 전환",
    "AI 소프트웨어", "스마트 팩토리", "AI 인프라",
  ],
  openGraph: {
    title: "Nuvreon | AI Software Infrastructure",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return <HomeClient />;
}
