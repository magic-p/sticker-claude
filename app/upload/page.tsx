"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ImageUploader from "@/components/image-uploader"

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Header */}
      <header className="cartoon-header py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-4xl md:text-5xl font-bold text-orange-700">
            <Link href="/">
              <span className="cartoon-font font-extrabold tracking-tighter">STICKERS</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/contato" className="cartoon-font font-medium text-black hover:text-orange-700 text-lg">
              Contato
            </Link>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content with Title and Description */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="headline text-4xl md:text-5xl font-bold text-center mb-8">
              Envie suas fotos para transformar em adesivos
            </h1>
            <p className="text-center text-gray-700 text-xl mb-12 max-w-2xl mx-auto">
              Faça o upload de suas fotos e as transforme em adesivos personalizados com diferentes estilos!
            </p>
            
            {/* Integrated ImageUploader Component */}
            <ImageUploader />
            
            {/* For when we don't have transformed images yet */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-4">
              <Link href="/" className="text-center" scroll={true}>
                <Button
                  variant="outline"
                  className="cartoon-button-outline w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8"
                >
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cartoon-footer text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <Link href="/contato" className="hover:text-amber-300 text-lg transition-colors" scroll={true}>
              Contato
            </Link>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Stickers. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}