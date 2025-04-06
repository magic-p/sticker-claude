import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RastrearPedidoPage() {
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

      {/* Tracking Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Rastrear Pedido</h1>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-600 mb-6 text-center">
                Digite o número do seu pedido ou o código de rastreio para acompanhar o status da sua entrega.
              </p>

              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Input placeholder="Número do pedido ou código de rastreio" className="flex-grow" />
                <Button className="bg-emerald-500 hover:bg-emerald-600 whitespace-nowrap">Rastrear Pedido</Button>
              </div>

              <div className="text-sm text-gray-500 text-center">
                <p>O número do pedido foi enviado para o seu e-mail após a confirmação da compra.</p>
                <p>
                  Se você não encontrar o e-mail ou tiver algum problema, entre em{" "}
                  <Link href="/contato" className="text-emerald-600 hover:underline" scroll={true}>
                    contato conosco
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Example Tracking Result (Hidden by default, would be shown after search) */}
            <div className="bg-white rounded-lg shadow-md p-8 hidden">
              <h2 className="text-xl font-bold mb-4">Pedido #12345</h2>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Status:</span>
                  <span className="text-emerald-600 font-medium">Em trânsito</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Data do Pedido:</span>
                  <span>01/04/2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Previsão de Entrega:</span>
                  <span>10/04/2025</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8 relative">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Pedido Confirmado</h3>
                      <p className="text-sm text-gray-500">01/04/2025 às 14:30</p>
                      <p className="text-sm text-gray-600">Seu pedido foi recebido e confirmado.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Em Produção</h3>
                      <p className="text-sm text-gray-500">02/04/2025 às 10:15</p>
                      <p className="text-sm text-gray-600">Seus adesivos estão sendo produzidos.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Enviado</h3>
                      <p className="text-sm text-gray-500">03/04/2025 às 16:45</p>
                      <p className="text-sm text-gray-600">Seu pedido foi enviado.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-500">Entregue</h3>
                      <p className="text-sm text-gray-500">Previsto para 10/04/2025</p>
                      <p className="text-sm text-gray-600">Seu pedido ainda não foi entregue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <Link href="/termos-de-uso" className="hover:text-amber-300" scroll={true}>
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-amber-300" scroll={true}>
              Política de Privacidade
            </Link>
            <Link href="/contato" className="hover:text-amber-300" scroll={true}>
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

