import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PedidoConfirmadoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-amber-300 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-4xl font-bold text-orange-600">
            <Link href="/">
              <span className="font-extrabold tracking-tighter">STICKERS</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/como-funciona" className="font-medium text-black hover:text-orange-700">
              Como Funciona
            </Link>
            <Link href="/contato" className="font-medium text-black hover:text-orange-700">
              Contato
            </Link>
          </nav>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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

      {/* Confirmation Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
              <p className="text-gray-600 mb-6">
                Seu pedido #12345 foi recebido e está sendo processado. Você receberá um e-mail com os detalhes do
                pedido e informações de rastreamento.
              </p>

              <div className="border-t border-b py-4 my-6">
                <h2 className="font-bold text-xl mb-4">Resumo do Pedido</h2>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="font-medium">Data do Pedido:</p>
                    <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="font-medium">Método de Pagamento:</p>
                    <p className="text-gray-600">Cartão de Crédito</p>
                  </div>
                  <div>
                    <p className="font-medium">Endereço de Entrega:</p>
                    <p className="text-gray-600">Rua Exemplo, 123 - Bairro - Cidade/UF</p>
                  </div>
                  <div>
                    <p className="font-medium">Previsão de Entrega:</p>
                    <p className="text-gray-600">7-10 dias úteis</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/rastrear-pedido">
                  <Button variant="outline" className="w-full md:w-auto">
                    Rastrear Pedido
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 w-full md:w-auto">
                    Voltar para a Página Inicial
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-amber-100 rounded-xl p-6">
              <h2 className="font-bold text-xl mb-2">Compartilhe sua experiência!</h2>
              <p className="text-gray-600 mb-4">
                Adoraríamos ver como ficaram seus adesivos quando chegarem. Compartilhe nas redes sociais usando a
                hashtag #MeusStickers
              </p>
              <div className="flex justify-center gap-4">
                <button className="text-blue-600 hover:text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="text-pink-600 hover:text-pink-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </button>
                <button className="text-blue-400 hover:text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <Link href="/termos-de-uso" className="hover:text-amber-300">
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-amber-300">
              Política de Privacidade
            </Link>
            <Link href="/contato" className="hover:text-amber-300">
              Contato
            </Link>
          </div>
          <div className="text-center mt-6">
            <p>&copy; {new Date().getFullYear()} Stickers. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

