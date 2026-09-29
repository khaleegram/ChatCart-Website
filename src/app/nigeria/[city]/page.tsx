import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentShell } from "@/components/layout/ContentShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { CITY_PAGES, CITY_SLUGS, getCityPage } from "@/lib/content/cities";
import type { RelatedLink } from "@/lib/content/types";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  webPageSchema,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const page = getCityPage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/nigeria/${page.slug}`,
    keywords: page.keywords,
    type: "article",
    modifiedTime: page.updated,
  });
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const page = getCityPage(slug);
  if (!page) notFound();

  const path = `/nigeria/${page.slug}`;

  const schemas: Schema[] = [
    webPageSchema({ name: page.title, description: page.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Nigeria", path: "/nigeria" },
      { name: page.city, path },
    ]),
  ];

  const faq = faqSchema(page.faqs);
  if (faq) schemas.push(faq);

  // Every city links to every other city plus the core pages — this is what
  // makes the city set a hub rather than six orphaned pages.
  const related: RelatedLink[] = [
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "Buying safely online", path: "/for-buyers" },
    { label: "Selling on ChatCart", path: "/for-sellers" },
    ...CITY_PAGES.filter((entry) => entry.slug !== page.slug).map((entry) => ({
      label: `ChatCart in ${entry.city}`,
      path: `/nigeria/${entry.slug}`,
    })),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Nigeria", path: "/nigeria" },
          { name: page.city, path },
        ]}
        eyebrow={page.state}
        h1={page.h1}
        lede={page.lede}
        sections={page.sections}
        faqs={page.faqs}
        related={related}
        updated={page.updated}
      />
    </>
  );
}

export const revalidate = 86400;
