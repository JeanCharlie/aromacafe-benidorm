import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://aroma-cafe-benidorm.vercel.app/"),
    title: {
      default: "Aroma Cafe - Experiencia Culinaria en Benidorm",
      template: "%s | Aroma Cafe",
    },
    description:
      "Descubre el sabor auténtico en Aroma Cafe. Disfruta de café artesanal, deliciosos postres y un ambiente acogedor en el corazón de Benidorm.",
    keywords: [
      "cafe en Benidorm",
      "restaurante",
      "cafeteria",
      "postres",
      "cafes artesanales",
    ],
    openGraph: {
      title: "Aroma Cafe - Experiencia Culinaria",
      description: "Descubre el sabor auténtico en Aroma Cafe",
      type: "website",
      locale: "es_ES",
      url: "https://aroma-cafe-benidorm.vercel.app/",
      siteName: "Aroma Cafe",
    },
    twitter: {
      card: "summary_large_image",
      title: "Aroma Cafe - Experiencia Culinaria",
      description: "Descubre el sabor auténtico en Aroma Cafe",
    },
    alternates: {
      canonical: "https://aroma-cafe-benidorm.vercel.app/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };