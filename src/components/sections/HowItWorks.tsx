"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, Heart, MessageCircle, Video } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Post a product story",
    copy: "A seller uploads a video or photo gallery with caption, sound, location, and price details.",
  },
  {
    icon: Heart,
    title: "Get discovered in the feed",
    copy: "Buyers swipe through full-screen local products, then like, save, comment, or share.",
  },
  {
    icon: MessageCircle,
    title: "DM without losing context",
    copy: "The chat opens with the exact product preview and a pre-filled message to the seller.",
  },
  {
    icon: CreditCard,
    title: "Checkout with escrow",
    copy: "Buyer location and delivery context feed into checkout, with funds held until confirmation.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f4efe6] py-24">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="section-kicker">Swipe to sale</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">No more TikTok-to-WhatsApp handoff.</h2>
            <p className="muted-copy mt-5">
              ChatCart keeps discovery, negotiation, delivery details, and payment inside one flow so buyers and sellers do not lose context.
            </p>
          </div>

          <div className="grid gap-4">
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-4 rounded-[28px] bg-white p-5 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4eadf] text-[#A67C52]">
                  <Icon size={21} />
                </div>
                <div>
                  <p className="text-lg font-black text-[#17211f]">{title}</p>
                  <p className="mt-1 text-sm font-medium leading-6 text-[#66746f]">{copy}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-[#A67C52]">
                  <CheckCircle2 size={15} />
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
