import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio de Erich Ramos",
  description: "Portfolio de Erich Ramos - Diseñador, desarrollador y programador web con +25 años de experiencia",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className }>
          {children}
      </body>
    </html>

  );
}
