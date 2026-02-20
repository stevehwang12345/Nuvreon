import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: siteConfig.description,
  keywords: [
    "AI",
    "Software Infrastructure",
    "SaaS",
    "Machine Learning",
    "Digital Intelligence",
    "Operational Intelligence",
    "Influencer Analytics",
    "Synthetic Data",
    "Robot Control",
    "AI SaaS Platform",
    "Data Intelligence",
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
  const jsonLd = {
    "@context": "https://schema.org",
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
