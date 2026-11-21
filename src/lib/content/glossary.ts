import type { ContentSection, Faq, RelatedLink } from "./types";

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** SEO title — the brand is appended by the root template. */
  title: string;
  description: string;
  /** One-sentence definition. Used for the index page and DefinedTerm schema. */
  shortDefinition: string;
  keywords: string[];
  sections: ContentSection[];
  faqs: Faq[];
  related: RelatedLink[];
  updated: string;
};

const UPDATED = "2026-09-29";

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: "social-commerce",
    term: "Social commerce",
    title: "What Is Social Commerce? Definition and How It Works in Nigeria",
    description:
      "Social commerce is buying and selling that starts inside a social experience rather than a product catalogue. Definition, examples and how it works in Nigeria.",
    shortDefinition:
      "Social commerce is the buying and selling of products that begins inside a social experience — a feed, a video, a story or a chat — rather than in a search-driven product catalogue.",
    keywords: [
      "what is social commerce",
      "social commerce definition",
      "social commerce meaning Nigeria",
      "examples of social commerce",
      "social commerce vs ecommerce",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Social commerce is retail that happens where people already spend attention. The product is discovered while scrolling, watching or chatting, and the decision to buy is made in that same context. E-commerce traditionally works the other way around: the buyer arrives with an intention and searches for it.",
              "The practical difference is who creates the demand. In a catalogue, the buyer brings the need and the platform satisfies it. In social commerce, the content creates the interest, which is why video, personality and social proof matter so much more than filters and category pages.",
            ],
          },
        ],
      },
      {
        id: "nigeria",
        heading: "How it works in Nigeria",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Nigerian social commerce is conversational by default. A seller posts a product to an audience, a buyer replies, and the deal is negotiated in a direct message. Almost all of it runs on the same three tools: a social app for discovery, a chat app for the conversation, and a bank transfer for the money.",
              "That combination works right up to the payment, and then it stops working. The chat app does not know which product is being discussed, the transfer has no protection for either side, and the price that was agreed exists only in two people's memory of the conversation.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Discovery is solved: sellers have audiences and buyers have attention.",
              "Negotiation is unrecorded: the agreed price lives in the chat history, at best.",
              "Payment is unprotected: one side always has to go first.",
              "Fulfilment is unverifiable: disputes have no shared evidence trail.",
            ],
          },
        ],
      },
      {
        id: "why-it-matters",
        heading: "Why the model matters commercially",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The strength of social commerce is conversion. Buying something you were just shown, from a person you have some connection to, converts far better than a cold product search. Its weakness is trust infrastructure, because the same intimacy that makes the sale easy makes the payment feel informal.",
              "That is the gap ChatCart is built for: keep the discovery and the conversation, and attach a recorded price and a protected payment to them so the informal part stays casual and the money part does not.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is social commerce in simple terms?",
        a: "Buying and selling that happens inside a social experience — a video feed, a story or a chat — instead of through a search box on a product catalogue.",
      },
      {
        q: "Is social commerce the same as e-commerce?",
        a: "No. E-commerce usually begins with a buyer who already knows what they want and searches for it. Social commerce begins with content that creates the interest, and the buying decision happens in the same place as the discovery.",
      },
      {
        q: "Is selling on WhatsApp social commerce?",
        a: "The selling usually is, but the discovery almost always happens somewhere else. WhatsApp is typically the middle of the funnel, which is precisely why the product context and the payment get lost there.",
      },
    ],
    related: [
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "What is conversational commerce?", path: "/glossary/conversational-commerce" },
      { label: "What is video commerce?", path: "/glossary/video-commerce" },
      { label: "Buyer Protection explained", path: "/buyer-protection" },
    ],
    updated: UPDATED,
  },
  {
    slug: "conversational-commerce",
    term: "Conversational commerce",
    title: "What Is Conversational Commerce? Definition and Examples",
    description:
      "Conversational commerce is buying and selling that happens inside a messaging conversation. Definition, examples, and the part most implementations get wrong.",
    shortDefinition:
      "Conversational commerce is buying and selling that takes place inside a messaging conversation, where the product, the price and the payment are handled through chat rather than a traditional checkout.",
    keywords: [
      "what is conversational commerce",
      "conversational commerce definition",
      "conversational commerce examples",
      "chat commerce meaning",
      "conversational commerce Nigeria",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Conversational commerce covers any transaction negotiated or completed through a messaging interface. It ranges from a simple “do you have this in medium?” to a full purchase completed without ever visiting a product page.",
              "The reason it exists is that many purchases have questions attached to them. Sizing, colour, condition, delivery timing, bulk pricing — a conversation resolves those faster than any filter or FAQ page, which is why buyers start one even when a catalogue could technically answer them.",
            ],
          },
        ],
      },
      {
        id: "what-goes-wrong",
        heading: "What most implementations get wrong",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Most conversational commerce is a chat window bolted onto a catalogue. The conversation and the transaction live in different systems, so the chat has no idea which product it is about and the order has no idea what was agreed in the chat.",
              "The result is that everyday facts get re-established in every conversation: which item, what price, whether it is available, whether the money arrived. Human beings can absorb that cost; systems cannot, which is why these setups rarely scale past a certain volume of messages.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "The item is not attached to the thread, so the seller has to interpret a screenshot.",
              "The agreed price is not recorded, so the checkout amount can differ from what was said.",
              "The payment is not connected to the conversation, so both sides rely on screenshots and trust.",
            ],
          },
        ],
      },
      {
        id: "done-properly",
        heading: "What it looks like when it is done properly",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The conversation should be the interface, not a distraction from it. That means the item travels into the thread automatically, an offer is a structured action rather than a sentence, and the payment and its status are visible inside the same conversation that produced them.",
              "On ChatCart a deal thread carries the item, the negotiated price, the protected payment and the order status together, so the conversation is the transaction rather than a discussion about it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is conversational commerce in one sentence?",
        a: "Buying and selling that happens through a messaging conversation instead of a traditional product page and checkout form.",
      },
      {
        q: "Is conversational commerce only for small businesses?",
        a: "No. It suits anything where buyers ask questions before committing, which includes large retailers selling considered or high-value items. It is simply more visible in markets where chat is already how people shop.",
      },
      {
        q: "Why does conversational commerce usually break at payment?",
        a: "Because the conversation and the payment system are separate. Without the item, the agreed price and the payment in one place, the negotiation ends up in a chat app and the money ends up somewhere neither party can verify.",
      },
    ],
    related: [
      { label: "Marketplace chat on ChatCart", path: "/chat" },
      { label: "What is social commerce?", path: "/glossary/social-commerce" },
      { label: "Offers and negotiation", path: "/offers" },
      { label: "Buyer Protection explained", path: "/buyer-protection" },
    ],
    updated: UPDATED,
  },
  {
    slug: "buyer-protection",
    term: "Buyer protection",
    title: "What Is Buyer Protection? What It Covers and What It Does Not",
    description:
      "Buyer protection is what a marketplace promises if a purchase goes wrong. What it usually covers, where the limits are, and how to judge a protection policy.",
    shortDefinition:
      "Buyer protection is a marketplace's commitment about what happens when a purchase goes wrong — typically a refund if the item never arrives or does not match the listing.",
    keywords: [
      "what is buyer protection",
      "buyer protection meaning",
      "buyer protection policy marketplace",
      "is buyer protection insurance",
      "buyer protection Nigeria",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Buyer protection is an umbrella term for whatever a platform does when a transaction fails the buyer. In practice it is usually a combination of a refund guarantee, a dispute process, and a payment hold that keeps the money reachable while the problem is worked out.",
              "The term is broad enough to be unhelpful on its own, which is why the useful question is never “do you have buyer protection?” but “what specifically happens, and by when?”",
            ],
          },
        ],
      },
      {
        id: "questions",
        heading: "The questions that actually test a policy",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Who is holding the money while the problem is being resolved?",
              "What has to be true for a refund to be issued — and who decides?",
              "Is the refund full or partial, and does anyone take a fee out of it?",
              "How long does the process take, and is there a deadline for raising the problem?",
              "What happens if the seller has already been paid?",
            ],
          },
          {
            kind: "text",
            paragraphs: [
              "A policy that cannot answer those questions is a marketing phrase rather than a protection. The answers matter more than the badge.",
            ],
          },
        ],
      },
      {
        id: "not-insurance",
        heading: "Buyer protection is not insurance",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Insurance is a regulated product backed by a capital reserve: you pay a premium and the insurer carries a defined risk. Buyer protection is normally a platform commitment about how it will handle its own transactions.",
              "That distinction is worth keeping, because platforms that blur it create a promise they cannot legally or financially stand behind. Where a fee is charged for protection, it should be described in terms of what it actually funds — payment processing, refund handling, dispute resolution — and not as cover against loss.",
            ],
          },
        ],
      },
      {
        id: "chatcart",
        heading: "How it works on ChatCart",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Protection on ChatCart comes from the payment hold rather than from a badge. The buyer pays through ChatCart with Buyer Protection, so the money has not reached the seller while a problem can still be raised. The seller has 24 hours to accept an order, funds release 48 hours after the order is marked as sent unless the buyer confirms or disputes, and a dispute freezes the payment entirely.",
              "ChatCart is the marketplace where the sale happens, and does not position Buyer Protection as insurance. The specific commitment is that the seller is not paid until the order is delivered, and that a dispute stops the money moving.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What does buyer protection cover?",
        a: "Typically a refund or a hold on the payment if the item never arrives, arrives damaged, or does not match the listing. What it covers exactly depends on the platform's published policy.",
      },
      {
        q: "Is buyer protection the same as insurance?",
        a: "No. Insurance is a regulated product with a capital reserve behind it. Buyer protection is generally a marketplace's own commitment about how it handles failed transactions on its platform.",
      },
      {
        q: "Does the buyer always get a full refund?",
        a: "That is the question worth asking before you buy. Where a payment processor's fee is not returned on a refund, some platforms pass part of it to the buyer — which is why a stated refund policy matters more than the protection badge.",
      },
      {
        q: "How do I raise a problem on ChatCart?",
        a: "Open a dispute on the order. It freezes the funds at the point they are at and stops the automatic release while the order is reviewed.",
      },
    ],
    related: [
      { label: "Buyer Protection explained", path: "/buyer-protection" },
      { label: "What is buyer protection?", path: "/glossary/buyer-protection" },
      { label: "Buying safely online", path: "/for-buyers" },
      { label: "Frequently asked questions", path: "/faq" },
    ],
    updated: UPDATED,
  },
  {
    slug: "social-commerce-marketplace",
    term: "Social commerce marketplace",
    title: "What Is a Social Commerce Marketplace? Definition and Examples",
    description:
      "A social commerce marketplace combines a social discovery feed with a transactional marketplace. Definition, how it differs from both, and why the combination matters.",
    shortDefinition:
      "A social commerce marketplace is a platform that combines social discovery — a feed of video and photo content — with real marketplace transactions: listings, checkout, payment and order management.",
    keywords: [
      "what is a social commerce marketplace",
      "social commerce marketplace definition",
      "social marketplace app",
      "social commerce platform examples",
      "marketplace with video feed",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "It is the overlap of two things that are usually separate. A social platform has discovery and attention but no transaction layer. A marketplace has the transaction layer but expects the buyer to arrive already searching.",
              "A social commerce marketplace keeps both: the feed creates demand, and the marketplace machinery — listings, payment, Buyer Protection, delivery, disputes, reviews — converts it without the buyer having to leave.",
            ],
          },
        ],
      },
      {
        id: "how-it-differs",
        heading: "How it differs from each half",
        blocks: [
          {
            kind: "table",
            headers: ["", "Social platform", "Fixed-price marketplace", "Social commerce marketplace"],
            rows: [
              ["Demand comes from", "The feed", "Buyer search", "The feed and search"],
              [
                "Price",
                "Negotiated privately, off-platform",
                "Set by the seller, take it or leave it",
                "Listed, and open to structured offers",
              ],
              [
                "Payment",
                "Arranged between the two parties",
                "Handled by the platform",
                "Held by the platform until delivery",
              ],
              [
                "Who carries the risk",
                "Whoever pays or ships first",
                "The platform's policy applies",
                "The Buyer Protection hold spreads it",
              ],
              [
                "Fulfilment record",
                "Lives in a chat app",
                "Tracked by the platform",
                "Tracked by the platform, in the deal thread",
              ],
            ],
            caption: "The same transaction, handled three different ways.",
          },
        ],
      },
      {
        id: "why-combined",
        heading: "Why the combination is difficult",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "The two halves pull in opposite directions. Social discovery rewards fast, low-friction browsing; a marketplace requires identity, payment, delivery details and an audit trail. Bolting a checkout onto a feed usually produces a flow the buyer abandons, which is why the combination is rarer than it sounds.",
              "The version that works keeps the friction behind a single conversation. The buyer watches a video, asks a question, agrees a price and pays — and the only additional steps are ones that protect them.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is a social commerce marketplace?",
        a: "A platform that pairs a social discovery feed with real marketplace transactions — listings, checkout, payment and order management — instead of stopping at discovery.",
      },
      {
        q: "How is it different from a normal marketplace?",
        a: "A normal marketplace waits for a buyer who is already searching. A social commerce marketplace creates the interest first, through video and photo content, then converts it in the same place.",
      },
      {
        q: "Does a social commerce marketplace need Buyer Protection?",
        a: "It does not strictly need it, but without a payment hold the risk of a transaction falls entirely on whichever side moves first — which is the problem that pushes buyers back to a search-driven marketplace.",
      },
    ],
    related: [
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "What is social commerce?", path: "/glossary/social-commerce" },
      { label: "What is video commerce?", path: "/glossary/video-commerce" },
      { label: "Features", path: "/features" },
    ],
    updated: UPDATED,
  },
  {
    slug: "video-commerce",
    term: "Video commerce",
    title: "What Is Video Commerce? Definition and Why It Converts",
    description:
      "Video commerce is selling through video content that a buyer can purchase from directly. Definition, the formats involved, and why it converts better than static listings.",
    shortDefinition:
      "Video commerce is buying and selling driven by video content — a product video, a live stream or a short-form clip — that a buyer can purchase from without leaving the video.",
    keywords: [
      "what is video commerce",
      "video commerce definition",
      "live shopping vs video commerce",
      "shoppable video meaning",
      "video commerce Nigeria",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Video commerce covers any format where motion content is the thing that sells. That includes short-form product clips, longer demonstrations, and live shopping where a host presents items in real time while viewers buy.",
              "What separates it from ordinary video advertising is the purchase path. In video commerce the buying action is attached to the video itself rather than sent somewhere else to be completed later.",
            ],
          },
        ],
      },
      {
        id: "why-it-works",
        heading: "Why video converts better than a product photo",
        blocks: [
          {
            kind: "bullets",
            items: [
              "Motion shows the things a photo hides: how fabric falls, how a bag is carried, how a product is actually used.",
              "A person demonstrating a product answers objections before the buyer has to ask.",
              "Short-form video is watched casually, which means it reaches buyers who were not shopping.",
              "The distance between seeing and buying is short — the purchase action sits on the video rather than three taps away.",
            ],
          },
        ],
      },
      {
        id: "the-gap",
        heading: "Where video commerce usually loses the sale",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Video gets attention and then hands the buyer to a broken checkout. On most social platforms the buyer watches the clip, then has to find the seller, ask the price, negotiate, and arrange a payment outside the platform entirely.",
              "Every one of those steps loses people, and the ones who persist are the ones most exposed to risk. Attaching the item, the price and a protected payment to the video is what closes the distance that the video itself created.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is video commerce?",
        a: "Selling through video content where the purchase action is attached to the video — short product clips, demonstrations, or live streams viewers can buy from.",
      },
      {
        q: "Is live shopping the same as video commerce?",
        a: "Live shopping is one format of it. Video commerce also covers pre-recorded short-form clips and longer product videos that remain purchasable after the moment they were posted.",
      },
      {
        q: "Why does video commerce need Buyer Protection?",
        a: "Because the buyer is usually committing to a seller they found through content rather than a business they know. A payment hold is what makes that commitment reasonable.",
      },
    ],
    related: [
      { label: "Social commerce in Nigeria", path: "/social-commerce" },
      { label: "What is social commerce?", path: "/glossary/social-commerce" },
      { label: "Buyer Protection explained", path: "/buyer-protection" },
      { label: "Features", path: "/features" },
    ],
    updated: UPDATED,
  },
  {
    slug: "payment-gateway",
    term: "Payment gateway",
    title: "What Is a Payment Gateway? Definition and How It Differs From Buyer Protection",
    description:
      "A payment gateway moves money between a buyer, a seller and the banks. Definition, what it does not do, and how it differs from buyer protection.",
    shortDefinition:
      "A payment gateway is the service that authorises and processes a card or bank payment on behalf of a business, moving money between the buyer's bank and the merchant.",
    keywords: [
      "what is a payment gateway",
      "payment gateway definition",
      "payment gateway vs Buyer Protection",
      "how does a payment gateway work",
      "payment gateway Nigeria",
    ],
    sections: [
      {
        id: "definition",
        heading: "The definition",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "A payment gateway is the plumbing between a checkout and the banking system. When a buyer pays, the gateway authorises the transaction with the buyer's bank, confirms the funds, and settles them to the business that collected them.",
              "It is concerned with the mechanics of moving money and with fraud detection on the payment itself. It is not concerned with whether the goods ever arrive, which is a separate problem entirely.",
            ],
          },
        ],
      },
      {
        id: "not-protection",
        heading: "A gateway is not protection",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "This is the distinction that trips people up. A gateway successfully processing a payment tells you the money is real and has moved. It does not tell you anything about whether the seller will ship, whether the item matches its description, or what happens if it does not.",
              "Protection comes from what sits on top of the gateway: who is holding the money, under what conditions it is released, and who can freeze it. That is the Buyer Protection layer, and it is a different product from the payment rail.",
            ],
          },
          {
            kind: "bullets",
            items: [
              "Gateways answer: did this payment succeed, and is it safe to accept?",
              "Buyer Protection answers: who is allowed to receive this money, and when?",
              "A marketplace needs both — one to take the payment, one to decide when it is released.",
            ],
          },
        ],
      },
      {
        id: "on-chatcart",
        heading: "How this works on ChatCart",
        blocks: [
          {
            kind: "text",
            paragraphs: [
              "Payments on ChatCart are processed by a payment service provider, which handles the authorisation and settlement. ChatCart's Buyer Protection layer sits above that: the payment is collected into the platform's control and held rather than passed on to the seller immediately.",
              "Refunds travel back through the same gateway to the original payment method — which is why a refund is not instant, and why the arrival time is set by the buyer's bank rather than by ChatCart.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is a payment gateway?",
        a: "The service that authorises and processes a payment between a buyer and a business, moving the money through the banking system on the merchant's behalf.",
      },
      {
        q: "Does a payment gateway protect buyers?",
        a: "Not by itself. It confirms the payment is real and successful. Whether the buyer is protected depends on what happens to the money after that — which is the Buyer Protection layer.",
      },
      {
        q: "Why are refunds not instant?",
        a: "The refund is sent back through the gateway as soon as it is approved, but the receiving bank sets how quickly it appears in the buyer's account.",
      },
    ],
    related: [
      { label: "Buyer Protection explained", path: "/buyer-protection" },
      { label: "What is buyer protection?", path: "/glossary/buyer-protection" },
      { label: "What is buyer protection?", path: "/glossary/buyer-protection" },
      { label: "Frequently asked questions", path: "/faq" },
    ],
    updated: UPDATED,
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((term) => term.slug === slug);
}

export const GLOSSARY_SLUGS: string[] = GLOSSARY_TERMS.map((term) => term.slug);
