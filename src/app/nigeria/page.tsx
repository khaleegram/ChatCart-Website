import type { Metadata } from "next";

import { ContentShell } from "@/components/layout/ContentShell";
import { LinkCards } from "@/components/layout/LinkCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { CITY_PAGES } from "@/lib/content/cities";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/nigeria";

const TITLE = "Buying and Selling on ChatCart Across Nigeria";
const DESCRIPTION =
  "How buying and selling works city by city in Nigeria — Lagos, Abuja, Kano, Port Harcourt, Ibadan and Kaduna — including dispatch, interstate courier routes and escrow.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "online marketplace Nigeria",
    "buy and sell online Nigeria",
    "online shopping Nigeria delivery",
    "sell online Nigeria city by city",
    "interstate delivery Nigeria marketplace",
    "escrow payment Nigeria cities",
  ],
});

export default function NigeriaIndexPage() {
  const schemas: Schema[] = [
    webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Nigeria", path: PATH },
    ]),
    itemListSchema({
      name: "ChatCart in Nigeria",
      items: CITY_PAGES.map((page) => ({ name: page.city, path: `/nigeria/${page.slug}` })),
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Nigeria", path: PATH },
        ]}
        eyebrow="Nigeria"
        h1="The same protections, wherever the parcel is going"
        lede="Escrow works identically in every state — the seller is paid when the order is received. What changes from city to city is logistics: how fast a parcel moves, and whether it arrives at a door or waits at a park."
      >
        <LinkCards
          cards={CITY_PAGES.map((page) => ({
            title: page.city,
            href: `/nigeria/${page.slug}`,
            body: page.lede,
            meta: page.state,
          }))}
        />
      </ContentShell>

      <div className="section-wrap pb-20">
        <div className="rounded-3xl border border-[rgba(23,33,31,0.1)] bg-white p-8 sm:p-10">
          <h2 className="display-title text-2xl sm:text-3xl">
            What actually changes between cities
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#53625e]">
            The payment protection does not vary by location. Delivery does. Inside a city, dispatch
            riders usually handle same-day or next-day movement. Between states, goods typically move
            either through a logistics company, which delivers, or through a park courier, where the
            parcel travels on a bus route and is collected at the destination park.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#53625e]">
            That second option is cheaper, slower, and puts the collection on the buyer — which is
            fine as long as the seller says so in the deal thread before the order is placed. The
            most common source of buyer anxiety is not a missing parcel, it is an unstated one.
          </p>
        </div>
      </div>
    </>
  );
}
