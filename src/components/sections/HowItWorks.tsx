"use client";

import { motion } from "framer-motion";
import { UserPlus, Camera, MessageCircle, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Shop",
    description: "Download the app and sign up in under 60 seconds. Verify your phone number to go live instantly.",
    detail: "SMS Verification • Profile Setup",
  },
  {
    number: "02",
    icon: Camera,
    title: "List Catalog",
    description: "Snap photos or upload videos, write description captions, set prices, and tag your location.",
    detail: "Videos • Hashtag SEO",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Chat & Close",
    description: "Buyers message you in-app. Agree on pricing, shipping logistics, and confirm the order securely.",
    detail: "Chat Escrow • Safe Log",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Withdraw cash",
    description: "Accept Paystack bank transfers, cards, or USSD. Funds go straight to your bank account payout.",
    detail: "Paystack Out • Bank Transfer",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#A67C52]/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[10px] font-black text-[#C49A6C] uppercase tracking-wider">Operational Flow</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5 leading-tight">
            Up and selling in <span className="gradient-text-brand">four steps</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl leading-relaxed">
            We have simplified onboarding. No complicated setups, domains, or merchant compliance forms.
          </p>
        </motion.div>

        {/* Steps Grid Timeline */}
        <div className="relative">
          
          {/* Horizontal connecting line (desktop only) */}
          <div className="absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-[#A67C52]/30 via-[#A67C52]/10 to-transparent hidden lg:block z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-[#A67C52]/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Massive outline background number */}
                <span className="text-8xl font-black text-white/[0.02] absolute -right-2 -bottom-2 pointer-events-none select-none tracking-tighter">
                  {step.number}
                </span>

                <div>
                  {/* Step Icon circle wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0c0a08] border border-[rgba(166,124,82,0.25)] flex items-center justify-center relative z-10 group-hover:border-[rgba(166,124,82,0.5)] group-hover:shadow-[0_0_30px_rgba(166,124,82,0.2)] transition-all duration-300 mb-6">
                    <step.icon size={22} className="text-[#A67C52]" />
                  </div>

                  {/* Text details */}
                  <h3 className="text-lg font-black text-white mb-2.5 flex items-center gap-2">
                    <span className="text-xs text-[#A67C52] font-black">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Subdetails list */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {step.detail.split(" • ").map((d) => (
                    <span key={d} className="text-[9px] font-bold text-[#C49A6C] bg-[#A67C52]/10 border border-[#A67C52]/15 px-2.5 py-1 rounded-full">
                      {d}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
