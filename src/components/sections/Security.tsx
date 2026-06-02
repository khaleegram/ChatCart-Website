"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Server, CreditCard, UserCheck, CheckCircle2 } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "Escrow Encryption",
    description: "In-app buyer/seller discussions and order transaction records are encrypted using secure protocols.",
  },
  {
    icon: CreditCard,
    title: "PCI-DSS Level 1 Compliance",
    description: "Financial details bypass our server. Payments flow directly through Paystack's bank-grade security infrastructure.",
  },
  {
    icon: UserCheck,
    title: "Merchant Verification",
    description: "Phone validation and transaction logging minimize bad actors. High ratings build platform-wide confidence.",
  },
  {
    icon: Server,
    title: "Google Firebase Database",
    description: "Database configurations utilize Firestore zero-trust rule hierarchies, keeping seller and buyer tables isolated.",
  },
];

export function Security() {
  return (
    <section id="security" className="relative py-28 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-emerald-500/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#A67C52]/3 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4.5 py-1.5 mb-6">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black text-emerald-400 tracking-wide uppercase">Operational Escrow Security</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-5">
            Your transactions are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-black">securely protected</span>
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            We prioritize financial safety. Every naira processed through ChatCart is protected by modern banking verification stacks and escrow mechanics.
          </p>
        </motion.div>

        {/* Security Showroom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Massive Security Credential Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bento-glow glass-brand rounded-3xl p-8 border border-[#A67C52]/10 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Glowing orb background */}
            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full" />
            
            <div>
              <span className="text-[9px] font-black tracking-[0.15em] text-[#C49A6C] uppercase">Settlement Integration</span>
              
              {/* Giant Shield lock graphic */}
              <div className="my-10 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 relative">
                  <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                  <Lock size={36} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">Paystack Secured Escrow</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                All buyer payments are processed via Paystack. Funds are securely locked in transaction escrow. The seller is notified to ship. Once the buyer verifies delivery, funds are cleared.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-6 border-t border-white/5 text-xs text-white/60 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                <span>Escrow payouts hold scammers out</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                <span>Escrow verification for absolute safety</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Security Assets (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bento-glow glass rounded-3xl p-6.5 border border-white/5 flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-5">
                    <item.icon size={18} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
