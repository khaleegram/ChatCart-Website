/**
 * Shape of every long-form page on the site.
 *
 * Content lives in data, not JSX, so that the same section can be rendered as a
 * crawler-readable <h2> block and reused across the landing, glossary, comparison
 * and city pages without three near-identical components.
 */

export type ContentBlock =
  | { kind: "text"; paragraphs: string[] }
  | { kind: "bullets"; items: string[] }
  | { kind: "steps"; steps: { title: string; body: string }[] }
  | { kind: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { kind: "note"; title: string; body: string };

export type ContentSection = {
  /** Stable anchor id — used for the on-page contents list and deep links. */
  id: string;
  heading: string;
  blocks: ContentBlock[];
};

export type Faq = { q: string; a: string };

export type RelatedLink = { label: string; path: string };

export type ContentPage = {
  slug: string;
  /** SEO title WITHOUT the brand — the root layout template appends it. */
  title: string;
  /** Meta description. Aim for 140–160 characters. */
  description: string;
  h1: string;
  lede: string;
  eyebrow: string;
  keywords: string[];
  sections: ContentSection[];
  faqs: Faq[];
  related: RelatedLink[];
  /** ISO date. Surfaced in the page footer and in article metadata. */
  updated: string;
};
