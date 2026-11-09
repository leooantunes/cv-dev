import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `Portfólio de ${profile.name}, ${profile.role} em ${profile.location}. Projetos com React, Next.js, React Native e TypeScript.`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: `Portfólio de ${profile.name}. Projetos com React, Next.js e TypeScript.`,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
