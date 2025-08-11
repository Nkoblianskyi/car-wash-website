import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Star, ArrowRight } from "lucide-react"
import { services } from "@/lib/data"

export default function ServicesPage() {
  const featuredServices = services.filter((service) => service.featured)
  const otherServices = services.filter((service) => !service.featured)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent mb-6">
              Premium Car Care Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From quick exterior washes to comprehensive detailing, we offer a complete spectrum of services designed
              to keep your vehicle in pristine condition.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Most Popular Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most requested services, trusted by hundreds of satisfied customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredServices.map((service, index) => (
              <div
                key={service.slug}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <Link href={`/services/${service.slug}`} className="block relative z-10">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-accent mb-3 group-hover:text-accent/90 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.shortDescription}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">5.0</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized treatments for specific needs and advanced care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.slug}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.imageUrl || "/placeholder.svg"}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-accent mb-2 group-hover:text-accent/90 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Ready to Transform Your Vehicle?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to schedule your service or get a custom quote for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="px-8 py-3 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="px-8 py-3 text-lg border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
