import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function EnderecoPage() {
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
              <div className="h-1 w-full bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-sm mt-1 text-gray-500">Pagamento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Endereço de Entrega</h1>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input id="nome" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input id="telefone" placeholder="(00) 00000-0000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="endereco">Endereço</Label>
                      <Input id="endereco" placeholder="Rua, Avenida, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="numero">Número</Label>
                      <Input id="numero" placeholder="123" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="complemento">Complemento (opcional)</Label>
                      <Input id="complemento" placeholder="Apto, Bloco, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bairro">Bairro</Label>
                      <Input id="bairro" placeholder="Seu bairro" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input id="cidade" placeholder="Sua cidade" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="estado">Estado</Label>
                      <Input id="estado" placeholder="Seu estado" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <Link href="/checkout/carrinho">
                <Button variant="outline">Voltar para o Carrinho</Button>
              </Link>
              <Link href="/checkout/pagamento">
                <Button className="bg-emerald-500 hover:bg-emerald-600">Continuar para Pagamento</Button>
              </Link>
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

