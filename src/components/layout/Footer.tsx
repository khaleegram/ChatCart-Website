import { Logo } from "@/components/brand/Logo";
import Link from "next/link";
import { Instagram, Mail, Twitter } from "lucide-react";

import { GLOSSARY_TERMS } from "@/lib/content/glossary";
import { COMPARISON_PAGES } from "@/lib/content/compare";
import { CITY_PAGES } from "@/lib/content/cities";

/**
 * The site's crawl hub.
 *
 * Every page the site publishes is reachable from here in one hop, which means
 * a crawler never has to guess a URL. Nothing below is hand-maintained: the
 * lists come straight from the content maps, so a new page appears here
 * automatically instead of being forgotten.
 */

const CORE_LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Marketplace chat", href: "/chat" },
  { label: "Offers & negotiation", href: "/offers" },
  { label: "Escrow payments", href: "/escrow" },
  { label: "Social commerce", href: "/social-commerce" },
  { label: "All features", href: "/features" },
];

const PARTY_LINKS = [
  { label: "For sellers", href: "/for-sellers" },
  { label: "For buyers", href: "/for-buyers" },
  { label: "FAQ", href: "/faq" },
  { label: "Escrow glossary", href: "/glossary/escrow-account" },
];

const footerLinks: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Product", links: CORE_LINKS },
  { title: "Buying & selling", links: PARTY_LINKS },
  {
    title: "Compare",
    links: [
      { label: "All comparisons", href: "/compare" },
      ...COMPARISON_PAGES.map((page) => ({
        label: `vs ${page.competitor}`,
        href: `/compare/${page.slug}`,
      })),
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Glossary", href: "/glossary" },
      ...GLOSSARY_TERMS.slice(0, 4).map((term) => ({
        label: term.term,
        href: `/glossary/${term.slug}`,
      })),
      { label: "Delivering across Nigeria", href: "/nigeria" },
    ],
  },
  { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(23,33,31,0.1)] bg-[#17211f] text-[#fbf8f2]">
      <div className="section-wrap py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
          <div className="md:col-span-3 lg:col-span-2">
            <Link href="/" className="mb-4 inline-block" aria-label="ChatCart home">
              <Logo size="lg" onDark />
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              A social commerce marketplace where buyers discover local products, agree a price in
              chat, and pay into escrow that only releases on delivery.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:hello@chatcart.app" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-[#C49A6C] hover:text-[#C49A6C]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/35">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* City hub — kept separate so the local pages are one hop from every page. */}
        <nav aria-label="Cities" className="mt-12 border-t border-white/10 pt-6">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-white/35">
            Buying and selling in
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {CITY_PAGES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/nigeria/${city.slug}`}
                  className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
                >
                  {city.city}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/nigeria"
                className="text-sm font-semibold text-white/60 transition-colors hover:text-white"
              >
                All cities
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} ChatCart. All rights reserved.</p>
          <p>Escrow is a payment hold, not deposit insurance.</p>
        </div>
      </div>
    </footer>
  );
}
