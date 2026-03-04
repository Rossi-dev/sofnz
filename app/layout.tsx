import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sofinez Whisky - Collection d'Exception",
  description:
    "Site vitrine haut de gamme pour une sélection de whiskies premium. Luxe, raffinement et expérience immersive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-foreground antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#090909] to-[#0D0D0D] text-[#F5F5F5]">
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
