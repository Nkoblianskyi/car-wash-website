import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full bg-black border-t-2 border-primary">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center text-2xl md:text-3xl font-bold text-yellow-400 tracking-wider hover:text-yellow-300 transition-colors"
            >
              <Image src="/favicon.ico" alt="HyperSwap Logo" width={32} height={32} />
              HyperSwap
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Premium car wash and detailing services in Dubrovnik, Croatia. We provide meticulous care for your vehicle
              with state-of-the-art techniques and eco-friendly products.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/exterior-wash" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Exterior Wash
                </Link>
              </li>
              <li>
                <Link href="/services/interior-clean" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Interior Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/full-detailing" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Full Detailing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/protective-film"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Protective Film
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">Address:</p>
                  <p className="text-sm">
                    Ulica Ivana Gundulića 29
                    <br />
                    20000 Dubrovnik, Croatia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">Phone:</p>
                  <p className="text-sm">+385 20 154 896</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">Email:</p>
                  <p className="text-sm">info@hyperswap.hr</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p className="font-medium">Hours:</p>
                  <p className="text-sm">
                    Mon - Sat: 8:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-600 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HyperSwap. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
