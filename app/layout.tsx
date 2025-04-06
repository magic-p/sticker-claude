// app/layout.tsx

// Importe as dependências necessárias...
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stickers - Transforme suas fotos em adesivos personalizados',
  description: 'Transforme suas fotos em adesivos personalizados com diferentes estilos usando IA',
}

// Corrigido: O 'inline-size' precisa estar entre aspas ou usar width
export const viewport = {
  'width': 'device-width',  // Alterado de 'inline-size' para 'width'
  initialScale: 1.0,
  maximumScale: 1.0
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}