import { useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import GallerySection from "./sections/GallerySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import LocationSection from "./sections/LocationSection";
import FaqSection from "./sections/FaqSection";
import ContactSection from "./sections/ContactSection";
import CtaSection from "./sections/CtaSection";
import { addSmoothScrolling } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    addSmoothScrolling();
  }, []);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PricingSection />
      <GallerySection />
      <TestimonialsSection />
      <LocationSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
}
