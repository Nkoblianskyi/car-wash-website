"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black border-t-2 border-primary shadow-2xl">
      <div className="section-container">
        <div className="max-w-5xl mx-auto bg-black border-2 border-primary rounded-lg shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
            <div className="flex-1">
              <p className="text-sm md:text-base text-white leading-relaxed">
                <span className="font-semibold text-yellow-400">We use cookies</span> to ensure you get the best
                experience on our website. For more details, please read our{" "}
                <Link href="/cookie-policy" className="underline text-yellow-400 hover:text-yellow-300 font-medium">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                onClick={handleAccept}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Accept All
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-6 py-2 font-semibold transition-all duration-300"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
