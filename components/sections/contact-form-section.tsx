"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { services } from "@/lib/data"

export default function ContactFormSection() {
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
    console.log("Contact form submitted from homepage:", formData)
    setShowPopup(true)
    setFormData({ name: "", email: "", service: "", date: "", time: "", message: "" })

    setTimeout(() => {
      setShowPopup(false)
    }, 3000)
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-accent">Get in Touch</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              Have a question or need assistance? Send us a message directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-card border-2 border-primary/20 p-8 md:p-12 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-muted-foreground font-medium">Service</Label>
                <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                  <SelectTrigger className="bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-muted-foreground font-medium">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-muted-foreground font-medium">
                    Preferred Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-input border-2 border-primary/30 text-foreground focus:border-accent transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
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
            <h3 className="text-xl font-bold text-accent mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for your message! We will get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  )
}
