import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Clock, Star, ArrowLeft, Phone, Mail, Award, Shield, Sparkles } from "lucide-react"
import { services } from "@/lib/data"

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const renderContent = (description: string) => {
    const blocks = description.split("\n\n")
    return blocks.map((block, index) => {
      // Check for headings (e.g., **What's Included:**)
      if (block.startsWith("**") && block.includes(":**")) {
        const headingText = block.replace(/\*\*(.*?):\*\*/, "$1").trim()
        return (
          <div key={index} className="my-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">{headingText}</h3>
          </div>
        )
      }
      // Check for bullet lists (e.g., • Item)
      if (block.includes("•")) {
        const listItems = block
          .split("\n")
          .filter((item) => item.includes("•"))
          .map((item, itemIndex) => {
            const cleanItem = item.replace("•", "").trim()
            return (
              <div
                key={itemIndex}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl border border-red-600/20 hover:border-red-600/40 transition-all duration-300"
              >
                <p className="text-gray-300 leading-relaxed">{cleanItem}</p>
              </div>
            )
          })
        return (
          <div key={index} className="grid gap-3 my-6">
            {listItems}
          </div>
        )
      }
      // Default to paragraph
      return (
        <p key={index} className="text-lg leading-relaxed text-gray-300 my-6">
          {block}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src={service.imageUrl || "/placeholder.svg"}
          alt={service.name}
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 z-10"></div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-30">
          <Link href="/services">
            <Button
              variant="outline"
              className="bg-black/70 backdrop-blur-sm border-red-600 text-white hover:bg-red-600/20 hover:border-red-500 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-yellow-400 font-semibold text-lg">Premium Service</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{service.name}</h1>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>

            {/* Service Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-red-600/30">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">{service.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-red-600/30">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-semibold ml-2">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-red-600/30">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">Quality Guaranteed</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="px-8 py-4 text-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Book This Service
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent font-semibold transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Service Description */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-red-600/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="prose prose-lg max-w-none">{renderContent(service.longDescription)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Why Choose HyperSwap?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to delivering exceptional results with every service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Premium Quality</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use only the finest products and equipment to ensure your vehicle receives the best care possible.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Guaranteed Results</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your satisfaction is our priority. We guarantee exceptional results with every service we provide.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Expert Technicians</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our skilled professionals have years of experience and are passionate about automotive care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">You Might Also Like</h2>
              <p className="text-xl text-gray-300">Explore our other premium services</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link key={relatedService.slug} href={`/services/${relatedService.slug}`}>
                    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-red-600/20 hover:border-red-600/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 transform hover:scale-105">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedService.imageUrl || "/placeholder.svg"}
                          alt={relatedService.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-yellow-400 text-xl mb-2 group-hover:text-yellow-300 transition-colors">
                          {relatedService.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{relatedService.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{relatedService.duration}</span>
                          </div>
                          <span className="text-yellow-400 font-semibold">Learn More →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
