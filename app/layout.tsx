import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Lancher | A parceira ideal pra sua cantina",
  description:
    "Digitalize pedidos, elimine filas e simplifique o controle de vendas e pagamentos — tudo em um só sistema.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen bg-white font-sans antialiased", poppins.variable)}>{children}</body>
    </html>
  )
}
