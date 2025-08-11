import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutUsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            At HyperSwap, we are dedicated to providing the highest standard of car care.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-primary">
            <Image
              src="/c3190af7b9678cad0b8f054f27e9b40c.jpg"
              alt="Our Team"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-accent">Our Story & Mission</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a vision to redefine car care in Dubrovnik, Croatia, HyperSwap combines state-of-the-art
              techniques with a meticulous attention to detail. Our team of dedicated professionals is passionate about
              bringing out the true shine in every vehicle that passes through our bays.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We understand that your car is more than just a mode of transport; it's an extension of your personality
              and an investment. That's why we use only premium, eco-friendly products and advanced equipment to ensure
              a superior clean that protects your vehicle's finish and preserves its value.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-accent">Our Values & Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Precision:</span>
                  <span className="text-muted-foreground ml-2">
                    Every detail matters. We ensure a meticulous clean from bumper to bumper.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Quality:</span>
                  <span className="text-muted-foreground ml-2">
                    We use only premium, eco-friendly products and advanced equipment.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Customer Satisfaction:</span>
                  <span className="text-muted-foreground ml-2">
                    Your vehicle's pristine condition and your happiness are our top priorities.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-foreground">Innovation:</span>
                  <span className="text-muted-foreground ml-2">
                    Continuously adopting new techniques and technologies for superior results.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl border-2 border-primary order-1 lg:order-2">
            <Image
              src="/f5134f5c3ff648ec2318acc033c4e135.jpg"
              alt="Our Values"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/about">
            <Button
              variant="outline"
              className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
