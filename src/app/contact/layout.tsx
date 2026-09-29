import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

/**
 * The contact page is a client component (it holds form state), and client
 * components cannot export `metadata`. Keeping the metadata in a route layout
 * gives the page its own title, description and canonical without forcing the
 * form to be rewritten.
 */
export const metadata: Metadata = buildMetadata({
  title: "Contact ChatCart",
  description:
    "Get in touch with the ChatCart team about buying, selling, escrow payments, payouts, disputes or partnerships.",
  path: "/contact",
  keywords: [
    "contact ChatCart",
    "ChatCart support",
    "ChatCart help",
    "marketplace support Nigeria",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
