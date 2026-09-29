import type { Metadata } from "next";

import { ContentShell } from "@/components/layout/ContentShell";
import { LinkCards } from "@/components/layout/LinkCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPARISON_DISCLAIMER, COMPARISON_PAGES } from "@/lib/content/compare";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/compare";

const TITLE = "Comparisons: Marketplace, Chat, Escrow and Social Selling Channels";
const DESCRIPTION =
  "Honest comparisons of the channels Nigerian sellers use: WhatsApp, Instagram, TikTok, fixed-price marketplaces and standalone stores, against a chat-first marketplace with escrow.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "ChatCart vs WhatsApp",
    "Instagram shop alternative Nigeria",
    "TikTok shop alternative Nigeria",
    "Jumia alternative Nigeria",
    "best way to sell online Nigeria",
    "marketplace comparison Nigeria",
  ],
});

export default function CompareIndexPage() {
  const schemas: Schema[] = [
    webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Comparisons", path: PATH },
    ]),
    itemListSchema({
      name: "ChatCart comparisons",
      items: COMPARISON_PAGES.map((page) => ({
        name: `ChatCart vs ${page.competitor}`,
        path: `/compare/${page.slug}`,
      })),
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Comparisons", path: PATH },
        ]}
        eyebrow="Comparisons"
        h1="How ChatCart compares to the channels sellers already use"
        lede="Every one of these channels does something well, and in most cases the honest answer is that you should keep using it for the part it is good at. These pages are about where each one stops working."
      >
        <LinkCards
          cards={COMPARISON_PAGES.map((page) => ({
            title: `ChatCart vs ${page.competitor}`,
            href: `/compare/${page.slug}`,
            body: page.lede,
            meta: "Comparison",
          }))}
        />
      </ContentShell>

      <div className="section-wrap pb-20">
        <div className="rounded-3xl border border-[rgba(23,33,31,0.1)] bg-[#f4efe6] p-8 sm:p-10">
          <h2 className="display-title text-2xl sm:text-3xl">How these comparisons are written</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#53625e]">
            {COMPARISON_DISCLAIMER}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#53625e]">
            Where a competing channel is the better choice for a particular kind of seller, these
            pages say so. A comparison that concludes everything is better here is not a comparison,
            it is an advertisement.
          </p>
        </div>
      </div>
    </>
  );
}
