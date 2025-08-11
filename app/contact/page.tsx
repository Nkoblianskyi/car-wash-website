"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { services } from "@/lib/data"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setShowPopup(true)
    setFormData({ name: "", email: "", service: "", date: "", time: "", message: "" })

    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-[calc(100dvh-16rem)] py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-accent">Contact Us</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We'd love to hear from you. Reach out with any questions or to schedule a service.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 bg-card text-card-foreground p-8 rounded-lg border border-primary shadow-lg">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border-primary/50 text-foreground focus:border-accent"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border-primary/50 text-foreground focus:border-accent"
                />
              </div>

              <div>
                <Label className="text-muted-foreground">Service</Label>
                <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                  <SelectTrigger className="bg-input border-primary/50 text-foreground focus:border-accent">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-2 border-primary/30">
                    {services.map((service) => (
                      <SelectItem
                        key={service.slug}
                        value={service.slug}
                        className="text-white hover:bg-primary/20 focus:bg-primary/20"
                      >
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-muted-foreground">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/50 text-foreground focus:border-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-muted-foreground">
                    Preferred Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/50 text-foreground focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-input border-primary/50 text-foreground focus:border-accent"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-accent mb-4">Our Location & Hours</h2>
            <div className="flex items-start gap-4 text-muted-foreground">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <p>
                <strong>Address:</strong>
                <br />
                Ulica Ivana Gundulića 29
                <br />
                20000 Dubrovnik, Croatia
              </p>
            </div>
            <div className="flex items-start gap-4 text-muted-foreground">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <p>
                <strong>Phone:</strong>
                <br />
                +385 20 154 896
              </p>
            </div>
            <div className="flex items-start gap-4 text-muted-foreground">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <p>
                <strong>Email:</strong>
                <br />
                info@hyperswap.hr
              </p>
            </div>
            <div className="flex items-start gap-4 text-muted-foreground">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <p>
                <strong>Business Hours:</strong>
                <br />
                Monday - Saturday: 8:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black border-2 border-accent p-8 rounded-2xl shadow-2xl max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white">Thank you for your message! We will get back to you soon.</p>
          </div>
        </div>
      )}
    </div>
  )
}
