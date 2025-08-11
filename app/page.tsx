"use client"
import HeroSection from "@/components/sections/hero-section"
import ServicesOverviewSection from "@/components/sections/services-overview-section"
import AboutUsSection from "@/components/sections/about-us-section"
import FaqSection from "@/components/sections/faq-section"
import ContactFormSection from "@/components/sections/contact-form-section"
import LocationCtaSection from "@/components/sections/location-cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-16rem)]">
      <HeroSection />
      <ServicesOverviewSection />
      <AboutUsSection />
      <FaqSection />
      <ContactFormSection />
      <LocationCtaSection />
    </div>
  )
}
