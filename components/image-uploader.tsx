'use client';
// components/image-uploader.tsx
import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [transformedImages, setTransformedImages] = useState<Array<{style: string, url: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStyle, setCurrentStyle] = useState('cartoon');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Estilos disponíveis
  const styles = [
    { id: 'cartoon', name: 'Cartoon' },
    { id: 'simpsons', name: 'Simpsons' },
    { id: 'pixel-art', name: 'Pixel Art' },
    { id: 'watercolor', name: 'Aquarela' }
  ];
  
  // Função para lidar com o upload da imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Cria URL para preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  // Função para transformar a imagem
  const transformImage = async (style: string) => {
    if (!selectedImage || !previewUrl) return;
    
    setIsLoading(true);
    setCurrentStyle(style);
    
    try {
      // Enviar para nossa API
      const response = await fetch('/api/transform-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: previewUrl,
          style: style,
        }),
      });
      
      const data = await response.json();
      
      if (data.success && data.imageUrl) {
        // Adicionar a nova imagem transformada à lista
        setTransformedImages(prev => [...prev, {
          style: style,
          url: data.imageUrl
        }]);
      } else {
        throw new Error(data.error || 'Erro ao transformar imagem');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao transformar a imagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="py-8">
      {/* Upload Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="cartoon-card bg-white p-10 mb-12 relative">
            <div className="border-3 border-dashed border-amber-300 rounded-2xl p-12 flex flex-col items-center justify-center bg-amber-50">
              <div className="w-24 h-24 bg-amber-300 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-800"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
              </div>
              <p className="text-gray-700 text-xl mb-3 font-medium">Arraste e solte sua foto aqui</p>
              <p className="text-gray-500 text-lg mb-6">ou</p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept=".jpg,.jpeg,.png,.heic"
              />
              <Button
                className="cartoon-button bg-blue-500 hover:bg-blue-600 transform hover:-translate-y-1 transition-transform text-lg py-4 px-8"
                onClick={handleButtonClick}
              >
                Selecionar Arquivo
              </Button>
              <p className="text-gray-500 text-sm mt-6">Formatos aceitos: JPG, PNG, HEIC - Tamanho máximo: 10MB</p>

              {selectedImage && previewUrl && (
                <div className="mt-6 w-full">
                  <p className="font-medium mb-2">Imagem selecionada:</p>
                  <div className="flex justify-center mt-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-h-64 rounded-md shadow-md" 
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-yellow-300 rounded-full opacity-70"></div>
            <div className="absolute -bottom-5 -left-5 w-12 h-12 bg-emerald-300 rounded-full opacity-70"></div>
          </div>
        </div>
      </section>
      
      {/* Style Selection */}
      {selectedImage && (
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="cartoon-card bg-white p-8 mb-12 relative">
              <h3 className="text-2xl font-bold mb-6 text-center">Escolha um estilo para seu sticker</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {styles.map((style) => (
                  <Button
                    key={style.id}
                    onClick={() => transformImage(style.id)}
                    disabled={isLoading}
                    variant={currentStyle === style.id ? "default" : "outline"}
                    className="h-14 text-lg transition-all transform hover:-translate-y-1"
                  >
                    {style.name}
                  </Button>
                ))}
              </div>
              
              {isLoading && (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-lg">Transformando sua imagem em sticker...</p>
                </div>
              )}
            </Card>
          </div>
        </section>
      )}
      
      {/* Transformed Images */}
      {transformedImages.length > 0 && (
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <Card className="cartoon-card bg-white p-8 mb-12 relative">
              <h3 className="text-2xl font-bold mb-6 text-center">Seus Stickers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transformedImages.map((img, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-amber-200">
                    <div className="p-3 bg-amber-100">
                      <p className="text-lg font-medium text-center">Estilo: {img.style}</p>
                    </div>
                    <div className="p-4 bg-white flex justify-center">
                      <img
                        src={img.url}
                        alt={`Sticker estilo ${img.style}`}
                        className="max-h-64 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center space-x-4">
                <Button 
                  onClick={() => {
                    // Limpar e permitir nova foto
                    setSelectedImage(null);
                    setPreviewUrl(null);
                  }}
                  variant="outline"
                  className="cartoon-button-outline transform hover:-translate-y-1 transition-transform"
                >
                  Nova Foto
                </Button>
                
                <Link href="/selecao">
                  <Button 
                    className="cartoon-button bg-emerald-500 hover:bg-emerald-600 transform hover:-translate-y-1 transition-transform"
                  >
                    Continuar para Seleção
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}