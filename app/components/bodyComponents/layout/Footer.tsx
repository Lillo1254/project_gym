import { MapPin, Phone, Mail, Hash} from 'lucide-react';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-quarto/20 pt-16 pb-8 text-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNA 1: BRAND E CODICE FISCALE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase italic">
              STEEL <span className="text-secondary">WOOD</span> LINEAR
            </h2>
            <p className="text-white text-sm leading-relaxed">
              L&apos;eccellenza nella ginnastica artistica. Uniamo forza strutturale e precisione lineare per atleti del futuro.
            </p>
            <div className="flex items-center space-x-2 text-xs text-white uppercase tracking-widest">
              <Hash size={14} />
              <span>P.IVA / CF: 1234567890123</span>
            </div>
          </div>

          {/* COLONNA 2: CONTATTI RAPIDI */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-secondary" />
                <a href="tel:+39012345678" className="text-white hover:text-tertiary transition">+39 012 345 678</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-secondary" />
                <a href="mailto:info@steelwoodlinear.com" className="text-white hover:text-tertiary transition">info@steelwoodlinear.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-secondary" />
                <span className="text-white">Via dell&apos;Evoluzione 42, Milano</span>
              </li>
            </ul>
          </div>

          {/* COLONNA 3: SOCIAL & ORARI */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Orari & Social</h3>
            <p className="text-sm text-white">Lun - Ven: 08:00 - 21:30<br />Sab: 09:00 - 18:00</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-quarto/10 rounded-full hover:bg-secondary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-2 bg-quarto/10 rounded-full hover:bg-secondary transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* COLONNA 4: GOOGLE MAPS PREVIEW */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Posizione</h3>
            <div className="w-full h-40 rounded-sm overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-quarto/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.123456789!2d9.190!3d45.464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUwLjQiTiA5wrAxMSc0My4yIkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-quarto/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-white">
          <p>© 2026 STEEL WOOD LINEAR. Tutti i diritti riservati.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-tertiary transition">Privacy Policy</a>
            <a href="#" className="hover:text-tertiary transition">Cookie Policy</a>
            <a href="#" className="hover:text-tertiary transition">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}