import type { ContentPage } from "../types";

import { chatPage } from "./chat";
import { escrowPage } from "./escrow";
import { featuresPage } from "./features";
import { faqPage } from "./faq";
import { forBuyersPage } from "./for-buyers";
import { forSellersPage } from "./for-sellers";
import { howItWorksPage } from "./how-it-works";
import { offersPage } from "./offers";
import { socialCommercePage } from "./social-commerce";

/** Every long-form landing page, in navigation order. */
export const LANDING_PAGES: ContentPage[] = [
  howItWorksPage,
  escrowPage,
  chatPage,
  offersPage,
  socialCommercePage,
  featuresPage,
  forSellersPage,
  forBuyersPage,
  faqPage,
];

export function getLandingPage(slug: string): ContentPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

/** Used by the static-params generator and the sitemap. */
export const LANDING_SLUGS: string[] = LANDING_PAGES.map((page) => page.slug);
