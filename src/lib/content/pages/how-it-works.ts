import { SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

export const howItWorksPage: ContentPage = {
  slug: "how-it-works",
  title: "How ChatCart Works: From Video Feed to Escrow Payout",
  description:
    "The full ChatCart journey for buyers and sellers: discover in the feed, agree a price in chat, pay into escrow, ship, then release. Real timings, no guesswork.",
  h1: "How ChatCart works, from the feed to the payout",
  lede: "One path, both sides of it. Below is exactly what happens to an order — including the waiting periods, who can stop it, and when the money actually moves.",
  eyebrow: "The full journey",
  keywords: [
    "how ChatCart works",
    "how to buy on ChatCart",
    "how to sell on ChatCart",
    "escrow order process Nigeria",
    "marketplace order status explained",
    "ChatCart escrow steps",
  ],
  updated: "2026-09-29",
  sections: [
    {
      id: "buyer-journey",
      heading: "For buyers",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "Swipe the feed",
              body: "Products open as full-screen video or photo stories, with the price and the seller's location on the post. You can also switch to following the sellers you care about.",
            },
            {
              title: "Open the item, or open a conversation",
              body: "Buy it directly if the price works for you. If you have questions, message the seller — the item, its photos and its price are attached to the message for you.",
            },
            {
              title: "Agree the price if you are negotiating",
              body: "Send an offer, accept a counter, or take the listed price. Once an offer is accepted, that becomes the amount you pay.",
            },
            {
              title: "Pay into escrow",
              body: "Checkout collects your delivery details and takes payment in full. The money is held — the seller is not paid yet.",
            },
            {
              title: "Receive, inspect, then release",
              body: "When the order arrives, confirm it and the funds release to the seller. If something is wrong, open a dispute and the payment freezes instead.",
            },
          ],
        },
      ],
    },
    {
      id: "seller-journey",
      heading: "For sellers",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "Post the product",
              body: "Upload a video or photos, set a price if you want to, and tag the details buyers ask about. A price is a starting point — buyers can still make you an offer.",
            },
            {
              title: "Get discovered",
              body: "Posts appear in the feed for buyers browsing your category and location. Buyers who follow you see your posts in their Following feed.",
            },
            {
              title: "Answer with the item already on screen",
              body: "Incoming conversations arrive with the exact post attached, so you know what is being asked about before you read the message.",
            },
            {
              title: "Accept the order",
              body: `Orders are yours to accept or decline. If an order is not accepted within ${SITE.facts.sellerAcceptWindowHours} hours it is cancelled and the buyer is refunded automatically.`,
            },
            {
              title: "Ship and mark it sent",
              body: "Dispatch the item and record it in the app. This is what starts the release clock, so it is in your interest to mark it promptly.",
            },
            {
              title: "Get paid, then withdraw",
              body: `Funds release on buyer confirmation, or automatically ${SITE.facts.autoReleaseAfterShipmentHours} hours after you mark the order sent. Commission is deducted from the released amount, and the rest becomes your withdrawable balance — minimum ₦${SITE.facts.minimumPayoutNgn.toLocaleString()} per payout, expected within about ${SITE.facts.payoutProcessingBusinessDays} business days.`,
            },
          ],
        },
      ],
    },
    {
      id: "order-states",
      heading: "What each order state means",
      blocks: [
        {
          kind: "table",
          headers: ["State", "What it means", "Who moves it next"],
          rows: [
            ["Awaiting acceptance", "The buyer has paid into escrow and the seller has been notified", "Seller"],
            ["Availability check", "The seller needs time, or the item is not available", "Seller"],
            ["Preparing", "The order is accepted and being packed", "Seller"],
            ["Shipped", "Dispatched and marked as sent; the release clock is running", "Buyer"],
            ["Completed", "Received and released; the seller has been paid", "Nobody — finished"],
            ["Disputed", "The payment is frozen pending resolution", "ChatCart support"],
            ["Cancelled", "The order ended and the buyer is refunded", "Nobody — finished"],
          ],
          caption: "Every order shows one of these states in the deal thread.",
        },
        {
          kind: "note",
          title: "One status line, both sides",
          body: "Buyer and seller read the same status on the same order. Nobody has to assert what stage things are at, which removes the most common argument in informal selling.",
        },
      ],
    },
    {
      id: "after-the-order",
      heading: "After the order",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Once an order is complete, the buyer can leave a review of the seller. Reviews are attached to completed orders rather than to anyone who feels like posting, which is what makes them worth reading.",
            "Delivery is handled through dispatch details captured at checkout, so the address is not something either side has to retype into chat.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does the whole process take?",
      a: `Acceptance is expected within ${SITE.facts.sellerAcceptWindowHours} hours. After the seller marks the order as sent, the funds release ${SITE.facts.autoReleaseAfterShipmentHours} hours later unless the buyer confirms or disputes sooner. Delivery time itself depends on the seller and the courier.`,
    },
    {
      q: "Can I cancel an order?",
      a: "If a seller does not accept within the acceptance window, the order is cancelled and refunded automatically. Once a seller has accepted and shipped, a problem is handled through a dispute rather than a plain cancellation.",
    },
    {
      q: "What if the seller does not ship?",
      a: "The buyer opens a dispute and the funds freeze. The seller is not paid for an order they did not fulfil.",
    },
    {
      q: "Do I need a bank account to sell?",
      a: "Yes — payouts go to a bank account in your name, which is also how payouts stay traceable and how you get paid.",
    },
    {
      q: "Is there a minimum order value?",
      a: "There is no enforced minimum order value. Commission is a percentage of the item price, so very small orders are simply less valuable for everyone involved.",
    },
  ],
  related: [
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "Offers and negotiation", path: "/offers" },
    { label: "Marketplace chat", path: "/chat" },
    { label: "For sellers", path: "/for-sellers" },
    { label: "For buyers", path: "/for-buyers" },
    { label: "Frequently asked questions", path: "/faq" },
  ],
};
