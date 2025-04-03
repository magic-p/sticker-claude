import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqPage() {
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

      {/* FAQ Hero Section */}
      <section className="bg-amber-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-lg mb-8">
              Encontre respostas para as dúvidas mais comuns sobre nossos adesivos e serviços.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Sobre os Adesivos</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Quais são os tamanhos disponíveis?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Oferecemos três tamanhos de cartelas de adesivos: pequeno (5x5cm), médio (10x10cm) e grande
                    (15x15cm). Você pode escolher o tamanho que melhor se adapta às suas necessidades.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">Os adesivos são à prova d'água?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Sim, todos os nossos adesivos são impressos em vinil de alta qualidade com laminação que os torna
                    resistentes à água e aos raios UV, garantindo maior durabilidade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Posso escolher diferentes estilos para minhas fotos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Sim! Nosso sistema gera automaticamente vários estilos para cada foto enviada. Você poderá escolher
                    entre estilos como cartoon, pixel art, anime, e muito mais.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">Qual é a qualidade dos adesivos?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Nossos adesivos são impressos em material de alta qualidade, com cores vibrantes e acabamento
                    profissional. Eles são duráveis e resistentes, perfeitos para decorar notebooks, garrafas d'água,
                    cadernos e muito mais.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Pedidos e Entregas</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-5" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Quanto tempo leva para receber meus adesivos?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    O prazo de entrega varia de 7 a 10 dias úteis, dependendo da sua localização. Após a confirmação do
                    pagamento, seus adesivos serão produzidos em até 2 dias úteis e então enviados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">Como rastrear meu pedido?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Você receberá um e-mail com o código de rastreio assim que seu pedido for enviado. Também pode
                    acessar a página "Rastrear Pedido" em nosso site e inserir o número do seu pedido ou código de
                    rastreio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">Posso cancelar meu pedido?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Pedidos podem ser cancelados em até 24 horas após a compra, desde que ainda não tenham entrado em
                    produção. Para cancelar, entre em contato com nosso suporte através da página de Contato.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Vocês entregam para todo o Brasil?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Sim, entregamos para todos os estados do Brasil. O prazo e o valor do frete podem variar de acordo
                    com a região.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Pagamentos</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-9" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Quais formas de pagamento são aceitas?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Aceitamos cartões de crédito (parcelamento em até 3x sem juros), Pix (com 5% de desconto) e boleto
                    bancário.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">O site é seguro para pagamentos?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Sim, nosso site utiliza criptografia SSL e todas as transações são processadas por gateways de
                    pagamento seguros e confiáveis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border rounded-lg p-2">
                  <AccordionTrigger className="text-lg font-medium">Posso solicitar reembolso?</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    Caso haja algum problema com seu pedido, como adesivos danificados ou erro na produção, você pode
                    solicitar reembolso ou reenvio em até 7 dias após o recebimento. Entre em contato com nosso suporte
                    para iniciar o processo.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">Não encontrou a resposta que procurava? Entre em contato conosco!</p>
              <Link href="/contato">
                <Button className="bg-emerald-500 hover:bg-emerald-600">Falar com o Suporte</Button>
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

