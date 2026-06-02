import Link from "next/link";
import { ShoppingBag, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "Download", href: "#download" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-[#080604] border-t border-[rgba(166,124,82,0.12)] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A67C52]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A67C52] to-[#8B623E] flex items-center justify-center">
                <ShoppingBag size={17} className="text-white" />
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                Chat<span className="text-[#A67C52]">Cart</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The simplest way to launch a mobile storefront, receive secure payments, and grow your business — right from your phone.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Mail, label: "Email", href: "mailto:hello@chatcart.app" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/40 hover:text-[#A67C52] hover:border-[rgba(166,124,82,0.3)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-[0.12em] text-white/30 uppercase mb-5">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} ChatCart. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/25">Available on</span>
            <div className="flex gap-3">
              <span className="text-xs font-semibold text-white/40 px-3 py-1.5 rounded-lg glass">App Store</span>
              <span className="text-xs font-semibold text-white/40 px-3 py-1.5 rounded-lg glass">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
