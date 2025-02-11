"use client";

import { useCallback, useMemo } from "react";
import { galleryImages } from "@/data/gallery";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Gallery() {
  
  const images = useMemo(() => 
    [...galleryImages, ...galleryImages].slice(0, 12),
    []
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const renderColumn = useCallback((columnIndex: number) => (
    <div key={columnIndex} className="grid gap-4">
      {images
        .slice(columnIndex * 3, columnIndex * 3 + 3)
        .map((image, index) => (
          <div
            key={index}
            className="flex justify-center transition-transform duration-300 ease-in-out hover:rotate-1 hover:scale-100"
          >
            <Image
              src={image}
              alt={`Galería ${index + 1}`}
              width={400}
              height={300}
              loading={index < 4 ? "eager" : "lazy"}
              className="w-full max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            />
          </div>
        ))}
    </div>
  ), [images]);

  return (
    <section className="pt-36 py-20 px-6 text-center bg-[#F5E6D3] text-[#3C2A1F]">
      <div className="absolute top-0 left-0 w-full h-6 bg-white" />

      <h2 className="text-5xl md:text-6xl font-bold mb-8">Momentos que saben mejor juntos ☕✨</h2>
      <p className="text-2xl max-w-3xl mx-auto mb-12">
      Disfrutamos cada café compartido y cada sonrisa capturada. Explora algunos de los momentos más especiales que nuestra comunidad ha vivido en <strong>Aroma Cafe</strong>.
      </p>

      <div 
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center"
      >
        {inView && [0, 1, 2, 3].map(renderColumn)}
      </div>
    </section>
  );
}