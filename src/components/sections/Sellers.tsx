"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, CircleDollarSign, ListChecks, MessageSquareText } from "lucide-react";

const rows = [
  ["Amara S.", "Adire reel", "Escrow", "N38,000"],
  ["Kunle A.", "Speaker video", "DM open", "N24,500"],
  ["Nora B.", "Beauty story", "Ask price", "N18,000"],
];

export function Sellers() {
  return (
    <section id="sellers" className="py-24">
      <div className="section-wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ink-panel rounded-[34px] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#C49A6C]">Seller inbox</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white">Less WhatsApp chaos</h2>
              </div>
              <button className="btn-primary bg-[#C49A6C] px-5 py-3 text-sm text-white hover:bg-white hover:text-[#17211f]">
                Withdraw
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: CircleDollarSign, label: "Escrow balance", value: "N128,500" },
                { icon: Boxes, label: "Active posts", value: "126" },
                { icon: MessageSquareText, label: "Context DMs", value: "42" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-3xl bg-white/10 p-5">
                  <Icon size={19} className="text-[#C49A6C]" />
                  <p className="mt-5 text-2xl font-black text-white">{value}</p>
                  <p className="mt-1 text-xs font-bold text-white/45">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl bg-white">
              {rows.map(([buyer, item, status, amount]) => (
                <div key={buyer} className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#edf0ee] p-4 last:border-b-0 sm:grid-cols-[1fr_1fr_auto_auto]">
                  <p className="text-sm font-black text-[#17211f]">{buyer}</p>
                  <p className="hidden text-sm font-semibold text-[#66746f] sm:block">{item}</p>
                  <p className="rounded-full bg-[#f4eadf] px-3 py-1 text-xs font-black text-[#8B623E]">{status}</p>
                  <p className="text-sm font-black text-[#17211f]">{amount}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <p className="section-kicker">Seller workflow</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Sellers stop chasing scattered messages.</h2>
            <p className="muted-copy mt-5">
              Every DM starts from a specific product reel, so sellers know exactly what the buyer wants before negotiation starts.
            </p>
            <div className="mt-8 grid gap-3">
              {["Product context travels into chat", "Ask-for-price conversations stay organized", "Escrow and delivery states remain visible"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <ListChecks size={18} className="text-[#A67C52]" />
                  <p className="text-sm font-bold text-[#53625e]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
