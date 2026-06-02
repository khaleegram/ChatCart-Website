import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ChatCart — Our Story",
  description: "Learn how ChatCart is empowering Nigerian entrepreneurs to build real businesses from their phones.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#A67C52]/8 blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass-brand rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#C49A6C] tracking-wide">Our Story</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Built for African <br />
            <span className="gradient-text-brand">entrepreneurs</span>
          </h1>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            ChatCart was born out of frustration. Too many talented Nigerian sellers were running their businesses over WhatsApp chats, dealing with payment scams, and losing customers because they had no professional storefront.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        <div className="section-divider" />

        <section>
          <h2 className="text-2xl font-black text-white mb-4">The Problem We Solved</h2>
          <p className="text-white/50 leading-relaxed mb-4">
            Millions of Nigerians are running businesses from their phones — selling fashion, electronics, food, beauty products, and more. But the tools available to them were inadequate. WhatsApp chats are unorganised. Instagram DMs are unreliable. And formal e-commerce platforms are too complex, too expensive, or not built for Africa.
          </p>
          <p className="text-white/50 leading-relaxed">
            Sellers were losing money to fraud. Buyers had no trust mechanism. Payments were a mess of bank transfers and "send the alert" anxiety. We decided to fix all of it in one app.
          </p>
        </section>

        <div className="glass-brand rounded-3xl p-10 border border-[rgba(166,124,82,0.2)] text-center">
          <p className="text-3xl font-black text-white mb-2">Our Mission</p>
          <p className="text-xl text-[#C49A6C] font-semibold leading-relaxed max-w-xl mx-auto">
            "To give every African entrepreneur a world-class storefront in their pocket."
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-black text-white mb-4">What We Built</h2>
          <p className="text-white/50 leading-relaxed mb-4">
            ChatCart combines a social product feed with a serious e-commerce backend. Sellers get a full dashboard with analytics, order management, customer tracking, and Paystack-powered payouts. Buyers get a safe, browsable marketplace where every seller is verified and every payment is protected.
          </p>
          <p className="text-white/50 leading-relaxed">
            We built on Firebase for reliability and Paystack for payments — the same infrastructure trusted by Nigeria's largest companies — and wrapped it in an app that feels as good as anything from Silicon Valley, designed specifically for how Nigerians actually buy and sell.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-white mb-6">The Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              ["React Native", "Cross-platform mobile"],
              ["Firebase", "Backend & database"],
              ["Paystack", "Payments & payouts"],
              ["Expo", "Build & deploy"],
              ["Firestore", "Real-time data"],
              ["Firebase Storage", "Media & uploads"],
            ].map(([tech, desc]) => (
              <div key={tech} className="glass rounded-2xl p-5 border border-white/6">
                <p className="text-white font-bold text-sm mb-1">{tech}</p>
                <p className="text-white/35 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-8">
          <a
            href="#download"
            className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-white"
          >
            Download ChatCart Free
          </a>
        </div>
      </div>
    </div>
  );
}
