import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configurar o transporter do nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pedroconcy@gmail.com', // Seu email
        pass: process.env.EMAIL_PASSWORD // Senha de app do Gmail (deve ser configurada nas variáveis de ambiente)
      }
    });

    // Configurar o email
    const mailOptions = {
      from: email,
      to: 'pedroconcy@gmail.com',
      subject: `Contato do Site - ${subject}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Assunto: ${subject}
        
        Mensagem:
        ${message}
      `,
      html: `
        <h3>Novo contato do site</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    };

    // Enviar o email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Email enviado com sucesso!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ 
      error: 'Erro ao enviar email' 
    }, { status: 500 });
  }
} 