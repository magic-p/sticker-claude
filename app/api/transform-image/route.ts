// app/api/transform-image/route.ts
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(request: Request) {
  try {
    const { imageBase64, style } = await request.json();
    
    if (!imageBase64 || !style) {
      return NextResponse.json(
        { error: 'Imagem ou estilo não fornecidos' },
        { status: 400 }
      );
    }

    // Inicializa o cliente da OpenAI
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    
    // Diferentes prompts para diferentes estilos
    const promptByStyle: {[key: string]: string} = {
      cartoon: "Transforme esta foto em um adesivo de estilo cartoon, com contornos definidos, cores vivas e um estilo divertido. Remova o fundo e adicione uma borda fina. Faça parecer um adesivo real.",
      simpsons: "Transforme esta foto em um adesivo no estilo dos Simpsons, com a pele amarela e o estilo de animação característico. Remova o fundo e adicione uma borda fina.",
      "pixel-art": "Transforme esta foto em um adesivo de pixel art, com pixels bem definidos e um estilo retro de videogame. Remova o fundo e adicione uma borda fina.",
      watercolor: "Transforme esta foto em um adesivo em estilo aquarela, com cores suaves e efeito de pintura à mão. Remova o fundo e adicione uma borda fina."
    };
    
    // Seleciona o prompt apropriado ou usa um prompt padrão
    const prompt = promptByStyle[style] || `Transforme esta foto em um adesivo estilo ${style}. Remova o fundo e adicione uma borda fina.`;
    
    // Certifique-se de que a imagem está no formato correto
    // A OpenAI espera a imagem em formato base64 ou URL
    let imageData = imageBase64;
    if (imageBase64.startsWith('data:')) {
      // Se já é um data URL, usamos diretamente
      imageData = imageBase64;
    } else {
      // Se é apenas string base64, adicionamos o prefixo
      imageData = `data:image/jpeg;base64,${imageBase64}`;
    }
    
    // Faz a chamada para a API da OpenAI
    const response = await openai.images.edit({
      image: imageData,
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url", // Pode ser "url" ou "b64_json"
    });
    
    // Retorna a URL da imagem gerada
    return NextResponse.json({ 
      success: true,
      imageUrl: response.data[0].url 
    });
  } catch (error) {
    console.error('Erro ao processar imagem:', error);
    return NextResponse.json(
      { error: 'Falha ao processar a imagem', details: (error as Error).message },
      { status: 500 }
    );
  }
}