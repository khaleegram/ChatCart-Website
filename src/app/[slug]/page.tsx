import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentShell } from "@/components/layout/ContentShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { LANDING_SLUGS, getLandingPage } from "@/lib/content/pages";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

/** Only the slugs in the content map exist. Anything else is a 404, not a soft page. */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDING_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    keywords: page.keywords,
    type: "article",
    modifiedTime: page.updated,
  });
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const path = `/${page.slug}`;

  const schemas: Schema[] = [
    webPageSchema({ name: page.title, description: page.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.h1, path },
    ]),
  ];

  const faq = faqSchema(page.faqs);
  if (faq) schemas.push(faq);

  if (page.slug === "escrow") {
    schemas.push(
      serviceSchema({
        name: "ChatCart escrow payments",
        description:
          "Escrow payment handling for marketplace orders: the buyer's payment is held and released to the seller only when the order is received, or frozen if a dispute is opened.",
        path,
        serviceType: "Escrow payment service",
      })
    );
  }

  if (page.slug === "chat") {
    schemas.push(
      serviceSchema({
        name: "ChatCart marketplace chat",
        description:
          "Buyer and seller messaging that carries the product, its photos and its listed price into the conversation automatically.",
        path,
        serviceType: "Marketplace messaging",
      })
    );
  }

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: page.eyebrow, path },
        ]}
        eyebrow={page.eyebrow}
        h1={page.h1}
        lede={page.lede}
        sections={page.sections}
        faqs={page.faqs}
        related={page.related}
        updated={page.updated}
      />
    </>
  );
}

export const revalidate = 86400;
