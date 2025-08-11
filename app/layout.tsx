import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header" // <-- Хедер тут
import SiteFooter from "@/components/site-footer" // <-- Футер тут
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HyperSwap - Premium Car Wash Services",
  description:
    "Experience premium car wash and detailing services in Dubrovnik, Croatia. HyperSwap offers meticulous care for your vehicle.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
    
          <div className="flex flex-col min-h-screen">
            <SiteHeader /> {/* <-- Хедер відображається тут */}
            <main className="flex-1">{children}</main>
            <SiteFooter /> {/* <-- Футер відображається тут */}
            <CookieBanner />
          </div>

      </body>
    </html>
  )
}
