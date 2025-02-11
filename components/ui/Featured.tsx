"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { featuredItems } from "@/data/featured";
import Loading from "./Loading";

const Stack = dynamic(() => import("@/components/ui/Stack"), {
  loading: () => <Loading />,
  ssr: false,
});

const TitledCard = dynamic(() => import("@/components/ui/TitledCard"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Featured() {
  const shouldReduceMotion = useReducedMotion();

  // Memorizar datos para evitar recomputaciones en cada render
  const featuredCards = useMemo(
    () =>
      featuredItems.map((item) => ({
        id: item.id,
        img: item.image,
        name: item.name,
      })),
    []
  );

  return (
    <section className="bg-gradient-to-r from-[#ffdde1] to-[#ee9ca7] py-20 px-6">
      {!shouldReduceMotion ? (
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl md:text-6xl font-bold text-[#3C2A1F] mb-12">
          Nuestros Destacados
          </h2>

          {/* 📱 Mobile: Stack Animation */}
          <div className="flex justify-center md:hidden mt-8">
            <Stack
              randomRotation
              sensitivity={180}
              sendToBackOnClick
              cardDimensions={{ width: 220, height: 260 }}
              cardsData={featuredCards}
            />
          </div>

          {/* 💻 Tablet y Desktop: Tilted Cards */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredItems.map((item) => (
              <TitledCard
                key={item.id}
                imageSrc={item.image}
                altText={item.name}
                captionText={item.name}
                containerHeight="320px"
                containerWidth="260px"
                imageHeight="320px"
                imageWidth="260px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                displayOverlayContent
                overlayContent={<p className="text-white text-lg">{item.name}</p>}
              />
            ))}
          </div>

          {/* 🔗 Enlace al Menú */}
          <div className="text-center mt-16">
            <Link
              aria-label="Ir a la página de menú"
              href="/menu"
              className="bg-[#3C2A1F] text-white px-8 py-3 text-2xl rounded-lg hover:bg-[#FFD1DC] hover:text-[#3C2A1F] transition"
            >
              Ver Menú
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-5xl md:text-6xl font-bold text-[#3C2A1F] mb-12">
          Nuestros Destacados
          </h2>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredItems.map((item) => (
              <TitledCard
                key={item.id}
                imageSrc={item.image}
                altText={item.name}
                captionText={item.name}
                containerHeight="320px"
                containerWidth="260px"
                imageHeight="320px"
                imageWidth="260px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                displayOverlayContent
                overlayContent={<p className="text-white text-lg">{item.name}</p>}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
