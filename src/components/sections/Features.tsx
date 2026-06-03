"use client";

import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Zap,
  ArrowRight,
  Send,
  Navigation,
} from "lucide-react";

// Mockup Graphic Components to go on the right side of each feature card

function ReelsFeedMock() {
  return (
    <div className="relative w-full max-w-[260px] h-[280px] bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col justify-between p-4">
      {/* Background Simulating a Video Story */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70 bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400')]" />
      
      {/* Top Header */}
      <div className="relative z-10 flex justify-between items-center">
        <div className="rounded-full bg-black/40 px-2.5 py-1 text-[9px] font-black text-white backdrop-blur">
          For You
        </div>
        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur">
          ★
        </div>
      </div>

      {/* Floating Action Column */}
      <div className="absolute right-3 bottom-16 flex flex-col gap-3.5 z-10">
        <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur">
          <Heart size={14} fill="white" className="text-white" />
        </div>
        <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur">
          <MessageCircle size={14} />
        </div>
        <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur">
          <Send size={14} />
        </div>
      </div>

      {/* Item info & checkout button */}
      <div className="relative z-10 space-y-2">
        <div>
          <p className="text-xs font-black text-white leading-tight">Linen Summer Set</p>
          <p className="text-[10px] font-bold text-white/70">₦32,000</p>
        </div>
        <button className="w-full py-2 bg-[#A67C52] text-white text-[10px] font-black rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-[#A67C52]/35">
          <ShoppingBag size={11} />
          Buy Instantly
        </button>
      </div>
    </div>
  );
}

function SmartDMMock() {
  return (
    <div className="relative w-full max-w-[260px] h-[280px] bg-white rounded-3xl p-4 shadow-2xl border border-black/5 flex flex-col justify-between">
      {/* Context header */}
      <div className="flex items-center gap-2 pb-2 border-b border-black/5">
        <div className="w-8 h-8 rounded-full bg-[#f4eadf] text-[#8B623E] flex items-center justify-center font-black text-xs">
          LS
        </div>
        <div>
          <p className="text-[10px] font-black text-[#17211f]">Lola's Styles</p>
          <p className="text-[8px] font-bold text-emerald-500">Active product chat</p>
        </div>
      </div>

      {/* Message thread */}
      <div className="flex-1 flex flex-col justify-end gap-2.5 my-3">
        {/* Product card inside chat */}
        <div className="self-start rounded-2xl bg-black/5 p-2 flex items-center gap-2 border border-black/5 max-w-[90%]">
          <div className="w-8 h-8 rounded bg-gray-200 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100')` }} />
          <div className="text-[8px] leading-tight">
            <p className="font-black text-[#17211f]">Linen Summer Set</p>
            <p className="font-bold text-[#A67C52] mt-0.5">₦32,000</p>
          </div>
        </div>

        {/* Text bubble */}
        <div className="self-start bg-emerald-500 text-white rounded-2xl rounded-tl-none px-3 py-2 text-[9px] font-bold shadow-sm max-w-[85%] leading-relaxed">
          "Hi Lola, is this linen set still available in Medium?"
        </div>
      </div>

      {/* Typing box */}
      <div className="rounded-full bg-black/5 px-3 py-2 text-[9px] font-bold text-black/40 flex justify-between items-center">
        <span>Message auto-filled...</span>
        <Send size={10} className="text-[#A67C52]" />
      </div>
    </div>
  );
}

function EscrowMock() {
  return (
    <div className="relative w-full max-w-[260px] h-[280px] bg-[#17211f] text-white rounded-3xl p-4 shadow-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} className="text-[#55d596]" />
          <span className="text-[9px] font-black uppercase tracking-wider text-[#55d596]">Escrow Lock</span>
        </div>
        <div className="text-[9px] font-bold text-white/50">ID #4928</div>
      </div>

      {/* Checkout States */}
      <div className="space-y-3.5 my-auto">
        {[
          { label: "1. Funds Held Securely", desc: "Held in ChatCart vault", active: true },
          { label: "2. Seller Dispatches", desc: "Delivery service tracking", active: true },
          { label: "3. Delivery Confirmed", desc: "Funds released to seller", active: false },
        ].map((step, idx) => (
          <div key={idx} className="flex gap-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black shrink-0 ${step.active ? "bg-emerald-500 text-white" : "bg-white/10 text-white/40"}`}>
              {idx + 1}
            </div>
            <div>
              <p className={`text-[10px] font-black ${step.active ? "text-white" : "text-white/40"}`}>{step.label}</p>
              <p className="text-[8px] font-semibold text-white/40 mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee Badge */}
      <div className="rounded-xl bg-white/5 p-2.5 text-center text-[9px] font-bold text-white/70 border border-white/5">
        🔐 Payment guaranteed.
      </div>
    </div>
  );
}

function DeliveryMock() {
  return (
    <div className="relative w-full max-w-[260px] h-[280px] bg-[#fbf8f2] rounded-3xl p-4 shadow-2xl border border-black/5 flex flex-col justify-between overflow-hidden">
      {/* Background Map Graphic Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A67C52_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-1.5">
          <Navigation size={13} className="text-[#A67C52]" />
          <span className="text-[9px] font-black uppercase tracking-wider text-[#A67C52]">Seamless Checkout</span>
        </div>
        <p className="text-xs font-black text-[#17211f] mt-1">Delivery Context</p>
      </div>

      {/* Auto-filled details */}
      <div className="relative z-10 space-y-2.5 my-auto bg-white p-3.5 rounded-2xl border border-black/5 shadow-sm">
        {[
          { label: "State & City", val: "Kano State" },
          { label: "Dispatch Option", val: "Standard Local Transit" },
          { label: "Auto-Fill Status", val: "Address details complete" },
        ].map((info, i) => (
          <div key={i} className="text-[9px]">
            <p className="font-bold text-[#8b9793] uppercase tracking-wide text-[7px]">{info.label}</p>
            <p className="font-black text-[#17211f] mt-0.5">{info.val}</p>
          </div>
        ))}
      </div>

      {/* Confirmation text */}
      <div className="relative z-10 py-2 bg-emerald-500/10 text-emerald-600 rounded-xl text-center text-[9px] font-black border border-emerald-500/20">
        ✓ No WhatsApp copying needed
      </div>
    </div>
  );
}

export function Features() {
  const cards = [
    {
      title: "Immersive reels feed for shopping",
      tag: "Social Discovery",
      copy: "Products open as full-screen video or photo stories. Shop naturally by swiping through engaging media reels instead of navigating slow, static catalogs.",
      bg: "bg-[#17211f] text-white border-white/10",
      accent: "text-[#C49A6C]",
      kickerColor: "text-[#C49A6C] border-white/10 bg-white/10",
      mockup: <ReelsFeedMock />,
    },
    {
      title: "Context-aware instant checkout chat",
      tag: "Smart Messaging",
      copy: "No more copying product codes or repeating size requests. When you slide into DMs, the seller receives a neat product thumbnail and size preferences auto-filled.",
      bg: "bg-[#fdfbf7] text-[#17211f] border-black/5",
      accent: "text-[#8B623E]",
      kickerColor: "text-[#8B623E] border-black/5 bg-[#8B623E]/5",
      mockup: <SmartDMMock />,
    },
    {
      title: "Direct escrow payment security",
      tag: "Buyer Protection",
      copy: "Purchase with complete confidence. Funds are locked securely in our secure vault until you confirm delivery, keeping transactions fully protected.",
      bg: "bg-[#f0f8f5] text-[#17211f] border-black/5",
      accent: "text-emerald-600",
      kickerColor: "text-emerald-600 border-emerald-500/10 bg-emerald-500/5",
      mockup: <EscrowMock />,
    },
    {
      title: "One-tap address details delivery",
      tag: "Zero Friction",
      copy: "Ditch the manual address explanations. Location-based integration saves your checkout details to dispatch orders without copy-pasting coordinates.",
      bg: "bg-[#fcf8ff] text-[#17211f] border-black/5",
      accent: "text-purple-600",
      kickerColor: "text-purple-600 border-purple-500/10 bg-purple-500/5",
      mockup: <DeliveryMock />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#fcfaf8]">
      <div className="section-wrap">
        {/* Header Block */}
        <div className="mb-20 max-w-3xl">
          <div className="tag-pill bg-white/80 backdrop-blur-sm border border-black/5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest text-[#17211f]">
            <Sparkles size={14} className="text-[#A67C52]" />
            Experience
          </div>
          <h2 className="display-title mt-4 text-[2.75rem] leading-[1.08] sm:text-5xl lg:text-[62px] font-black tracking-[-0.03em] text-[#111]">
            Commerce that behaves <br /> like social media.
          </h2>
          <p className="muted-copy mt-6 max-w-xl text-lg text-[#555] leading-relaxed">
            ChatCart removes the browse-search-cart loop. Discover products, chat with context, and buy securely—all inside a modern, fluid social experience.
          </p>
        </div>

        {/* Cinematic Vertical Scroll-Spy Stacking Cards */}
        <div className="relative flex flex-col gap-10">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`sticky w-full rounded-[38px] border p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 lg:gap-14 ${card.bg}`}
              style={{
                // Calculate incremental offsets so cards stack in a deck layout at the top of the viewport
                top: `${90 + index * 20}px`,
                // Scale later cards down slightly to give perspective depth as they stack
                transform: `scale(${1 - (cards.length - index - 1) * 0.015})`,
                transformOrigin: "top center",
              }}
            >
              {/* Left Details */}
              <div className="flex-1 space-y-6">
                <span className={`inline-block border px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${card.kickerColor}`}>
                  {card.tag}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed font-semibold">
                  {card.copy}
                </p>
                <div className="pt-4 flex items-center gap-2 text-xs font-black">
                  <Zap size={16} className={card.accent} />
                  <span>Designed for direct checkout flow</span>
                  <ArrowRight size={14} className="opacity-50" />
                </div>
              </div>

              {/* Right Graphical Mockup */}
              <div className="w-full md:w-auto shrink-0 flex justify-center items-center">
                {card.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

