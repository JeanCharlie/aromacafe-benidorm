"use client";

import { useState, useCallback, useMemo } from "react";
import { menuItems } from "@/data/menu";
import { motion, useReducedMotion } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Menu() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  // Usar intersection observer para lazy loading
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoizar los items del menú
  const memoizedMenuItems = useMemo(() => menuItems, []);

  // Memoizar la función de generación de PDF
  const generatePDF = useCallback(async () => {
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
  }, [isGeneratingPDF]);

  // Memoizar las animaciones base
  const animations = useMemo(() => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }), [prefersReducedMotion]);

  // Memoizar el renderizado de cada item del menú
  const renderMenuItem = useCallback((item: any, index: number) => (
    <motion.div
      key={item.id || index}
      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
      {...animations}
      transition={{ ...animations.transition, delay: index * 0.1 }}
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 6 ? "eager" : "lazy"}
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
    </motion.div>
  ), [animations, prefersReducedMotion]);

  return (
    <section className="relative bg-[#F5E6D3] py-20 px-6 pt-36">
      <div className="absolute top-0 left-0 w-full h-6 bg-white" />

      <div 
        ref={ref}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-[#3C2A1F] text-center mb-12"
          {...animations}
        >
          Nuestro Menú
        </motion.h2>

        {inView && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memoizedMenuItems.map(renderMenuItem)}
          </div>
        )}

        <div className="flex justify-center mt-12">
          <button
            aria-label={isGeneratingPDF ? 'Generando...' : "Descarga la Carta en PDF"}
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="mt-5 bg-[#3C2A1F] text-white px-8 py-3 rounded-lg hover:bg-[#2A1F15] transition-colors duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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