import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://portfolio-kappa-teal-36.vercel.app"),
  title: { default: "Андрей blagone — веб-разработчик", template: "%s — blagone" },
  description: "Портфолио Андрея blagone: адаптивные сайты и веб-интерфейсы на React и Next.js.",
  keywords: ["веб-разработчик", "React", "Next.js", "TypeScript", "портфолио"],
  authors: [{ name: "Андрей blagone", url: "https://github.com/blagone" }],
  creator: "Андрей blagone",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ru_RU", url: "/", siteName: "blagone", title: "Андрей blagone — веб-разработчик", description: "Понятные, быстрые и живые интерфейсы на React и Next.js.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Портфолио Андрея blagone" }] },
  twitter: { card: "summary_large_image", title: "Андрей blagone — веб-разработчик", description: "Понятные, быстрые и живые интерфейсы на React и Next.js.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
