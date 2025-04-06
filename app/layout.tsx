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
  generator: 'v0.dev'
}

// Corrigido: Movido o viewport para seu próprio export
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0
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