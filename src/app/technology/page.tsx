import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import TechnologyClient from "./TechnologyClient";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Nuvreon's AI technology stack: applied machine learning, robot control systems, synthetic data pipelines, and scalable cloud infrastructure for intelligent operations. AI 기술 철학과 로봇 관제, 합성 데이터, 머신러닝 인프라를 소개합니다.",
  keywords: [
    "AI Technology", "Machine Learning Infrastructure", "Applied AI",
    "Robot Control System", "Synthetic Data Pipeline", "Cloud Architecture",
    "AI Architecture", "Data Processing", "System Security",
    "AI 기술", "머신러닝 인프라", "로봇 관제 시스템", "합성 데이터 파이프라인",
    "AI 아키텍처", "미래 기술", "클라우드 인프라", "AI 보안",
  ],
  openGraph: {
    title: "Technology | Nuvreon",
    description:
      "Nuvreon's AI technology stack: applied machine learning, robot control systems, synthetic data pipelines, and scalable cloud infrastructure.",
    url: `${siteConfig.url}/technology`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | Nuvreon",
    description:
      "Nuvreon's AI technology stack: applied machine learning, robot control systems, synthetic data pipelines, and scalable cloud infrastructure.",
  },
  alternates: {
    canonical: `${siteConfig.url}/technology`,
  },
};

export default function TechnologyPage() {
  return <TechnologyClient />;
}
