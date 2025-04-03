import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="cartoon-header py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-5xl font-bold text-orange-700">
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

      {/* Upload Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="headline text-4xl md:text-5xl font-bold text-center mb-8">
              Envie suas fotos para transformar em adesivos
            </h1>
            <p className="text-center text-gray-700 text-xl mb-12 max-w-2xl mx-auto">
              Selecione uma ou mais fotos para transformarmos em adesivos divertidos. Você poderá escolher seus
              favoritos na próxima etapa.
            </p>

            <div className="cartoon-card bg-white p-10 mb-12 relative">
              <div className="border-3 border-dashed border-amber-300 rounded-2xl p-12 flex flex-col items-center justify-center bg-amber-50">
                <div className="w-24 h-24 bg-amber-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-800"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </div>
                <p className="text-gray-700 text-xl mb-3 font-medium">Arraste e solte suas fotos aqui</p>
                <p className="text-gray-500 text-lg mb-6">ou</p>
                <Button className="cartoon-button bg-blue-500 hover:bg-blue-600 transform hover:-translate-y-1 transition-transform text-lg py-4 px-8">
                  Selecionar Arquivos
                </Button>
                <p className="text-gray-500 text-sm mt-6">Formatos aceitos: JPG, PNG, HEIC - Tamanho máximo: 10MB</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-yellow-300 rounded-full opacity-70"></div>
              <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-emerald-300 rounded-full opacity-70"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/" className="text-center">
                <Button
                  variant="outline"
                  className="cartoon-button-outline w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8"
                >
                  Voltar
                </Button>
              </Link>
              <Link href="/selecao" className="text-center">
                <Button className="cartoon-button bg-emerald-500 hover:bg-emerald-600 w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8">
                  Continuar
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
            <Link href="/contato" className="hover:text-amber-300 text-lg transition-colors">
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

