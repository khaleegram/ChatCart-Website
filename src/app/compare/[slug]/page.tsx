import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentShell } from "@/components/layout/ContentShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { COMPARISON_DISCLAIMER, COMPARISON_SLUGS, getComparisonPage } from "@/lib/content/compare";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  webPageSchema,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISON_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparisonPage(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/compare/${page.slug}`,
    keywords: page.keywords,
    type: "article",
    modifiedTime: page.updated,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const page = getComparisonPage(slug);
  if (!page) notFound();

  const path = `/compare/${page.slug}`;

  const schemas: Schema[] = [
    webPageSchema({ name: page.title, description: page.description, path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Comparisons", path: "/compare" },
      { name: `ChatCart vs ${page.competitor}`, path },
    ]),
  ];

  const faq = faqSchema(page.faqs);
  if (faq) schemas.push(faq);

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Comparisons", path: "/compare" },
          { name: `vs ${page.competitor}`, path },
        ]}
        eyebrow="Comparison"
        h1={page.h1}
        lede={page.lede}
        sections={page.sections}
        faqs={page.faqs}
        related={page.related}
        updated={page.updated}
        disclaimer={COMPARISON_DISCLAIMER}
      />
    </>
  );
}

export const revalidate = 86400;
