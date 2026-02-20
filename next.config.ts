import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/platforms/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
