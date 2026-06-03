"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  Heart,
  MapPin,
  MessageCircle,
  Music,
  Send,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

function FeedPhone() {
  return (
    <div className="phone-shell w-[315px] max-w-full relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-[26px]">
      <div className="relative min-h-[620px] overflow-hidden rounded-[26px] bg-[#0c0a08] text-white ring-1 ring-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(196,154,108,0.42),transparent_28%),linear-gradient(160deg,#2b2119_0%,#11100f_44%,#050505_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 flex items-center justify-between px-4 pt-4">
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-black backdrop-blur-md">
            For You
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white/70 backdrop-blur-md">
            Kano
          </div>
        </div>

        <div className="absolute right-4 top-36 z-10 flex flex-col items-center gap-5">
          <div className="rounded-full bg-gradient-to-br from-[#C49A6C] to-[#8B623E] p-[3px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#15110d] text-sm font-black">
              LS
            </div>
          </div>
          {[
            { icon: Heart, label: "12.8k" },
            { icon: MessageCircle, label: "340" },
            { icon: Bookmark, label: "Save" },
            { icon: Send, label: "Share" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-md">
                <Icon size={20} fill={label === "12.8k" ? "currentColor" : "none"} />
              </button>
              <span className="text-[10px] font-black text-white/85">{label}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pr-20">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#C49A6C] backdrop-blur-md">
            <Music size={12} />
            seller sound
          </div>
          <p className="text-lg font-black leading-tight">Handmade Abaya two-piece, available today</p>
          <p className="mt-2 text-xs font-semibold leading-5 text-white/72">
            @lola.styles_ng - Swipe into the full product story, ask questions, or checkout with escrow.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs font-bold text-white/70">
            <MapPin size={13} className="text-[#C49A6C]" />
            Kano
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-full bg-[#A67C52] px-4 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(166,124,82,0.35)]">
              Buy N38,000
            </button>
            <button className="rounded-full border border-white/18 bg-white/12 px-5 py-3 text-sm font-black backdrop-blur-md">
              DM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingCards() {
  return (
    <>
      {/* Top Left: Chat Context */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-20 z-30 hidden lg:block"
        style={{ transform: "translateZ(80px)" }}
      >
        <div className="soft-panel w-[240px] rounded-3xl p-5 shadow-2xl bg-white/95 backdrop-blur-xl border border-white/40">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4eadf] text-[#8B623E]">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-black text-[#17211f]">Instant Context</p>
              <p className="text-[11px] font-bold text-[#66746f]">DMs are auto-filled</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[#17211f] p-3 text-white relative">
             <div className="absolute -top-1.5 left-4 w-3 h-3 bg-[#17211f] rotate-45" />
             <p className="text-[11px] font-medium text-white/90 leading-relaxed relative z-10">
               "Hi, I saw this Abaya piece on your feed. Is it available in size M?"
             </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Right: Escrow Shield */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-16 bottom-24 z-30 hidden lg:block"
        style={{ transform: "translateZ(100px)" }}
      >
        <div className="rounded-[24px] p-5 shadow-2xl bg-[#17211f] text-white border border-white/10">
          <div className="flex items-center gap-4">
             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2b3a37] text-[#55d596]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <p className="text-base font-black text-white">Escrow Secured</p>
              <p className="mt-0.5 text-xs font-semibold text-white/60">Funds held till delivery</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Top Right: Recent Order */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-8 top-12 z-10 hidden lg:block"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="soft-panel flex items-center gap-3 rounded-2xl p-3 shadow-xl bg-white/90 backdrop-blur-md border border-white/30">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#C49A6C] to-[#8B623E] text-white">
            <ShoppingBag size={15} />
          </div>
          <div className="pr-2">
            <p className="text-[10px] font-bold text-[#66746f] uppercase tracking-wide">Just bought</p>
            <p className="text-xs font-black text-[#17211f]">Kano</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function Hero() {
  return (
    <section className="market-grid relative overflow-hidden pt-28 pb-20 lg:pt-36 bg-[#fcfaf8]">
      {/* Decorative gradient orb for background depth */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#C49A6C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="tag-pill mb-6 bg-white/80 backdrop-blur-sm shadow-sm border border-black/5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest text-[#17211f]">
              <Sparkles size={14} className="text-[#A67C52]" />
              The Next Gen of Social Commerce
            </div>
            <h1 className="display-title mt-2 max-w-3xl text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[68px] font-black tracking-[-0.03em] text-[#111]">
              Swipe like reels. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A67C52] to-[#d6b797]">Buy in the moment.</span>
            </h1>
            <p className="muted-copy mt-6 max-w-[480px] text-lg text-[#555] leading-[1.6]">
              ChatCart turns local shopping into an immersive feed. Swipe through products, DM sellers with auto-saved context, and checkout securely with escrow.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#app-preview" className="btn-primary flex items-center justify-center gap-2 rounded-full bg-[#17211f] px-8 py-4 text-[15px] font-black text-white transition-transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(23,33,31,0.15)]">
                Explore the feed
                <ArrowRight size={18} />
              </a>
              <a href="#features" className="btn-secondary flex items-center justify-center rounded-full border border-black/10 bg-white px-8 py-4 text-[15px] font-black text-[#17211f] transition-colors hover:bg-black/5">
                See how it works
              </a>
            </div>
            
            {/* Quick stats replacing the plain grid */}
            <div className="mt-14 flex items-center gap-6 border-t border-black/5 pt-8">
               <div className="flex -space-x-3">
                 {[
                   "https://i.pravatar.cc/100?img=12",
                   "https://i.pravatar.cc/100?img=33",
                   "https://i.pravatar.cc/100?img=47",
                   "https://i.pravatar.cc/100?img=28"
                 ].map((src, i) => (
                   <div key={i} className={`w-11 h-11 rounded-full border-[3px] border-[#fcfaf8] bg-gray-200 overflow-hidden relative z-[${40-i}]`} style={{ zIndex: 40 - i }}>
                     <img src={src} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div>
                 <div className="flex items-center gap-1.5">
                   <div className="flex gap-0.5 text-[#A67C52]">
                     {[1,2,3,4,5].map(star => <span key={star} className="text-[15px]">★</span>)}
                   </div>
                   <span className="text-[13px] font-black text-[#111]">4.9/5</span>
                 </div>
                 <p className="text-[13px] font-semibold text-[#666] mt-0.5">from 10k+ active buyers</p>
               </div>
            </div>
          </motion.div>

          {/* Right Content - The 3D Floating Ecosystem */}
          <motion.div
            id="app-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative flex justify-center mt-16 lg:mt-0"
            style={{ perspective: "1200px" }}
          >
            {/* 3D Wrapper */}
            <motion.div 
              className="relative w-full max-w-[400px] flex justify-center items-center"
              animate={{ rotateY: [-8, 2, -8], rotateX: [3, 7, 3] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d", transform: "rotateY(-12deg) rotateX(5deg) rotateZ(-2deg)" }}
            >
              {/* Decorative rings behind phone for depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-[#C49A6C]/20" style={{ transform: "translateZ(-80px)" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#C49A6C]/10" style={{ transform: "translateZ(-140px)" }} />
              
              <FeedPhone />
              <FloatingCards />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
