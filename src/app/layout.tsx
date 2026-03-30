import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";

import { Header } from "@/components/portfolio/Header";

import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sameet — Full-Stack Engineer & AI Builder",
  description:
    "MERN stack engineer specializing in React Native, Next.js, and AI-powered automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
