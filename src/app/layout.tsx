import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { content } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nuvreon | AI Software Infrastructure for Intelligent Operations",
    template: "%s | Nuvreon",
  },
  description: `${siteConfig.description} ${siteConfig.descriptionKo}`,
  keywords: [
    // English keywords
    "AI", "Artificial Intelligence", "Robot Control", "Robot Automation",
    "SaaS Platform", "Machine Learning", "Software Infrastructure",
    "Synthetic Data", "Influencer Analytics", "AI Investment",
    "Future Technology", "Intelligent Operations", "Digital Transformation",
    "AI Startup", "Data Intelligence", "AI SaaS", "Robotics Platform",
    "AI Robot", "Smart Factory", "Operational Intelligence",
    // Korean keywords
    "인공지능", "AI 소프트웨어", "로봇 관제", "로봇 자동화", "로봇 기술",
    "AI 플랫폼", "합성 데이터", "인플루언서 분석", "AI 투자", "투자",
    "미래사업", "미래 기술", "지능형 운영", "디지털 전환", "AI 스타트업",
    "데이터 인텔리전스", "로봇 플랫폼", "AI 로봇", "스마트 팩토리",
    "AI 인프라", "소프트웨어 인프라", "SaaS 플랫폼",
  ],
  authors: [{ name: "Nuvreon Inc." }],
  creator: "Nuvreon Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: siteConfig.url,
    siteName: "Nuvreon",
    title: "Nuvreon | AI Software Infrastructure for Intelligent Operations",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Nuvreon - AI Software Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvreon | AI Software Infrastructure for Intelligent Operations",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = content.services.items.map((s) => {
    const detail =
      content.serviceDetails[s.slug as keyof typeof content.serviceDetails];
    return {
      "@type": "SoftwareApplication",
      name: s.title.en,
      description: detail?.heroDesc.en || s.purpose.en,
      url: `${siteConfig.url}/services/${s.slug}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Nuvreon",
        url: siteConfig.url,
        logo: `${siteConfig.url}/og-image.png`,
        description: siteConfig.description,
        email: siteConfig.email,
        foundingLocation: {
          "@type": "Place",
          name: "Delaware, United States",
        },
        sameAs: [siteConfig.youtube],
        knowsAbout: [
          "Artificial Intelligence",
          "Robot Control Systems",
          "Synthetic Data Generation",
          "Influencer Analytics",
          "Machine Learning",
          "SaaS Platforms",
        ],
      },
      ...services,
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
