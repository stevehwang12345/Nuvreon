import type { Metadata } from "next";
import { content } from "@/lib/content";
import { siteConfig } from "@/lib/siteConfig";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
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
  const description = detail.heroDesc.en;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Nuvreon`,
      description,
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
      description,
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
