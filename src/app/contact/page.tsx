"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-brand rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold text-[#C49A6C] tracking-wide">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight">
            We&apos;d love to <span className="gradient-text-brand">hear from you</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Whether you have a question, feedback, or a partnership idea — our team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email Support", detail: "hello@chatcart.app", sub: "We reply within 24 hours" },
              { icon: MessageCircle, title: "In-App Support", detail: "Use the Help section in ChatCart", sub: "Fastest response time" },
              { icon: MapPin, title: "Location", detail: "Nigeria 🇳🇬", sub: "Serving all 36 states" },
            ].map(({ icon: Icon, title, detail, sub }) => (
              <div key={title} className="feature-card glass rounded-2xl p-6 border border-white/6 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#A67C52]/15 border border-[#A67C52]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#A67C52]" />
                </div>
                <div>
                  <p className="text-white font-bold mb-1">{title}</p>
                  <p className="text-[#C49A6C] text-sm font-semibold mb-0.5">{detail}</p>
                  <p className="text-white/35 text-xs">{sub}</p>
                </div>
              </div>
            ))}

            <div className="glass-brand rounded-2xl p-6 border border-[#A67C52]/20 mt-8">
              <p className="text-white font-bold mb-2">For partnerships & press</p>
              <a href="mailto:partners@chatcart.app" className="text-[#A67C52] hover:text-[#C49A6C] text-sm font-semibold transition-colors">
                partners@chatcart.app
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-3xl border border-white/8 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-black text-white mb-3">Message sent!</h3>
                <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#A67C52]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#A67C52]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#A67C52]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#A67C52]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-brand relative z-10 w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white"
                >
                  <Send size={17} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
