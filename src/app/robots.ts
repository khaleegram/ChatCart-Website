import type { MetadataRoute } from "next";

import { SITE } from "@/lib/seo";

/**
 * AI answer engines are allowed explicitly.
 *
 * Ranking in a classic search result and being cited in an AI answer are two
 * different games, and the second one requires the crawler to be able to read
 * the page at all. Blocking GPTBot while hoping to appear in AI answers is a
 * contradiction, so the choice here is made deliberately rather than by default.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
