import Link from "next/link";
import { Instagram, Mail, ShoppingBag, Twitter } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "App preview", href: "#app-preview" },
    { label: "Features", href: "#features" },
    { label: "Flow", href: "#how-it-works" },
    { label: "Download", href: "#download" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[rgba(23,33,31,0.1)] bg-[#17211f] text-[#fbf8f2]">
      <div className="section-wrap py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#A67C52]">
                <ShoppingBag size={19} />
              </span>
              <span className="text-xl font-black tracking-tight">
                Chat<span className="text-[#C49A6C]">Cart</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              A full-screen social commerce feed where buyers discover local products, DM sellers with context, and checkout with escrow.
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

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-white/35">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-semibold text-white/60 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} ChatCart. All rights reserved.</p>
          <p>Social commerce built for product stories, DMs, escrow, and local delivery.</p>
        </div>
      </div>
    </footer>
  );
}
