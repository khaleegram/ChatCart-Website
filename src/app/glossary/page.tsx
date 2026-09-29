import type { Metadata } from "next";

import { ContentShell } from "@/components/layout/ContentShell";
import { LinkCards } from "@/components/layout/LinkCards";
import { JsonLd } from "@/components/seo/JsonLd";
import { GLOSSARY_TERMS } from "@/lib/content/glossary";
import {
  type Schema,
  breadcrumbSchema,
  buildMetadata,
  itemListSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/glossary";

const TITLE = "Social Commerce and Escrow Glossary";
const DESCRIPTION =
  "Plain definitions of the terms behind chat-first marketplaces: social commerce, conversational commerce, escrow accounts, buyer protection and payment gateways.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "social commerce glossary",
    "escrow glossary",
    "ecommerce terms explained",
    "marketplace terms Nigeria",
    "conversational commerce meaning",
  ],
});

export default function GlossaryIndexPage() {
  const schemas: Schema[] = [
    webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Glossary", path: PATH },
    ]),
    itemListSchema({
      name: "ChatCart glossary",
      items: GLOSSARY_TERMS.map((term) => ({ name: term.term, path: `/glossary/${term.slug}` })),
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ContentShell
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Glossary", path: PATH },
        ]}
        eyebrow="Glossary"
        h1="The words behind chat-first commerce, in plain language"
        lede="Most of the confusion about buying and selling online comes from vocabulary, not technology. These are the terms that actually matter, defined without jargon and without overselling what any of them guarantee."
      >
        <LinkCards
          columns={3}
          cards={GLOSSARY_TERMS.map((term) => ({
            title: term.term,
            href: `/glossary/${term.slug}`,
            body: term.shortDefinition,
          }))}
        />
      </ContentShell>

      <div className="section-wrap pb-20">
        <div className="rounded-3xl bg-[#17211f] p-8 text-white sm:p-10">
          <h2 className="display-title text-2xl text-white sm:text-3xl">
            Definitions are only useful if they are precise
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70">
            Escrow, buyer protection and insurance get used interchangeably, and they are not the
            same thing. Where a term has a limit, these pages say so — a definition that flatters the
            product is worse than no definition at all.
          </p>
        </div>
      </div>
    </>
  );
}
