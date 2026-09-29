/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How ChatCart collects, uses, stores and shares personal data, including chat messages, order records and payment details, and how to exercise your rights.",
  path: "/privacy",
  keywords: ["ChatCart privacy policy", "ChatCart data protection", "marketplace privacy Nigeria"],
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-black text-white mb-4">{title}</h2>
      <div className="text-white/50 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#17211f] pt-28 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 glass-brand rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#C49A6C] tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40">Last updated: June 2026</p>
        </div>

        <div className="section-divider mb-12" />

        <Section title="1. Introduction">
          <p>ChatCart ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.</p>
          <p>By using ChatCart, you agree to the collection and use of information in accordance with this policy.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong className="text-white/70">Account Information:</strong> When you register, we collect your name, email address, and phone number for identity verification and communication purposes.</p>
          <p><strong className="text-white/70">Store & Product Data:</strong> Information you provide when setting up your store — store name, product listings, pricing, descriptions, and images — is stored in our Firebase Firestore database.</p>
          <p><strong className="text-white/70">Order & Transaction Data:</strong> Order details including items, quantities, prices, delivery addresses, and order status. Payment processing is handled entirely by Paystack; we do not store card numbers or payment credentials.</p>
          <p><strong className="text-white/70">Location Data:</strong> With your permission, we may collect your device location to prefill delivery settings and improve local discovery. You can deny or revoke this permission at any time.</p>
          <p><strong className="text-white/70">Device & Usage Data:</strong> We may collect device identifiers, app version, and usage analytics to improve performance and fix bugs.</p>
          <p><strong className="text-white/70">Media:</strong> Photos, videos, and audio files you upload for product listings are stored securely in Firebase Storage.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your data to: operate and provide the ChatCart service; process orders and facilitate payments through Paystack; send you order notifications and service updates; allow buyers and sellers to communicate in-app; improve, personalise, and develop our services; and ensure platform security and prevent fraud.</p>
        </Section>

        <Section title="4. Data Sharing">
          <p>We do not sell your personal data. We share data only in the following circumstances:</p>
          <p><strong className="text-white/70">With Paystack:</strong> Payment and payout information is shared with Paystack for transaction processing. Paystack's Privacy Policy governs their use of this data.</p>
          <p><strong className="text-white/70">Between Buyers and Sellers:</strong> When a transaction occurs, relevant contact information (such as your display name and store name) is shared with the other party to facilitate fulfilment.</p>
          <p><strong className="text-white/70">With Firebase (Google):</strong> Our infrastructure runs on Google Firebase. Data is stored and processed according to Google's data processing agreements.</p>
          <p><strong className="text-white/70">Legal Requirements:</strong> We may disclose data if required by law or to protect our rights and the safety of our users.</p>
        </Section>

        <Section title="5. Security">
          <p>We implement Firebase Firestore security rules that ensure users can only access their own data. All data is transmitted over HTTPS with TLS encryption. Sensitive operations require authenticated sessions. We conduct regular security reviews of our database access rules.</p>
        </Section>

        <Section title="6. Data Retention">
          <p>We retain your account data for as long as your account is active. Order and transaction data is retained for a minimum of 7 years for financial compliance. You may request deletion of your account and associated data by contacting us at privacy@chatcart.app.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>You have the right to access, correct, or delete your personal data; withdraw consent for location access at any time; request a copy of your data; and lodge a complaint with a data protection authority.</p>
        </Section>

        <Section title="8. Children">
          <p>ChatCart is not directed at children under 13. We do not knowingly collect data from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </Section>

        <Section title="9. Contact">
          <p>For privacy-related questions: <a href="mailto:privacy@chatcart.app" className="text-[#A67C52] hover:text-[#C49A6C] transition-colors">privacy@chatcart.app</a></p>
        </Section>
      </div>
    </div>
  );
}
