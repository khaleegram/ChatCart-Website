import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentShell } from "@/components/layout/ContentShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { GLOSSARY_SLUGS, getGlossaryTerm } from "@/lib/content/glossary";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  definedTermSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOSSARY_SLUGS.map((term) => ({ term }));
}

type Props = { params: Promise<{ term: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const entry = getGlossaryTerm(slug);
  if (!entry) return {};

  return buildMetadata({
    title: entry.title,
    description: entry.description,
    path: `/glossary/${entry.slug}`,
    keywords: entry.keywords,
    type: "article",
    modifiedTime: entry.updated,
  });
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const entry = getGlossaryTerm(slug);
  if (!entry) notFound();

  const path = `/glossary/${entry.slug}`;

  const schemas: Schema[] = [
    webPageSchema({ name: entry.title, description: entry.description, path }),
    definedTermSchema({
      term: entry.term,
      definition: entry.shortDefinition,
      path,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Glossary", path: "/glossary" },
      { name: entry.term, path },
    ]),
  ];

  const faq = faqSchema(entry.faqs);
  if (faq) schemas.push(faq);

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
          { name: entry.term, path },
        ]}
        eyebrow="Glossary"
        h1={entry.term}
        lede={entry.shortDefinition}
        sections={entry.sections}
        faqs={entry.faqs}
        related={entry.related}
        updated={entry.updated}
      />
    </>
  );
}

export const revalidate = 86400;
