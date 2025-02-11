"use client";

import { menuBackgrounds } from "@/utils/utils";
import  Link  from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes, FaCoffee } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pathname = usePathname();

  const currentBg = menuBackgrounds[pathname];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-8">
        {/* Ícono de café y logo a la izquierda */}
        <div className="flex items-center space-x-2">
          <FaCoffee size={32} />
          <Link
            href="/"
            className="flex items-center"
            aria-label="Ir a la página inicio"
          >
            <Image
              src="/logo.png"
              alt="Aroma Cafe"
              width={128}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Menú para dispositivos grandes */}
        <div className="hidden md:flex space-x-8 text-2xl">
          <Link
            href="/"
            className={`text-[#3C2A1F] hover:text-[#a8856f] transition`}
            aria-label="Ir a la página de inicio"
          >
            Inicio
          </Link>
          <Link
            href="/menu"
            className="text-[#3C2A1F] hover:text-[#a8856f] transition"
            aria-label="Ir a la página de menú"
          >
            Menú
          </Link>
          <Link
            href="/gallery"
            className="text-[#3C2A1F] hover:text-[#a8856f] transition"
            aria-label="Ir a la página de galería"
          >
            Galería
          </Link>
          

  
        </div>

        {/* Menú móvil */}
        <div className="md:hidden z-50 flex items-center space-x-4">
        
          <button aria-label="Abrir menú" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="#3C2A1F" />
            ) : (
              <FaBars size={24} color="#3C2A1F" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div
          className={`absolute ${currentBg} text-2xl top-0 left-0 right-0 p-6 md:hidden backdrop-blur-md`}
        >
          <Link
            href="/"
            className="block py-2 text-[#3C2A1F] hover:text-white onClick={toggleMenu}"
            aria-label="Ir a la página de inicio"
          >
            Inicio
          </Link>
          <Link
            href="/menu"
            className="block py-2 text-[#3C2A1F] hover:text-white"
            onClick={toggleMenu}
            aria-label="Ir a la página de menú"
          >
            Menú
          </Link>
          <Link
            href="/gallery"
            className="block py-2 text-[#3C2A1F] hover:text-white"
            onClick={toggleMenu}
            aria-label="Ir a la página de galería"
          >
            Galería
          </Link>
      
        </div>
      )}
    </header>
  );
}
