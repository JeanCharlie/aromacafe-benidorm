import { metadata } from "@/metadata/metadata";
import { Suspense } from "react";

import Script from "next/script";

import "./globals.css";
import "leaflet/dist/leaflet.css";

import ClientWrapper from "@/components/wrapper/ClientWrapper";
import FooterWrapper from "@/components/wrapper/FooterWrapper";
import NavbarWrapper from "@/components/wrapper/NavbarWrapper";
import { satisfy } from "@/fonts/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={satisfy.className}>
      <head>
        {/* Preconectar a orígenes requeridos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Meta tags para bfcache */}
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`antialiased ${satisfy.className}`}>
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3C2A1F]"></div>
            </div>
          }
        >
          <ClientWrapper>
            <NavbarWrapper />
            <main>{children}</main>
            <FooterWrapper />
          </ClientWrapper>
        </Suspense>

        {/* Script de analytics con carga diferida */}
        <Script
          id="gtag"
          src="https://www.googletagmanager.com/gtag/js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
