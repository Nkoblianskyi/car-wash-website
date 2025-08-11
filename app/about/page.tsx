import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100dvh-16rem)] bg-background text-foreground">
      {/* Hero Section for About Us */}
      <section className="w-full py-20 md:py-32 lg:py-48 relative flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="About Us Hero"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="container px-4 md:px-6 max-w-3xl relative z-20 text-foreground flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-accent">
            About HyperSwap
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-foreground">
            Our commitment to excellence and passion for pristine vehicles.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl border border-primary">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">Our Story & Vision</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At HyperSwap, we believe that your vehicle deserves nothing less than the best. Founded with a vision to
              redefine car care in Dubrovnik, Croatia, we combine state-of-the-art techniques with a meticulous
              attention to detail. Our team of dedicated professionals is passionate about bringing out the true shine
              in every vehicle that passes through our bays.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We are committed to customer satisfaction and strive to exceed expectations with every wash. Our
              philosophy is simple: provide an unparalleled car wash experience that leaves your vehicle looking
              immaculate and you feeling satisfied.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold text-accent">Our Core Values</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-muted-foreground space-y-2">
              <li>
                **Precision & Detail:** Every vehicle is treated with the utmost care and attention to detail, ensuring
                a flawless finish.
              </li>
              <li>
                **Quality Products:** We use only premium, eco-friendly, and safe products that protect your vehicle's
                finish and the environment.
              </li>
              <li>
                **Customer Focus:** Your satisfaction is our priority. We listen to your needs and strive to exceed
                them.
              </li>
              <li>
                **Professionalism:** Our team is highly trained, experienced, and dedicated to delivering exceptional
                service.
              </li>
              <li>
                **Innovation:** We continuously seek out and implement the latest car care technologies and techniques.
              </li>
            </ul>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl border border-primary order-1 md:order-2">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Our Values"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground text-center">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent">
            Experience the HyperSwap Difference
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            Ready to give your car the care it deserves? Visit us today or contact us to learn more.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground border border-primary hover:border-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
