import type { Metadata } from "next";
import { content } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

const serviceKeywords: Record<string, string[]> = {
  influlyze: [
    "Influencer Analytics", "YouTube Analytics", "Instagram Analytics",
    "Creator Analysis", "Campaign Effectiveness", "SaaS",
    "인플루언서 분석", "유튜버 분석", "인스타그래머 분석",
    "크리에이터 분석", "캠페인 효과", "AI 마케팅",
  ],
  "robot-labeling": [
    "Robot Control", "Robot Labeling", "Fleet Management",
    "Robotic Systems", "LiDAR", "Robot Automation", "Robot Monitoring",
    "로봇 관제", "로봇 라벨링", "로봇 자동화", "로봇 모니터링",
    "로봇 플랫폼", "AI 로봇", "스마트 팩토리", "로봇 기술",
  ],
  onforall: [
    "Synthetic Data", "AI Training Data", "Virtual Environment",
    "Privacy-Safe Data", "Machine Learning Dataset",
    "합성 데이터", "AI 학습 데이터", "가상 환경", "인공지능 데이터",
    "머신러닝 데이터셋", "AI 데이터 플랫폼",
  ],
  keyranki: [
    "Trending Keywords", "Search Trends", "Keyword Aggregator",
    "Google Trends", "Naver Trends", "SEO Tool",
    "실시간 키워드", "인기 검색어", "키워드 트렌드",
    "네이버 인기검색어", "검색 트렌드", "SEO 도구",
  ],
  "gacha-world": [
    "Gacha Shop Finder", "Claw Machine", "Capsule Toy",
    "Location Service", "Korea Entertainment",
    "인형뽑기", "캡슐토이", "가챠샵", "랜덤박스",
    "위치 기반 서비스",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const service = content.services.items.find((s) => s.slug === slug);
  const detail =
    content.serviceDetails[slug as keyof typeof content.serviceDetails];

  if (!service || !detail) {
    return { title: "Service Not Found" };
  }

  const title = service.title.en;
  const descEn = detail.heroDesc.en;
  const descKo = detail.heroDesc.ko;
  const description = `${descEn} ${descKo}`;
  const keywords = serviceKeywords[slug] || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | Nuvreon`,
      description: descEn,
      url: `${siteConfig.url}/services/${slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nuvreon`,
      description: descEn,
      images: [service.image],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return content.services.items.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
