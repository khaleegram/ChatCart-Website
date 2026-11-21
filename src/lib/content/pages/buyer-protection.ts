import { keywordsForPage, SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

const { sellerAcceptWindowHours, autoReleaseAfterShipmentHours } = SITE.facts;

export const buyerProtectionPage: ContentPage = {
  slug: "buyer-protection",
  title: "Buyer Protection: Your Payment Is Held Until Delivery",
  description:
    "How Buyer Protection works on ChatCart: your payment is held safely, the seller is paid after you confirm delivery, and an open dispute pauses the payout.",
  h1: "Buyer Protection: the seller is paid after your order arrives",
  lede: "Buying from a stranger online means someone has to go first. With Buyer Protection you pay through ChatCart, your payment is held safely, and it is released to the seller only after you confirm the order — or the release window passes with no problem raised.",
  eyebrow: "Buyer Protection",
  keywords: keywordsForPage("/buyer-protection"),
  updated: "2026-11-21",
  sections: [
    {
      id: "why-buyer-protection",
      heading: "The problem Buyer Protection solves",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "In a normal transfer, one side always carries the risk. If the buyer pays first, they are trusting that the goods exist, that they match the description, and that they will actually be sent. If the seller ships first, they are trusting that a transfer screenshot is real.",
            "Neither side should have to take that bet with a stranger. Buyer Protection splits the risk in the middle: you pay through ChatCart at checkout, but the seller is not paid until you have the item in hand.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "You never send money directly into a stranger's account.",
            "The seller never ships against an unverified payment screenshot.",
            "Both sides can see the same order state instead of arguing about it.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How Buyer Protection works, step by step",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "You pay at checkout",
              body: "Payment is made in full through ChatCart and processed by Paystack. Your payment is held safely — it is not passed on to the seller at this point.",
            },
            {
              title: `The seller accepts within ${sellerAcceptWindowHours} hours`,
              body: `An order is not forced on a seller. If they do not accept it within ${sellerAcceptWindowHours} hours, the order is cancelled and you are refunded.`,
            },
            {
              title: "The seller ships and marks the order as sent",
              body: "The seller dispatches the item and records that it has been sent, which starts the release clock.",
            },
            {
              title: "You confirm, or raise a problem",
              body: `You can confirm receipt at any time, and the seller is then paid. If you do nothing and raise no issue, payment is released ${autoReleaseAfterShipmentHours} hours after the order was marked as sent.`,
            },
            {
              title: "The seller is paid",
              body: `After release, ChatCart's commission is deducted and the remainder is paid out to the seller. Sellers request payouts in-app, with a minimum of ₦${SITE.facts.minimumPayoutNgn.toLocaleString()} and an expected processing time of about ${SITE.facts.payoutProcessingBusinessDays} business days.`,
            },
          ],
        },
      ],
    },
    {
      id: "disputes",
      heading: "What happens when something is wrong",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "If the item does not arrive, does not match the listing, or arrives damaged, open a dispute instead of confirming. Opening a dispute pauses the automatic release — the payment stays on hold while the case is looked at.",
            "Because the whole transaction lives in one place, the evidence is already there: the listing you saw, the messages exchanged, the agreed price if one was negotiated, and the order's delivery state.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "A dispute pauses the payout rather than moving it.",
            "If it is decided in your favour, you are refunded to your original payment method.",
            "The conversation attached to the order becomes the record of what was agreed.",
          ],
        },
      ],
    },
    {
      id: "refunds",
      heading: "Refunds",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Refunds are returned through Paystack to the payment method you used. Once a refund is initiated, the timing belongs to the banks involved — so a refund is not always instant, and no platform can honestly promise that it is.",
            "If a seller never accepts an order, the order is cancelled and refunded without you having to ask.",
          ],
        },
      ],
    },
    {
      id: "fees",
      heading: "What Buyer Protection costs",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Any service fee that applies to an order is shown at checkout before you pay. ChatCart also earns a commission from the seller on completed orders, deducted when the payment is released.",
            "The commission rate that applies to an order is the one in effect when that order was placed — a later rate change does not apply backwards to an order already agreed.",
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "What Buyer Protection does not claim to be",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Buyer Protection is a way of timing when the seller is paid. It is not a bank account, not a wallet, and not an insurance policy, and it does not promise anything beyond what is described on this page. Payments are processed by Paystack, a licensed payment service provider.",
            "ChatCart is the marketplace where the sale happens. What Buyer Protection controls is the moment the seller is paid.",
          ],
        },
        {
          kind: "note",
          title: "Being precise about protection",
          body: "It is easy to describe any buyer protection as “100% safe”, and it is also untrue. What is true is narrower and more useful: the seller is not paid until the order is received or the release window passes, and you can pause the payout by raising a dispute. The full terms are in the Buyer Terms.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is Buyer Protection in simple terms?",
      a: "You pay through ChatCart instead of paying the seller directly. The seller is paid only after you receive the order — or, if nothing happens, after a fixed waiting period that begins when the seller marks the item as sent.",
    },
    {
      q: "How long does the seller have to accept an order?",
      a: `${sellerAcceptWindowHours} hours. If the seller does not accept in that time, the order is cancelled and you are refunded automatically.`,
    },
    {
      q: "How long before the seller gets paid?",
      a: `As soon as you confirm delivery. If you neither confirm nor raise a problem, payment is released automatically ${autoReleaseAfterShipmentHours} hours after the order was marked as sent.`,
    },
    {
      q: "What happens if I open a dispute?",
      a: "The automatic release stops and the payment stays on hold until the dispute is decided. If it is decided in your favour, you are refunded to your original payment method.",
    },
    {
      q: "Are refunds instant?",
      a: "No. A refund is sent back through Paystack to the original payment method as soon as it is approved, but the time it takes to appear depends on your bank, which ChatCart does not control.",
    },
    {
      q: "Does Buyer Protection cost extra?",
      a: "Any service fee is shown at checkout before you pay. ChatCart takes a commission from the seller from the released payment, at the rate in effect when the order was placed.",
    },
    {
      q: "Can a seller be paid before shipping?",
      a: "No. Your payment is held from the moment you pay until the order is received or the release window passes. A seller asking to be paid outside the app is asking you to give that protection up.",
    },
  ],
  related: [
    { label: "How ChatCart works end to end", path: "/how-it-works" },
    { label: "Chat with the item attached", path: "/chat" },
    { label: "Offers and price negotiation", path: "/offers" },
    { label: "What buyer protection covers", path: "/glossary/buyer-protection" },
    { label: "Buying safely online", path: "/for-buyers" },
  ],
};
