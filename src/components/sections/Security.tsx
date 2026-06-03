"use client";

import { motion } from "framer-motion";
import { AlertTriangle, BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react";

const states = [
  { icon: BadgeCheck, title: "Seller identity", copy: "The seller profile, location, and verification state stay visible on the product reel." },
  { icon: LockKeyhole, title: "Protected checkout", copy: "Checkout starts from the item being viewed, with held funds and release rules clearly shown." },
  { icon: AlertTriangle, title: "Dispute state", copy: "If something goes wrong, the order has a visible dispute state instead of scattered chat evidence." },
];

export function Security() {
  return (
    <section id="security" className="bg-white py-24">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-kicker">Trust UI</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Trust stays attached to the item.</h2>
            <p className="muted-copy mt-5">
              The buyer does not leave the product story to negotiate elsewhere. Seller identity, chat, checkout, escrow, and delivery confirmation stay connected.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {states.map(({ icon: Icon, title, copy }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[28px] border border-[rgba(23,33,31,0.1)] bg-[#fbf8f2] p-6"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#17211f] text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-black text-[#17211f]">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-[#66746f]">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-[30px] bg-[#f4eadf] p-5 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-[#A67C52]" />
            <p className="font-black text-[#17211f]">Checkout state: Funds held until buyer confirms delivery</p>
          </div>
          <p className="mt-3 text-sm font-bold text-[#53625e] sm:mt-0">Visible, calm, and easy to understand.</p>
        </div>
      </div>
    </section>
  );
}
