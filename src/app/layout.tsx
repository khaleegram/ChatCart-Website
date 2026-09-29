import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ALL_KEYWORDS,
  SITE,
  SOCIAL_IMAGE,
  organizationSchema,
  softwareApplicationSchema,
  webSiteSchema,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const HOME_TITLE = "ChatCart — Chat to Buy: Social Commerce & Escrow App";

/** Search-console ownership tags, only emitted when the env var is set. */
const verification: Metadata["verification"] = {};
if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
  verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
}
if (process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION) {
  verification.other = {
    "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // The root page sits in the same segment as this layout, so it renders this
    // default verbatim. Every child page gets the template applied.
    default: HOME_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.longDescription,
  applicationName: SITE.name,
  keywords: ALL_KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "shopping",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: HOME_TITLE,
    description: SITE.shortDescription,
    locale: SITE.locale,
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: SITE.shortDescription,
    site: SITE.twitter,
    images: [SOCIAL_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(Object.keys(verification).length ? { verification } : {}),
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.lang} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Site-wide identity, emitted once rather than repeated per page. */}
        <JsonLd data={[organizationSchema(), webSiteSchema(), softwareApplicationSchema()]} />
        <Navbar />
        <main className="site-shell flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
