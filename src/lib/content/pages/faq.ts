import { SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

export const faqPage: ContentPage = {
  slug: "faq",
  title: "Frequently Asked Questions About Buying and Selling on ChatCart",
  description:
    "Answers on escrow, offers, delivery, refunds, commission, payouts and disputes — the practical questions buyers and sellers ask before using ChatCart.",
  h1: "Questions buyers and sellers actually ask",
  lede: "Escrow, offers, delivery, refunds, commission. Short, specific answers — including the ones that are less flattering, like how long a refund really takes.",
  eyebrow: "FAQ",
  keywords: [
    "ChatCart FAQ",
    "is ChatCart safe",
    "how does ChatCart escrow work",
    "ChatCart commission",
    "how to get a refund on ChatCart",
    "ChatCart payout time",
    "escrow questions Nigeria",
    "marketplace escrow FAQ",
  ],
  updated: "2026-09-29",
  sections: [
    {
      id: "payments",
      heading: "Payments and escrow",
      blocks: [
        {
          kind: "bullets",
          items: [
            "The buyer pays in full at checkout and the money is held by ChatCart, not sent to the seller.",
            "The seller has 24 hours to accept an order; if they do not, it is cancelled and refunded automatically.",
            "Funds release when the buyer confirms delivery, or automatically 48 hours after the seller marks the order as sent.",
            "Opening a dispute freezes the payment instead of releasing it.",
            "Refunds are returned through the payment processor to the original payment method. ChatCart returns the money immediately; the buyer's bank controls when it appears.",
          ],
        },
      ],
    },
    {
      id: "negotiation",
      heading: "Prices and offers",
      blocks: [
        {
          kind: "bullets",
          items: [
            "A listed price is a starting point — buyers can always send an offer instead.",
            "Sellers can accept, decline or counter an offer.",
            "Offers expire after 72 hours.",
            "When an offer is accepted, that agreed amount is the amount charged, not the listed price.",
            "If a post has no price, the buyer can ask for one and the item is attached to the conversation.",
          ],
        },
      ],
    },
    {
      id: "selling",
      heading: "Selling, commission and payouts",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Listing is free — commission is taken from the seller only on a completed order, deducted at release.",
            "The rate applied to an order is the rate in effect when that order was placed, never a later change applied backwards.",
            "Nothing is charged on a cancelled or refunded order, because there is no released payment to take it from.",
            "Payouts are requested in the app, to a bank account in the seller's own name.",
            "Minimum payout is ₦5,000, with an expected processing time of about 3 business days.",
          ],
        },
      ],
    },
    {
      id: "delivery",
      heading: "Delivery and receiving an order",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Delivery details are captured at checkout, so the address is part of the order rather than a message in chat. Dispatch timing and the courier used are the seller's responsibility, and the order status reflects when the item was marked as sent.",
            "Inspect the item when it arrives. Confirm only once you are satisfied — confirming is what releases the money — and open a dispute instead if something is wrong.",
          ],
        },
      ],
    },
    {
      id: "problems",
      heading: "When something goes wrong",
      blocks: [
        {
          kind: "bullets",
          items: [
            "A dispute freezes the funds and is reviewed with the listing, the conversation and the delivery record as evidence.",
            "The outcome is either release to the seller or refund to the buyer.",
            "Sellers can report a problem with a buyer or a message directly in the app.",
            "Chat is stored and can be reviewed when resolving a dispute about an order.",
          ],
        },
      ],
    },
    {
      id: "accounts",
      heading: "Accounts and access",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Sellers must be 18 or over. Buyers must be at least 13.",
            "Signing in is required to buy, sell or message, so every order is traceable to an account.",
            "Counterfeit goods, stolen property, illegal substances, weapons and anything prohibited under Nigerian law cannot be sold.",
            "Accounts may be suspended for fraud, repeated violations or abusive behaviour, and funds in a suspended account may be withheld pending investigation.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is ChatCart safe to buy from?",
      a: "Payments are held in escrow and released to the seller only when the order is received, or after the release window passes with no dispute. It is not a guarantee that every seller is honest — it is a guarantee that the seller does not get the money before the order is delivered.",
    },
    {
      q: "What is escrow and why does ChatCart use it?",
      a: "Escrow means a third party holds the buyer's money instead of passing it directly to the seller. It exists so neither side has to trust the other first: the buyer is not handing cash to a stranger, and the seller is not shipping against an unverified screenshot.",
    },
    {
      q: "How long does the seller have to accept my order?",
      a: `24 hours. If the seller does not accept within that window, the order is cancelled and the buyer is refunded automatically.`,
    },
    {
      q: "When is the seller paid?",
      a: "When the buyer confirms delivery, or automatically 48 hours after the seller marks the order as sent if the buyer neither confirms nor disputes.",
    },
    {
      q: "How long do refunds take?",
      a: "The refund is sent back through the payment processor as soon as it is approved, but the time it takes to appear in the buyer's account depends on their bank. ChatCart cannot make a bank transfer instant.",
    },
    {
      q: "How much commission does ChatCart charge?",
      a: "Commission is a percentage of the item price on a completed order, deducted from the released funds. The rate that applies is the one in effect when the order was placed.",
    },
    {
      q: "What is the minimum payout?",
      a: `₦${SITE.facts.minimumPayoutNgn.toLocaleString()} per payout request, with an expected processing time of about ${SITE.facts.payoutProcessingBusinessDays} business days.`,
    },
    {
      q: "Can I negotiate the price?",
      a: "Yes. Send an offer with an amount and an optional note, and the seller can accept, decline or counter it. Offers expire after 72 hours.",
    },
    {
      q: "Do I need to chat to buy something?",
      a: "No. If the listed price works for you, you can buy straight from the post. Chat is for questions and negotiating.",
    },
    {
      q: "Can I use ChatCart outside Nigeria?",
      a: "ChatCart is built for the Nigerian market: naira pricing, Nigerian bank payouts and local delivery. There is no international shipping model today.",
    },
    {
      q: "Are reviews real?",
      a: "Reviews come from buyers who completed an order, so they are tied to actual transactions rather than open to anyone who wants to leave one.",
    },
    {
      q: "What happens if I sell something I cannot deliver?",
      a: "Mark the item unavailable or decline the order. If the order is not accepted it is cancelled and the buyer is refunded automatically. Going silent achieves the same result, one day later, with a more annoyed buyer.",
    },
  ],
  related: [
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "How ChatCart works", path: "/how-it-works" },
    { label: "Offers and negotiation", path: "/offers" },
    { label: "For sellers", path: "/for-sellers" },
    { label: "For buyers", path: "/for-buyers" },
    { label: "Glossary", path: "/glossary" },
  ],
};
