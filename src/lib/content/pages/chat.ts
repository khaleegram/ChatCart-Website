import { keywordsForPage } from "@/lib/seo";

import type { ContentPage } from "../types";

export const chatPage: ContentPage = {
  slug: "chat",
  title: "Chat for Marketplace: Buyer & Seller Chat With the Item Attached",
  description:
    "ChatCart is marketplace chat where the item, its photos and its price are attached from the first message. Agree a price and pay into escrow in one thread.",
  h1: "Marketplace chat that already knows what you are asking about",
  lede: "On every other platform the conversation starts with a screenshot and a guessing game. On ChatCart the item, its photos and its price are already in the thread before you type a word.",
  eyebrow: "Chat-first commerce",
  keywords: keywordsForPage("/chat"),
  updated: "2026-09-29",
  sections: [
    {
      id: "the-problem",
      heading: "Why buyer and seller chat breaks everywhere else",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Social selling in Nigeria already runs on chat. The discovery happens in a video feed, and the selling happens in a direct message. The problem was never that people dislike messaging — it is that the message arrives with no memory attached to it.",
            "A buyer sees a dress in a story, screenshots it, finds the seller's number, and opens a fresh chat. The seller now has to work out which of forty posts the buyer means, what it cost, and whether it is still available. Multiply that by every buyer, every day.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "The context lives in a screenshot the seller has to interpret.",
            "The price gets asked again on every new thread, and again when it changes.",
            "Two threads about two different items look identical in a chat list.",
            "Nothing in the conversation is connected to the order, so nothing can be resolved automatically.",
          ],
        },
      ],
    },
    {
      id: "context-travels",
      heading: "The item travels with the message",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "When you message a seller from a post, ChatCart attaches a quote card to the opening message. The seller sees the exact item — its title, its photos or video cover, and its listed price — sitting inside the thread, with the conversation already open.",
            "That single detail is what makes the rest of the product possible. Because the thread knows which item it is about, an offer can be made against it, an escrow order can be opened against it, and a dispute can be settled against it.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "The opening message is written for you, so there is no blank box to fill in.",
            "The quote card stays in the thread as a permanent reference.",
            "The thread keeps a link back to the original post, so you can always see the item you are discussing.",
            "Sellers see which post a conversation belongs to at a glance in their inbox.",
          ],
        },
      ],
    },
    {
      id: "agree-a-price",
      heading: "Price is agreed in the same thread",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "Most local selling is negotiated, and pretending otherwise forces the negotiation into a place the platform cannot see. ChatCart keeps it in the open: a buyer can send an offer with an amount and an optional note, and the seller can accept it, decline it, or counter it.",
            "Offers expire, so a price agreed in June cannot be claimed in December. The thread records what was offered and what was accepted, which means the agreed price is a fact rather than a recollection.",
          ],
        },
        {
          kind: "note",
          title: "The agreed price wins",
          body: "When an offer is accepted, checkout uses that agreed amount rather than the listed price. The listing is a starting point; the conversation is where the real number is set.",
        },
      ],
    },
    {
      id: "payment-in-thread",
      heading: "Payment happens in the same thread",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "The thread does not dead-end at “send me your account number”. Checkout opens from the deal itself, the buyer pays into escrow, and the order status lives on the same screen as the conversation about it.",
            "That means the seller never has to take a payment screenshot on trust, and the buyer never has to wonder whether the money actually arrived. The state of the money is displayed by the system, not asserted by the other person.",
          ],
        },
        {
          kind: "bullets",
          items: [
            "Escrow holds the payment until the order is received.",
            "The thread shows one live status line — paid, preparing, shipped, completed, disputed — so both sides read the same state.",
            "Delivery details are collected at checkout instead of being typed into chat.",
          ],
        },
      ],
    },
    {
      id: "not-always-negotiation",
      heading: "Not every conversation has to be a negotiation",
      blocks: [
        {
          kind: "text",
          paragraphs: [
            "If an item has a price you are happy with, you can buy it directly from the post without opening a conversation at all. Chat is for the questions — sizing, colours, delivery timing, availability — not a toll gate on every purchase.",
            "If an item has no price at all, the buyer can ask for one, and the same context-attached thread opens with the item already in it.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Do I have to chat with a seller to buy on ChatCart?",
      a: "No. If the item has a price you accept, you can buy it directly from the post. Chat is there for questions and for negotiating, not as a required step.",
    },
    {
      q: "What is attached to the first message?",
      a: "A quote card carrying the item's title, its photos or video cover, and its listed price, plus a reference back to the original post. The seller does not have to work out which item you mean.",
    },
    {
      q: "How long does an offer stay open?",
      a: "Offers expire after 72 hours. After that the offer is no longer acceptable, so a price agreed long ago cannot be claimed later.",
    },
    {
      q: "Can the seller start the conversation?",
      a: "The thread exists because a buyer showed interest in a specific post, which is what makes the item context reliable. Sellers respond inside that thread rather than opening unattached conversations.",
    },
    {
      q: "Is my chat private?",
      a: "Chats are stored on ChatCart's systems. Conversations can be reviewed to resolve a dispute about an order, so treat anything you send in a deal thread as evidence in that deal.",
    },
    {
      q: "Why not just use WhatsApp?",
      a: "You can, and many sellers do. The difference is that WhatsApp has no idea which item you mean, cannot hold an offer, and cannot hold the money. ChatCart is the same conversation with the item, the agreed price and the escrow all attached to it.",
    },
  ],
  related: [
    { label: "How offers and counter-offers work", path: "/offers" },
    { label: "Escrow: money held until delivery", path: "/escrow" },
    { label: "Social commerce in Nigeria", path: "/social-commerce" },
    { label: "How ChatCart works, step by step", path: "/how-it-works" },
    { label: "Selling on ChatCart", path: "/for-sellers" },
  ],
};
