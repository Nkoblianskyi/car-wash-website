import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/data"

export default function ServicesOverviewSection() {
  const featuredServices = services.slice(0, 3)

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">
            Our Premium Services
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Discover the range of services designed to keep your vehicle in pristine condition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <Card
              key={service.slug}
              className="group bg-card border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:scale-105 overflow-hidden"
            >
              <Link href={`/services/${service.slug}`} className="block">
                {/* Service Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${service.imageUrl || "/placeholder.svg?height=400&width=600"}')`,
                    }}
                  />
                  {/* Removed Price Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-accent text-xl md:text-2xl font-bold group-hover:text-accent/90 transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-6">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold py-2 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/services">
            <Button
              variant="outline"
              className="px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold transition-all duration-300"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
