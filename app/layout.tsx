import type React from "react"
import type { Metadata } from "next"
import { Inter, Bangers } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stickers - Transforme suas fotos em adesivos divertidos",
  description: "Transforme suas fotos em adesivos divertidos e receba em casa!",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${bangers.variable} w-full overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'