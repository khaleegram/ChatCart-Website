"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, ShieldCheck, Star, Sparkles, Layers } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a08] via-[#0f0d0b] to-[#0c0a08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[350px] bg-[#A67C52]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Narrative Summary */}
          <div className="lg:col-span-4 text-center lg:text-left mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-3.5 py-1.5 mb-5">
              <Sparkles size={12} className="text-[#C49A6C]" />
              <span className="text-[10px] font-bold text-[#C49A6C] uppercase tracking-wider">Live Platform Telemetry</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
              Numbers that <br />
              <span className="gradient-text-brand">define scale</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              ChatCart is powering a new era of mobile-first African commerce, providing a secure, high-uptime digital engine for active merchants.
            </p>
            <div className="mt-8 hidden lg:flex items-center gap-4 text-xs font-semibold text-white/30">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Platform online</span>
              <span>•</span>
              <span>Updated live via Firebase telemetry</span>
            </div>
          </div>

          {/* Right Block: Bento Telemetry Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-6 gap-5">
            
            {/* Active Sellers Widget - Double Size */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:col-span-4 bento-glow glass-brand rounded-3xl p-8 relative overflow-hidden border border-[#A67C52]/10 group hover:border-[#A67C52]/30 transition-all duration-300"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-[#A67C52]/10 to-transparent pointer-events-none rounded-full blur-xl" />
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-[#A67C52]/15 border border-[#A67C52]/20 flex items-center justify-center text-[#C49A6C]">
                  <Users size={18} />
                </div>
                <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  +12% MoM
                </span>
              </div>
              <div className="mt-6">
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  <Counter end={10000} suffix="+" duration={2} />
                </p>
                <p className="text-sm font-bold text-white/90 mt-2">Active Mobile Sellers</p>
                <p className="text-xs text-white/40 mt-1">Merchants scaling their businesses on Android and iOS.</p>
              </div>
            </motion.div>

            {/* Success Rate Widget - Normal Size */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sm:col-span-2 bento-glow glass rounded-3xl p-6 border border-white/5 group hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={16} />
              </div>
              <div className="mt-8">
                <p className="text-3xl font-black text-white">
                  <Counter end={98} suffix="%" duration={1.8} />
                </p>
                <p className="text-xs font-bold text-white/80 mt-1.5">Payment Success</p>
                <p className="text-[10px] text-white/40 mt-0.5">PCI secure via Paystack.</p>
              </div>
            </motion.div>

            {/* Products Listed Widget - Normal Size */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-2 bento-glow glass rounded-3xl p-6 border border-white/5 group hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-xl bg-[#A67C52]/10 border border-[#A67C52]/20 flex items-center justify-center text-[#C49A6C]">
                <Layers size={16} />
              </div>
              <div className="mt-8">
                <p className="text-3xl font-black text-white">
                  <Counter end={50000} suffix="+" duration={2.2} />
                </p>
                <p className="text-xs font-bold text-white/80 mt-1.5">Catalog Items</p>
                <p className="text-[10px] text-white/40 mt-0.5">Listed across categories.</p>
              </div>
            </motion.div>

            {/* App Rating Widget - Double Size */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-4 bento-glow glass-brand rounded-3xl p-8 border border-[#A67C52]/10 group hover:border-[#A67C52]/30 transition-all duration-300"
            >
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none rounded-full blur-xl" />
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star size={18} className="fill-amber-400" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={10} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  4.9<span className="text-sm font-medium text-white/40"> / 5.0</span>
                </p>
                <p className="text-sm font-bold text-white/90 mt-2">App Store & Play Store Rating</p>
                <p className="text-xs text-white/40 mt-1">Voted by thousands of buyers and sellers nationwide.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
