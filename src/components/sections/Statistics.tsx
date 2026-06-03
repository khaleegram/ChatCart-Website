"use client";

import { motion } from "framer-motion";
import { CreditCard, Film, MessageCircle, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";

function ReelsFeedSimulation() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-[#fcfaf8] border border-black/5 flex items-center justify-center">
      <motion.div
        className="flex flex-col gap-2.5 w-[85%]"
        animate={{ y: [0, -50, -100, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.65, 1],
        }}
      >
        {[
          { label: "Summer Abaya", price: "₦28,000" },
          { label: "Silk Hijab", price: "₦8,500" },
          { label: "Modest Gown", price: "₦35,000" },
          { label: "Summer Abaya", price: "₦28,000" },
        ].map((item, i) => (
          <div
            key={i}
            className="h-10 rounded-xl bg-white shadow-sm border border-black/5 px-3 flex items-center gap-2.5"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#C49A6C] to-[#8B623E] shrink-0 flex items-center justify-center text-[10px] text-white font-black">
              👗
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-[9px] font-black text-[#17211f] truncate leading-none">{item.label}</p>
              <p className="text-[8px] font-bold text-[#A67C52] mt-0.5 leading-none">{item.price}</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#17211f]/5 flex items-center justify-center shrink-0">
              <Sparkles size={6} className="text-[#A67C52]" />
            </div>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#fcfaf8] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#fcfaf8] to-transparent pointer-events-none" />
    </div>
  );
}

function ContextDMSimulation() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-[#fcfaf8] border border-black/5 p-3 flex flex-col justify-end gap-2">
      {/* Buyer bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -5],
          scale: [0.95, 1, 1, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.15, 0.8, 1],
        }}
        className="self-start max-w-[85%] rounded-2xl rounded-tl-none bg-white px-3 py-2 text-[9px] font-bold text-[#17211f] shadow-sm border border-black/5 leading-relaxed"
      >
        Is this Abaya in stock?
      </motion.div>
      {/* Seller bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{
          opacity: [0, 0, 1, 0],
          y: [10, 10, 0, -5],
          scale: [0.95, 0.95, 1, 0.95],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.8, 1],
        }}
        className="self-end max-w-[85%] rounded-2xl rounded-tr-none bg-[#17211f] px-3 py-2 text-[9px] font-bold text-white shadow-sm leading-relaxed"
      >
        Yes! Auto-filled order ready.
      </motion.div>
    </div>
  );
}

function EscrowSimulation() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-[#fcfaf8] border border-black/5 flex items-center justify-center">
      <div className="relative flex items-center justify-center w-12 h-12">
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-500/40"
          animate={{ scale: [0.8, 1.8], opacity: [1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-500/25"
          animate={{ scale: [0.8, 2.3], opacity: [1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
        />
        <div className="relative z-10 w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20 shadow-inner">
          <ShieldCheck size={20} />
        </div>
      </div>
    </div>
  );
}

function SellInstantlySimulation() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded-2xl bg-[#fcfaf8] border border-black/5 flex items-center justify-center">
      <div className="relative w-[85%] h-[80%] rounded-xl bg-white shadow-sm border border-black/5 overflow-hidden flex items-center justify-center">
        {/* Simulating a blurry storefront image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-65 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.3)),url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200')]" />
        
        {/* Glowing Price Badge */}
        <motion.div
          className="relative z-10 flex items-center gap-1.5 rounded-full bg-[#17211f] text-white px-3 py-1.5 text-[9px] font-black shadow-lg border border-white/20"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <ShoppingBag size={10} className="text-[#C49A6C]" />
          <span>₦15,000</span>
        </motion.div>
      </div>
    </div>
  );
}

export function Statistics() {
  const pillars = [
    {
      sim: <ReelsFeedSimulation />,
      label: "Swipe & Shop",
      headline: "Reels Feed",
      sub: "Explore products through engaging full-screen video stories.",
    },
    {
      sim: <ContextDMSimulation />,
      label: "Smart Chat",
      headline: "Context DM",
      sub: "Send direct messages with item details automatically attached.",
    },
    {
      sim: <EscrowSimulation />,
      label: "Escrow Protected",
      headline: "Safe Checkout",
      sub: "Payments are held securely in escrow until delivery is confirmed.",
    },
    {
      sim: <SellInstantlySimulation />,
      label: "Sell Instantly",
      headline: "Zero Setup",
      sub: "Turn reels and media posts into shoppable items in seconds.",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-black/5">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map(({ sim, label, headline, sub }) => (
            <div
              key={label}
              className="group rounded-[30px] border border-black/5 bg-white p-5 hover:border-[#C49A6C]/30 hover:shadow-2xl hover:shadow-[#A67C52]/5 transition-all duration-300 flex flex-col"
            >
              {/* Interactive Visual Simulation Header */}
              <div className="mb-4">{sim}</div>

              {/* Title / Description */}
              <div className="mt-2 flex-grow">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#A67C52]">
                  {label}
                </span>
                <p className="mt-1 text-lg font-black text-[#17211f] group-hover:text-[#A67C52] transition-colors duration-200">
                  {headline}
                </p>
                <p className="mt-2 text-xs font-semibold leading-relaxed text-[#66746f]">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

