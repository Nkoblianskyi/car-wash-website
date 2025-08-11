import Link from "next/link"
import Image from "next/image"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary bg-black backdrop-blur supports-[backdrop-filter]:bg-black/95">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-2xl md:text-3xl font-bold text-yellow-400 tracking-wider hover:text-yellow-300 transition-colors"
          >
            <Image src="/favicon.ico" alt="HyperSwap Logo" width={32} height={32} />
            HyperSwap
          </Link>
          <nav className="flex gap-6 md:gap-8">
            <Link
              href="/"
              className="text-sm md:text-base font-medium hover:text-yellow-400 transition-colors text-white"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm md:text-base font-medium hover:text-yellow-400 transition-colors text-white"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm md:text-base font-medium hover:text-yellow-400 transition-colors text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm md:text-base font-medium hover:text-yellow-400 transition-colors text-white"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
