"use client";

import { motion } from "framer-motion";
import { CheckCircle2, DollarSign, TrendingUp, Package, Truck, Award } from "lucide-react";

const financialBenefits = [
  "Lifetime revenue tracking in store ledger",
  "Daily, weekly & monthly revenue breakdowns",
  "One-tap Paystack bank withdrawals",
  "Average order value & completion analysis"
];

const operationalBenefits = [
  "Customer lists with detailed purchase logs",
  "Configure shipping zones & custom delivery rates",
  "Inventory counts & low-stock alerts",
  "Real-time notification pings for new orders"
];

const SellerScreenMockup = () => (
  <div className="phone-frame w-[270px] h-[540px] flex-shrink-0 relative overflow-hidden bento-glow mx-auto">
    {/* Status Bar */}
    <div className="bg-[#0c0a08] h-12 flex justify-between items-center px-6 pt-6 relative z-10">
      <span className="text-white/80 text-[11px] font-semibold">9:41</span>
      <span className="text-[10px] text-white/50">WiFi</span>
    </div>

    {/* Merchant Shop Header */}
    <div className="px-4 py-3 flex items-center justify-between border-b border-white/5 bg-[#0c0a08]/50 relative z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A67C52] to-[#8B623E] flex items-center justify-center text-[10px] font-bold text-white shadow-md">
          FH
        </div>
        <div>
          <p className="text-white text-[11px] font-black">FashionHub NG</p>
          <p className="text-[9px] text-white/40">Active Seller</p>
        </div>
      </div>
      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xs text-white">
        🔔
      </div>
    </div>

    {/* Financial Summary */}
    <div className="px-4.5 pt-4 pb-2">
      <p className="text-white/30 text-[9px] font-bold tracking-wider mb-1">TOTAL LEDGER REVENUE</p>
      <div className="flex items-baseline gap-1.5">
        <span className="text-white text-3xl font-black">₦548,200</span>
        <span className="text-emerald-400 text-[10px] font-bold">▲ 14%</span>
      </div>
    </div>

    {/* Payout widget */}
    <div className="px-4.5 py-2">
      <div className="bg-gradient-to-br from-[#A67C52] to-[#8B623E] rounded-2xl p-4 shadow-xl">
        <p className="text-white/80 text-[10px] font-medium">Available for settlement</p>
        <p className="text-white font-black text-xl mt-0.5">₦128,500</p>
        <div className="mt-3.5 flex justify-between items-center">
          <span className="text-[8px] text-white/60 font-semibold">Escrow cleared</span>
          <button className="bg-white text-[#8B623E] text-[10px] font-black px-3.5 py-1.5 rounded-xl">
            Withdraw
          </button>
        </div>
      </div>
    </div>

    {/* Interactive revenue chart visual */}
    <div className="px-4.5 py-2">
      <div className="glass rounded-2xl p-3 border border-white/5">
        <p className="text-[8px] font-bold text-white/40 tracking-wider mb-2">WEEKLY SALES CHART</p>
        <div className="h-14 flex items-end justify-between gap-1 mt-1">
          {[12, 28, 18, 45, 32, 60, 52].map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col justify-end items-center h-full">
              <div 
                className={`w-full rounded-t-sm ${idx === 5 ? 'bg-[#C49A6C]' : 'bg-[#A67C52]/30'}`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Orders list */}
    <div className="px-4.5 py-2">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white font-black text-[11px] uppercase tracking-wider">Queue status</p>
        <span className="text-[#A67C52] text-[10px] font-bold">See all</span>
      </div>
      <div className="glass rounded-xl border border-white/5 overflow-hidden">
        {[
          ["Amara S.", "Ankara Dress", "₦12,000", "🚚 SENT"],
          ["Kemi O.", "Silk Scarf", "₦8,500", "⚙️ PROGRESS"],
        ].map(([name, item, amount, tag], idx) => (
          <div key={idx} className="flex items-center justify-between px-3 py-2 border-b border-white/5 last:border-0 text-[10px]">
            <div>
              <p className="text-white font-bold">{name}</p>
              <p className="text-white/35 text-[9px]">{item}</p>
            </div>
            <div className="text-right">
              <p className="text-[#C49A6C] font-black">{amount}</p>
              <p className="text-white/30 text-[8px] font-bold mt-0.5">{tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export function Sellers() {
  return (
    <section id="sellers" className="relative py-28 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#A67C52]/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Dashboard mockup with floating badges */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex-shrink-0 relative select-none w-full lg:w-auto"
          >
            <SellerScreenMockup />
            
            {/* Today's revenue badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-16 glass-brand rounded-2xl p-4 border border-[#A67C52]/25 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 backdrop-blur-xl"
            >
              <p className="text-[9px] text-white/50 font-bold uppercase tracking-wider">Today's Sales</p>
              <p className="text-[#C49A6C] font-black text-xl mt-0.5">₦24,500</p>
            </motion.div>

            {/* Order alert badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 bottom-20 glass rounded-2xl p-4 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20 backdrop-blur-xl max-w-[170px]"
            >
              <p className="text-[9px] text-[#C49A6C] font-bold">🎉 NEW ORDER RECEIVED</p>
              <p className="text-white text-xs font-black mt-1">₦8,500 from Kemi</p>
            </motion.div>
          </motion.div>

          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[10px] font-black text-[#C49A6C] uppercase tracking-wider">Store Command</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
              Manage your business <br />
              <span className="gradient-text-brand">right from your phone</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl">
              Take complete command of your digital storefront. Track sales history, control stock levels, set shipping rates, and initiate fast Paystack payouts.
            </p>

            {/* Categorized Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              
              {/* Category 1: Finance & Ledger */}
              <div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <DollarSign size={14} className="text-[#A67C52]" />
                  Ledger & Ledger
                </h3>
                <ul className="space-y-3.5">
                  {financialBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-white/50 font-medium">
                      <CheckCircle2 size={13} className="text-[#A67C52] mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category 2: Store Ops & Fulfillment */}
              <div>
                <h3 className="text-xs font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Package size={14} className="text-[#A67C52]" />
                  Fulfillment & Logs
                </h3>
                <ul className="space-y-3.5">
                  {operationalBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-white/50 font-medium">
                      <CheckCircle2 size={13} className="text-[#A67C52] mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <a
              href="#download"
              className="btn-brand inline-flex items-center gap-2.5 px-8 py-4.5 rounded-2xl text-base font-bold text-white shadow-xl"
            >
              Start Free Storefront
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
