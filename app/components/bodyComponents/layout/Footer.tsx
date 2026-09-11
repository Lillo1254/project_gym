import { MapPin, Phone, Mail, Hash } from 'lucide-react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import Address from "@/app/components/bodyComponents/layout/Address";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-quarto/20 pt-16 pb-8 text-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* COLONNA 1: BRAND E CODICE FISCALE */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase italic text-quarto">
              ASD <span className="text-secondary">FREE</span> MIND
            </h2>
            <p className="text-white text-sm leading-relaxed">
              L&apos;eccellenza nella ginnastica artistica. Uniamo forza strutturale e precisione lineare per atleti del futuro.
            </p>
            <div className="flex items-center space-x-2 text-xs text-white uppercase tracking-widest">
              <Hash size={14} />
              <span>P.IVA / CF: {Address.partitaiva}</span>
            </div>
          </div>

          {/* COLONNA 2: CONTATTI RAPIDI */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-secondary" />
                <a href={`tel:${Address.numero}`} className="text-white hover:text-tertiary transition">{Address.numero}</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-secondary" />
                <a href={`mailto:${Address.email}`} className="text-white hover:text-tertiary transition">{Address.email}</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-secondary" />
                <a href={`mailto:${Address.pec}`} className="text-white hover:text-tertiary transition">{Address.pec}</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-secondary" />
                <span className="text-white">{Address.indirizzo}, {Address.citta} {Address.cap}</span>
              </li>
            </ul>
          </div>

          {/* COLONNA 3: SOCIAL & ORARI */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Orari & Social</h3>
            <p className="text-sm text-white">Lun - Ven: 08:00 - 21:30<br />Sab: 09:00 - 18:00</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-quarto rounded-full hover:bg-secondary hover:scale-110 transition-all ">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="p-2 bg-quarto rounded-full hover:bg-secondary hover:scale-110 transition-all">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* COLONNA 4: GOOGLE MAPS PREVIEW */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-secondary text-sm">Posizione</h3>
            <div className="w-full h-40 rounded-sm overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-quarto/20">
{/*               <iframe
                src="https://www.google.com/maps/place/Via+Licinio+Murena,+36,+00175+Roma+RM,+Italia/@41.8623441,12.5522835,17z/data=!3m1!4b1!4m6!3m5!1s0x132f627513cdcc21:0xb89a71a15f747b42!8m2!3d41.8623401!4d12.5548584!16s%2Fg%2F11q2xl0nb5?hl=it-IT&entry=ttu&g_ep=EgoyMDI2MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.418384555855!2d12.552283476560923!3d41.862344066399785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f627513cdcc21%3A0xb89a71a15f747b42!2sVia%20Licinio%20Murena%2C%2036%2C%2000175%20Roma%20RM%2C%20Italia!5e0!3m2!1sit!2sus!4v1789124435866!5m2!1sit!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                /* allowfullscreen="" */
                loading="lazy"
                ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-evenly pb-4">
          <Image
            src="/images/logo_coni.svg"
            alt="Logo CONI"
            width={100}
            height={100}
            className="object-contain scale-125 transition-transform duration-300 py-6 sm:py-0 text-center"
            priority
          />
          <Image
            src="/images/logoFGI.png"
            alt="Logo FGI"
            width={80}
            height={80}
            className="object-contain scale-125 transition-transform duration-300 py-6 sm:py-0"
            priority
          />
          <Image
            src="/images/sportsalute.jpg"
            alt="Logo Sport e Salute"
            width={100}
            height={100}
            className="object-contain scale-125 transition-transform duration-300 py-6 sm:py-0"
            priority
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-quarto/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-white">
          <p>© 2026 ASD FREE MIND. Tutti i diritti riservati.</p>
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