import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "fonts.googleapis.com" },
    ],
  },
  async redirects() {
    // The /escrow page and its glossary entry were replaced by the Buyer Protection pages.
    return [
      { source: "/escrow", destination: "/buyer-protection", permanent: true },
      { source: "/glossary/escrow-account", destination: "/glossary/buyer-protection", permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
