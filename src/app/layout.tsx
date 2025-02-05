import type { Metadata } from "next";
import Link from 'next/link'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Cauê Carniel-Fernandes',
    template: '%s | PSYSTEM'
  },
  description: "Sistema de Gestão de Psicologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/clientes'}>Clientes</Link>
          </div>
        </header>
        {children}
        <footer>Rodapé da aplicação</footer>
      </body>
    </html>
  );
}
