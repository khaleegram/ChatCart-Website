"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BadgeCheck, 
  LockKeyhole, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  ShieldAlert as DisputeIcon
} from "lucide-react";

interface SecurityState {
  icon: React.ComponentType<any>;
  title: string;
  copy: string;
  details: string;
}

const states: SecurityState[] = [
  { 
    icon: BadgeCheck, 
    title: "Seller verification", 
    copy: "Seller profiles, locations, and escrow performance histories stay attached to the product reel.",
    details: "Kano & Lagos verified badge"
  },
  { 
    icon: LockKeyhole, 
    title: "Protected checkout", 
    copy: "Checkout starts directly from the item, with funds held securely in escrow until you approve.",
    details: "ChatCart Escrow System"
  },
  { 
    icon: AlertTriangle, 
    title: "Transparent disputes", 
    copy: "If an item doesn't fit or match descriptions, easily freeze the payout to request mediation.",
    details: "One-click refund hold"
  },
];

export function Security() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // Active Icon for the Central Orb
  const ActiveIcon = activeFeature !== null ? states[activeFeature].icon : ShieldCheck;

  return (
    <section id="security" className="bg-[#17211f] text-white py-24 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#A67C52]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-emerald-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Headings */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="section-kicker text-[#C49A6C]">Trust UI</span>
            
            <h2 className="display-title mt-4 text-white text-4xl sm:text-5xl font-black tracking-tight leading-tight lg:max-w-md">
              Trust stays attached to the item.
            </h2>
            
            <p className="mt-5 text-[#889c96] font-medium leading-relaxed max-w-lg">
              Buyers never leave the product reel to negotiate elsewhere. Seller identity, chat, checkout, escrow, and delivery confirmation stay bound together.
            </p>

            {/* Accent Card / Stats indicator */}
            <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#C49A6C]" />
                <span className="text-[10px] font-black tracking-widest uppercase text-[#C49A6C]">Escrow Protection</span>
              </div>
              <p className="text-xs font-bold text-white/90 leading-relaxed mt-1">
                Zero naira fees on buyer protection. Funds are disbursed to sellers only when the buyer verifies delivery.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Glassmorphic Security Orb & Panels */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full relative min-h-[500px]">
            
            {/* Desktop View: Absolute Interactive Hub */}
            <div className="hidden md:flex relative w-full max-w-[480px] aspect-square items-center justify-center select-none">
              
              {/* Central Glowing Orb */}
              <div className="absolute w-64 h-64 rounded-full bg-emerald-950/20 border border-white/5 blur-2xl pointer-events-none" />
              
              {/* Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
                {/* Line to Panel 0 (Top-Left) */}
                <motion.line 
                  x1="50" y1="50" x2="22" y2="24" 
                  stroke={activeFeature === 0 ? "#C49A6C" : "rgba(255, 255, 255, 0.08)"} 
                  strokeWidth={activeFeature === 0 ? "1.5" : "0.75"} 
                  strokeDasharray={activeFeature === 0 ? "none" : "2 2"}
                  className="transition-colors duration-300"
                />
                {/* Line to Panel 1 (Bottom-Left) */}
                <motion.line 
                  x1="50" y1="50" x2="22" y2="76" 
                  stroke={activeFeature === 1 ? "#C49A6C" : "rgba(255, 255, 255, 0.08)"} 
                  strokeWidth={activeFeature === 1 ? "1.5" : "0.75"} 
                  strokeDasharray={activeFeature === 1 ? "none" : "2 2"}
                  className="transition-colors duration-300"
                />
                {/* Line to Panel 2 (Right) */}
                <motion.line 
                  x1="50" y1="50" x2="78" y2="50" 
                  stroke={activeFeature === 2 ? "#C49A6C" : "rgba(255, 255, 255, 0.08)"} 
                  strokeWidth={activeFeature === 2 ? "1.5" : "0.75"} 
                  strokeDasharray={activeFeature === 2 ? "none" : "2 2"}
                  className="transition-colors duration-300"
                />
              </svg>

              {/* Central Glass Shield */}
              <motion.div 
                animate={{ 
                  scale: activeFeature !== null ? 1.05 : 1,
                  boxShadow: activeFeature !== null ? "0 0 30px rgba(196, 154, 108, 0.2)" : "0 0 15px rgba(255, 255, 255, 0.02)"
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 md:w-36 md:h-36 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl float-soft"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#A67C52]/10 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature ?? "default"}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <ActiveIcon size={34} className={activeFeature !== null ? "text-[#C49A6C]" : "text-emerald-400"} />
                    <span className="text-[7px] font-black tracking-widest uppercase mt-2 text-white/50">
                      {activeFeature !== null ? "Shield Active" : "Shield Secure"}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Panel 0: Seller Verification (Top Left) */}
              <div 
                onMouseEnter={() => setActiveFeature(0)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`absolute left-0 top-[10%] w-[190px] transition-all duration-300 ${
                  activeFeature === null ? "opacity-90" : activeFeature === 0 ? "opacity-100 scale-102" : "opacity-45 scale-98"
                }`}
              >
                <div className={`p-4 rounded-2xl bg-white/5 border backdrop-blur-md transition-colors ${
                  activeFeature === 0 ? "border-[#C49A6C]/40 bg-white/10" : "border-white/10"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <BadgeCheck size={14} className="text-[#C49A6C]" />
                    <h3 className="font-extrabold text-[11px] uppercase tracking-wider text-white">Merchant Check</h3>
                  </div>
                  <p className="text-[10px] font-medium leading-relaxed text-[#889c96]">
                    Seller reviews, location registration, and verification badges remain pinned on reels.
                  </p>
                </div>
              </div>

              {/* Panel 1: Protected Escrow (Bottom Left) */}
              <div 
                onMouseEnter={() => setActiveFeature(1)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`absolute left-0 bottom-[10%] w-[190px] transition-all duration-300 ${
                  activeFeature === null ? "opacity-90" : activeFeature === 1 ? "opacity-100 scale-102" : "opacity-45 scale-98"
                }`}
              >
                <div className={`p-4 rounded-2xl bg-white/5 border backdrop-blur-md transition-colors ${
                  activeFeature === 1 ? "border-[#C49A6C]/40 bg-white/10" : "border-white/10"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <LockKeyhole size={14} className="text-[#C49A6C]" />
                    <h3 className="font-extrabold text-[11px] uppercase tracking-wider text-white">Escrow Checkout</h3>
                  </div>
                  <p className="text-[10px] font-medium leading-relaxed text-[#889c96]">
                    Transactions deposit directly into locked escrow. Funds release only when delivery is verified.
                  </p>
                </div>
              </div>

              {/* Panel 2: Dispute Resolution (Right) */}
              <div 
                onMouseEnter={() => setActiveFeature(2)}
                onMouseLeave={() => setActiveFeature(null)}
                className={`absolute right-0 top-[38%] w-[190px] transition-all duration-300 ${
                  activeFeature === null ? "opacity-90" : activeFeature === 2 ? "opacity-100 scale-102" : "opacity-45 scale-98"
                }`}
              >
                <div className={`p-4 rounded-2xl bg-white/5 border backdrop-blur-md transition-colors ${
                  activeFeature === 2 ? "border-[#C49A6C]/40 bg-white/10" : "border-white/10"
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={14} className="text-[#C49A6C]" />
                    <h3 className="font-extrabold text-[11px] uppercase tracking-wider text-white">Mediation Hub</h3>
                  </div>
                  <p className="text-[10px] font-medium leading-relaxed text-[#889c96]">
                    If fits are wrong or descriptions mismatch, freeze payouts and upload dispatch proof immediately.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile View: Vertical Stacking Layout */}
            <div className="md:hidden flex flex-col items-center gap-8 w-full select-none">
              {/* Floating Shield */}
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg relative">
                <ShieldCheck size={36} className="text-emerald-400" />
                <span className="text-[6.5px] font-black tracking-widest uppercase mt-2 text-white/40">Secure Shield</span>
              </div>

              {/* Stacked Cards */}
              <div className="flex flex-col gap-4 w-full">
                {states.map(({ icon: Icon, title, copy, details }) => (
                  <div key={title} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl bg-white/5 flex items-center justify-center text-[#C49A6C] border border-white/10">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-sm text-white">{title}</h3>
                        <p className="text-[8px] font-black uppercase text-[#C49A6C] tracking-wider mt-0.5">{details}</p>
                      </div>
                    </div>
                    <p className="text-xs font-semibold leading-relaxed text-[#889c96] mt-3">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-md p-5 sm:flex sm:items-center sm:justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#A67C52]/20 border border-[#A67C52]/30 rounded-xl flex items-center justify-center text-[#A67C52]">
              <ShieldCheck size={18} />
            </div>
            <p className="font-black text-[#fcfaf8] text-sm sm:text-base">
              Checkout state: Funds held securely in escrow until delivery confirmation.
            </p>
          </div>
          <p className="mt-3 text-xs sm:text-sm font-bold text-[#889c96] sm:mt-0 tracking-wide">
            Calm, visible, and 100% fraud-proof.
          </p>
        </div>

      </div>
    </section>
  );
}
