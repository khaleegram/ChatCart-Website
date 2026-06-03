"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  Heart, 
  MessageCircle, 
  CreditCard, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  Send, 
  Smartphone,
  ChevronRight,
  User,
  MessageSquareCode
} from "lucide-react";

interface Step {
  title: string;
  copy: string;
  badge: string;
  insight: string;
}

const buyerSteps: Step[] = [
  {
    title: "Swipe to discover",
    copy: "Swipe through immersive full-screen video reels of curated abayas, kaftans, and modest fashion from trusted local sellers.",
    badge: "Buyer Flow / Step 1",
    insight: "Prices, sizes, and locations are pinned directly on the reel."
  },
  {
    title: "DM with instant context",
    copy: "Tap the message button. ChatCart auto-injects the exact item, size, and price preview directly into the chat, removing all confusion.",
    badge: "Buyer Flow / Step 2",
    insight: "No more sending screenshots or asking 'how much?'."
  },
  {
    title: "Lock payment in escrow",
    copy: "Pay safely inside the chat. Funds are secured by ChatCart Escrow. The seller is instantly notified and prompted to ship.",
    badge: "Buyer Flow / Step 3",
    insight: "Money is held securely; sellers can't run off with your cash."
  },
  {
    title: "Confirm & release",
    copy: "Your package is delivered to your doorstep. Inspect your purchase, make sure the fit is perfect, then tap release to pay the seller.",
    badge: "Buyer Flow / Step 4",
    insight: "Full protection: Only pay when you get exactly what you ordered."
  }
];

const sellerSteps: Step[] = [
  {
    title: "Post your product reels",
    copy: "Record a short video of your dress, abaya, or footwear. Tag it with the price, colors, sizes, and location in seconds.",
    badge: "Seller Flow / Step 1",
    insight: "ChatCart generates an instant checkout tag for that video."
  },
  {
    title: "Get organic discovery",
    copy: "Your products feed directly to active buyers. Get discovered by fashion-forward shoppers in Kano, Lagos, Abuja, and beyond.",
    badge: "Seller Flow / Step 2",
    insight: "No ad spend required. Our algorithm serves local buyers."
  },
  {
    title: "Receive structured orders",
    copy: "Receive customer DMs with pre-filled size selection and checkout links. No back-and-forth negotiating or manual order taking.",
    badge: "Seller Flow / Step 3",
    insight: "Clean inquiries containing all details ready to pack."
  },
  {
    title: "Ship & get paid instantly",
    copy: "Receive shipping waybills, hand over the package, and get your payout directly to your bank account as soon as delivery is confirmed.",
    badge: "Seller Flow / Step 4",
    insight: "Escrow guarantee: You are 100% sure the buyer paid before shipping."
  }
];

export function HowItWorks() {
  const [persona, setPersona] = useState<"buyer" | "seller">("buyer");
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentSteps = persona === "buyer" ? buyerSteps : sellerSteps;

  const handleNextStep = () => {
    setActiveStep((prev) => (prev + 1) % currentSteps.length);
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#fcfaf8] w-full min-h-[900px] lg:min-h-[850px] transition-colors duration-500">
      
      {/* Background Skews */}
      {/* Desktop split: left is dark, right is off-white */}
      <div 
        className="absolute inset-0 bg-[#17211f] z-0 hidden lg:block transition-all duration-500" 
        style={{ clipPath: "polygon(0 0, 48% 0, 38% 100%, 0 100%)" }}
      />
      {/* Mobile split: top is dark, bottom is off-white */}
      <div 
        className="absolute inset-0 bg-[#17211f] z-0 lg:hidden block transition-all duration-500" 
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 480px, 0 540px)" }}
      />

      <div className="section-wrap relative z-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading + Toggle + Steps Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left text-white relative z-10">
            <span className="section-kicker text-[#C49A6C]">Process Flow</span>
            
            <h2 className="display-title mt-4 text-white text-4xl sm:text-5xl font-black tracking-tight leading-tight lg:max-w-md">
              No more TikTok-to-WhatsApp handoff.
            </h2>
            
            <p className="mt-5 text-[#889c96] font-medium leading-relaxed max-w-lg">
              ChatCart brings discovery, checkout context, and escrow protections into one unified feed.
            </p>

            {/* Persona Switcher Pill */}
            <div className="relative inline-flex bg-[#121a18] p-1 rounded-full border border-white/5 mt-8 w-full max-w-[320px]">
              <button
                onClick={() => {
                  setPersona("buyer");
                  setActiveStep(0);
                }}
                className={`flex-1 text-center py-2.5 rounded-full text-xs font-black uppercase tracking-wider relative transition-colors cursor-pointer ${
                  persona === "buyer" ? "text-[#17211f]" : "text-white/60 hover:text-white"
                }`}
              >
                {persona === "buyer" && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#A67C52] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">For Buyers</span>
              </button>
              <button
                onClick={() => {
                  setPersona("seller");
                  setActiveStep(0);
                }}
                className={`flex-1 text-center py-2.5 rounded-full text-xs font-black uppercase tracking-wider relative transition-colors cursor-pointer ${
                  persona === "seller" ? "text-[#17211f]" : "text-white/60 hover:text-white"
                }`}
              >
                {persona === "seller" && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#A67C52] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">For Sellers</span>
              </button>
            </div>

            {/* Step Selection List (Interactive Timeline) */}
            <div className="relative mt-10 pl-4 border-l-2 border-[#22312d] flex flex-col gap-6 w-full max-w-[340px]">
              {currentSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className="group flex flex-col items-start text-left focus:outline-none relative py-1 cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="timeline-glow"
                        className="absolute -left-[18px] top-1.5 w-[3px] h-6 bg-[#A67C52] rounded-full"
                        style={{ boxShadow: "0 0 12px #A67C52" }}
                      />
                    )}
                    <span className={`text-[10px] font-black tracking-widest uppercase transition-colors ${isActive ? "text-[#C49A6C]" : "text-white/30"}`}>
                      STEP 0{idx + 1}
                    </span>
                    <span className={`text-base font-bold mt-0.5 transition-colors ${isActive ? "text-white" : "text-white/50 group-hover:text-white/70"}`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contains the Card that STRADDLES the diagonal line */}
          <div className="lg:col-span-7 w-full relative z-10 lg:pl-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${persona}-${activeStep}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full bg-white border border-[#eae6df]/80 shadow-[0_30px_70px_rgba(23,33,31,0.06)] rounded-[32px] p-6 sm:p-8 xl:p-10 lg:-ml-20 xl:-ml-32 relative z-20 flex flex-col md:flex-row gap-8 items-center max-w-2xl lg:max-w-none mx-auto lg:mx-0 min-h-[480px]"
              >
                {/* Accent strip */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A67C52] to-[#C49A6C] rounded-t-[32px]" />

                {/* Left: Step details */}
                <div className="flex-1 flex flex-col justify-center text-left">
                  <span className="text-[10px] font-black text-[#A67C52] bg-[#fbf5ee] px-3.5 py-1.5 rounded-full uppercase tracking-widest w-fit border border-[#A67C52]/10">
                    {currentSteps[activeStep].badge}
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-[#17211f] mt-5 leading-tight tracking-tight">
                    {currentSteps[activeStep].title}
                  </h3>
                  
                  <p className="text-[#55635f] mt-4 text-sm sm:text-base font-medium leading-relaxed">
                    {currentSteps[activeStep].copy}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-[#fcfaf8] border border-[#f2ece2] flex gap-3 items-start">
                    <Sparkles size={16} className="text-[#A67C52] shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-[#66746f] leading-normal italic">
                      {currentSteps[activeStep].insight}
                    </p>
                  </div>

                  <button 
                    onClick={handleNextStep}
                    className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#A67C52] hover:text-[#8B623E] cursor-pointer transition-colors group w-fit"
                  >
                    <span>Next step</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Right: Rich Simulated Smartphone Mockup */}
                <div className="shrink-0 flex justify-center w-full md:w-auto">
                  <div className="w-[235px] h-[400px] bg-[#121a18] rounded-[36px] p-2.5 border-[5px] border-[#25322f] shadow-2xl relative overflow-hidden flex flex-col justify-between text-xs text-[#17211f] font-sans">
                    
                    {/* Speaker & camera sensor bar */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#121a18] rounded-full z-30 flex items-center justify-center">
                      <div className="w-6 h-1 bg-white/10 rounded-full" />
                    </div>

                    {/* Phone Screen Internal Shell */}
                    <div className="w-full h-full bg-[#fbf8f2] rounded-[28px] overflow-hidden flex flex-col justify-between relative z-10 pt-4">
                      
                      {/* Top Bar inside Screen */}
                      <div className="px-3 pt-2 pb-1.5 flex justify-between items-center bg-white border-b border-[#eae6df]/50">
                        <span className="font-extrabold text-[9px] text-[#A67C52]">ChatCart</span>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-[8px] font-black text-[#66746f] uppercase tracking-tighter">SECURE</span>
                        </div>
                      </div>

                      {/* Phone screen body changes based on step */}
                      <div className="flex-1 overflow-hidden relative flex flex-col">
                        <AnimatePresence mode="wait">
                          {persona === "buyer" && activeStep === 0 && (
                            <motion.div 
                              key="b0" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#17211f] to-[#25322f] text-white p-2.5 justify-end"
                            >
                              {/* Background Product Image Simulation */}
                              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
                              
                              {/* Simple vector mockup representation of abaya dress */}
                              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-40 bg-gradient-to-b from-[#A67C52]/30 to-transparent rounded-full blur-xl" />
                              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-10 h-36 border border-white/10 rounded-b-full bg-gradient-to-b from-white/10 to-transparent" />
                              
                              <div className="relative z-10 space-y-1.5">
                                <span className="bg-[#A67C52]/90 text-white font-extrabold text-[7px] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                  Kano / Free Delivery
                                </span>
                                <p className="font-extrabold text-xs">Elegant Linen Abaya</p>
                                <div className="flex justify-between items-center">
                                  <span className="font-black text-amber-300">₦22,000</span>
                                  <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full text-[8px]">
                                    <MessageCircle size={8} />
                                    <span>DM to buy</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {persona === "buyer" && activeStep === 1 && (
                            <motion.div 
                              key="b1" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-2 justify-between"
                            >
                              <div className="flex items-center gap-1.5 pb-1 border-b border-black/5">
                                <div className="w-5 h-5 bg-[#A67C52]/20 rounded-full flex items-center justify-center font-bold text-[9px] text-[#A67C52]">
                                  M
                                </div>
                                <div>
                                  <p className="font-black text-[9px] text-[#17211f]">Maryam's Couture</p>
                                  <p className="text-[7px] text-emerald-500 font-bold -mt-0.5">Active</p>
                                </div>
                              </div>

                              <div className="flex-1 flex flex-col gap-2 pt-2 justify-end">
                                {/* Auto context card */}
                                <div className="bg-white border border-[#eae6df] rounded-xl p-1.5 flex gap-1.5 items-center shadow-xs">
                                  <div className="w-8 h-8 bg-gradient-to-br from-[#A67C52] to-[#17211f] rounded-lg shrink-0" />
                                  <div className="overflow-hidden">
                                    <p className="font-black text-[8px] truncate">Linen Abaya</p>
                                    <p className="text-[7px] text-[#66746f]">Price: ₦22,000 • Size L</p>
                                    <span className="text-[6px] text-white bg-amber-600 px-1 py-0.2 rounded font-extrabold">Auto-Attached</span>
                                  </div>
                                </div>

                                <div className="bg-[#A67C52] text-white p-2 rounded-2xl rounded-tr-none text-[8px] leading-relaxed self-end max-w-[85%] font-medium">
                                  Hi Maryam! I want to order this Silk Abaya. Is it available in Kano?
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {persona === "buyer" && activeStep === 2 && (
                            <motion.div 
                              key="b2" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-3 items-center justify-between text-center"
                            >
                              <div className="flex flex-col items-center mt-2">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-[#A67C52] shadow-inner mb-2 animate-pulse">
                                  <Shield size={24} />
                                </div>
                                <h4 className="font-black text-[11px] text-[#17211f]">ChatCart Escrow Pay</h4>
                                <p className="text-[8px] text-[#66746f] mt-1 px-1">
                                  Funds locked safely. Released only when you verify package delivery.
                                </p>
                              </div>

                              <div className="w-full bg-white border border-[#eae6df] rounded-xl p-2.5 text-left text-[8px] space-y-1.5 shadow-xs">
                                <div className="flex justify-between text-[#66746f]">
                                  <span>Abaya Subtotal</span>
                                  <span className="font-bold text-[#17211f]">₦22,000</span>
                                </div>
                                <div className="flex justify-between text-[#66746f]">
                                  <span>Delivery (Kano)</span>
                                  <span className="font-bold text-[#17211f]">₦1,500</span>
                                </div>
                                <div className="h-[1px] bg-[#eae6df]" />
                                <div className="flex justify-between font-black text-[#17211f]">
                                  <span>Total Escrow Lock</span>
                                  <span className="text-[#A67C52]">₦23,500</span>
                                </div>
                              </div>

                              <div className="w-full bg-[#17211f] text-white py-2 rounded-xl text-[9px] font-black tracking-wider flex items-center justify-center gap-1">
                                <Lock size={9} />
                                <span>Confirm Escrow Lock</span>
                              </div>
                            </motion.div>
                          )}

                          {persona === "buyer" && activeStep === 3 && (
                            <motion.div 
                              key="b3" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-3 items-center justify-between text-center"
                            >
                              <div className="flex flex-col items-center mt-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                                  <CheckCircle2 size={24} />
                                </div>
                                <h4 className="font-black text-[11px] text-[#17211f]">Package Arrived!</h4>
                                <p className="text-[8px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold mt-1.5">
                                  Delivered by local runner
                                </p>
                              </div>

                              <div className="w-full bg-amber-50/50 border border-amber-200/50 rounded-xl p-2 text-[8px] text-[#A67C52] font-semibold leading-relaxed">
                                Please inspect the item now. If it fits perfectly, release the escrow below.
                              </div>

                              <div className="w-full space-y-1.5">
                                <div className="w-full bg-[#A67C52] text-white py-2 rounded-xl text-[9px] font-black cursor-pointer">
                                  Release Payout to Seller
                                </div>
                                <p className="text-[7px] text-[#66746f] font-bold">Escrow Payout Complete</p>
                              </div>
                            </motion.div>
                          )}

                          {/* Seller Flow Mockups */}
                          {persona === "seller" && activeStep === 0 && (
                            <motion.div 
                              key="s0" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-3 justify-between"
                            >
                              <h4 className="font-black text-[10px] text-[#17211f] pb-1 border-b border-black/5">Create Product Tag</h4>
                              
                              <div className="flex-1 flex flex-col gap-2.5 justify-center">
                                <div className="border-2 border-dashed border-[#eae6df] rounded-xl p-2.5 flex flex-col items-center justify-center text-center bg-white">
                                  <Video size={16} className="text-[#A67C52]" />
                                  <span className="text-[7px] font-bold text-[#A67C52] mt-1">Upload Product Video</span>
                                </div>

                                <div className="space-y-1.5">
                                  <div className="flex gap-1">
                                    <div className="flex-1 bg-white border border-[#eae6df] rounded px-1.5 py-1 text-[7px]">
                                      <p className="text-[5px] text-[#66746f] uppercase font-black">Title</p>
                                      <p className="font-bold text-[#17211f] truncate">Silk Abaya</p>
                                    </div>
                                    <div className="w-16 bg-white border border-[#eae6df] rounded px-1.5 py-1 text-[7px]">
                                      <p className="text-[5px] text-[#66746f] uppercase font-black">Price</p>
                                      <p className="font-bold text-[#17211f] truncate">₦22,000</p>
                                    </div>
                                  </div>
                                  <div className="bg-white border border-[#eae6df] rounded px-1.5 py-1 text-[7px]">
                                    <p className="text-[5px] text-[#66746f] uppercase font-black">Escrow Guarantee</p>
                                    <p className="font-bold text-emerald-600 truncate">Escrow Protected</p>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full bg-[#17211f] text-white py-1.5 rounded-lg text-[8px] font-black text-center">
                                Generate Checkout & Post
                              </div>
                            </motion.div>
                          )}

                          {persona === "seller" && activeStep === 1 && (
                            <motion.div 
                              key="s1" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-3 justify-between"
                            >
                              <div className="flex justify-between items-center pb-1 border-b border-black/5">
                                <h4 className="font-black text-[10px] text-[#17211f]">Reel Insights</h4>
                                <span className="text-[7px] text-[#A67C52] font-black">LIVE</span>
                              </div>

                              <div className="flex-1 flex flex-col justify-center gap-3">
                                <div className="bg-white border border-[#eae6df] rounded-xl p-2.5 text-center shadow-xs">
                                  <p className="text-[6px] text-[#66746f] font-black uppercase">Reel Views (Kano feed)</p>
                                  <p className="text-lg font-black text-[#17211f] mt-0.5">8,410</p>
                                  <p className="text-[7px] text-emerald-600 font-bold flex items-center justify-center gap-0.5">
                                    <TrendingUp size={8} />
                                    <span>+142% organic surge</span>
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 gap-1.5">
                                  <div className="bg-white border border-[#eae6df] rounded-lg p-1.5 text-center">
                                    <p className="text-[5px] text-[#66746f] font-black uppercase">Likes</p>
                                    <p className="text-[10px] font-black text-[#17211f]">1.2k</p>
                                  </div>
                                  <div className="bg-white border border-[#eae6df] rounded-lg p-1.5 text-center">
                                    <p className="text-[5px] text-[#66746f] font-black uppercase">DM Inquiries</p>
                                    <p className="text-[10px] font-black text-[#A67C52]">+42</p>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-amber-50 border border-amber-200/50 p-1.5 rounded-lg text-[6px] text-[#A67C52] font-bold text-center">
                                High local demand matching: Abaya Fashion in Kano.
                              </div>
                            </motion.div>
                          )}

                          {persona === "seller" && activeStep === 2 && (
                            <motion.div 
                              key="s2" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-2 justify-between"
                            >
                              <div className="flex items-center gap-1.5 pb-1 border-b border-black/5">
                                <div className="w-5 h-5 bg-[#A67C52]/20 rounded-full flex items-center justify-center font-bold text-[9px] text-[#A67C52]">
                                  K
                                </div>
                                <div>
                                  <p className="font-black text-[9px] text-[#17211f]">Kamil Kano</p>
                                  <p className="text-[7px] text-[#66746f] font-semibold">Buyer Profile</p>
                                </div>
                              </div>

                              <div className="flex-1 flex flex-col gap-2 pt-2 justify-end">
                                {/* Seller-side pre-filled order */}
                                <div className="bg-white border border-[#eae6df] rounded-xl p-2 shadow-xs space-y-1">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[7px] font-black text-[#A67C52]">STRUCTURED INQUIRY</span>
                                    <span className="text-[6px] font-black text-white bg-emerald-600 px-1 py-0.2 rounded">ESCROW SECURED</span>
                                  </div>
                                  <div className="h-[1px] bg-[#eae6df]" />
                                  <p className="text-[8px] font-black text-[#17211f]">Brown Linen Abaya (Size L)</p>
                                  <p className="text-[7px] text-[#66746f]">Payout: ₦22,000 | Destination: Kano</p>
                                </div>

                                <div className="bg-white border border-[#eae6df] p-2 rounded-2xl rounded-tl-none text-[8px] leading-relaxed self-start max-w-[85%] text-[#17211f] font-medium shadow-xs">
                                  I have locked the ₦23,500 payment. Please dispatch to GIG Logistics.
                                </div>
                              </div>

                              <div className="w-full bg-[#17211f] text-white py-1.5 rounded-lg text-[8px] font-black text-center mt-1 cursor-pointer">
                                Confirm & Get Shipping Tag
                              </div>
                            </motion.div>
                          )}

                          {persona === "seller" && activeStep === 3 && (
                            <motion.div 
                              key="s3" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }} 
                              className="absolute inset-0 flex flex-col bg-[#fcfaf8] p-3 items-center justify-between text-center"
                            >
                              <div className="flex flex-col items-center mt-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                                  <CheckCircle2 size={24} />
                                </div>
                                <h4 className="font-black text-[11px] text-[#17211f]">Payout Released!</h4>
                                <p className="text-[8px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold mt-1.5">
                                  Completed Escrow #0921
                                </p>
                              </div>

                              <div className="w-full bg-white border border-[#eae6df] rounded-xl p-2.5 text-left text-[8px] space-y-1.5 shadow-xs">
                                <div className="flex justify-between text-[#66746f]">
                                  <span>Locked Escrow Balance</span>
                                  <span className="font-bold text-[#17211f]">₦22,000</span>
                                </div>
                                <div className="flex justify-between text-[#66746f]">
                                  <span>Transfer Status</span>
                                  <span className="font-extrabold text-emerald-600">Disbursed</span>
                                </div>
                                <div className="h-[1px] bg-[#eae6df]" />
                                <div className="text-[7px] text-[#66746f] leading-normal font-semibold">
                                  Sent directly to: <br/>
                                  <span className="text-[#17211f] font-black">GTBank (****7842)</span>
                                </div>
                              </div>

                              <div className="w-full bg-[#A67C52] text-white py-2 rounded-xl text-[9px] font-black">
                                View Payout Invoice
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Bottom Safe Indicator Area */}
                      <div className="w-16 h-1 bg-[#121a18]/20 rounded-full mx-auto my-1 shrink-0" />
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
