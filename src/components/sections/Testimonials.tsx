"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const cards = [
  {
    name: "Amara",
    role: "Fashion seller",
    quote: "My buyers can react to a product video and DM me with the item already attached. I know exactly what they mean.",
  },
  {
    name: "Tunde",
    role: "Electronics seller",
    quote: "I do not have to search through WhatsApp screenshots to remember which product a customer wants.",
  },
  {
    name: "Kemi",
    role: "Beauty store owner",
    quote: "It feels like reels, but built for buying. The delivery and escrow steps make the conversation serious.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-wrap">
        <div className="mb-12 text-center">
          <p className="section-kicker">Seller feedback</p>
          <h2 className="display-title mx-auto mt-3 max-w-2xl text-4xl sm:text-5xl">
            Sellers can sell from the same place buyers discover.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.article
              key={card.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="soft-panel rounded-[30px] p-6"
            >
              <div className="mb-7 flex gap-1 text-[#f5a524]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-base font-semibold leading-8 text-[#53625e]">&quot;{card.quote}&quot;</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17211f] text-sm font-black text-white">
                  {card.name.slice(0, 1)}
                </div>
                <div>
                  <p className="font-black text-[#17211f]">{card.name}</p>
                  <p className="text-xs font-bold text-[#8b9793]">{card.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
