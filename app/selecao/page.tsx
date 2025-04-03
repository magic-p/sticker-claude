import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SelecaoPage() {
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

      {/* Selection Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="headline text-4xl md:text-5xl font-bold text-center mb-6">
              Escolha seus adesivos favoritos
            </h1>
            <p className="text-center text-gray-700 text-xl mb-16 max-w-3xl mx-auto">
              Transformamos suas fotos em diferentes estilos. Selecione os que você mais gostou para receber em casa!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Sticker Option 1 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clipped_image_20250401_224443-rH7pItoFhVtisXi0bHSgHg4HUpMMvo.png"
                    alt="Estilo Cartoon"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker1" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Cartoon</h3>
                  <p className="text-gray-600">Transformação em estilo cartoon colorido</p>
                </div>
              </div>

              {/* Sticker Option 2 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clipped_image_20250401_224438-d4Q7ps3At2JovjXQthvh8VB03Tg4UJ.png"
                    alt="Estilo Cartoon 2"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker2" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Cartoon</h3>
                  <p className="text-gray-600">Transformação em estilo cartoon com contornos</p>
                </div>
              </div>

              {/* Sticker Option 3 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743608007829-UbWuuJcf2qiewGuBAoIunLl650GNF8.png"
                    alt="Estilo Cartoon Família"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker3" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Cartoon</h3>
                  <p className="text-gray-600">Transformação em estilo cartoon detalhado</p>
                </div>
              </div>

              {/* Sticker Option 4 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Estilo Pixel Art"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker4" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Pixel Art</h3>
                  <p className="text-gray-600">Transformação em estilo pixel art retrô</p>
                </div>
              </div>

              {/* Sticker Option 5 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Estilo Simpsons"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker5" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Simpsons</h3>
                  <p className="text-gray-600">Transformação em estilo Simpsons</p>
                </div>
              </div>

              {/* Sticker Option 6 */}
              <div className="cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Estilo Anime"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" id="sticker6" className="fun-checkbox" />
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-amber-50">
                  <h3 className="cartoon-font font-bold text-xl mb-2">Estilo Anime</h3>
                  <p className="text-gray-600">Transformação em estilo anime japonês</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/upload" className="text-center">
                <Button
                  variant="outline"
                  className="cartoon-button-outline w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8"
                >
                  Voltar
                </Button>
              </Link>
              <Link href="/checkout/carrinho" className="text-center">
                <Button className="cartoon-button bg-emerald-500 hover:bg-emerald-600 w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8">
                  Continuar para o Carrinho
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

