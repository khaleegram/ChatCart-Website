"use client";

import { motion } from "framer-motion";
import {
  Store, CreditCard, MessageCircle, BarChart3, TrendingUp, ShieldCheck,
  Package, Users, Truck, Megaphone, Bell, Hash, Sparkles
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;


export function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#A67C52]/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[10px] font-black text-[#C49A6C] uppercase tracking-wider">Feature Catalogue</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5">
            Built for modern <span className="gradient-text-brand">mobile sellers</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            Every feature you need to publish catalogs, process escrow payments, chat with buyers, and organize payouts in a simple, responsive app.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          
          {/* Card 1: Instant Storefront - Double Wide */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-[240px] h-full bg-gradient-to-l from-[#A67C52]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="max-w-sm">
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">01 • For Sellers</span>
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 mt-3.5 mb-5">
                  <Store size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Instant Mobile Storefront</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Go live in minutes. Add product pictures or video reels, set prices (fixed or negotiable), and publish immediately. No hosting or domain configuration needed.
                </p>
              </div>

              {/* Storefront Mock UI Widget */}
              <div className="w-full sm:w-[220px] bg-[#0c0a08] border border-white/5 rounded-2xl p-3.5 shadow-2xl relative z-10 flex-shrink-0">
                <p className="text-[9px] font-bold text-white/30 tracking-wider mb-2">STOREFRONT PREVIEW</p>
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#2e261d] to-[#120f0c] p-2 flex flex-col gap-2">
                  <div className="w-full h-24 bg-black/10 rounded-lg flex items-center justify-center border border-white/5 text-[#A67C52]">
                    <Sparkles size={20} className="animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white font-bold">Designer Dress</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[#C49A6C] text-[10px] font-black">₦35,000</span>
                      <span className="text-[8px] bg-[#A67C52]/10 border border-[#A67C52]/20 px-1.5 py-0.5 rounded text-white/60">Lagos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Paystack Payments - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">02 • Fast Checkout</span>
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-400 mt-3.5 mb-5">
                  <CreditCard size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Paystack Secured</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Accept cards, bank transfer, and USSD. Security protocols guarantee safe payment holding (escrow) until order receipt verification.
                </p>
              </div>

              {/* Checkout Status widget */}
              <div className="mt-6 bg-[#0c0a08] border border-white/5 rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-white/70 font-bold">Paystack Gate</span>
                </div>
                <span className="text-[9px] text-emerald-400 font-bold">ACTIVE</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Direct Buyer Chat - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">03 • Social Chat</span>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 mt-3.5 mb-5">
                  <MessageCircle size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Direct Negotiation</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Buyers contact sellers directly in-app. Negotiate details, confirm colors, send addresses — keep chat historical and secure without sharing personal phone numbers.
                </p>
              </div>

              {/* Message Alert widget */}
              <div className="mt-6 bg-blue-950/20 border border-blue-500/20 rounded-xl p-3.5 flex gap-2 items-center">
                <span className="text-base text-blue-400">💬</span>
                <div>
                  <p className="text-[9px] text-white/40 font-bold">INBOX ALERT</p>
                  <p className="text-[10px] text-white font-semibold">"Can you deliver to Ikeja?"</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Sales Analytics - Double Wide */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-[240px] h-full bg-gradient-to-l from-[#A67C52]/5 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="max-w-sm">
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">04 • Reporting</span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 mt-3.5 mb-5">
                  <BarChart3 size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Sales & Growth Analytics</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Track lifetime revenue, active orders queue, top performing listings, daily visitor details, and fulfillment ratios from a beautiful business dashboard.
                </p>
              </div>

              {/* Analytics graph widget */}
              <div className="w-full sm:w-[220px] bg-[#0c0a08] border border-white/5 rounded-2xl p-4 shadow-2xl flex-shrink-0">
                <p className="text-[9px] font-bold text-white/30 tracking-wider mb-3">MONTHLY TRENDS</p>
                <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
                  {[25, 45, 30, 60, 75, 55, 90].map((val, i) => (
                    <div key={i} className="flex-1 bg-[#A67C52]/10 rounded-t-sm relative group overflow-hidden" style={{ height: `${val}%` }}>
                      <div className="absolute inset-0 bg-[#A67C52] opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-[8px] text-white/30 mt-2.5 font-bold">
                  <span>JAN</span>
                  <span>MAR</span>
                  <span>MAY</span>
                  <span>JUL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Marketing Suite - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">05 • Promotion</span>
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/25 flex items-center justify-center text-pink-400 mt-3.5 mb-5">
                  <Megaphone size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Built-in Promotion</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Boost your products inside the discovery catalog, highlight listings to local buyers, and share links directly to social channels.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Order Lifecycle - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">06 • Operations</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mt-3.5 mb-5">
                  <Package size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Order Lifecycle Hub</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Monitor order state from processing, dispatch, delivery, through to final confirmation and payout release. Dispute systems are built-in.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 7: Logistics - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">07 • Shipping</span>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/25 flex items-center justify-center text-teal-400 mt-3.5 mb-5">
                  <Truck size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Custom Logistics</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Set dynamic delivery prices and zones. Address search functionality autofills buyer locations during payment for speed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 8: CRM & Customer Hub - Single Wide */}
          <motion.div
            variants={cardVariants}
            className="bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">08 • Retain</span>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mt-3.5 mb-5">
                  <Users size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Customer Profiles</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Track buyer interactions, order frequency, average value, and custom details. Identify top customers instantly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 9: Trending Hashtags - Double Wide */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 bento-glow glass rounded-3xl p-8 border border-white/5 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-[240px] h-full bg-gradient-to-l from-[#A67C52]/5 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="max-w-sm">
                <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">09 • Virality</span>
                <div className="w-10 h-10 rounded-xl bg-[#A67C52]/15 border border-[#A67C52]/25 flex items-center justify-center text-[#C49A6C] mt-3.5 mb-5">
                  <Hash size={18} />
                </div>
                <h3 className="text-xl font-black text-white mb-2">Hashtag Discovery Feed</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Increase discoverability organically. Add trending hashtag taxonomy to posts. The catalog algorithm suggests local sellers to nearby buyers automatically.
                </p>
              </div>

              {/* Hashtag Cloud Widget */}
              <div className="w-full sm:w-[220px] flex flex-wrap gap-2 pt-2 sm:pt-4">
                {[
                  "#AnkaraVibes",
                  "#LagosFashion",
                  "#NaijaSellers",
                  "#ShoeHubNG",
                  "#TechDeals",
                  "#PaystackSecure",
                  "#ChatCartFinds",
                ].map((tag, idx) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all duration-300 ${
                      idx === 1 
                        ? 'bg-[#A67C52] text-white border-[#C49A6C]/30 shadow-[0_4px_12px_rgba(166,124,82,0.35)] scale-105' 
                        : 'bg-white/5 text-white/60 border-white/5 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
