"use client"; // Necessario in Next.js App Router per usare useState

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full mt-15 z-50 bg-black/50 backdrop-blur-md border-b border-quarto/20 shadow-[0_0_10px_5px_var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl font-bold tracking-tighter text-tertiary">
          <Link href="/">STEEL <span className="text-secondary">WOOD</span> LINEAR</Link>
        </h1>

        {/* DESKTOP MENU nascosto su mobile */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest">
          <Link href="/corsi" className="hover:text-secondary transition">Corsi</Link>
          <Link href="/competizioni" className="hover:text-secondary transition">Competizioni</Link>
          <Link href="/contact" className="hover:text-secondary transition">Contatti</Link>
          <Link href="/chi-siamo" className="hover:text-secondary transition">About Us</Link>
          <button className="bg-secondary px-5 py-2 rounded-full font-bold hover:scale-115 transition duration-300 text-white">
            ISCRIVITI
          </button>
        </div>

        {/* BURGER BUTTON (visibile solo su mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-tertiary focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              {/* Animazione Burger in X */}
              <span className={`w-full h-0.5 bg-tertiary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-tertiary transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-tertiary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Slide Down) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary ${isOpen ? 'max-h-96 opacity-100 border-b border-quarto/20' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col space-y-6 text-center uppercase tracking-[0.2em] text-sm">
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Programmi</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Atleti</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Contatti</Link>
          <button className="bg-secondary px-5 py-4 rounded-sm font-bold text-white">
            ISCRIVITI ORA
          </button>
        </div>
      </div>
    </nav>
  );
}