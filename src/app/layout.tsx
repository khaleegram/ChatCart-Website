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
  title: "ChatCart - Social Commerce That Feels Alive",
  description:
    "ChatCart turns local shopping into a full-screen social commerce feed where buyers discover products, DM sellers with context, and checkout with escrow.",
  keywords:
    "chatcart, social commerce nigeria, video shopping app, paystack escrow, local discovery, buyer seller chat",
  authors: [{ name: "ChatCart" }],
  openGraph: {
    title: "ChatCart - Social Commerce That Feels Alive",
    description: "Swipe product stories, chat with sellers, and checkout with escrow from one app.",
    type: "website",
    siteName: "ChatCart",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatCart - Social Commerce That Feels Alive",
    description: "Swipe product stories, chat with sellers, and checkout with escrow from one app.",
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
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="site-shell flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
