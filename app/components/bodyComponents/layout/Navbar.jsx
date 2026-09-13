"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (path) => {
    const isActive = pathname === path;
    const baseClasses = "px-3 py-1.5 rounded-md transition duration-300";
    
    return isActive
      ? `${baseClasses} bg-white text-black font-bold shadow-sm`
      : `${baseClasses} hover:text-secondary text-quarto`;
  };

  return (
    <nav className="fixed top-10 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-quarto/20 shadow-[0_0_10px_5px_var(--color-secondary)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative h-16">
        
        {/* LOGO + TITOLO (con overflow visibile e ingrandito) */}
        <div className="flex items-center gap-3">
          <Link href="/" className="relative flex items-center">
            {/* Il logo è ingrandito e posizionato in modo da uscire dai bordi verticali */}
            <div className="relative w-24 h-24 sm:w-30 sm:h-30 -my-8 sm:-my-10 shrink-0 flex items-center justify-center">
  <Image 
    src="/images/logoasd.png" 
    alt="Logo ASD Free Mind" 
    fill 
    sizes="(max-width: 640px) 96px, 128px"
    className="object-contain scale-125 transition-transform duration-300 brightness-0 invert"
    priority
  />
</div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tighter text-quarto uppercase ml-2">
              ASD <span className="text-secondary">FREE</span> MIND
            </h1>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm uppercase tracking-widest text-quarto">
          <Link href="/corsi" className={getLinkClasses("/corsi")}>Corsi</Link>
          <Link href="/competizioni" className={getLinkClasses("/competizioni")}>Competizioni</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contatti</Link>
          <Link href="/chi-siamo" className={getLinkClasses("/chi-siamo")}>About Us</Link>
          <button className="bg-secondary px-5 py-2 rounded-full font-bold hover:scale-105 transition duration-300 text-white">
            ISCRIVITI
          </button>
        </div>

        {/* BURGER BUTTON (mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-quarto focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-tertiary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-tertiary transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-tertiary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-primary/95 backdrop-blur-lg ${isOpen ? 'max-h-96 opacity-100 border-b border-quarto/20' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 flex flex-col space-y-4 text-center uppercase tracking-[0.2em] text-sm">
          <Link href="/corsi" className={getLinkClasses("/corsi")} onClick={() => setIsOpen(false)}>Corsi</Link>
          <Link href="/competizioni" className={getLinkClasses("/competizioni")} onClick={() => setIsOpen(false)}>Competizioni</Link>
          <Link href="/contact" className={getLinkClasses("/contact")} onClick={() => setIsOpen(false)}>Contatti</Link>
          <Link href="/chi-siamo" className={getLinkClasses("/chi-siamo")} onClick={() => setIsOpen(false)}>About Us</Link>
          <button className="bg-secondary px-5 py-3 rounded-md font-bold text-white w-full mt-2">
            ISCRIVITI ORA
          </button>
        </div>
      </div>
    </nav>
  );
}