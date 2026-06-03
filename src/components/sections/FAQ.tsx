"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is ChatCart a normal marketplace catalog?",
    a: "No. ChatCart is built around a full-screen vertical feed where buyers swipe through product videos and photo stories.",
  },
  {
    q: "Why is chat so important?",
    a: "Most social commerce already happens through DMs. ChatCart keeps the exact product, seller, price context, and negotiation inside the app.",
  },
  {
    q: "What happens when there is no price?",
    a: "The product can show Ask for Price, then open a DM with the product preview and greeting already attached.",
  },
  {
    q: "Where does escrow fit?",
    a: "Escrow connects the product story, buyer chat, delivery details, and payment so funds can be held until delivery is confirmed.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#f4efe6] py-24">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">FAQ</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">Clearer answers, quieter UI.</h2>
            <p className="muted-copy mt-5">
              The buying journey is social first: discover in the feed, chat with context, then checkout with escrow.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.q} className="rounded-[24px] bg-white shadow-sm">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    aria-expanded={open}
                  >
                    <span className="text-base font-black text-[#17211f]">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-[#A67C52] transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm font-medium leading-7 text-[#66746f]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
