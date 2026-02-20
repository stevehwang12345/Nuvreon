import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import TechnologyClient from "./TechnologyClient";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Our technology philosophy centers on applied AI -- leveraging proven infrastructure to build systems that deliver measurable operational value.",
  openGraph: {
    title: "Technology | Nuvreon",
    description:
      "Our technology philosophy centers on applied AI -- leveraging proven infrastructure to build systems that deliver measurable operational value.",
    url: `${siteConfig.url}/technology`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology | Nuvreon",
    description:
      "Our technology philosophy centers on applied AI -- leveraging proven infrastructure to build systems that deliver measurable operational value.",
  },
  alternates: {
    canonical: `${siteConfig.url}/technology`,
  },
};

export default function TechnologyPage() {
  return <TechnologyClient />;
}
