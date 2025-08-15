import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "مزاد الخردة - منصة مزاد الخردة المهنية",
  description: "شراء وبيع مواد الخردة من خلال مزادات آمنة",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
