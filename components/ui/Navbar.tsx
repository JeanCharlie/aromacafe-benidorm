"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FaCoffee } from 'react-icons/fa';
import { menuBackgrounds } from '@/utils/utils';

// Precargar los íconos como componentes estáticos
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#3C2A1F" strokeWidth="2">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="#3C2A1F" strokeWidth="2">
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const currentBg = menuBackgrounds[pathname];
  
  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent
backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-8">
        <div className="flex items-center space-x-2">
          <FaCoffee />
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Aroma Cafe"
              width={128}
              height={40}
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-2xl">
          <Link href="/" className="text-[#3C2A1F] hover:text-[#a8856f]">
            Inicio
          </Link>
          <Link href="/menu" className="text-[#3C2A1F] hover:text-[#a8856f]">
            Menú
          </Link>
          <Link href="/gallery" className="text-[#3C2A1F] hover:text-[#a8856f]">
            Galería
          </Link>
        </nav>

        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`absolute  top-full left-0 right-0 ${currentBg} md:hidden`}>
          <nav className="flex flex-col text-2xl">
            <Link 
              href="/" 
              className="px-8 py-4 text-[#3C2A1F] hover:bg-[#3C2A1F] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/menu" 
              className="px-8 py-4 text-[#3C2A1F] hover:bg-[#3C2A1F] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Menú
            </Link>
            <Link 
              href="/gallery" 
              className="px-8 py-4 text-[#3C2A1F] hover:bg-[#3C2A1F] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Galería
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
