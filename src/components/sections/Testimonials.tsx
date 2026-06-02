"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara Okafor",
    handle: "@amara.fashion",
    avatar: "AO",
    role: "Fashion Seller, Lagos",
    stars: 5,
    text: "I was selling on WhatsApp before ChatCart. The difference is night and day. My customers can browse my full catalogue, pay securely, and I get notified immediately. I made back triple my first month.",
    highlight: "triple revenue in first month",
  },
  {
    name: "Kemi Adeyemi",
    handle: "@kemi.accessories",
    avatar: "KA",
    role: "Accessories Business, Abuja",
    stars: 5,
    text: "The seller dashboard is incredible. I can see exactly which products are selling, what my completion rate is, and when to restock. It feels like I have a full analytics team in my pocket.",
    highlight: "full analytics team in my pocket",
  },
  {
    name: "Tunde Bakare",
    handle: "@tunde.electronics",
    avatar: "TB",
    role: "Electronics Dealer, Port Harcourt",
    stars: 5,
    text: "Paystack integration means I never have to worry about payment scams. Money is held until the buyer confirms, then released to me. That protection alone is worth using ChatCart.",
    highlight: "never worry about payment scams",
  },
  {
    name: "Chisom Eze",
    handle: "@chisom.beauty",
    avatar: "CE",
    role: "Beauty Products, Enugu",
    stars: 5,
    text: "I love that buyers can message me directly in the app. I don't need to give out my personal number anymore. The conversations feel professional and my customers trust me more because of it.",
    highlight: "customers trust me more",
  },
  {
    name: "Biodun Nwachukwu",
    handle: "@biodun.homewares",
    avatar: "BN",
    role: "Homeware Store, Ibadan",
    stars: 5,
    text: "Setting up my storefront took less than 10 minutes. I posted my first product with a video — added trending hashtags — and had my first enquiry within an hour. The discovery algorithm actually works.",
    highlight: "first enquiry within an hour",
  },
  {
    name: "Fatima Ibrahim",
    handle: "@fatima.fabrics",
    avatar: "FI",
    role: "Fabric Seller, Kano",
    stars: 5,
    text: "The delivery settings feature is a game changer. I can set different prices for local vs long distance, and buyers see this clearly at checkout. No more arguments about delivery fees.",
    highlight: "no more delivery fee arguments",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="w-[300px] sm:w-[350px] flex-shrink-0 bento-glow glass rounded-3xl p-6.5 border border-white/5 hover:border-[#A67C52]/20 transition-all duration-300 mx-3">
    <div className="flex justify-between items-start">
      <Stars count={t.stars} />
      <span className="text-[9px] font-black text-[#C49A6C] bg-[#A67C52]/10 border border-[#A67C52]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
        Verified
      </span>
    </div>
    
    <p className="text-white/60 text-xs leading-relaxed mt-5 mb-6 min-h-[72px]">
      "…<span className="text-white font-bold">{t.highlight}</span>…"{" "}
      <span>{t.text.replace(t.highlight, "").replace(/^"…|…"$/, "")}</span>
    </p>

    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <div className="w-8.5 h-8.5 rounded-full bg-gradient-to-br from-[#A67C52] to-[#8B623E] flex items-center justify-center text-white text-xs font-black flex-shrink-0">
        {t.avatar}
      </div>
      <div>
        <p className="text-xs font-bold text-white">{t.name}</p>
        <p className="text-[10px] text-white/30 font-medium">{t.role}</p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  // Split testimonials for left & right marquee tracks
  const track1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const track2 = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#A67C52]/4 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 mb-16">
        
        {/* Header Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#A67C52]/10 border border-[#A67C52]/20 rounded-full px-4 py-1.5 mb-6">
            <Stars count={5} />
            <span className="text-[10px] font-black text-[#C49A6C] uppercase tracking-wider ml-1">4.9 / 5 Average Merchant Rating</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-5 leading-tight">
            Success stories from <br />
            <span className="gradient-text-brand">real business owners</span>
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Discover how merchants all over Nigeria use ChatCart to step away from WhatsApp hassles and run their operations efficiently.
          </p>
        </motion.div>
      </div>

      {/* Marquee Feed Carousel System */}
      <div className="marquee-container relative overflow-hidden flex flex-col gap-6 w-full select-none">
        
        {/* Row 1: Scrolling Left */}
        <div className="flex w-full overflow-hidden relative">
          {/* Fade overlays on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0a08] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0a08] to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-left">
            {track1.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex w-full overflow-hidden relative">
          {/* Fade overlays on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0a08] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0a08] to-transparent z-10 pointer-events-none" />
          
          <div className="marquee-right">
            {track2.map((t, idx) => (
              <TestimonialCard key={idx} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
