import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LocationCtaSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/febbac2594c81c1a4df73d8e90e9deab.jpg')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 section-container">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-2xl">
            Visit Us Today
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-white leading-relaxed drop-shadow-lg">
            Located in the heart of Dubrovnik, we are ready to give your car the care it deserves.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg">
            Ulica Ivana Gundulića 29, 20000 Dubrovnik, Croatia
          </p>
          <div className="pt-6">
            <Link href="/contact">
              <Button className="px-8 sm:px-10 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold bg-primary hover:bg-primary/90 text-white border-2 border-primary hover:border-primary/90 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
