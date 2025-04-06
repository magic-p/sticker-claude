"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

// Lista de estilos disponíveis
const estilosDisponiveis = [
  {
    id: "original",
    nome: "Foto Original",
    descricao: "Esta é a foto original que será transformada nos diferentes estilos. Não selecionável.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KbFGfjdo24hW9Dd3hgEAJSMKy8fchc.png",
    disabled: true,
  },
  {
    id: "anime",
    nome: "Anime",
    descricao: "Traços suaves inspirados em anime japonês, com olhos expressivos e cores vibrantes.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6p8C84Oe0hoQ8nD30voVzaf0cNSRk5.png",
  },
  {
    id: "pixel-art",
    nome: "Pixel Art",
    descricao: "Uso de blocos de cor em baixa resolução com foco na simplicidade e no charme retrô.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XPP1RQZF9OA3RRtOFyf8m3rOy2IluD.png",
  },
  {
    id: "futurista",
    nome: "Futurista",
    descricao: "Formas aerodinâmicas, cores metálicas, inspiração de ficção científica.",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HHyTFgCwxwfjvMoWGdpGEMn1i3WtYT.png",
  },
  {
    id: "simpsons",
    nome: "Simpsons",
    descricao: "Traços cartunescos e simples, com personagens de olhos arredondados e expressões exageradas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "minecraft",
    nome: "Minecraft",
    descricao: "Personagens formados por blocos 3D, aparência quadriculada, texturas simples e elementos angulosos.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "caricatura",
    nome: "Caricatura",
    descricao: "Realce características marcantes do rosto, exagerando proporções.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "tim-burton",
    nome: "Tim Burton",
    descricao: "Figuras mais alongadas, olhos grandes, ar gótico e sombrio.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "chibi",
    nome: "Chibi",
    descricao: "Corpos bem pequenos, cabeça grande e fofa, típico de mangás/animes.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "studio-ghibli",
    nome: "Studio Ghibli",
    descricao: "Traço delicado, com realismo sutil nos detalhes e cores suaves.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "marvel-comics",
    nome: "Marvel Comics",
    descricao: "Cores vibrantes, linhas fortes, proporções heroicas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "dc-comics",
    nome: "DC Comics",
    descricao: "Traço mais sombrio, musculatura marcada e poses dramáticas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "manga-shojo",
    nome: "Mangá Shōjo",
    descricao: "Traços finos, olhos grandes e detalhes de brilho/estrelas nos olhos.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "pop-art",
    nome: "Pop Art",
    descricao: "Cores sólidas e saturadas, contornos bem definidos, inspiração em quadrinhos antigos.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "aquarela",
    nome: "Aquarela",
    descricao: "Traços fluidos, cores suaves e manchas que se misturam levemente.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "steampunk",
    nome: "Steampunk",
    descricao: "Elementos vitorianos misturados a engrenagens, óculos, acessórios metálicos.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "vaporwave",
    nome: "Vaporwave",
    descricao: "Estética retrô dos anos 80, com tons neon e temas futuristas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "glitch-art",
    nome: "Glitch Art",
    descricao: "Efeitos visuais simulando falhas digitais, distorções e cores fragmentadas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "minimalista",
    nome: "Minimalista",
    descricao: "Traços simples, poucos detalhes, uso de poucas cores.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "silhueta",
    nome: "Silhueta",
    descricao: "Foco apenas no contorno da pessoa, preenchido com uma cor sólida.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "low-poly",
    nome: "Low Poly",
    descricao: "Figuras formadas por polígonos, como se fossem facetadas.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "cubista",
    nome: "Cubista",
    descricao: "Inspirado em Picasso, formas geométricas e ângulos desconstruídos.",
    imagem: "/placeholder.svg?height=200&width=200",
  },
]

export default function EstilosPage() {
  const [estilosSelecionados, setEstilosSelecionados] = useState<string[]>([])
  const maxSelecoes = 5

  const handleSelecaoEstilo = (id: string, disabled = false) => {
    if (disabled) return // Não permite seleção se estiver desabilitado

    if (estilosSelecionados.includes(id)) {
      // Se já está selecionado, remove da seleção
      setEstilosSelecionados(estilosSelecionados.filter((estilo) => estilo !== id))
    } else {
      // Se não está selecionado, verifica se já atingiu o limite
      if (estilosSelecionados.length >= maxSelecoes) {
        toast({
          title: "Limite de seleção atingido",
          description: `Você pode selecionar no máximo ${maxSelecoes} estilos. Desmarque algum para selecionar outro.`,
          variant: "destructive",
        })
      } else {
        // Adiciona à seleção
        setEstilosSelecionados([...estilosSelecionados, id])
      }
    }
  }

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

      {/* Estilos Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="headline text-4xl md:text-5xl font-bold text-center mb-6">
              Escolha os estilos para seus adesivos
            </h1>
            <p className="text-center text-gray-700 text-xl mb-6 max-w-3xl mx-auto">
              Selecione até 5 estilos diferentes para transformar seus elementos
            </p>

            <div className="bg-amber-100 rounded-xl p-4 mb-12 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="bg-amber-300 p-2 rounded-full">
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
                    className="lucide lucide-info"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <p className="text-gray-800">
                  Selecionados: <span className="font-bold">{estilosSelecionados.length}</span> de{" "}
                  <span className="font-bold">{maxSelecoes}</span> estilos
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
              {estilosDisponiveis.map((estilo) => (
                <div
                  key={estilo.id}
                  className={`cartoon-card bg-white overflow-hidden transform transition-all hover:scale-105 ${
                    estilosSelecionados.includes(estilo.id) ? "ring-4 ring-emerald-500" : ""
                  } ${estilo.disabled ? "opacity-90 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="relative">
                    <Image
                      src={estilo.imagem || "/placeholder.svg"}
                      alt={`Estilo ${estilo.nome}`}
                      width={200}
                      height={200}
                      className={`w-full h-auto ${estilo.id === "original" ? "" : "border-4 border-white"}`}
                    />
                    {!estilo.disabled && (
                      <div className="absolute top-4 right-4">
                        <input
                          type="checkbox"
                          id={`estilo-${estilo.id}`}
                          className="fun-checkbox"
                          checked={estilosSelecionados.includes(estilo.id)}
                          onChange={() => handleSelecaoEstilo(estilo.id, estilo.disabled)}
                          disabled={estilo.disabled}
                        />
                      </div>
                    )}
                    {estilo.id === "original" && (
                      <div className="absolute top-0 left-0 bg-amber-500 text-white px-3 py-1 text-sm font-bold">
                        ORIGINAL
                      </div>
                    )}
                  </div>
                  <div className="p-3 bg-gradient-to-b from-white to-amber-50">
                    <h3 className="cartoon-font font-bold text-lg mb-1">{estilo.nome}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{estilo.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/selecao" className="text-center" scroll={true}>
                <Button
                  variant="outline"
                  className="cartoon-button-outline w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8"
                >
                  Voltar
                </Button>
              </Link>
              <Link href="/checkout/carrinho" className="text-center" scroll={true}>
                <Button
                  className="cartoon-button bg-emerald-500 hover:bg-emerald-600 w-full md:w-auto transform hover:-translate-y-1 transition-transform text-lg py-3 px-8"
                  disabled={estilosSelecionados.length === 0}
                >
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

