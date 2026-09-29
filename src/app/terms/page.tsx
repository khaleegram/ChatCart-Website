/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The rules governing use of ChatCart: accounts, listings, escrow payments, commission, payouts, prohibited items and dispute handling.",
  path: "/terms",
  keywords: ["ChatCart terms of service", "marketplace terms Nigeria", "escrow terms of service"],
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-black text-white mb-4">{title}</h2>
      <div className="text-white/50 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#17211f] pt-28 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 glass-brand rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#C49A6C] tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-white/40">Last updated: June 2026</p>
        </div>
        <div className="section-divider mb-12" />

        <Section title="1. Acceptance of Terms">
          <p>By downloading, installing, or using the ChatCart mobile application, you agree to be bound by these Terms of Service. If you do not agree, do not use ChatCart.</p>
          <p>We reserve the right to update these terms at any time. Continued use of the app following changes constitutes acceptance of the new terms.</p>
        </Section>

        <Section title="2. Eligibility">
          <p>You must be at least 18 years old to use ChatCart as a seller. Buyers must be at least 13 years old. By using the platform you represent and warrant that you meet these requirements.</p>
        </Section>

        <Section title="3. Seller Responsibilities">
          <p><strong className="text-white/70">Accurate Listings:</strong> Sellers must accurately describe products including condition, specifications, and price. Misleading listings are prohibited and will result in account suspension.</p>
          <p><strong className="text-white/70">Lawful Goods Only:</strong> You may not list counterfeit goods, stolen property, illegal substances, weapons, or any item prohibited under Nigerian law.</p>
          <p><strong className="text-white/70">Order Fulfilment:</strong> Sellers must dispatch orders promptly after payment confirmation and update order status truthfully. Failure to fulfil confirmed orders is grounds for account suspension.</p>
          <p><strong className="text-white/70">Bank Details:</strong> You are responsible for providing accurate bank account details for payouts. ChatCart and Paystack are not liable for failed transfers due to incorrect information.</p>
        </Section>

        <Section title="4. Buyer Responsibilities">
          <p><strong className="text-white/70">Honest Disputes:</strong> Buyers must only raise disputes for genuine issues. Fraudulent disputes are a violation of these terms.</p>
          <p><strong className="text-white/70">Order Confirmation:</strong> Once you receive your order and are satisfied, you must mark it as received within the app to release payment to the seller. Unreasonable delays in confirmation are prohibited.</p>
          <p><strong className="text-white/70">Accurate Delivery Information:</strong> You are responsible for providing correct delivery addresses at checkout.</p>
        </Section>

        <Section title="5. Payments">
          <p>All payments are processed by Paystack. By making a payment you agree to Paystack's Terms of Service. ChatCart does not store payment card information. Transaction fees, if applicable, will be disclosed clearly before payment.</p>
          <p>Payouts to sellers are released only after an order reaches "Completed" status. ChatCart processes payout requests through Paystack; transfer times depend on your bank.</p>
        </Section>

        <Section title="6. Disputes">
          <p>ChatCart provides a built-in dispute system. Disputes must be raised within 7 days of the order being marked as sent. ChatCart's decision in any dispute is final. We reserve the right to refund buyers or withhold seller payouts where fraud is suspected.</p>
        </Section>

        <Section title="7. Prohibited Conduct">
          <p>You may not: attempt to circumvent platform payments by arranging off-platform transactions; harass, threaten, or abuse other users; spam buyers or sellers with unsolicited messages; create multiple accounts to manipulate reviews or rankings; or use automated tools to scrape or abuse the platform.</p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>By posting content (photos, videos, descriptions) on ChatCart, you grant us a non-exclusive, worldwide, royalty-free licence to display that content within the app and in promotional materials. You retain ownership of your content.</p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>ChatCart is a platform connecting buyers and sellers. We are not responsible for the quality, safety, legality, or delivery of goods listed by third-party sellers. To the maximum extent permitted by law, ChatCart's liability is limited to the value of the disputed transaction.</p>
        </Section>

        <Section title="10. Termination">
          <p>We may suspend or terminate your account at any time for violation of these terms, fraudulent activity, or repeated negative reports from other users. You may delete your account at any time through the app settings.</p>
        </Section>

        <Section title="11. Governing Law">
          <p>These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.</p>
        </Section>

        <Section title="12. Contact">
          <p>For terms-related queries: <a href="mailto:legal@chatcart.app" className="text-[#A67C52] hover:text-[#C49A6C] transition-colors">legal@chatcart.app</a></p>
        </Section>
      </div>
    </div>
  );
}
