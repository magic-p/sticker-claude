import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CarrinhoPage() {
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

      {/* Checkout Progress */}
      <div className="bg-gray-100 py-6 shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full progress-step-active flex items-center justify-center font-bold">
                1
              </div>
              <span className="text-sm mt-2 font-medium">Carrinho</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className="h-2 w-full progress-line-inactive"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full progress-step-inactive flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-sm mt-2 text-gray-500">Endereço</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className="h-2 w-full progress-line-inactive"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full progress-step-inactive flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-sm mt-2 text-gray-500">Pagamento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="headline text-4xl font-bold mb-12">Seu Carrinho</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {/* Cart Items */}
                <div className="cartoon-card bg-white overflow-hidden mb-8">
                  <div className="p-8 border-b">
                    <h2 className="section-title text-2xl font-bold mb-6">Itens Selecionados</h2>

                    {/* Cart Item 1 */}
                    <div className="flex flex-col md:flex-row gap-6 py-6 border-b">
                      <div className="w-full md:w-28 h-28 flex-shrink-0 bg-amber-50 rounded-xl p-2 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clipped_image_20250401_224443-rH7pItoFhVtisXi0bHSgHg4HUpMMvo.png"
                          alt="Estilo Cartoon"
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="cartoon-font font-medium text-xl">Adesivo Estilo Cartoon</h3>
                        <p className="text-gray-500">Cartela 10x10cm</p>
                        <div className="flex flex-wrap items-center gap-6 mt-4">
                          <div className="flex items-center">
                            <label htmlFor="quantity1" className="text-sm mr-3 font-medium">
                              Qtd:
                            </label>
                            <select id="quantity1" className="fun-input py-1 px-3 text-sm" defaultValue="1">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          <div className="flex items-center">
                            <label htmlFor="size1" className="text-sm mr-3 font-medium">
                              Tamanho:
                            </label>
                            <select id="size1" className="fun-input py-1 px-3 text-sm" defaultValue="medium">
                              <option value="small">Pequeno (5x5cm)</option>
                              <option value="medium">Médio (10x10cm)</option>
                              <option value="large">Grande (15x15cm)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-bold text-lg">R$ 12,90</span>
                        <button className="text-red-500 hover:text-red-700 text-sm hover:underline flex items-center gap-1">
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
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                          Remover
                        </button>
                      </div>
                    </div>

                    {/* Cart Item 2 */}
                    <div className="flex flex-col md:flex-row gap-6 py-6">
                      <div className="w-full md:w-28 h-28 flex-shrink-0 bg-amber-50 rounded-xl p-2 flex items-center justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1743608007829-UbWuuJcf2qiewGuBAoIunLl650GNF8.png"
                          alt="Estilo Cartoon Família"
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="cartoon-font font-medium text-xl">Adesivo Estilo Cartoon</h3>
                        <p className="text-gray-500">Cartela 10x10cm</p>
                        <div className="flex flex-wrap items-center gap-6 mt-4">
                          <div className="flex items-center">
                            <label htmlFor="quantity2" className="text-sm mr-3 font-medium">
                              Qtd:
                            </label>
                            <select id="quantity2" className="fun-input py-1 px-3 text-sm" defaultValue="1">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          <div className="flex items-center">
                            <label htmlFor="size2" className="text-sm mr-3 font-medium">
                              Tamanho:
                            </label>
                            <select id="size2" className="fun-input py-1 px-3 text-sm" defaultValue="medium">
                              <option value="small">Pequeno (5x5cm)</option>
                              <option value="medium">Médio (10x10cm)</option>
                              <option value="large">Grande (15x15cm)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-bold text-lg">R$ 12,90</span>
                        <button className="text-red-500 hover:text-red-700 text-sm hover:underline flex items-center gap-1">
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
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="cartoon-card bg-white overflow-hidden mb-8">
                  <div className="p-8">
                    <h2 className="section-title text-xl font-bold mb-6">Cupom de Desconto</h2>
                    <div className="flex gap-3">
                      <Input placeholder="Digite seu cupom" className="fun-input flex-grow" />
                      <Button
                        variant="outline"
                        className="cartoon-button-outline transform hover:-translate-y-1 transition-transform"
                      >
                        Aplicar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="cartoon-card bg-white overflow-hidden sticky top-24">
                  <div className="p-8 border-b">
                    <h2 className="section-title text-2xl font-bold mb-6">Resumo do Pedido</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">R$ 25,80</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frete</span>
                        <span className="text-gray-500">Calculado na próxima etapa</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl pt-4 border-t mt-4">
                        <span>Total</span>
                        <span>R$ 25,80</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <Link href="/checkout/endereco" scroll={true}>
                      <Button className="cartoon-button w-full bg-emerald-500 hover:bg-emerald-600 transform hover:-translate-y-1 transition-transform text-lg py-3">
                        Continuar para Entrega
                      </Button>
                    </Link>
                    <Link href="/selecao" scroll={true}>
                      <Button variant="link" className="w-full mt-4 text-gray-600 hover:text-gray-900">
                        Voltar para Seleção
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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

