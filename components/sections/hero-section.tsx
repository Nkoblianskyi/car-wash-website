import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 section-container">
        <div className="text-center space-y-8">
          {/* Main Title - GOLD */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight drop-shadow-2xl">
            HyperSwap
          </h1>

          {/* Subtitle - WHITE */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto text-white leading-relaxed drop-shadow-lg">
            Experience the pinnacle of car care. Meticulous cleaning, unparalleled shine.
          </p>

          {/* CTA Button - RED */}
          <div className="pt-6">
            <Link href="/services">
              <Button className="px-8 sm:px-10 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
