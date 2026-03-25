import type { Metadata } from "next";
import Hero            from "@/components/home/hero";
import StatsBar        from "@/components/home/stats-bar";
import ServicesPreview from "@/components/home/services-preview";
import WhyUs           from "@/components/home/why-us";
import ServiceAreas    from "@/components/home/service-areas";
import Testimonials    from "@/components/home/testimonials";
import CtaBanner       from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Everpeak Roof | Seattle Roofing Repair & Replacement",
  description:
    "Licensed roofing contractor serving Seattle, Bellevue, Tacoma, and 15+ Puget Sound cities. Roof repair, replacement, metal roofing, emergency service. Free estimates.",
  alternates: { canonical: "https://everpeakroof.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <WhyUs />
      <ServiceAreas />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
