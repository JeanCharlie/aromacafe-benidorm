"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu";
import { FileText } from "lucide-react";
import Image from "next/image";

// Separar los items iniciales para mejor LCP
const INITIAL_ITEMS = menuItems.slice(0, 3);
const REMAINING_ITEMS = menuItems.slice(3);

export default function Menu() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const { generateMenuPDF } = await import("@/utils/pdfGenerator");
      await generateMenuPDF(menuItems);
    } catch (error) {
      console.error("PDF Generation Error:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <section className="relative bg-[#F5E6D3] py-20 px-6 pt-36">
      <div className="absolute top-0 left-0 w-full h-6 bg-white" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#3C2A1F] text-center mb-12">
          Nuestro Menú
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Renderizar primero los items iniciales */}
          {INITIAL_ITEMS.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white/80 rounded-xl overflow-hidden shadow-lg md:hover:scale-[1.03] md:transition-transform md:duration-200"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold text-[#3C2A1F]">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#3C2A1F] ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Renderizar el resto de items bajo demanda */}
          {showMore &&
            REMAINING_ITEMS.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white/80 rounded-xl overflow-hidden shadow-lg md:hover:scale-[1.03] md:transition-transform md:duration-200"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-semibold text-[#3C2A1F]">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-[#3C2A1F] ml-2">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Botón para alternar entre "Ver más" y "Ver menos" */}
        {REMAINING_ITEMS.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-[#3C2A1F] text-white px-6 py-3 rounded-lg hover:bg-[#2A1F15] transition-colors"
            >
              {showMore ? "Ver menos productos" : "Ver más productos"}
            </button>
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="mt-5 bg-[#3C2A1F] text-white px-8 py-3 rounded-lg 
                     hover:bg-[#2A1F15] transition-colors
                     font-medium flex items-center justify-center gap-2 
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-2xl">
              {isGeneratingPDF ? 'Generando...' : "Descarga la Carta en PDF"}
            </span>
            <FileText size={26} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
