import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="cartoon-header py-4 sticky top-0 z-50 bg-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-300 to-amber-200 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="headline text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Transforme suas fotos em adesivos divertidos!
              </h1>
              <p className="text-xl md:text-2xl text-black font-medium">
                Receba em casa seus momentos favoritos em forma de adesivos!
              </p>
              <div className="pt-6">
                <Link href="/upload">
                  <Button className="cartoon-button bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 px-10 text-xl transform hover:-translate-y-1 transition-transform">
                    Começar Agora
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 transform rotate-3 float-animation">
                <div className="relative">
                  <div className="w-[500px] h-[375px] bg-gray-200 rounded-2xl shadow-xl border-8 border-white flex items-center justify-center">
                    <span className="text-gray-500">Imagem de exemplo</span>
                  </div>
                  <div className="absolute -bottom-16 -right-16 transform -rotate-6">
                    <div className="w-[180px] h-[180px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">Sticker 1</span>
                    </div>
                  </div>
                  <div className="absolute -top-12 -right-12 transform rotate-12">
                    <div className="w-[150px] h-[150px] bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-500">Sticker 2</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50 z-0"></div>
              <div className="absolute -top-10 -right-10 w-16 h-16 bg-emerald-300 rounded-full opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 bg-gradient-to-b from-amber-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-16">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center cartoon-card bg-white p-8 rounded-lg shadow-md hover:bg-amber-50 transition-colors">
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 p-6 rounded-full mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-upload"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
              </div>
              <h3 className="step-title text-2xl font-bold mb-4">ENVIE SUAS FOTOS</h3>
              <p className="text-lg">Selecione suas imagens favoritas.</p>
            </div>

            <div className="flex flex-col items-center text-center cartoon-card bg-white p-8 rounded-lg shadow-md hover:bg-amber-50 transition-colors">
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 p-6 rounded-full mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="step-title text-2xl font-bold mb-4">SELECIONE SEUS FAVORITOS</h3>
              <p className="text-lg">Escolha os estilos que mais gostou.</p>
            </div>

            <div className="flex flex-col items-center text-center cartoon-card bg-white p-8 rounded-lg shadow-md hover:bg-amber-50 transition-colors">
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 p-6 rounded-full mb-6 w-24 h-24 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-truck"
                >
                  <path d="M10 17h4V5H2v12h3" />
                  <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                  <path d="M14 17h1" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <h3 className="step-title text-2xl font-bold mb-4">RECEBA EM CASA</h3>
              <p className="text-lg">Só clicar, comprar e esperar!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemplos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold text-center mb-6">Veja como seus adesivos podem ficar:</h2>
          <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
            Transformamos suas memórias em adesivos com diferentes estilos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="cartoon-card bg-gradient-to-br from-sky-100 to-blue-50 p-6 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/family-photo.jpeg"
                    alt="Foto original"
                    width={250}
                    height={250}
                    className="rounded-xl border-4 border-white shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full"></div>
                </div>
                <p className="text-center font-bold mt-4 text-lg">Foto Original</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/simpsons-style.png"
                    alt="Estilo Simpsons"
                    width={250}
                    height={250}
                    className="rounded-xl border-4 border-white shadow-lg mx-auto"
                  />
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-300 rounded-full"></div>
                </div>
                <p className="text-center font-bold mt-4 text-lg">Estilo Simpsons</p>
              </div>
            </div>

            <div className="cartoon-card bg-gradient-to-br from-sky-100 to-blue-50 p-6 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250103-WA0081.jpg-p9u3oblTOCxBlWVs9s8mz8fapxX8A4.jpeg"
                    alt="Foto original"
                    width={250}
                    height={250}
                    className="rounded-xl border-4 border-white shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full"></div>
                </div>
                <p className="text-center font-bold mt-4 text-lg">Foto Original</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/cartoon-style.png"
                    alt="Estilo Cartoon"
                    width={250}
                    height={250}
                    className="rounded-xl border-4 border-white shadow-lg mx-auto"
                  />
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-emerald-300 rounded-full"></div>
                </div>
                <p className="text-center font-bold mt-4 text-lg">Estilo Cartoon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-200 to-amber-300 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="section-title text-5xl font-bold mb-8">Pronto para receber seus adesivos?</h2>
          <Link href="/upload">
            <Button className="cartoon-button bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-5 px-12 text-2xl transform hover:-translate-y-1 transition-transform">
              Transformar Minhas Fotos Agora!
            </Button>
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-emerald-400 rounded-full opacity-20"></div>
      </section>

      {/* Footer */}
      <footer id="contato" className="cartoon-footer text-white py-10">
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

