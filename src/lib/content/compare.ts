import type { ContentSection, Faq, RelatedLink } from "./types";

export type ComparisonPage = {
  slug: string;
  competitor: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  keywords: string[];
  sections: ContentSection[];
  faqs: Faq[];
  related: RelatedLink[];
  updated: string;
};

const UPDATED = "2026-09-29";

/**
 * Every comparison page renders this. Competitor products change constantly,
 * and a comparison that quietly goes stale is just a lie with a publish date.
 */
export const COMPARISON_DISCLAIMER =
  "Everything here describes how these channels are commonly used by sellers in Nigeria and what each one is built for. Competing products change their features, fees and availability regularly, and a channel may have added capabilities since this was written — so check the current details before making a decision on them.";

export const COMPARISON_PAGES: ComparisonPage[] = [
  {
    slug: "whatsapp",
    competitor: "WhatsApp",
    title: "ChatCart vs WhatsApp for Selling: When Chat Is Not Enough",
    description:
      "WhatsApp is where Nigerian selling happens today. Here is what it does well, exactly where it fails on payment and order records, and when ChatCart is worth switching to.",
    h1: "ChatCart vs WhatsApp: the chat is not the problem",
    lede: "WhatsApp is excellent at the conversation. It is the money and the order record that it was never designed to handle — and that is the part that costs sellers.",
    keywords: [
      "ChatCart vs WhatsApp",
      "WhatsApp business alternative Nigeria",
      "selling on WhatsApp problems",
      "WhatsApp business escrow",
      "marketplace vs WhatsApp selling",
      "sell without WhatsApp",
    ],
    updated: UPDATED,
    sections: [
      {
        id: "what-whatsapp-does-well",
        heading: "What WhatsApp genuinely gets right",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "It is free, universal, and everyone already has it. Customers do not need to be taught how to use it, messages are reliable, and voice notes and photos make it easy to build trust with a buyer quickly.",
              "For a seller with a handful of regular customers, it is an extremely efficient way to run a business. Nothing about it is badly designed; it is simply designed for conversation.",
            ],
          },
        ],
      },
      {
        id: "where-it-fails",
        heading: "Where it fails as a shop",
        blocks: [
          {
            kind: "bullets",
            items: [
              "No product context: the buyer has to screenshot the item, and the seller has to work out which one is meant.",
              "No agreed price: what was agreed lives in the chat history, at best, and can be re-litigated later.",
              "No payment rail: the buyer transfers directly to the seller, so one side carries all of the risk.",
              "No order record: there is no status, no dispatch confirmation and no shared evidence if something goes wrong.",
              "Nothing is discoverable: a new buyer cannot find the seller through WhatsApp. Discovery has to happen somewhere else entirely.",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "None of these are bugs in WhatsApp. They are the natural consequence of using a messaging app as a shop, and they get more expensive as volume grows.",
            ],
          },
        ],
      },
      {
        id: "side-by-side",
        heading: "Side by side",
        blocks: [
          {
            kind: "table",
            headers: ["", "WhatsApp selling", "ChatCart"],
            rows: [
              ["Product discovery", "Happens elsewhere, then moves to chat", "In-app video and photo feed"],
              ["Item context in chat", "Screenshot, interpreted by the seller", "Attached to the thread automatically"],
              ["Price agreement", "Unrecorded, in the message history", "Offers and counters, with expiry"],
              ["Buyer protection", "None built in", "Payment held in escrow"],
              ["Order status", "Not tracked", "Visible in the deal thread"],
              ["Dispute evidence", "Screenshots", "The listing, chat and order record"],
              ["Fees", "Free to use, no commission", "Commission from the seller on completed orders"],
              ["Availability", "Everywhere, already installed", "Nigeria, Android and iOS"],
            ],
            caption: "Two different tools. The row that matters most is buyer protection.",
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to use which",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "If you sell to a small circle of repeat customers who already trust you, and the amounts are small, WhatsApp remains a perfectly good tool. The overhead of a platform is not worth paying for a transaction that was never at risk.",
              "ChatCart earns its place when the buyer is a stranger, when the amounts are large enough that losing one is painful, and when you are spending more time chasing screenshots and re-answering “which item?” than actually selling. That is the point at which the missing payment protection becomes the most expensive part of your process.",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "It is also worth saying plainly: many sellers will use both. ChatCart for the transaction and its protection, WhatsApp for maintaining relationships with customers who have already bought.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Should I stop using WhatsApp to sell?",
        a: "Not necessarily. If your buyers already trust you and the amounts are small, WhatsApp is efficient. The case for ChatCart gets stronger as transactions get larger or buyers get less familiar.",
      },
      {
        q: "Does ChatCart replace WhatsApp Business?",
        a: "It replaces the parts of it that handle orders and payments. WhatsApp remains better for ongoing relationships and casual conversation, which is why many sellers keep both.",
      },
      {
        q: "Can buyers find me on ChatCart the way they find me on WhatsApp?",
        a: "Yes, and better. WhatsApp is not a discovery channel at all — buyers arrive from somewhere else. On ChatCart your posts appear in a feed where buyers are already browsing products.",
      },
      {
        q: "What happens to my customer relationships?",
        a: "The conversation still happens; it just happens attached to an item and an order. You keep the relationship and gain a payment record.",
      },
    ],
    related: [
      { label: "Marketplace chat", path: "/chat" },
      { label: "Escrow payments explained", path: "/escrow" },
      { label: "For sellers", path: "/for-sellers" },
      { label: "Selling from Instagram vs ChatCart", path: "/compare/instagram" },
    ],
  },
  {
    slug: "instagram",
    competitor: "Instagram",
    title: "Selling From Instagram DMs vs ChatCart: What Gets Lost",
    description:
      "Instagram is where many Nigerian sellers find buyers. Here is what happens between the DM and the payment, and how a chat-first marketplace closes the gap.",
    h1: "Selling from Instagram vs selling on ChatCart",
    lede: "Instagram is a superb discovery engine. The problem is everything after the DM, where the sale has to be finished by hand.",
    keywords: [
      "Instagram shop alternative",
      "selling on Instagram Nigeria",
      "ChatCart vs Instagram",
      "Instagram DM selling problems",
      "sell on Instagram without WhatsApp",
      "Instagram business Nigeria alternative",
    ],
    updated: UPDATED,
    sections: [
      {
        id: "discovery",
        heading: "Instagram solves discovery, and that is real",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A good product video on Instagram reaches an audience that no small shop could buy through advertising. Reels in particular have made it possible for a seller with a phone to be seen by strangers at scale, and that is genuinely valuable.",
              "Nothing about ChatCart replaces that reach. What it replaces is the conversation that follows, which on Instagram has to be reconstructed from scratch by every buyer.",
            ],
          },
        ],
      },
      {
        id: "what-gets-lost",
        heading: "What gets lost between the DM and the payment",
        blocks: [
          {
            kind: "bullets",
            items: [
              "The buyer has to describe or screenshot the item, because the DM does not know which post it came from.",
              "Price questions are asked repeatedly, and negotiated separately with every buyer.",
              "Payment is arranged entirely off the platform, usually by transfer, with no protection.",
              "There is no order state, so both sides track the sale in their own heads.",
              "None of it is reviewable afterwards, so a good seller cannot easily prove track record.",
            ],
          },
        ],
      },
      {
        id: "side-by-side",
        heading: "Side by side",
        blocks: [
          {
            kind: "table",
            headers: ["", "Selling from Instagram", "ChatCart"],
            rows: [
              ["Discovery", "Strong — Reels and Stories", "Video and photo feed, plus search and following"],
              ["Buyers' purchase intent", "Mixed — much of the audience is not shopping", "Browsing products by definition"],
              ["Item context in chat", "Lost between post and DM", "Attached automatically"],
              ["Negotiation record", "None", "Offers and counters, with expiry"],
              ["Payment protection", "None built in", "Escrow hold"],
              ["Order tracking for the buyer", "Not available", "Status in the deal thread"],
              ["Reviews tied to real orders", "No", "Yes, from completed orders"],
            ],
            caption: "Instagram wins the top of the funnel; the rest of the funnel is manual.",
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to use which",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Keep posting on Instagram. It is the best free reach most Nigerian sellers have, and it is where your audience already is.",
              "Use ChatCart when the sale needs finishing: when a buyer is ready to commit, move them to a place where the item is attached, the price is recorded and the payment is protected. The cost of doing that is one link; the cost of not doing it is the transaction you cannot recover when it goes wrong.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I keep selling on Instagram and use ChatCart too?",
        a: "Yes, and that is the intended use. Instagram remains the shop window; ChatCart is where the transaction is completed with an attached item and a protected payment.",
      },
      {
        q: "Does ChatCart have the same reach as Instagram?",
        a: "No. Instagram is a general social network with far larger audiences. ChatCart's feed reaches people who are actively browsing products, which is a smaller but far more purchase-ready audience.",
      },
      {
        q: "Why is the DM on Instagram a problem if it works?",
        a: "It works for the seller who has the time to answer every question manually. It stops working when volume grows, because the item context, the agreed price and the order status all have to be rebuilt from nothing in every conversation.",
      },
    ],
    related: [
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "Marketplace chat", path: "/chat" },
      { label: "ChatCart vs WhatsApp", path: "/compare/whatsapp" },
      { label: "For sellers", path: "/for-sellers" },
    ],
  },
  {
    slug: "tiktok",
    competitor: "TikTok",
    title: "Selling From TikTok in Nigeria vs a Chat-First Marketplace",
    description:
      "Short-form video sells, but the sale breaks between the video and the payment. How a chat-first marketplace with escrow compares to selling from TikTok.",
    h1: "Selling from TikTok vs selling on ChatCart",
    lede: "Short-form video is the most effective product demo format there is. The weakness is never the video; it is the handover at the end of it.",
    keywords: [
      "TikTok shop alternative Nigeria",
      "selling on TikTok Nigeria",
      "ChatCart vs TikTok",
      "how to sell on TikTok in Nigeria",
      "TikTok to WhatsApp selling",
      "video commerce Nigeria",
    ],
    updated: UPDATED,
    sections: [
      {
        id: "the-format",
        heading: "Why TikTok works for product discovery",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The format rewards demonstration. A short video of a product being worn, used or unboxed communicates more in fifteen seconds than a page of specifications, and the algorithm is unusually good at finding an audience for content that holds attention.",
              "For a Nigerian seller with good products and no advertising budget, it is one of the few remaining channels where reach can be earned rather than bought.",
            ],
          },
        ],
      },
      {
        id: "the-handover",
        heading: "The handover is where it breaks",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "In Nigeria, selling from short-form video usually means a link in a profile that leads to a chat app. The buyer leaves the video, lands in a conversation with no product attached, and the transaction is then arranged between two people with no protection on either side.",
              "Every step in that handover loses buyers, and the ones who complete it are the ones carrying the most risk. The video did its job and then handed the customer to the most fragile part of the process.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "The buyer has to find the account, then the link, then the chat — three chances to give up.",
              "The item is no longer attached by the time the conversation starts.",
              "Price and availability have to be re-established from scratch.",
              "The payment is a direct transfer with no hold and no dispute route.",
            ],
          },
        ],
      },
      {
        id: "side-by-side",
        heading: "Side by side",
        blocks: [
          {
            kind: "table",
            headers: ["", "Selling from TikTok", "ChatCart"],
            rows: [
              ["Discovery reach", "Very large, algorithmic", "Focused on buyers browsing products"],
              ["Product context after the video", "Lost — buyer lands in a chat with nothing attached", "Item attached to the thread"],
              ["Buying directly from the content", "Not in Nigeria, in practice", "Built in — buy from the post"],
              ["Price agreement", "Private, off-platform", "Offers and counters, recorded"],
              ["Payment protection", "Depends entirely on the two people involved", "Escrow hold"],
              ["Order status", "Not tracked", "Visible in the deal thread"],
            ],
            caption: "The video is the best part of both funnels. The difference is what follows it.",
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to use which",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Use short-form video for reach — post the same clips, and treat it as your advertising. Then move the buyer somewhere the purchase can actually be completed properly.",
              "If you are already posting product videos and already answering DMs, ChatCart does not ask you to change how you sell. It asks you to finish the sale in a place where the item, the price and the payment are all attached to each other.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I buy directly from a video on ChatCart?",
        a: "Yes. Posts in the feed are purchasable from where they are being watched, and the item is attached to the conversation if you want to ask questions first.",
      },
      {
        q: "Is ChatCart a replacement for TikTok?",
        a: "No. Short-form video is better at reaching strangers than a marketplace feed. ChatCart is where the transaction should happen once that reach has done its job.",
      },
      {
        q: "Why does a link-in-bio to WhatsApp lose sales?",
        a: "It asks the buyer to leave the content that interested them, then find the seller, then re-explain which product they meant — with the payment still unprotected at the end of all of it.",
      },
    ],
    related: [
      { label: "What is video commerce?", path: "/glossary/video-commerce" },
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "Marketplace chat", path: "/chat" },
      { label: "Escrow payments explained", path: "/escrow" },
    ],
  },
  {
    slug: "fixed-price-marketplaces",
    competitor: "Fixed-price marketplaces",
    title: "Fixed-Price Marketplaces vs a Chat-First Marketplace With Offers",
    description:
      "Large marketplaces suit buyers who know what they want. Here is how a chat-first, offer-driven marketplace differs, and when each one is the better choice.",
    h1: "Fixed-price marketplaces vs a marketplace built around conversation",
    lede: "Big marketplaces are excellent for a buyer who already knows the product they want. They are a poor fit for the way most Nigerian selling actually works — which is by talking.",
    keywords: [
      "Jumia alternative Nigeria",
      "Konga alternative",
      "fixed price marketplace vs offers",
      "best online marketplace Nigeria",
      "marketplace with negotiation",
      "buy and sell online Nigeria",
    ],
    updated: UPDATED,
    sections: [
      {
        id: "what-they-do-well",
        heading: "What large fixed-price marketplaces do well",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Structure: categories, filters and specifications make it easy to compare products.",
              "Buyer expectation: buyers arrive intending to purchase, so conversion intent is high.",
              "Logistics: established delivery networks reach buyers across many states.",
              "Scale: a large catalogue means a buyer can usually find what they came for.",
            ],
          },
        ],
      },
      {
        id: "where-they-do-not-fit",
        heading: "Where they do not fit how Nigeria sells",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A fixed price assumes there is one correct price, set by the seller, and that the buyer either accepts it or leaves. That is a poor description of a market where negotiation is normal, where the same product varies by quality and batch, and where many sellers would rather agree a price than lose a sale over a posted number.",
              "A search-driven catalogue also assumes a buyer who already knows what they want. A great deal of local selling is the opposite: the product creates the interest, and the buyer never searched for it.",
            ],
          },
          {
            kind: "table",
            headers: ["", "Fixed-price marketplace", "ChatCart"],
            rows: [
              ["How buyers arrive", "They search for a product", "They browse a feed and search"],
              ["Who sets the price", "The seller, unilaterally", "The seller lists it; the buyer can offer"],
              ["Negotiation", "Not part of the flow", "Offers, counters and acceptance"],
              ["Product presentation", "Catalogue photography and specs", "Video and photo stories"],
              ["Seller relationship", "Anonymous and transactional", "A conversation with a record"],
              ["Best for", "Standardised products bought by category", "Visual products and considered purchases"],
            ],
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to use which",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "If a product is standardised, has a known market price, and the buyer will search for it by name, a large fixed-price marketplace is often the better channel — its logistics and buyer intent are hard to beat.",
              "ChatCart fits the other half: visual products, one-off or small-batch stock, prices that genuinely vary, and buyers who want to ask something before they commit. Those are the sales that a fixed price loses and a conversation wins.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why allow negotiation at all?",
        a: "Because it is already happening. A fixed price does not remove haggling, it just pushes it somewhere the platform cannot see. Recording offers keeps the agreement and the protection intact.",
      },
      {
        q: "Are prices on ChatCart fixed?",
        a: "No. A seller can list a price, and a buyer can still make an offer. If an offer is accepted, the agreed amount is what gets charged.",
      },
      {
        q: "Does ChatCart have a large catalogue to search?",
        a: "It has search, categories and a following feed, but it is a growing marketplace rather than a large established catalogue. Its strength is discovery and transaction quality, not catalogue depth.",
      },
    ],
    related: [
      { label: "Offers and negotiation", path: "/offers" },
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "For buyers", path: "/for-buyers" },
      { label: "Escrow payments explained", path: "/escrow" },
    ],
  },
  {
    slug: "own-website",
    competitor: "A standalone store",
    title: "Do You Need Your Own Website? ChatCart vs a Standalone Store",
    description:
      "A standalone store gives you control; a marketplace brings the traffic. What each costs you in time and money, and how to decide which one you actually need.",
    h1: "A standalone online store vs selling on a marketplace",
    lede: "Owning your store sounds like the more serious choice. It is also the one that asks you to solve discovery, payments and delivery before you make a single sale.",
    keywords: [
      "online store without a website",
      "sell online without website Nigeria",
      "Shopify alternative Nigeria",
      "own website vs marketplace",
      "small business online store Nigeria",
      "start selling online Nigeria",
    ],
    updated: UPDATED,
    sections: [
      {
        id: "what-a-store-gives-you",
        heading: "What a standalone store gives you",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Full control of branding, layout and customer experience.",
              "You own the customer relationship and any data you collect.",
              "No marketplace commission — you keep the full sale price.",
              "No rules imposed by anyone else about what you can sell or how.",
            ],
          },
        ],
      },
      {
        id: "what-it-costs",
        heading: "What it costs you that is easy to underestimate",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A store does not come with customers. You have to generate every visit yourself, which usually means paid advertising — and in Nigeria, paid advertising against a cold audience is expensive and unforgiving.",
              "You also become responsible for everything the marketplace was doing: hosting, a domain, payment integration, delivery coordination, and the trust problem. A buyer who has never heard of your store has no reason to believe you will ship.",
            ],
          },
          {
            kind: "table",
            headers: ["", "Standalone store", "ChatCart"],
            rows: [
              ["Upfront cost", "Domain, hosting, platform fees", "None to list"],
              ["Who brings the buyers", "You, usually by paying for ads", "The feed, search and following"],
              ["Payment handling", "You set up and manage it", "Handled, with escrow in between"],
              ["Buyer trust", "You have to earn it from zero", "Platform protections apply to the order"],
              ["Commission", "None", "Commission from the seller on completed orders"],
              ["Full control", "Yes", "Within the platform's rules"],
            ],
          },
        ],
      },
      {
        id: "when-to-choose",
        heading: "When to use which",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "If you already have an audience, a repeat customer base, and the budget to keep feeding it, a store is a strong long-term asset — you keep the margin and the relationship.",
              "If you are starting out, or your customers currently arrive through social media, a marketplace gets you to your first sales without the cost of building and advertising a store. Many sellers run both: the store for returning customers, the marketplace for reach and for transactions they would rather not chase manually.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a website to sell on ChatCart?",
        a: "No. Listing, chatting, checkout and delivery details are all handled in the app from your phone.",
      },
      {
        q: "Is a marketplace cheaper than running a store?",
        a: "It is cheaper to start, because there is no domain, hosting or platform fee. The trade-off is commission on completed orders and less control over the experience.",
      },
      {
        q: "Can I use both?",
        a: "Yes, and many sellers do. A store suits repeat customers; a marketplace brings new ones and handles the payment risk on transactions with strangers.",
      },
      {
        q: "Will I own my customer data?",
        a: "You keep your customers and can communicate with them, but the platform holds the account and order records. A store gives you more direct ownership of that data.",
      },
    ],
    related: [
      { label: "For sellers", path: "/for-sellers" },
      { label: "ChatCart vs WhatsApp", path: "/compare/whatsapp" },
      { label: "How ChatCart works", path: "/how-it-works" },
      { label: "Features", path: "/features" },
    ],
  },
];

export function getComparisonPage(slug: string): ComparisonPage | undefined {
  return COMPARISON_PAGES.find((page) => page.slug === slug);
}

export const COMPARISON_SLUGS: string[] = COMPARISON_PAGES.map((page) => page.slug);
