"use client";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { footerStyles } from "@/utils/utils";


export default function Footer() {

  const pathname = usePathname();
  const currentStyle = footerStyles[pathname];

  return (
    <footer
      className={`py-6 ${currentStyle} text-black text-center transition-all duration-300`}
      style={{
        clipPath: "ellipse(100% 95% at 30% 95%)",
      }}
    >
      <p className="mb-4">
      © {new Date().getFullYear()} Aroma Cafe. Todos los derechos reservados.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/aromacafe.es/"
          className="text-xl"
          aria-label="Ir a la página de instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/p/Aroma-Cafe-100089038656584/?locale=es_LA"
          className="text-xl"
          aria-label="Ir a la página de facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-xl"
          aria-label="Ir a la página de whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
}
