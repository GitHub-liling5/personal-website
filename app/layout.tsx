import type { Metadata } from "next"
import { Geist_Mono, Outfit, Oxanium } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const oxaniumHeading = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${site.name} — Photography`,
  description: site.tagline,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable,
        oxaniumHeading.variable
      )}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
