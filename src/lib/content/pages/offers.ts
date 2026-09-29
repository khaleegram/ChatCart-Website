import { keywordsForPage, SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

export const offersPage: ContentPage = {
  slug: "offers",
  title: "Make an Offer: Negotiate Prices With Buyers and Sellers in Chat",
  description:
    "Send an offer, receive a counter, agree a price. ChatCart puts price negotiation inside the marketplace chat so the agreed amount is the amount that gets charged.",
  h1: "Make an offer, get a counter, agree a price — without leaving the chat",
  lede: "Haggling is normal in Nigerian commerce, and pushing it outside the platform is what makes it risky. ChatCart keeps negotiation in the open, attached to the item, with an agreed number at the end of it.",
  eyebrow: "Offers & negotiation",
  keywords: keywordsForPage("/offers"),
  updated: "2026-09-29",
  sections: [
    {
      id: "why-negotiate-in-app",
      heading: "Negotiation is not a loophole to be closed",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A fixed price that nobody accepts is not a price, it is a starting position. Sellers inflate to leave room, buyers lowball to test it, and the real number gets agreed somewhere else — usually in a private chat with no record and no payment protection.",
            "Banning negotiation does not remove it. It just moves it to a place where the platform cannot help either side. ChatCart treats the haggle as a feature with rules.",
          ],
        },
      ],
    },
    {
      id: "how-offers-work",
      heading: "How an offer works",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "The buyer sends an offer",
              body: "The offer carries an amount and, optionally, a short note — packaging, pickup or delivery preferences.",
            },
            {
              title: "The seller accepts, declines, or counters",
              body: "A counter-offer is its own offer with its own amount, so the thread records the full back-and-forth rather than a final figure with no history.",
            },
            {
              title: "The offer expires",
              body: `An offer is only acceptable for ${SITE.facts.offerExpiryHours} hours. After that it lapses, so a price agreed in one season cannot be claimed in another.`,
            },
            {
              title: "The agreed price is what gets charged",
              body: "Once an offer is accepted, checkout uses that agreed amount. The listed price is a starting point, not a ceiling or a floor.",
            },
          ],
        },
      ],
    },
    {
      id: "listed-price",
      heading: "The listed price is a starting point",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "A price on a ChatCart post is a reference, and the item stays open to offers beneath it. That is stated on the listing rather than hidden, so a buyer knows a conversation is welcome and a seller is not surprised by one.",
            "If an item has no price at all, the buyer can ask for one. The same thread opens with the item already attached, so the seller knows exactly what is being discussed before quoting.",
          ],
        },
        {
          kind: "note",
          title: "Why this matters at checkout",
          body: "If the listed price and the agreed price could be confused, buyers get charged the wrong number. ChatCart deliberately prefers the accepted offer over the listed price, so the amount agreed in the conversation is the amount that is taken.",
        },
      ],
    },
    {
      id: "fairness",
      heading: "Keeping offers fair on both sides",
      blocks: [
        {
          kind: "bullets",
          items: [
            "An accepted offer records who agreed what, and when, so neither side has to rely on memory.",
            "Expiry stops stale offers from being used as leverage months later.",
            "Because the agreed price flows into an escrow order, an accepted offer is a real commitment rather than a throwaway message.",
            "Negotiating inside the platform means the payment protection still applies to the number you agreed.",
          ],
        },
        {
          kind: "text",
          paragraphs: [
            "An accepted offer does not reserve stock. If the item has sold, the seller marks it unavailable and the order is cancelled and refunded rather than left hanging — which is an honest outcome and a visible one.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Can I negotiate the price on ChatCart?",
      a: "Yes. Buyers can send an offer with an amount and an optional note. Sellers can accept, decline, or send a counter-offer.",
    },
    {
      q: "How long does an offer stay valid?",
      a: `An offer is acceptable for ${SITE.facts.offerExpiryHours} hours. After that it expires and is no longer valid, even if the seller later tries to accept it.`,
    },
    {
      q: "Can I still buy at the listed price?",
      a: "Yes. If the price on the post is acceptable, you can buy it directly without offering anything. Negotiation is optional, not a required step.",
    },
    {
      q: "What if the item has no price listed?",
      a: "You can ask for the price. That opens a chat with the item already attached, and the seller can quote in the thread or propose an amount you can accept.",
    },
    {
      q: "Does an accepted offer reserve the item?",
      a: "No. If the item is no longer available, the seller marks it unavailable and the order is cancelled with a refund to the buyer.",
    },
    {
      q: "Can we agree a price and pay outside the app?",
      a: "Nothing technically stops two people from paying outside the app. It does mean giving up escrow, the agreed-price record and dispute handling — which is the entire reason to be on ChatCart.",
    },
  ],
  related: [
    { label: "Escrow: money held until delivery", path: "/escrow" },
    { label: "Chat with the item attached", path: "/chat" },
    { label: "Selling on ChatCart", path: "/for-sellers" },
    { label: "How ChatCart works", path: "/how-it-works" },
  ],
};
