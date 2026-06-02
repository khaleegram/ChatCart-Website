"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Sellers", href: "#sellers" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0c0a08]/90 backdrop-blur-xl border-b border-[rgba(166,124,82,0.15)] shadow-[0_0_60px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" id="nav-logo">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#A67C52] to-[#8B623E] flex items-center justify-center shadow-[0_0_20px_rgba(166,124,82,0.4)] group-hover:shadow-[0_0_30px_rgba(166,124,82,0.6)] transition-all duration-300">
              <ShoppingBag size={16} className="text-white" />
            </div>
            <span className="font-black text-lg tracking-tight text-white">
              Chat<span className="text-[#A67C52]">Cart</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#download"
              className="btn-brand relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
              id="nav-cta"
            >
              <span>Download Free</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg glass text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-[rgba(166,124,82,0.15)] py-4 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#download"
                className="btn-brand mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
