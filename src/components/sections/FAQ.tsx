"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Mail, MessageSquare } from "lucide-react";

const faqs = [
  {
    q: "Is ChatCart free to download?",
    a: "Yes — ChatCart is completely free to download on both iOS and Android. You can create an account, browse products, and follow sellers at no cost.",
  },
  {
    q: "How does payment work for buyers?",
    a: "When you're ready to buy, you pay securely through Paystack — Nigeria's most trusted payment processor. You can pay with cards, bank transfer, or USSD. Your money is held safely until you confirm receipt of your order.",
  },
  {
    q: "How do I receive payment as a seller?",
    a: "Once a buyer marks an order as received and it is confirmed as completed, the order value becomes available in your payout dashboard. You can withdraw directly to your bank account via Paystack.",
  },
  {
    q: "Can I sell videos as well as photos?",
    a: "Yes! ChatCart supports both photo galleries (up to 20 images) and video posts. You can add a custom thumbnail, background music, or upload your own audio track to stand out in the feed.",
  },
  {
    q: "How does the messaging system work?",
    a: "When a buyer is interested in your product, they can tap to message you directly inside the app. All conversations happen in ChatCart — no need to share your WhatsApp number.",
  },
  {
    q: "What happens if there's a dispute?",
    a: "ChatCart has a built-in dispute resolution system. If a buyer raises a dispute, the order is flagged and both parties can provide information. Order status changes are fully logged and time-stamped.",
  },
  {
    q: "Is my personal data safe?",
    a: "Your data is stored on Google's Firebase platform with granular Firestore security rules — meaning users can only access their own data. Payments are handled entirely by Paystack.",
  },
  {
    q: "How do hashtags and discovery work?",
    a: "When you create a post, you can add hashtags to your caption. ChatCart tracks trending hashtags in real-time and surfaces your products to buyers searching or browsing those tags.",
  },
  {
    q: "Can I manage delivery and shipping?",
    a: "Yes. In your store settings you can configure delivery options, set delivery zones, and specify pricing. During checkout, buyers can add their delivery address and ChatCart will auto-suggest addresses.",
  },
  {
    q: "What countries does ChatCart support?",
    a: "ChatCart is currently optimised for Nigeria, with full Naira (₦) currency support and Nigerian location options built into the app. Expansion to other African markets is planned.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A67C52]/4 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Support Card (lg:col-span-4) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[10px] font-black text-[#C49A6C] uppercase tracking-wider">Help Center</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
              Frequently asked <br />
              <span className="gradient-text-brand">questions</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Everything you need to know about ChatCart. Can't find an answer here? Contact our customer desk.
            </p>

            {/* Premium Support Badge Card */}
            <div className="glass-brand border border-[#A67C52]/15 rounded-3xl p-6.5 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                {/* Visual support avatars */}
                <div className="flex -space-x-2.5">
                  {["AJ", "FB", "TO"].map((init, idx) => (
                    <div 
                      key={idx} 
                      className={`w-7 h-7 rounded-full bg-gradient-to-br from-[#A67C52] to-[#8B623E] border border-[#0c0a08] flex items-center justify-center text-[9px] font-black text-white`}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white">Direct Support</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-5">
                Have specific concerns regarding payment integration, account security, or app verification?
              </p>
              <a 
                href="mailto:hello@chatcart.app"
                className="w-full bg-[#A67C52] hover:bg-[#C49A6C] transition-colors text-white font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(166,124,82,0.2)]"
              >
                <Mail size={13} />
                <span>Contact Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion list (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <button
                  id={`faq-${i}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full text-left glass rounded-2xl px-6 py-5 border transition-all duration-300 group ${
                    openIndex === i
                      ? "border-[rgba(166,124,82,0.35)] bg-[rgba(166,124,82,0.04)]"
                      : "border-white/5 hover:border-[rgba(166,124,82,0.2)]"
                  }`}
                  aria-expanded={openIndex === i}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`font-bold text-sm sm:text-base leading-snug transition-colors ${openIndex === i ? "text-[#C49A6C]" : "text-white/80 group-hover:text-white"}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === i ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        openIndex === i ? "bg-[#A67C52]/20 text-[#A67C52]" : "bg-white/5 text-white/30"
                      }`}
                    >
                      <Plus size={14} />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === i ? "auto" : 0,
                      opacity: openIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed pt-4 pb-1">
                      {faq.a}
                    </p>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
