import { SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

export const forBuyersPage: ContentPage = {
  slug: "for-buyers",
  title: "Buy Online Safely in Nigeria: Escrow, Offers and Order Tracking",
  description:
    "Shop local sellers without sending money into a stranger's account. Pay into escrow, agree the price in chat, and track the order until it reaches you.",
  h1: "Buy from strangers without trusting them first",
  lede: "Ordering from someone you have never met should not require a leap of faith. On ChatCart the money waits until the order arrives, and either side can stop it going further.",
  eyebrow: "For buyers",
  keywords: [
    "buy online safely Nigeria",
    "how to buy on ChatCart",
    "escrow buyer protection Nigeria",
    "order tracking app Nigeria",
    "shop from local sellers Nigeria",
    "delivery to your door Nigeria",
    "online shopping without WhatsApp",
    "pay after delivery Nigeria",
  ],
  updated: "2026-09-29",
  sections: [
    {
      id: "what-you-get",
      heading: "What buying here gets you",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Your payment is held by ChatCart, not sent straight to the seller's account.",
            "You can negotiate the price instead of accepting or walking away.",
            "The conversation about an item is attached to that item, so nothing gets crossed.",
            "You can see exactly which stage your order is at, without asking anyone.",
            "If the item is wrong, you can freeze the payment with a dispute instead of arguing for a refund.",
          ],
        },
      ],
    },
    {
      id: "paying",
      heading: "What happens when you pay",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "You pay in full at checkout, and that money is held. The seller is not paid at that moment — they are paid when the order is received, or automatically after a fixed waiting period if you neither confirm nor raise an issue.",
            "The seller then has 24 hours to accept the order. If they do not, the order is cancelled and you are refunded without having to chase anyone.",
          ],
        },
        {
          kind: "note",
          title: "Getting your money back out",
          body: "Refunds are returned through the payment processor to the method you paid with. The transfer itself is immediate on ChatCart's side, but how quickly it shows up depends on your bank.",
        },
      ],
    },
    {
      id: "receiving",
      heading: "When it arrives — and when it does not",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "Confirm if it is right",
              body: "Confirming releases the money to the seller immediately. Only do it once you have the item in hand and are happy with it.",
            },
            {
              title: "Dispute if it is wrong",
              body: "Opening a dispute freezes the payment. Nothing moves to the seller while the case is open.",
            },
            {
              title: "Do nothing, and it releases anyway",
              body: `If you neither confirm nor dispute, the funds release ${SITE.facts.autoReleaseAfterShipmentHours} hours after the seller marked the order as sent. That window exists so sellers are not paid late for orders that went fine — which makes it worth opening a dispute if something is genuinely wrong.`,
            },
          ],
        },
      ],
    },
    {
      id: "judging-a-seller",
      heading: "Working out who to buy from",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Reviews on ChatCart come from buyers who actually completed an order, so they are attached to real transactions rather than to whoever asks loudest. Sellers also carry their listing history and the item videos they have posted.",
            "The strongest protection is still the one you control: keep the negotiation and the payment in the app, because that is what keeps the escrow and the evidence intact.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is it safe to pay a seller I do not know?",
      a: "The payment goes into escrow rather than into the seller's account, and only releases to them when the order is received or the release window passes. If something goes wrong, a dispute freezes the money before it reaches the seller.",
    },
    {
      q: "What if the item never arrives?",
      a: "Open a dispute. The funds freeze and the order is reviewed against the listing, the conversation and the delivery record.",
    },
    {
      q: "Can I pay after delivery instead?",
      a: "Escrow is the middle ground: you pay up front, but the seller cannot touch the money until the order is delivered. It gives the seller the certainty to ship and gives you the protection of not paying them directly.",
    },
    {
      q: "Do I need to negotiate?",
      a: "No. If the listed price works for you, buy it directly. Offers are there for when you want to try a different number.",
    },
    {
      q: "How do I track my order?",
      a: "The deal thread shows one live status line for the order — awaiting acceptance, preparing, shipped, completed, disputed or cancelled — so you always know which stage it is at.",
    },
    {
      q: "What if the seller asks me to pay outside the app?",
      a: "You can, but you give up escrow, the record of the agreed price, and any ability to dispute. That is a worse deal than the one offered inside the app.",
    },
  ],
  related: [
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "Offers and negotiation", path: "/offers" },
    { label: "How ChatCart works", path: "/how-it-works" },
    { label: "Marketplace chat", path: "/chat" },
    { label: "Frequently asked questions", path: "/faq" },
  ],
};
