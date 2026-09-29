import { keywordsForPage } from "@/lib/seo";

import type { ContentPage } from "../types";

export const socialCommercePage: ContentPage = {
  slug: "social-commerce",
  title: "Social Commerce in Nigeria: What It Is and Why the DM Breaks It",
  description:
    "Social commerce in Nigeria runs on video discovery and DMs — but payment is where it fails. See how a chat-first, escrow-backed marketplace closes the loop.",
  h1: "Social commerce that finishes what the feed starts",
  lede: "Discovery in Nigeria already works. A video, a price, a DM — the top of the funnel is solved. What breaks is everything after the buyer says “I want it”.",
  eyebrow: "Social commerce",
  keywords: keywordsForPage("/social-commerce"),
  updated: "2026-09-29",
  sections: [
    {
      id: "what-it-is",
      heading: "What social commerce actually means",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Social commerce is buying and selling that starts in a social experience rather than a catalogue. The product is discovered in a feed, a video, a story or a chat, and the decision is made in that same context.",
            "It is different from a traditional marketplace in one important way: the buyer is not searching for a product, they are being shown one. The demand is created in the moment, which is exactly why the checkout has to be available in the moment.",
          ],
        },
      ],
    },
    {
      id: "the-gap",
      heading: "The gap is between the DM and the payment",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The social part of social commerce is genuinely solved. Sellers have audiences, buyers have attention, and the two meet constantly. The failure happens at the handover — the moment the conversation has to become a transaction.",
            "That handover is where the context dies, where the price is re-negotiated because nobody recorded the first agreement, and where one stranger has to send money to another stranger on trust.",
          ],
        },
        {
          kind: "table",
          headers: ["Stage", "How it usually runs", "Where it breaks"],
          rows: [
            [
              "Discovery",
              "A video or story shows the product with a price",
              "Buyer has to screenshot and find the seller",
            ],
            [
              "Enquiry",
              "Buyer DMs to ask about size, colour, availability",
              "Seller has to guess which item is meant",
            ],
            [
              "Price",
              "Negotiation happens privately in the DM",
              "No record of what was agreed, or when",
            ],
            [
              "Payment",
              "Buyer transfers, then sends a screenshot",
              "One side always carries all the risk",
            ],
            [
              "Fulfilment",
              "Seller ships and hopes the rest goes well",
              "Disagreements have no evidence trail",
            ],
          ],
          caption: "The same five stages, with the failure at each handover.",
        },
      ],
    },
    {
      id: "closing-the-loop",
      heading: "Closing the loop without slowing the feed down",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The instinct is to bolt a shopping cart onto a social app. That usually fails, because it asks the buyer to leave the moment that made them want the product.",
            "ChatCart keeps the moment intact and attaches the commerce to it. The feed stays a feed, the conversation stays a conversation, and the order is opened from inside the deal rather than from a separate checkout flow.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "Discovery stays a full-screen video and photo feed.",
            "The item, its price and its pictures follow the buyer into the chat automatically.",
            "Price is agreed with offers and counters, so the negotiation is recorded instead of lost.",
            "Payment goes into escrow, so neither side has to go first on trust.",
            "The order status lives in the same thread as the conversation about it.",
          ],
        },
      ],
    },
    {
      id: "who-it-suits",
      heading: "Who sells well this way",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "This model suits sellers whose products are visual and whose buyers ask questions before buying: fashion and tailoring, beauty, footwear, bags and accessories, home and decor, food and small-batch goods, and anyone whose stock changes frequently enough that a static catalogue is out of date before it is finished.",
            "It suits buyers who already shop this way on social media and simply want the payment to stop being the scary part.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is ChatCart a social network or a marketplace?",
      a: "It is a marketplace with a social discovery layer. Sellers post video and photo product stories that buyers swipe through, and every post can be bought from directly.",
    },
    {
      q: "How is this different from selling on Instagram or TikTok?",
      a: "Discovery looks similar. The difference is what happens afterwards: the item context, the negotiated price, an escrow payment and a dispute process are all part of the same transaction instead of being handled in a separate chat app.",
    },
    {
      q: "Do I need a website to sell?",
      a: "No. You post from your phone, and the listing, chat and checkout are all handled in the app.",
    },
    {
      q: "Is social commerce only for fashion?",
      a: "No, but it rewards products that benefit from being seen and discussed. Footwear, beauty, accessories, decor and small-batch food all work, as does anything where buyers routinely ask questions before committing.",
    },
  ],
  related: [
    { label: "What is social commerce?", path: "/glossary/social-commerce" },
    { label: "What is conversational commerce?", path: "/glossary/conversational-commerce" },
    { label: "Chat with the item attached", path: "/chat" },
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "Selling on ChatCart", path: "/for-sellers" },
  ],
};
