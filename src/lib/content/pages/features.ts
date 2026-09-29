import type { ContentPage } from "../types";

export const featuresPage: ContentPage = {
  slug: "features",
  title: "Features: Video Feed, Context Chat, Offers, Escrow and Payouts",
  description:
    "Every part of ChatCart in one place: the video product feed, context-attached chat, offers and counters, escrow checkout, order tracking and seller payouts.",
  h1: "Every part of the marketplace, in one place",
  lede: "ChatCart is five things working together. Split them apart and each one is ordinary — discovery without escrow is a feed, and escrow without chat is a payment page. The value is that they share the same order.",
  eyebrow: "Features",
  keywords: [
    "ChatCart features",
    "marketplace app features Nigeria",
    "video shopping app features",
    "escrow marketplace features",
    "chat commerce features",
    "Nigeria social commerce app",
  ],
  updated: "2026-09-29",
  sections: [
    {
      id: "feed",
      heading: "A product feed built for video, not a catalogue",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Products open full-screen as video or photo stories, with the price and location on the post. Buyers swipe through for-you and following feeds instead of paging through a grid of thumbnails, and every post is buyable from where it is being watched.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "Full-screen video and photo posts, not static catalogue rows.",
            "For-you discovery and a following feed for sellers you already like.",
            "Search, saved posts and likes for buyers who shop deliberately rather than by browsing.",
          ],
        },
      ],
    },
    {
      id: "chat",
      heading: "Marketplace chat with the item attached",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Messaging a seller attaches a quote card with the item's title, photos or video cover, and listed price. The seller knows what is being discussed before reading a word, and the item stays referenced for the life of the thread.",
          ],
        },
        {
          kind: "note",
          title: "Read the detail",
          body: "This is the single feature the rest of the product depends on — see the full explanation on the marketplace chat page.",
        },
      ],
    },
    {
      id: "offers",
      heading: "Offers, counters and an agreed price",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Buyers send an offer with an amount and an optional note. Sellers accept, decline or counter. Offers expire, so a stale agreement cannot be enforced months later, and an accepted offer becomes the amount charged at checkout rather than the listed price.",
          ],
        },
      ],
    },
    {
      id: "escrow",
      heading: "Escrow checkout and order states",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Payment is held in escrow instead of going to the seller directly. The order then moves through a small set of visible states — awaiting acceptance, preparing, shipped, completed, disputed or cancelled — and both sides read the same line.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "Seller has 24 hours to accept, or the order is cancelled and refunded.",
            "Funds release on buyer confirmation, or automatically 48 hours after the order is marked as sent.",
            "A dispute freezes the payment instead of releasing it.",
            "Delivery details are captured at checkout rather than typed into chat.",
          ],
        },
      ],
    },
    {
      id: "payouts",
      heading: "Seller payouts to a bank account",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Released funds become a withdrawable balance. Payouts are requested in the app and sent to a bank account in the seller's name — minimum ₦5,000 per request, expected within about 3 business days. Commission is deducted at release, at the rate in effect when the order was placed.",
          ],
        },
      ],
    },
    {
      id: "trust",
      heading: "Reviews, disputes and account safety",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Reviews come from buyers with a completed order, so they reflect real transactions.",
            "Disputes freeze the money and are decided with the listing, conversation and delivery record as evidence.",
            "Chat reports and blocking exist for harassment, separate from order disputes.",
            "Sign-in is required for buying, selling and messaging, so orders are traceable to an account.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is ChatCart free to use?",
      a: "Downloading and using ChatCart costs the buyer nothing. The platform earns a commission from the seller on completed orders, deducted when escrow funds are released.",
    },
    {
      q: "Does ChatCart work on Android and iPhone?",
      a: "The app is built for both. Download links are published from the download section on the home page.",
    },
    {
      q: "Can I sell physical and digital products?",
      a: "The flow is built around physical delivery, with delivery details and dispatch status as part of the order. Anything that does not ship as a parcel does not fit the escrow release model well.",
    },
    {
      q: "Are there prohibited items?",
      a: "Yes. Counterfeit goods, stolen property, illegal substances, weapons and anything prohibited under Nigerian law cannot be listed.",
    },
  ],
  related: [
    { label: "Marketplace chat", path: "/chat" },
    { label: "Offers and negotiation", path: "/offers" },
    { label: "Escrow payments", path: "/escrow" },
    { label: "How ChatCart works", path: "/how-it-works" },
    { label: "For sellers", path: "/for-sellers" },
    { label: "For buyers", path: "/for-buyers" },
  ],
};
