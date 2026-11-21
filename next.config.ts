import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "fonts.googleapis.com" },
    ],
  },
  async redirects() {
    // The /Buyer Protection page and its glossary entry were replaced by Buyer Protection pages.
    return [
      { source: "/buyer-protection", destination: "/buyer-protection", permanent: true },
      { source: "/glossary/buyer-protection", destination: "/glossary/buyer-protection", permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
