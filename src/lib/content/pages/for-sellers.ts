import type { ContentPage } from "../types";

export const forSellersPage: ContentPage = {
  slug: "for-sellers",
  title: "Sell Online in Nigeria Without Chasing Payment Screenshots",
  description:
    "Post a video, get orders that arrive already structured, and get paid from escrow once you ship. Built for Nigerian sellers who currently run on DMs.",
  h1: "Sell online without chasing payment screenshots",
  lede: "If you already sell through DMs, you have most of what you need. What you do not have is proof the money is real, a record of what was agreed, or a place where the order actually lives.",
  eyebrow: "For sellers",
  keywords: [
    "sell online in Nigeria",
    "how to sell on ChatCart",
    "seller dashboard app Nigeria",
    "get paid online Nigeria",
    "payout app for online sellers Nigeria",
    "online store for small business Nigeria",
    "sell fashion online Nigeria",
    "WhatsApp selling alternative",
    "no more payment screenshots",
  ],
  updated: "2026-09-29",
  sections: [
    {
      id: "what-changes",
      heading: "What actually changes when you sell here",
      blocks: [
        {
          kind: "bullets",
          items: [
            "Every incoming order arrives with the item attached, so you stop working out which post a buyer meant.",
            "The payment is already in escrow before you pack anything, so a transfer screenshot is never part of your process again.",
            "The price you agreed is recorded, so a buyer cannot reasonably claim a different number later.",
            "Your order list shows what needs packing, what is in transit and what has been paid out.",
            "Delivery details are collected at checkout instead of arriving as a paragraph of text.",
          ],
        },
      ],
    },
    {
      id: "your-order-list",
      heading: "Your orders, in one place",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Orders move through a small number of states and you always know which one you are looking at: an order waiting for acceptance, one you have accepted and are preparing, one you have marked as shipped, and one that is complete and paid.",
            "If you cannot fulfil an order, you can mark the item unavailable or ask for a little time. That is a real option rather than a silent delay, and it lets the buyer decide rather than wonder.",
          ],
        },
        {
          kind: "note",
          title: "Accepting an order is a promise you can keep",
          body: "Orders are not forced on you. If you do not accept one, it is cancelled and the buyer is refunded automatically. Saying no early is far cheaper than going quiet.",
        },
      ],
    },
    {
      id: "getting-paid",
      heading: "How you get paid",
      blocks: [
        {
          kind: "steps",
          steps: [
            {
              title: "The buyer's payment sits in escrow",
              body: "You can see that an order is paid before you spend money packaging it. That is the whole point of the hold.",
            },
            {
              title: "You ship and mark the order sent",
              body: "The release clock starts when the order is marked as sent, so ship and update promptly.",
            },
            {
              title: "Funds release",
              body: "Immediately if the buyer confirms delivery, or automatically 48 hours after the order was marked as sent if they do nothing and raise no issue.",
            },
            {
              title: "Withdraw to your bank",
              body: "Commission is deducted from the released amount and the remainder is your balance. Request a payout in-app — minimum ₦5,000 per payout, expected within about 3 business days.",
            },
          ],
        },
      ],
    },
    {
      id: "commission",
      heading: "What you pay",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "ChatCart takes a commission from the seller on completed orders. It is deducted when the funds are released, and the rate that applies is the rate in effect when the order was placed — a later rate change never applies backwards to an order you have already agreed.",
            "Nothing is charged on an order that is cancelled or refunded, because there is no released payment for a commission to come out of.",
          ],
        },
      ],
    },
    {
      id: "who-it-is-for",
      heading: "Who gets the most out of it",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Sellers whose buyers ask questions before buying, and whose stock changes fast enough that a static catalogue is never current: tailoring and ready-to-wear, footwear, bags and accessories, beauty and skincare, home and decor, and small-batch food.",
            "If you already post product videos and already answer DMs, you are not learning a new way to sell. You are moving the same conversation somewhere the money is protected.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "When do I actually get my money?",
      a: "Funds release to your balance as soon as the buyer confirms delivery, or automatically 48 hours after you mark the order as sent if the buyer takes no action. You then request a payout to your bank.",
    },
    {
      q: "How much is the commission?",
      a: "Commission is a percentage of the item price, taken from the released amount on a completed order. The rate that applies is the one in effect when the order was placed.",
    },
    {
      q: "Can I refuse an order?",
      a: "Yes. If you do not accept an order within 24 hours it is cancelled and the buyer is refunded automatically. Declining deliberately is better than leaving it to expire.",
    },
    {
      q: "What is the minimum payout?",
      a: "₦5,000 per payout request, with an expected processing time of about 3 business days.",
    },
    {
      q: "What if the buyer opens a dispute?",
      a: "The funds freeze and the order is reviewed with the listing, the conversation and the delivery record as evidence. Nothing is paid out while a dispute is open.",
    },
    {
      q: "Do I need a registered business?",
      a: "You need a bank account in your own name for payouts. Registering a business is not a requirement to start selling.",
    },
  ],
  related: [
    { label: "How ChatCart works", path: "/how-it-works" },
    { label: "Escrow payments explained", path: "/escrow" },
    { label: "Offers and negotiation", path: "/offers" },
    { label: "Marketplace chat", path: "/chat" },
    { label: "Social commerce in Nigeria", path: "/social-commerce" },
  ],
};
