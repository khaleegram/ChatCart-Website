/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ChatCart - Social Commerce for Local Sellers",
  description:
    "Learn how ChatCart turns short-form product discovery into contextual chat, escrow checkout, and local delivery.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#17211f] pt-24 pb-32">
      <div className="relative overflow-hidden py-24">
        <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 bg-[#A67C52]/10 blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="glass-brand mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="text-xs font-bold tracking-wide text-[#C49A6C]">Our Story</span>
          </div>
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            Built for social-first <br />
            <span className="gradient-text-brand">African commerce</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/55">
            ChatCart was born from a simple problem: buyers discover products on reels, TikTok, Instagram, and status posts, then lose the buying context inside messy WhatsApp conversations.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-16 px-6">
        <div className="section-divider" />

        <section>
          <h2 className="mb-4 text-2xl font-black text-white">The Problem We Solved</h2>
          <p className="mb-4 leading-relaxed text-white/55">
            Social media made local products exciting to discover, but it did not finish the buying journey. Buyers scroll endlessly, ask for seller numbers, move to WhatsApp, repeat product questions, negotiate without context, and hope payment goes safely.
          </p>
          <p className="leading-relaxed text-white/55">
            Sellers deal with the other side of that chaos: hundreds of chats, missing product references, repeated price questions, delivery confusion, and no clean path from interest to escrow-backed checkout.
          </p>
        </section>

        <div className="glass-brand rounded-3xl border border-[rgba(166,124,82,0.24)] p-10 text-center">
          <p className="mb-2 text-3xl font-black text-white">Our Mission</p>
          <p className="mx-auto max-w-xl text-xl font-semibold leading-relaxed text-[#C49A6C]">
            "To turn social discovery into safe, contextual commerce for every African seller."
          </p>
        </div>

        <section>
          <h2 className="mb-4 text-2xl font-black text-white">What We Built</h2>
          <p className="mb-4 leading-relaxed text-white/55">
            ChatCart combines a full-screen vertical product feed with serious commerce infrastructure. Sellers post video or photo stories. Buyers like, save, comment, DM, ask for price, or buy from the exact item they are viewing.
          </p>
          <p className="leading-relaxed text-white/55">
            The chat carries the product preview automatically, checkout can pre-fill local delivery context, and escrow keeps payment tied to the order until delivery is confirmed.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-black text-white">The Stack</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              ["React Native", "Mobile app"],
              ["FlashList", "Fast vertical feed"],
              ["Firebase", "Backend & database"],
              ["Paystack", "Payments & payouts"],
              ["Firestore", "Real-time chat"],
              ["Firebase Storage", "Video & media"],
            ].map(([tech, desc]) => (
              <div key={tech} className="glass rounded-2xl border border-white/10 p-5">
                <p className="mb-1 text-sm font-bold text-white">{tech}</p>
                <p className="text-xs text-white/40">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-8 text-center">
          <Link href="/#download" className="btn-brand inline-flex px-8 py-4 text-base">
            Explore ChatCart
          </Link>
        </div>
      </div>
    </div>
  );
}
