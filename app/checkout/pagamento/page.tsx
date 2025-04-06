import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PagamentoPage() {
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
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <span className="text-sm mt-1 font-medium">Carrinho</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className="h-1 w-full bg-emerald-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-sm mt-1 font-medium">Endereço</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className="h-1 w-full bg-emerald-500"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-sm mt-1 font-medium">Pagamento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Pagamento</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold mb-4">Método de Pagamento</h2>

                    <RadioGroup defaultValue="card" className="space-y-4">
                      {/* Credit Card Option */}
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
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
                            className="lucide lucide-credit-card"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                          Cartão de Crédito
                        </Label>
                      </div>

                      {/* Card Details */}
                      <div className="pl-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Nome no Cartão</Label>
                            <Input id="cardName" placeholder="Nome como está no cartão" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Número do Cartão</Label>
                            <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expMonth">Mês</Label>
                            <Input id="expMonth" placeholder="MM" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expYear">Ano</Label>
                            <Input id="expYear" placeholder="AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="installments">Parcelas</Label>
                            <select id="installments" className="w-full border rounded-md p-2" defaultValue="1">
                              <option value="1">1x de R$ 25,80 (sem juros)</option>
                              <option value="2">2x de R$ 12,90 (sem juros)</option>
                              <option value="3">3x de R$ 8,60 (sem juros)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Pix Option */}
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="pix" id="pix" />
                        <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer">
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
                            className="lucide lucide-qr-code"
                          >
                            <rect width="5" height="5" x="3" y="3" rx="1" />
                            <rect width="5" height="5" x="16" y="3" rx="1" />
                            <rect width="5" height="5" x="3" y="16" rx="1" />
                            <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                            <path d="M21 21v.01" />
                            <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                            <path d="M3 12h.01" />
                            <path d="M12 3h.01" />
                            <path d="M12 16v.01" />
                            <path d="M16 12h1" />
                            <path d="M21 12v.01" />
                            <path d="M12 21v-1" />
                          </svg>
                          Pix (5% de desconto)
                        </Label>
                      </div>

                      {/* Boleto Option */}
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="boleto" id="boleto" />
                        <Label htmlFor="boleto" className="flex items-center gap-2 cursor-pointer">
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
                            className="lucide lucide-receipt"
                          >
                            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                            <path d="M12 17.5v-11" />
                          </svg>
                          Boleto Bancário
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
                  <div className="p-6 border-b">
                    <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>R$ 25,80</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frete</span>
                        <span>R$ 12,00</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-3 border-t">
                        <span>Total</span>
                        <span>R$ 37,80</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link href="/pedido-confirmado" scroll={true}>
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Finalizar Pedido</Button>
                    </Link>
                    <Link href="/checkout/endereco" scroll={true}>
                      <Button variant="link" className="w-full mt-2">
                        Voltar para Endereço
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

