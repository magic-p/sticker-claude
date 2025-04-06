// Arquivo simplificado para simular a funcionalidade de toast
// Em um projeto real, você usaria uma biblioteca como react-hot-toast ou react-toastify

type ToastProps = {
  title: string
  description: string
  variant?: "default" | "destructive" | "success"
}

export const toast = ({ title, description, variant = "default" }: ToastProps) => {
  // Em um ambiente real, isso mostraria um toast
  // Aqui apenas simulamos com um console.log
  console.log(`[Toast - ${variant}] ${title}: ${description}`)

  // Em um ambiente de navegador, poderíamos usar alert para simular
  if (typeof window !== "undefined") {
    alert(`${title}\n${description}`)
  }
}

