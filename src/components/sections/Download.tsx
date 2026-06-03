"use client";

import { motion } from "framer-motion";
import { Apple, ArrowRight, Smartphone } from "lucide-react";

export function Download() {
  return (
    <section id="download" className="py-24">
      <div className="section-wrap">
        <div className="relative overflow-hidden rounded-[38px] bg-[#17211f] p-6 text-white sm:p-10 lg:p-14">
          <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#C49A6C]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#C49A6C]">App ready</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Discover, DM, and checkout without leaving the feed.
              </h2>
              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/62">
                ChatCart keeps the energy of short-form video while solving the messy parts of social commerce: lost context, scattered messages, and risky payments.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#" id="download-appstore" className="btn-primary bg-white px-6 py-4 text-[#17211f] hover:bg-[#f4eadf]">
                  <Apple size={19} />
                  App Store
                </a>
                <a href="#" id="download-playstore" className="btn-secondary border-white/15 bg-white/10 px-6 py-4 text-white hover:bg-white/15">
                  <Smartphone size={19} />
                  Google Play
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] bg-white p-5 text-[#17211f]"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-black">Launch checklist</p>
                <span className="rounded-full bg-[#f4eadf] px-3 py-1 text-xs font-black text-[#8B623E]">Ready</span>
              </div>
              {["Vertical feed", "Context DMs", "Ask for Price", "Escrow checkout"].map((item) => (
                <div key={item} className="flex items-center justify-between border-t border-[#edf0ee] py-4">
                  <p className="text-sm font-bold text-[#53625e]">{item}</p>
                  <ArrowRight size={16} className="text-[#A67C52]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
