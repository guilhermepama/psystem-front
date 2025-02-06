import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/custom/header";
import { Footer } from "@/components/custom/footer";

import { getGlobalPageData } from "@/data/loaders";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalPageData();
  console.log(globalData);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header data={globalData.data.header} />
        <div>{children}</div>
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}
