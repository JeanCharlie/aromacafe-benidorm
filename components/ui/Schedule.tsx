"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import dynamic from "next/dynamic";
import Loading from "./Loading";

const Map = dynamic(() => import("@/components/ui/Map"), {
  loading: () => <Loading />,
  ssr: false,
});

export default function Schedule() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-[#3C2A1F] mb-12">
        Visítanos
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {["Horario", "Ubicación", "Contacto"].map((section) => (
              <div key={section} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  {section === "hours" && <FaClock className="text-2xl text-[#3C2A1F]" />}
                  {section === "location" && <FaMapMarkerAlt className="text-2xl text-[#3C2A1F]" />}
                  {section === "contact" && <FaPhone className="text-2xl text-[#3C2A1F]" />}
                  <h3 className="text-2xl font-semibold text-[#3C2A1F]">
                    {section}
                  </h3>
                </div>
                {section === "Horario" && (
                  <div className="space-y-2 text-lg">
                    <p>Lunes a Sábado: 9:00 AM - 9:00 PM</p>
                    <p className="text-red-600 font-semibold">Domingos: Cerrado</p>
                  </div>
                )}
                {section === "Ubicación" && (
                  <>
                    <p className="text-lg">Calle Rioja 1, Local 5</p>
                    <p className="text-lg">Benidorm, Spain 03501</p>
                  </>
                )}
                {section === "Contacto" && (
                  <>
                    <p className="text-lg">+34 999 999 999</p>
                    <p className="text-lg">info@cafearoma.com</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="w-full">
            <Map />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
