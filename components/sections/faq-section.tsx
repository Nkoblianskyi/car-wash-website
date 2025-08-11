import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Find answers to common questions about our services and operations.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/90 hover:no-underline py-6">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                We offer a comprehensive range of services including Exterior Wash, Interior Cleaning, Full Detailing,
                Protective Film Application, Deep Interior Cleaning, Glass Polishing & Sealant, and Leather Care &
                Conditioning. You can view all our services on the{" "}
                <Link href="/services" className="underline text-accent hover:text-accent/80 font-medium">
                  Services page
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/90 hover:no-underline py-6">
                Where are you located?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                HyperSwap is conveniently located at Ulica Ivana Gundulića 29, 20000 Dubrovnik, Croatia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/90 hover:no-underline py-6">
                Do I need an appointment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Appointments are recommended for detailing services, but for standard washes, you can simply drive in
                during our business hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-accent hover:text-accent/90 hover:no-underline py-6">
                What are your business hours?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                We are open Monday to Saturday from 8:00 AM to 6:00 PM. We are closed on Sundays.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
