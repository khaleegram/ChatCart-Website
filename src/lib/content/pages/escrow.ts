import { keywordsForPage, SITE } from "@/lib/seo";

import type { ContentPage } from "../types";

const { sellerAcceptWindowHours, autoReleaseAfterShipmentHours } = SITE.facts;

export const escrowPage: ContentPage = {
  slug: "escrow",
  title: "Escrow Payment in Nigeria: Money Held Until Delivery",
  description:
    "Escrow payments for online shopping in Nigeria. The buyer pays into escrow, the seller ships, and funds release on delivery — or freeze if there is a dispute.",
  h1: "Escrow that holds the money until the order actually arrives",
  lede: "Buying from a stranger online means someone has to go first. Escrow removes the guesswork: the buyer's money is held by the platform and released to the seller only once the order is received.",
  eyebrow: "Escrow & buyer protection",
  keywords: keywordsForPage("/escrow"),
  updated: "2026-09-29",
  sections: [
    {
      id: "why-escrow",
      heading: "The problem escrow solves",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "In a normal transfer, one side always carries the risk. If the buyer pays first, they are trusting that the goods exist, that they match the description, and that they will actually be sent. If the seller ships first, they are trusting that a transfer screenshot is real.",
            "Neither side should have to take that bet with a stranger. Escrow splits the risk in the middle: the buyer's money leaves their account immediately, but it does not reach the seller until the buyer has the item in hand.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "The buyer never sends money directly into a stranger's account.",
            "The seller never ships against an unverified payment screenshot.",
            "Both sides can see the same order state instead of arguing about it.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      heading: "How escrow works on ChatCart, step by step",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "The buyer pays into escrow",
              body: "Payment is made in full at checkout. The money is held — it is not paid on to the seller at this point.",
            },
            {
              title: `The seller accepts within ${sellerAcceptWindowHours} hours`,
              body: `An order is not forced on a seller. If they do not accept it within ${sellerAcceptWindowHours} hours, the order is cancelled and the buyer is refunded.`,
            },
            {
              title: "The seller ships and marks the order as sent",
              body: "The seller dispatches the item and records that it has been sent, which starts the release clock.",
            },
            {
              title: "The buyer confirms, or disputes",
              body: `The buyer can confirm receipt at any time, which releases the money immediately. If they do nothing and raise no issue, the funds release automatically ${autoReleaseAfterShipmentHours} hours after the order was marked as sent.`,
            },
            {
              title: "The seller is paid, and can withdraw",
              body: `On release the platform's commission is deducted and the remainder becomes the seller's withdrawable balance. Payouts are requested in-app, with a minimum of ₦${SITE.facts.minimumPayoutNgn.toLocaleString()} and an expected processing time of about ${SITE.facts.payoutProcessingBusinessDays} business days.`,
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
            "If the item does not arrive, does not match the listing, or arrives damaged, the buyer opens a dispute instead of confirming. Opening a dispute freezes the funds — the automatic release stops and the money stops moving until the case is looked at.",
            "Because the whole transaction lives in one place, the evidence is already there: the listing the buyer saw, the messages exchanged, the agreed price if one was negotiated, and the order's delivery state.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "A dispute freezes the payout rather than moving it.",
            "The outcome is either release to the seller or refund to the buyer.",
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
            "Refunds are returned through Paystack to the payment method used. Once a refund is initiated, the money leaves the platform immediately and the rest of the timing belongs to the banks involved — so a refund is not always instant, and no platform can honestly promise that it is.",
            "If a seller never accepts an order, the order is cancelled and refunded without the buyer having to ask.",
          ],
        },
      ],
    },
    {
      id: "fees",
      heading: "What escrow costs",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Buyers are not charged a separate escrow fee today. ChatCart earns a commission from the seller on completed orders, deducted when the funds are released.",
            "The commission rate that applies to an order is the one in effect when that order was placed — a later rate change does not apply backwards to an order already agreed.",
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "What escrow does not claim to be",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Escrow is a payment hold inside a marketplace, not a bank account and not an insurance policy. It protects a transaction from the other party, and it does not promise anything beyond that.",
            "ChatCart is the marketplace where the sale happens; the sale itself is between the buyer and the seller. What escrow controls is the moment the money moves.",
          ],
        },
        {
          kind: "note",
          title: "Being precise about protection",
          body: "It is easy to describe escrow as “100% safe”, and it is also untrue. What is true is narrower and more useful: the seller is not paid until the order is received, and either side can freeze the payment by raising a dispute.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is escrow in simple terms?",
      a: "A third party holds the buyer's money instead of passing it straight to the seller. The money is only released when the buyer receives the order — or, if nothing happens, after a fixed waiting period that begins when the seller marks the item as sent.",
    },
    {
      q: "How long does the seller have to accept an order?",
      a: `${sellerAcceptWindowHours} hours. If the seller does not accept in that time, the order is cancelled and the buyer is refunded automatically.`,
    },
    {
      q: "How long before the seller gets paid?",
      a: `The buyer can release the money as soon as they confirm delivery. If the buyer does neither confirms nor disputes, the funds release automatically ${autoReleaseAfterShipmentHours} hours after the order was marked as sent.`,
    },
    {
      q: "What happens if I open a dispute?",
      a: "The funds freeze. The automatic release stops and the payment stays where it is until the dispute is resolved in favour of the seller or the buyer.",
    },
    {
      q: "Are refunds instant?",
      a: "No. A refund is sent back through Paystack to the original payment method as soon as it is approved, but the time it takes to appear depends on the buyer's bank, which ChatCart does not control.",
    },
    {
      q: "Does escrow cost the buyer anything?",
      a: "There is no separate escrow charge to buyers today. ChatCart takes a commission from the seller from the released funds, at the rate in effect when the order was placed.",
    },
    {
      q: "Can a seller be paid before shipping?",
      a: "No. The payment is held from the moment the buyer pays until the order is received or the release window passes. A seller asking to be paid outside the app is asking the buyer to give that protection up.",
    },
  ],
  related: [
    { label: "How ChatCart works end to end", path: "/how-it-works" },
    { label: "Chat with the item attached", path: "/chat" },
    { label: "Offers and price negotiation", path: "/offers" },
    { label: "What is an escrow account?", path: "/glossary/escrow-account" },
    { label: "What buyer protection covers", path: "/glossary/buyer-protection" },
    { label: "Buying safely online", path: "/for-buyers" },
  ],
};
