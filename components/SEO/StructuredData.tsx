import { FC } from "react";

const StructuredData: FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aroma Cafe",
    image: "https://aromacafe-benidorm.vercel.app/hero/caferound.png",
    description:
      "Descubre el sabor auténtico en Aroma Cafe. Disfruta de café artesanal, deliciosos postres y un ambiente acogedor en el corazón de Benidorm.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Rioja 1, Local 5",
      addressLocality: "Benidorm",
      addressRegion: "Alicante",
      postalCode: "03501",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.5411",
      longitude: "-0.1225",
    },
    url: "https://aromacafe-benidorm.vercel.app",
    telephone: "+34-XXX-XXX-XXX",
    servesCuisine: "Café y Postres",
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
