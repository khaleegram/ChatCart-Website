"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle, 
  Lock, 
  Wallet, 
  Boxes, 
  FileText,
  Clock,
  Sparkles,
  Smartphone,
  Check,
  Slash
} from "lucide-react";

export function Sellers() {
  const [hoveredCard, setHoveredCard] = useState<"whatsapp" | "chatcart" | null>(null);

  const perks = [
    {
      title: "Context Travels with the DM",
      desc: "Every buyer message comes pre-attached with product name, selected size, price, and active video reel thumbnail."
    },
    {
      title: "Verify Payments Instantly",
      desc: "No more checking fake screenshots. See real-time escrow state verified by ChatCart before preparing items."
    },
    {
      title: "One-Tap Bank Payouts",
      desc: "Funds are released immediately upon delivery and can be withdrawn straight to GTBank, Stanbic, or Access Bank."
    }
  ];

  return (
    <section id="sellers" className="py-24 bg-[#fcfaf8] relative overflow-hidden">
      
      {/* Decorative background grid and blurs */}
      <div className="absolute top-1/2 left-0 right-0 h-[300px] bg-[radial-gradient(circle_at_center,_rgba(166,124,82,0.04),_transparent_60%)] pointer-events-none -translate-y-1/2" />

      <div className="section-wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Context Details */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="section-kicker text-[#A67C52]">Seller Workflow</span>
            
            <h2 className="display-title mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#17211f]">
              Sellers stop chasing scattered messages.
            </h2>
            
            <p className="muted-copy mt-5 text-[#55635f] font-medium leading-relaxed">
              DMs are automatically structured, transactions are escrow-guaranteed, and shipping tags are printed in one flow.
            </p>

            {/* List of Perks */}
            <div className="mt-8 flex flex-col gap-5">
              {perks.map(({ title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-2xl bg-white border border-[#eae6df]/60 shadow-[0_4px_20px_rgba(23,33,31,0.02)]">
                  <div className="h-6 w-6 rounded-full bg-[#fdf5ee] border border-[#A67C52]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A67C52]">
                    <CheckCircle2 size={14} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-[#17211f]">{title}</h3>
                    <p className="text-xs font-semibold text-[#66746f] mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Chaotic WhatsApp vs Clean ChatCart Interactive Comparison */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[520px] w-full max-w-[540px] lg:max-w-none mx-auto">
            
            {/* Instruction Badge */}
            <div className="absolute top-0 bg-[#17211f]/90 text-white font-extrabold text-[10px] tracking-wider uppercase px-4.5 py-2 rounded-full border border-white/10 shadow-lg z-30 pointer-events-none flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles size={11} className="text-[#C49A6C]" />
              <span>Hover cards to examine details</span>
            </div>

            <div className="w-full relative h-[460px] flex items-center justify-center mt-8">
              
              {/* CARD 1: WhatsApp Chaos */}
              <motion.div
                onMouseEnter={() => setPersonaHover("whatsapp")}
                onMouseLeave={() => setPersonaHover(null)}
                onTouchStart={() => setPersonaHover("whatsapp")}
                animate={{
                  scale: hoveredCard === "whatsapp" ? 1.04 : hoveredCard === "chatcart" ? 0.90 : 1,
                  rotate: hoveredCard === "whatsapp" ? 0 : -5,
                  zIndex: hoveredCard === "whatsapp" ? 30 : 10,
                  x: hoveredCard === "whatsapp" ? "-15px" : "-45px",
                  y: hoveredCard === "whatsapp" ? "-5px" : "15px",
                  filter: hoveredCard === "chatcart" ? "blur(1.5px) grayscale(45%)" : "none",
                  opacity: hoveredCard === "chatcart" ? 0.45 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute w-[265px] h-[390px] bg-[#ebe7df] rounded-[28px] border-3 border-[#c4beaf] shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col justify-between font-sans select-none cursor-pointer"
              >
                {/* Header */}
                <div className="bg-[#075e54] text-white p-3 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                    <span className="font-extrabold text-[9px] uppercase tracking-wider">WhatsApp Chats</span>
                  </div>
                  <span className="bg-red-500 text-white font-black text-[7px] px-1.5 py-0.5 rounded-full">
                    99+ unread
                  </span>
                </div>

                {/* Main Chats list representation */}
                <div className="flex-1 p-2 space-y-2.5 overflow-hidden bg-white/70">
                  
                  {/* Chat 1 */}
                  <div className="p-2 bg-white rounded-xl border border-red-500/20 shadow-2xs relative">
                    <div className="flex justify-between items-start">
                      <p className="font-black text-[8px] text-[#17211f]">Aisha Kano Buyer</p>
                      <span className="bg-red-500 w-1.5 h-1.5 rounded-full" />
                    </div>
                    <p className="text-[7.5px] font-semibold text-[#55635f] mt-0.5 truncate italic">"is this abaya N15,000 last? what of delivery to Kaduna?"</p>
                  </div>

                  {/* Chat 2 */}
                  <div className="p-2 bg-white rounded-xl border border-[#eae6df] shadow-2xs">
                    <div className="flex justify-between items-start">
                      <p className="font-black text-[8px] text-[#17211f]">Chidi Kaduna</p>
                      <span className="text-[6px] font-bold text-[#99a6a2]">2h ago</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 bg-[#eae6df]/40 p-0.8 rounded text-[6.5px] font-bold text-[#66746f]">
                      <span className="italic">📎 screenshot_321.jpg</span>
                    </div>
                    <p className="text-[7.5px] font-semibold text-[#55635f] mt-0.5 italic">"Check screenshot i sent alert. ship today please"</p>
                  </div>

                  {/* Chat 3 */}
                  <div className="p-2 bg-white rounded-xl border border-red-500/20 shadow-2xs">
                    <div className="flex justify-between items-start">
                      <p className="font-black text-[8px] text-[#17211f]">Unknown Number</p>
                      <AlertCircle size={8} className="text-red-500" />
                    </div>
                    <p className="text-[7.5px] font-semibold text-[#55635f] mt-0.5 italic">"price? size? location? do you do pay on delivery?"</p>
                  </div>

                  {/* Chat 4 */}
                  <div className="p-2 bg-white rounded-xl border border-[#eae6df] shadow-2xs opacity-70">
                    <p className="font-black text-[8px] text-[#17211f]">Bala Abuja Shop</p>
                    <p className="text-[7.5px] font-semibold text-[#55635f] mt-0.5 truncate">"Waiting for account details to send money..."</p>
                  </div>

                </div>

                {/* Footer Bar */}
                <div className="bg-[#f0ece3] p-2 text-center border-t border-[#c4beaf]/30">
                  <p className="text-[6.5px] font-black text-red-600 uppercase tracking-widest flex items-center justify-center gap-1">
                    <AlertCircle size={8} />
                    <span>Scattered & Unstructured</span>
                  </p>
                </div>
              </motion.div>

              {/* CARD 2: ChatCart Clarity */}
              <motion.div
                onMouseEnter={() => setPersonaHover("chatcart")}
                onMouseLeave={() => setPersonaHover(null)}
                onTouchStart={() => setPersonaHover("chatcart")}
                animate={{
                  scale: hoveredCard === "chatcart" ? 1.04 : hoveredCard === "whatsapp" ? 0.90 : 1.02,
                  rotate: hoveredCard === "chatcart" ? 0 : 5,
                  zIndex: hoveredCard === "chatcart" ? 30 : 20,
                  x: hoveredCard === "chatcart" ? "15px" : "45px",
                  y: hoveredCard === "chatcart" ? "-5px" : "-10px",
                  filter: hoveredCard === "whatsapp" ? "blur(1px) grayscale(10%)" : "none",
                  opacity: hoveredCard === "whatsapp" ? 0.55 : 1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute w-[265px] h-[390px] bg-white rounded-[28px] border-3 border-[#A67C52]/20 shadow-[0_25px_60px_rgba(23,33,31,0.14)] overflow-hidden flex flex-col justify-between font-sans select-none cursor-pointer"
              >
                {/* Header */}
                <div className="bg-[#17211f] text-white p-3 pt-4 flex items-center justify-between border-b border-[#A67C52]/10">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-extrabold text-[9px] uppercase tracking-wider">ChatCart Inbox</span>
                  </div>
                  <span className="text-[7.5px] text-[#C49A6C] font-black uppercase tracking-wider">
                    Clarity
                  </span>
                </div>

                {/* Dashboard statistics banner */}
                <div className="bg-[#17211f] px-3 pb-3 text-white">
                  <div className="bg-gradient-to-br from-[#A67C52] to-[#8B623E] rounded-xl p-2.5 flex justify-between items-center shadow-md">
                    <div>
                      <p className="text-[6.5px] text-white/75 font-black uppercase tracking-wider">Escrow Balance</p>
                      <p className="text-sm font-black mt-0.5">₦128,500</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="bg-[#17211f] text-white font-extrabold text-[7px] px-2 py-0.8 rounded-full border border-white/10 flex items-center gap-0.5 shadow-sm">
                        <Wallet size={7} />
                        <span>Payout</span>
                      </span>
                      <p className="text-[5.5px] text-white/50 font-bold mt-1">GTB ****9821</p>
                    </div>
                  </div>
                </div>

                {/* Main list */}
                <div className="flex-1 p-2 space-y-2 bg-[#fcfaf8] overflow-hidden">
                  
                  {/* Order 1 */}
                  <div className="p-2 bg-white rounded-xl border border-[#eae6df] shadow-2xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="bg-[#fcf5ee] text-[#A67C52] border border-[#A67C52]/10 text-[6.5px] px-1.5 py-0.5 rounded font-black uppercase">
                        Brown Linen Abaya (Size L)
                      </span>
                      <span className="font-black text-[#17211f] text-[8.5px]">₦22,000</span>
                    </div>
                    <div className="flex justify-between items-center text-[7px] font-semibold text-[#66746f]">
                      <span>Buyer: Halima K. (Kano)</span>
                      <span className="text-emerald-600 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
                        <Lock size={6} />
                        <span>Escrow Locked</span>
                      </span>
                    </div>
                  </div>

                  {/* Order 2 */}
                  <div className="p-2 bg-white rounded-xl border border-[#eae6df] shadow-2xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="bg-[#fcf5ee] text-[#A67C52] border border-[#A67C52]/10 text-[6.5px] px-1.5 py-0.5 rounded font-black uppercase">
                        Cotton Boubou (Size M)
                      </span>
                      <span className="font-black text-[#17211f] text-[8.5px]">₦35,000</span>
                    </div>
                    <div className="flex justify-between items-center text-[7px] font-semibold text-[#66746f]">
                      <span>Buyer: Fatimah Z. (Lagos)</span>
                      <span className="text-amber-600 font-extrabold bg-amber-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 border border-amber-100">
                        <Clock size={6} />
                        <span>Shipped</span>
                      </span>
                    </div>
                  </div>

                  {/* Order 3 */}
                  <div className="p-2 bg-white rounded-xl border border-[#eae6df] shadow-2xs space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="bg-[#fcf5ee] text-[#A67C52] border border-[#A67C52]/10 text-[6.5px] px-1.5 py-0.5 rounded font-black uppercase">
                        Leather Sandals (Size 41)
                      </span>
                      <span className="font-black text-[#17211f] text-[8.5px]">₦15,000</span>
                    </div>
                    <div className="flex justify-between items-center text-[7px] font-semibold text-[#66746f]">
                      <span>Buyer: Aminu B. (Abuja)</span>
                      <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                        <Check size={7} className="stroke-[3]" />
                        <span>Completed</span>
                      </span>
                    </div>
                  </div>

                </div>

                {/* Footer Bar */}
                <div className="bg-[#17211f] p-2 text-center border-t border-[#A67C52]/10">
                  <p className="text-[6.5px] font-black text-emerald-400 uppercase tracking-widest flex items-center justify-center gap-1">
                    <CheckCircle2 size={8} />
                    <span>Verified & Structured Workflow</span>
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );

  // Helper setter that handles TS compatibility
  function setPersonaHover(card: "whatsapp" | "chatcart" | null) {
    setHoveredCard(card);
  }
}
