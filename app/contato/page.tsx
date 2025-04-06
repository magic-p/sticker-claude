import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContatoPage() {
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
            <Link
              href="/contato"
              className="cartoon-font font-medium text-black hover:text-orange-700 text-lg underline"
            >
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-amber-300 to-amber-200 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h1 className="headline text-3xl md:text-4xl font-bold mb-6">Entre em Contato</h1>
                <p className="text-gray-700 mb-8 text-lg">
                  Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Preencha o formulário ao lado e nossa
                  equipe entrará em contato o mais breve possível.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-400 p-3 rounded-full shadow-md">
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
                        className="lucide lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">E-mail</h3>
                      <p className="text-gray-700">contato@stickers.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-400 p-3 rounded-full shadow-md">
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
                        className="lucide lucide-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Telefone</h3>
                      <p className="text-gray-700">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-400 p-3 rounded-full shadow-md">
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
                        className="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Horário de Atendimento</h3>
                      <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cartoon-card bg-white p-6 md:p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">
                      Nome Completo
                    </Label>
                    <Input id="name" placeholder="Seu nome completo" className="fun-input" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
                      E-mail
                    </Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="fun-input" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-lg">
                      Assunto
                    </Label>
                    <Input id="subject" placeholder="Assunto da mensagem" className="fun-input" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-lg">
                      Mensagem
                    </Label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} className="fun-input" />
                  </div>

                  <Button className="cartoon-button w-full bg-emerald-500 hover:bg-emerald-600 py-3 text-lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-3xl font-bold mb-12">Perguntas Frequentes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="cartoon-card bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Como rastrear meu pedido?</h3>
                <p className="text-gray-600">
                  Você receberá um e-mail com o código de rastreio assim que seu pedido for enviado. Também pode acessar
                  a página "Rastrear Pedido" em nosso site.
                </p>
              </div>

              <div className="cartoon-card bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Qual o prazo de entrega?</h3>
                <p className="text-gray-600">
                  O prazo de entrega varia de 7 a 10 dias úteis, dependendo da sua localização.
                </p>
              </div>

              <div className="cartoon-card bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Posso cancelar meu pedido?</h3>
                <p className="text-gray-600">
                  Pedidos podem ser cancelados em até 24 horas após a compra, desde que ainda não tenham entrado em
                  produção.
                </p>
              </div>

              <div className="cartoon-card bg-gray-50 p-6">
                <h3 className="font-bold text-lg mb-2">Quais formas de pagamento são aceitas?</h3>
                <p className="text-gray-600">Aceitamos cartões de crédito, Pix e boleto bancário.</p>
              </div>
            </div>

            <Link href="/faq" scroll={true}>
              <Button variant="outline" className="cartoon-button-outline mt-10 py-3 px-6">
                Ver Todas as Perguntas
              </Button>
            </Link>
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

