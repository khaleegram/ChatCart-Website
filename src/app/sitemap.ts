import type { MetadataRoute } from "next";

import { CITY_PAGES } from "@/lib/content/cities";
import { COMPARISON_PAGES } from "@/lib/content/compare";
import { GLOSSARY_TERMS } from "@/lib/content/glossary";
import { LANDING_PAGES } from "@/lib/content/pages";
import { absoluteUrl } from "@/lib/seo";

/**
 * Built from the content maps rather than a hand-written list, so a page cannot
 * be published without appearing here.
 */

type Entry = MetadataRoute.Sitemap[number];

const STATIC_PAGES: { path: string; priority: number; changeFrequency: Entry["changeFrequency"] }[] =
  [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/glossary", priority: 0.7, changeFrequency: "monthly" },
    { path: "/compare", priority: 0.7, changeFrequency: "monthly" },
    { path: "/nigeria", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

/** The commercial pages carry the search demand, so they rank highest after the home page. */
const LANDING_PRIORITY: Record<string, number> = {
  escrow: 0.95,
  chat: 0.95,
  offers: 0.9,
  "for-sellers": 0.9,
  "for-buyers": 0.85,
  "social-commerce": 0.85,
  "how-it-works": 0.8,
  features: 0.75,
  faq: 0.75,
};

function at(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  for (const page of LANDING_PAGES) {
    entries.push({
      url: absoluteUrl(`/${page.slug}`),
      lastModified: at(page.updated),
      changeFrequency: "monthly",
      priority: LANDING_PRIORITY[page.slug] ?? 0.7,
    });
  }

  for (const term of GLOSSARY_TERMS) {
    entries.push({
      url: absoluteUrl(`/glossary/${term.slug}`),
      lastModified: at(term.updated),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  for (const page of COMPARISON_PAGES) {
    entries.push({
      url: absoluteUrl(`/compare/${page.slug}`),
      lastModified: at(page.updated),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const city of CITY_PAGES) {
    entries.push({
      url: absoluteUrl(`/nigeria/${city.slug}`),
      lastModified: at(city.updated),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
