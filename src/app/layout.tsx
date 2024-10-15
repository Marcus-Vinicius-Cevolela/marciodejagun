// @ts-nocheck
import { Metadata } from "next";
import "./globals.css";
import { Cabecalho } from "@/components/header";

export const metadata: Metadata = {
  title: "Pré-Venda | Márcio de Jagun",
  description: "Pré-Venda do livro Filosofia Descolonial Do Candomblé Nagô",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="pt-br">
      <body className=" bg-red-50 w-100%">
        
        {children}
      </body>
    </html>
  )
}
