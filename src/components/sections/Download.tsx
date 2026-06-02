"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Apple, Smartphone, Zap } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="relative py-28 overflow-hidden">
      
      {/* Dynamic ambient mesh grids */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08] via-[#0f0c09] to-[#0c0a08] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#A67C52]/5 blur-[150px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Massive Bento Showcase Card */}
        <div className="glass-brand border border-[#A67C52]/20 rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
          
          {/* Internal gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#A67C52]/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(166,124,82,0.08)_0%,transparent_50%)]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Block: Call to Action (lg:col-span-7) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Emblem icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#A67C52] mb-8 shadow-[0_8px_24px_rgba(166,124,82,0.4)] animate-pulse">
                <ShoppingBag size={24} className="text-white" />
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                Start selling <br />
                <span className="gradient-text-brand">today. Free.</span>
              </h2>

              {/* Summary copy */}
              <p className="text-base text-white/50 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                Join thousands of Nigerian merchants growing their businesses from their phones. ChatCart is free to download — no setup fees or hidden charges.
              </p>

              {/* Download actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="#"
                  id="download-appstore"
                  className="btn-brand flex items-center justify-center gap-3 px-7 py-4.5 rounded-2xl text-sm font-bold text-white shadow-xl"
                >
                  <Apple size={20} />
                  <div className="text-left">
                    <p className="text-[9px] font-medium opacity-70 leading-none">Download on the</p>
                    <p className="text-sm font-black mt-0.5 leading-none">App Store</p>
                  </div>
                </a>

                <a
                  href="#"
                  id="download-playstore"
                  className="btn-outline flex items-center justify-center gap-3 px-7 py-4.5 rounded-2xl text-sm font-bold"
                >
                  <Smartphone size={20} className="text-[#A67C52]" />
                  <div className="text-left">
                    <p className="text-[9px] font-medium opacity-50 leading-none">Get it on</p>
                    <p className="text-sm font-black mt-0.5 leading-none">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Compliance Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {["🔒 Paystack secure", "⚡ Fast payouts", "💬 Direct inbox", "🚚 Custom logistics"].map((pill) => (
                  <span
                    key={pill}
                    className="text-[10px] font-bold text-white/55 bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Block: Angled Device Mockup (lg:col-span-5) */}
            <div className="lg:col-span-5 hidden lg:flex justify-center relative h-[360px]">
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                {/* Visual device wrapper */}
                <div className="phone-frame w-[200px] h-[400px] shadow-2xl relative rotate-[12deg] hover:rotate-[6deg] transition-transform duration-500">
                  {/* Status Bar */}
                  <div className="bg-[#0c0a08] h-10 flex items-center justify-between px-5 pt-5">
                    <span className="text-white/60 text-[9px] font-semibold">9:41</span>
                  </div>
                  {/* Inner app design */}
                  <div className="bg-[#0c0a08] h-full p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[#A67C52] font-black text-sm">ChatCart</span>
                      <div className="mt-8 bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                        <p className="text-white font-bold text-xs">Create Storefront</p>
                        <p className="text-white/40 text-[9px] mt-1">Get active in 60s</p>
                      </div>
                    </div>
                    {/* Bottom button indicator */}
                    <div className="bg-[#A67C52] rounded-xl p-2 text-center text-white text-[9px] font-bold">
                      Download Free
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Circle glow indicator */}
              <div className="w-56 h-56 rounded-full bg-[#A67C52]/10 blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
