import Link from "next/link";

import type { ContentBlock, ContentSection, Faq, RelatedLink } from "@/lib/content/types";

export type Crumb = { name: string; path: string };

type ContentShellProps = {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  lede: string;
  sections?: ContentSection[];
  faqs?: Faq[];
  related?: RelatedLink[];
  updated?: string;
  disclaimer?: string;
  /** Rendered between the lede and the first section. Used by index pages. */
  children?: React.ReactNode;
};

function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <div className="space-y-4">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-8 text-[#53625e] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      );

    case "bullets":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#53625e] sm:text-base">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A67C52]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="space-y-5">
          {block.steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#17211f] text-xs font-black text-white">
                {index + 1}
              </span>
              <div>
                <p className="font-black text-[#17211f]">{step.title}</p>
                <p className="mt-1 text-[15px] leading-7 text-[#53625e]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <figure className="overflow-hidden rounded-2xl border border-[rgba(23,33,31,0.1)] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f4efe6]">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="whitespace-nowrap px-4 py-3 text-[11px] font-black uppercase tracking-wider text-[#17211f]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={`${block.headers[0]}-${rowIndex}`}
                    className="border-t border-[rgba(23,33,31,0.07)] align-top"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={`px-4 py-3 leading-6 ${
                          cellIndex === 0 ? "font-semibold text-[#17211f]" : "text-[#53625e]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="border-t border-[rgba(23,33,31,0.07)] bg-[#fbf8f2] px-4 py-3 text-xs font-medium text-[#66746f]">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "note":
      return (
        <div className="rounded-2xl border border-[rgba(166,124,82,0.22)] bg-[#fdf8f2] p-5">
          <p className="text-[11px] font-black uppercase tracking-wider text-[#8B623E]">
            {block.title}
          </p>
          <p className="mt-2 text-[15px] leading-7 text-[#53625e]">{block.body}</p>
        </div>
      );

    default:
      return null;
  }
}

/**
 * The shared shell for every long-form page on the site.
 *
 * Deliberately a Server Component with no client JavaScript: the entire page —
 * headings, tables, steps and FAQs — is in the initial HTML, which is what
 * crawlers and AI answer engines actually read.
 */
export function ContentShell({
  crumbs,
  eyebrow,
  h1,
  lede,
  sections = [],
  faqs = [],
  related = [],
  updated,
  disclaimer,
  children,
}: ContentShellProps) {
  const showContents = sections.length >= 4;

  return (
    <div className="bg-[#fcfaf8]">
      {/* Header */}
      <header className="market-grid border-b border-[rgba(23,33,31,0.07)] pt-28 pb-14 lg:pt-36">
        <div className="section-wrap">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#8b9793]">
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {isLast ? (
                      <span aria-current="page" className="text-[#8B623E]">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="transition-colors hover:text-[#17211f]">
                        {crumb.name}
                      </Link>
                    )}
                    {!isLast ? <span aria-hidden>/</span> : null}
                  </li>
                );
              })}
            </ol>
          </nav>

          <p className="section-kicker mt-8">{eyebrow}</p>
          <h1 className="display-title mt-4 max-w-4xl text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-[56px]">
            {h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53625e]">{lede}</p>

          {updated ? (
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#8b9793]">
              Last updated {formatDate(updated)}
            </p>
          ) : null}
        </div>
      </header>

      {children ? <div className="section-wrap py-16">{children}</div> : null}

      <div className="section-wrap grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
        {/* Main column */}
        <div className="min-w-0">
          {disclaimer ? (
            <div className="mb-12 rounded-2xl border border-[rgba(23,33,31,0.1)] bg-[#f4efe6] p-5">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#17211f]">
                Before you read the comparison
              </p>
              <p className="mt-2 text-sm leading-7 text-[#53625e]">{disclaimer}</p>
            </div>
          ) : null}

          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="display-title text-[1.75rem] leading-tight sm:text-[2rem]">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.blocks.map((block, index) => (
                    <Block key={`${section.id}-${index}`} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* FAQ — native details/summary so the answers are in the raw HTML */}
          {faqs.length ? (
            <section id="faq" className="mt-20 scroll-mt-28">
              <h2 className="display-title text-[1.75rem] leading-tight sm:text-[2rem]">
                Frequently asked questions
              </h2>
              <div className="mt-6 space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.q}
                    open={index === 0}
                    className="group rounded-2xl border border-[rgba(23,33,31,0.1)] bg-white px-5 py-4"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-black text-[#17211f]">
                      <h3 className="text-[15px] font-black">{faq.q}</h3>
                      <span
                        aria-hidden
                        className="mt-0.5 shrink-0 text-lg leading-none text-[#A67C52] transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[15px] leading-7 text-[#53625e]">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Side rail */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          {showContents ? (
            <nav aria-label="On this page" className="mb-8">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#8b9793]">
                On this page
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-[rgba(23,33,31,0.1)] pl-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm font-semibold leading-6 text-[#53625e] transition-colors hover:text-[#A67C52]"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {related.length ? (
            <nav aria-label="Related pages">
              <p className="text-[11px] font-black uppercase tracking-wider text-[#8b9793]">
                Related
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-[rgba(23,33,31,0.1)] pl-4">
                {related.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm font-semibold leading-6 text-[#53625e] transition-colors hover:text-[#A67C52]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div className="mt-10 rounded-2xl bg-[#17211f] p-5 text-white">
            <p className="text-sm font-black leading-snug">
              Find a product, or make an offer on one.
            </p>
            <p className="mt-2 text-xs leading-6 text-white/60">
              Open the feed, find something you like, and buy it — or negotiate the number first.
            </p>
            <Link href="/#app-preview" className="btn-brand mt-4 inline-flex px-5 py-2.5 text-sm">
              Open ChatCart
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
