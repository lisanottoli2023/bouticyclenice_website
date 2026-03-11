import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bouticycle Nice - Location de vélos à Nice",
  description: "Louez des vélos de qualité à Nice avec Bouticycle Nice. Service de location de vélos pour découvrir la Côte d'Azur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${arimo.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
