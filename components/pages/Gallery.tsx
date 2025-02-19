"use client";

import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import Image from "next/image";

// Constantes para mejor mantenimiento
const INITIAL_IMAGES_MOBILE = 4;
const INITIAL_IMAGES_DESKTOP = 8;
const MOBILE_BREAKPOINT = 768;

export default function Gallery() {
  const [displayCount, setDisplayCount] = useState(
    typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT 
      ? INITIAL_IMAGES_MOBILE 
      : INITIAL_IMAGES_DESKTOP
  );
  
  // Preparar las imágenes una sola vez
  const images = [...galleryImages, ...galleryImages].slice(0, 12);

  // Función para calcular el número de columnas basado en el viewport
  const getColumnCount = () => {
    if (typeof window === 'undefined') return 2; // SSR fallback
    return window.innerWidth < MOBILE_BREAKPOINT ? 2 : 4;
  };

  // Crear el array de columnas
  const columns = [];
  const columnCount = getColumnCount();
  const itemsPerColumn = Math.ceil(displayCount / columnCount);

  // Distribuir imágenes en columnas
  for (let i = 0; i < columnCount; i++) {
    const columnImages = images.slice(
      i * itemsPerColumn,
      Math.min((i + 1) * itemsPerColumn, displayCount)
    );
    
    columns.push(
      <div key={i} className="grid gap-4">
        {columnImages.map((image, index) => {
          const globalIndex = i * itemsPerColumn + index;
          const isInitialImage = globalIndex < INITIAL_IMAGES_MOBILE;
          
          return (
            <div
              key={index}
              className="flex justify-center"
            >
              <Image
                src={image}
                alt={`Galería ${globalIndex + 1}`}
                width={400}
                height={300}
                loading={isInitialImage ? "eager" : "lazy"}
                className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 300px, 400px"
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className="pt-36 py-20 px-6 text-center bg-[#F5E6D3] text-[#3C2A1F]">
      <div className="absolute top-0 left-0 w-full h-6 bg-white" />

      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        Momentos que saben mejor juntos ☕✨
      </h2>
      
      <p className="text-2xl max-w-3xl mx-auto mb-12">
        Disfrutamos cada café compartido y cada sonrisa capturada. 
        Explora algunos de los momentos más especiales que nuestra 
        comunidad ha vivido en <strong>Aroma Cafe</strong>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
        {columns}
      </div>

      {displayCount < images.length && (
        <button
          onClick={() => setDisplayCount(prev => Math.min(prev + INITIAL_IMAGES_MOBILE, images.length))}
          className="mt-8 bg-[#3C2A1F] text-white px-6 py-3 rounded-lg 
                   hover:bg-[#2A1F15] transition-colors duration-300"
        >
          Cargar más imágenes
        </button>
      )}
    </section>
  );
}