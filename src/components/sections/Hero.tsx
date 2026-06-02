"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, TrendingUp, ArrowRight, Play, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

// Floating animated chat bubble
const FloatingBubble = ({ text, sender, positionClass, delay }: { text: string, sender: 'buyer' | 'seller', positionClass: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 15 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay, 
      type: "spring", 
      stiffness: 100,
      damping: 15
    }}
    className={`absolute z-30 flex items-start gap-2.5 p-3 rounded-2xl text-[11px] font-medium shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl border ${positionClass} ${
      sender === 'buyer' 
        ? 'bg-[#181614]/95 border-white/10 text-white/90'
        : 'bg-[#A67C52]/95 border-[#C49A6C]/30 text-white'
    }`}
  >
    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 mt-0.5 ${sender === 'buyer' ? 'bg-[#A67C52]/20' : 'bg-black/20'}`}>
      {sender === 'buyer' ? '👤' : '🛍️'}
    </div>
    <div className="leading-snug">
      <p className="font-bold text-[9px] text-[#C49A6C] mb-0.5">{sender === 'buyer' ? 'Buyer enquiry' : 'Store reply'}</p>
      <p>{text}</p>
    </div>
  </motion.div>
);

// Floating animated notification
const PayoutAlert = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, x: -20 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.6, delay, type: "spring" }}
    className="absolute z-30 bottom-16 -left-12 bg-emerald-950/90 border border-emerald-500/30 text-emerald-300 p-3.5 rounded-2xl flex items-center gap-3 shadow-[0_24px_48px_rgba(16,185,129,0.25)] backdrop-blur-xl max-w-[200px]"
  >
    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-sm flex-shrink-0 text-emerald-400">
      <Zap size={16} />
    </div>
    <div>
      <p className="text-[9px] text-emerald-400/70 font-bold uppercase tracking-wider">Payout Dispatched</p>
      <p className="text-xs font-black text-white">₦128,500 sent</p>
    </div>
  </motion.div>
);

const PhoneMockup = () => (
  <div className="phone-frame w-[270px] h-[540px] flex-shrink-0 relative overflow-hidden bento-glow">
    {/* Screen glare/sheen */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

    {/* Status bar */}
    <div className="bg-[#0c0a08] h-12 flex items-center justify-between px-6 pt-6 relative z-10">
      <span className="text-white/80 text-[11px] font-semibold tracking-tight">9:41</span>
      <div className="flex gap-1.5 items-center">
        <span className="text-[10px] text-white/50">LTE</span>
        <div className="w-4.5 h-2.5 border border-white/40 rounded-[3px] relative flex items-center">
          <div className="absolute left-[2px] right-[4px] top-[2px] bottom-[2px] bg-white/80 rounded-[1px]" />
        </div>
      </div>
    </div>

    {/* App header */}
    <div className="bg-[#0c0a08]/90 backdrop-blur-md px-5 py-3 flex items-center justify-between border-b border-white/5 relative z-10">
      <span className="text-white font-black text-lg">Chat<span className="text-[#A67C52]">Cart</span></span>
      <div className="flex items-center gap-2 bg-white/5 border border-white/8 rounded-full px-3 py-1">
        <span className="text-white/40 text-[10px] font-medium">Search items...</span>
      </div>
    </div>

    {/* Product feed */}
    <div className="bg-[#0c0a08] h-[calc(100%-110px)] flex flex-col justify-between overflow-hidden">
      {/* Product container */}
      <div className="relative flex-1 bg-gradient-to-br from-[#1c1814] to-[#0c0a08] p-4 flex flex-col justify-between">
        {/* Product Card visual */}
        <div className="rounded-2xl overflow-hidden border border-white/5 bg-[#141210]/60 p-3 flex-1 flex flex-col justify-between">
          <div className="relative flex-1 rounded-xl bg-gradient-to-br from-[#2e261d] to-[#120f0c] border border-white/5 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,124,82,0.15)_0%,transparent_70%)]" />
            <ShoppingBag size={48} className="text-[#A67C52]/50 animate-pulse" />
            
            {/* Live badge */}
            <span className="absolute top-2.5 right-2.5 bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full">
              In Stock
            </span>
          </div>

          <div className="mt-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white font-bold text-sm">Luxury Ankara Jacket</p>
                <p className="text-white/40 text-[10px] mt-0.5">Fashion & Design • Lagos</p>
              </div>
              <div className="text-right">
                <p className="text-[#C49A6C] font-black text-base">₦45,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA in-app banner */}
        <div className="mt-3 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A67C52] to-[#8B623E] flex items-center justify-center text-[10px] text-white font-bold">
              FH
            </div>
            <div>
              <p className="text-white text-[10px] font-bold">FashionHub NG</p>
              <p className="text-white/40 text-[9px]">Verified Seller</p>
            </div>
          </div>
          <button className="bg-[#A67C52] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(166,124,82,0.3)]">
            Message Store
          </button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="px-5 py-3.5 bg-[#0c0a08]/90 border-t border-white/5 flex items-center justify-between text-white/45">
        <span className="text-[#A67C52] font-black text-xs">Feed</span>
        <MessageCircle size={15} />
        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[9px]">👤</span>
      </div>
    </div>
  </div>
);

const SellerDashMockup = () => (
  <div className="phone-frame w-[220px] h-[420px] flex-shrink-0 overflow-hidden bento-glow" style={{ animationDelay: "1s" }}>
    <div className="bg-[#0c0a08] h-full p-4 flex flex-col gap-3.5">
      {/* App Header info */}
      <div className="pt-6 flex justify-between items-center">
        <div>
          <p className="text-white/40 text-[8px] font-bold tracking-widest uppercase">My Shop</p>
          <p className="text-white font-black text-sm">Merchant Portal</p>
        </div>
        <span className="w-2.5 h-2.5 rounded-full bg-[#A67C52] animate-pulse" />
      </div>

      {/* Financials widget */}
      <div className="bg-gradient-to-br from-[#A67C52] to-[#8B623E] rounded-2xl p-3.5 shadow-xl relative overflow-hidden">
        <div className="absolute right-[-10px] top-[-10px] w-20 h-20 bg-white/5 rounded-full blur-xl" />
        <p className="text-white/70 text-[9px] font-semibold">Available for payout</p>
        <p className="text-white font-black text-lg mt-0.5">₦128,500</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[8px] text-white/50 font-medium">Bank transfer ready</span>
          <button className="bg-white text-[#8B623E] text-[9px] font-black px-2.5 py-1 rounded-lg">
            Withdraw
          </button>
        </div>
      </div>

      {/* Metrics mini grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 text-center">
          <p className="text-white font-black text-sm">24</p>
          <p className="text-white/40 text-[8px] mt-0.5">Active Products</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 text-center">
          <p className="text-emerald-400 font-black text-sm">98.2%</p>
          <p className="text-white/40 text-[8px] mt-0.5">Fulfilled</p>
        </div>
      </div>

      {/* Sales list */}
      <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col justify-between">
        <div>
          <p className="text-white/30 text-[8px] font-bold tracking-wider mb-2">RECENT SETTLEMENTS</p>
          {[["Amara S.", "₦12,000"], ["Kemi O.", "₦8,500"]].map(([name, amount], i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0">
              <span className="text-white text-[9px] font-medium">{name}</span>
              <span className="text-emerald-400 text-[9px] font-bold">{amount}</span>
            </div>
          ))}
        </div>
        <div className="text-center pt-2">
          <span className="text-[8px] text-[#A67C52] font-semibold">View financial ledger →</span>
        </div>
      </div>
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Background visual components */}
      <div className="absolute inset-0 z-0">
        <div className="glow-orb w-[750px] h-[750px] bg-[#A67C52]/10 top-[-250px] left-[-200px]" />
        <div className="glow-orb w-[550px] h-[550px] bg-[#A67C52]/8 bottom-[-150px] right-[-100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,124,82,0.06)_0%,transparent_70%)]" />
        {/* Dynamic mesh grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(166,124,82,0.6) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(166,124,82,0.6) 1.5px, transparent 1.5px)`,
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Copy Stack */}
          <div className="flex-1 text-center lg:text-left">
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/25 rounded-full px-4.5 py-2 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#A67C52] animate-ping" />
              <span className="text-[11px] font-black text-[#C49A6C] uppercase tracking-wider">Nigeria's Premier Social Marketplace</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-8"
            >
              <span className="text-white">Your store.</span>
              <br />
              <span className="gradient-text">Your rules.</span>
              <br />
              <span className="text-white/30 text-4xl sm:text-5xl lg:text-6xl">Your phone.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-medium"
            >
              ChatCart is the social marketplace app designed to empower Nigerian entrepreneurs. Showcase products via photo or video, talk directly to buyers, and secure checkout with Paystack.
            </motion.p>

            {/* Action Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4.5 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="btn-brand flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl text-base font-bold text-white shadow-xl"
              >
                <ShoppingBag size={19} />
                <span>Get App Free</span>
                <ArrowRight size={17} />
              </a>
              <a
                href="#how-it-works"
                className="btn-outline flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl text-base font-bold"
              >
                <Play size={15} className="text-[#A67C52] fill-[#A67C52]" />
                <span>Watch Walkthrough</span>
              </a>
            </motion.div>

            {/* Compliance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 mt-12 justify-center lg:justify-start"
            >
              {[
                { icon: ShieldCheck, label: "Paystack Partner" },
                { icon: CheckCircle2, label: "Zero Setup Fees" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-white/40 font-bold bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2">
                  <Icon size={14} className="text-[#A67C52]" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Multi-layered mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 flex items-end gap-6 justify-center relative select-none mt-8 lg:mt-0"
          >
            {/* Background halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#A67C52]/10 blur-[100px] pointer-events-none z-0 rounded-full" />

            {/* Animated Chat bubbles orbiting mockup */}
            <FloatingBubble 
              text="Hello! Is this fabric in stock?" 
              sender="buyer" 
              positionClass="-left-14 top-20 w-[180px]"
              delay={1.5}
            />

            <FloatingBubble 
              text="Yes! Delivery takes 2 days 🚚" 
              sender="seller" 
              positionClass="-right-12 top-[160px] w-[185px]"
              delay={2.3}
            />

            <PayoutAlert delay={3.0} />

            {/* Seller dashboard (in background, smaller) */}
            <div className="hidden sm:block mb-[-20px] opacity-60 hover:opacity-100 transition-opacity duration-300 relative z-10">
              <SellerDashMockup />
            </div>

            {/* Main phone (foreground) */}
            <div className="relative z-20 hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
