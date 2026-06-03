"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";

const navLinks = [
  { label: "App preview", href: "#app-preview" },
  { label: "Features", href: "#features" },
  { label: "Flow", href: "#how-it-works" },
  { label: "Trust", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 18);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fbf8f2]/88 backdrop-blur-xl border-b border-[rgba(23,33,31,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="section-wrap h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" id="nav-logo">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#17211f] text-white shadow-sm">
              <ShoppingBag size={18} />
            </span>
            <span className="text-xl font-black tracking-tight text-[#17211f]">
              Chat<span className="text-[#A67C52]">Cart</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-[#53625e] transition-colors hover:bg-white/80 hover:text-[#17211f]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a href="#download" className="btn-primary hidden px-5 py-2.5 text-sm md:inline-flex" id="nav-cta">
            View app
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(23,33,31,0.12)] bg-white/80 text-[#17211f] md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-[rgba(23,33,31,0.1)] bg-white/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm font-bold text-[#53625e] hover:bg-[#f4efe6] hover:text-[#17211f]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#download"
              className="btn-primary mt-2 w-full px-5 py-3 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              View app
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
