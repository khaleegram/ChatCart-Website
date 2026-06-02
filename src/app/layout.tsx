import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChatCart — Buy, Sell & Grow Your Business",
  description: "ChatCart is the modern way to run a mobile storefront. List products, receive secure payments via Paystack, chat with buyers, and track your growth — all from your phone.",
  keywords: "chatcart, mobile marketplace, sell online nigeria, paystack payments, mobile storefront, buy and sell app",
  authors: [{ name: "ChatCart" }],
  openGraph: {
    title: "ChatCart — Buy, Sell & Grow Your Business",
    description: "List products, receive secure payments, and chat with buyers — all from your phone.",
    type: "website",
    siteName: "ChatCart",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatCart — Buy, Sell & Grow Your Business",
    description: "List products, receive secure payments, and chat with buyers — all from your phone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0c0a08] text-[#f5f0eb] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
