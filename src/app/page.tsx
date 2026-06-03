import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sellers } from "@/components/sections/Sellers";
import { Security } from "@/components/sections/Security";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Download } from "@/components/sections/Download";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Sellers />
      <Security />
      <Testimonials />
      <FAQ />
      <Download />
    </>
  );
}
