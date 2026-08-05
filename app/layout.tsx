import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/bodyComponents/layout/Navbar";
import Footer from "./components/bodyComponents/layout/Footer";

export const metadata: Metadata = {
  title: "GIO - Precisione e Forza",
  description: "L'evoluzione della ginnastica artistica attraverso la tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="selection:bg-secondary selection:text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
