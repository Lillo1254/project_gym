import { Mail, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import Address from "@/app/components/bodyComponents/layout/Address";

export default function ContactPage() {
  return (
    <div className="bg-primary min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Sezione */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black  italic uppercase leading-none tracking-tighter">
            <span className="text-secondary opacity-40">ENTRA NEL</span> <span className="text-secondary brightness-125">SISTEMA</span>
          </h1>
          <p className="mt-6 text-quarto text-lg md:text-xl max-w-2xl font-light">
            Scegli il protocollo di comunicazione più adatto alle tue esigenze. 
            Il nostro team biomeccanico risponderà entro 24 ore.
          </p>
        </div>

        {/* Griglia Contatti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-quarto/20">
          
          {/* Email Card */}
          <a href="mailto:info@tuodominio.it" 
             className="group relative p-12 border-b md:border-b-0 md:border-r border-quarto/20 hover:bg-secondary transition-colors duration-500">
            <Mail className="text-secondary group-hover:text-primary mb-8 w-10 h-10 transition-colors" />
            <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 group-hover:text-primary">Invia Email</h3>
            <p className="text-quarto group-hover:text-primary/80 mb-8 font-light">
              Per richieste commerciali, partnership o invio di documentazione tecnica.
            </p>
            <div className="flex items-center text-secondary group-hover:text-primary font-bold tracking-widest text-sm uppercase">
              Scrivi ora <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp Card */}
          <a href="https://wa.me/391234567890" 
             target="_blank" 
             className="group relative p-12 border-b md:border-b-0 md:border-r border-quarto/20 hover:bg-secondary transition-colors duration-500">
            <MessageCircle className="text-secondary group-hover:text-primary mb-8 w-10 h-10 transition-colors" />
            <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 group-hover:text-primary">WhatsApp</h3>
            <p className="text-quarto group-hover:text-primary/80 mb-8 font-light">
              Protocollo rapido per info sui corsi, disponibilità posti e trial session.
            </p>
            <div className="flex items-center text-secondary group-hover:text-primary font-bold tracking-widest text-sm uppercase">
              Chatta ora <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
          </a>

          {/* Call Card */}
          <a href="tel:+391234567890" 
             className="group relative p-12 hover:bg-secondary transition-colors duration-500">
            <Phone className="text-secondary group-hover:text-primary mb-8 w-10 h-10 transition-colors" />
            <h3 className="text-2xl font-black text-secondary uppercase italic mb-4 group-hover:text-primary">Chiamata</h3>
            <p className="text-quarto group-hover:text-primary/80 mb-8 font-light">
              Parla direttamente con un coach per un consulto sulla tua preparazione.
            </p>
            <div className="flex items-center text-secondary group-hover:text-primary font-bold tracking-widest text-sm uppercase">
              Chiama ora <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
          </a>

        </div>

        {/* Footer Decorativo / Info Extra */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-quarto/10 pt-10">
          <div>
            <span className="text-secondary font-black text-5xl italic opacity-100 brightness-125 uppercase select-none">
              Precision is not optional
            </span>
          </div>
          <div className="text-right">
            <p className="text-quarto/50 uppercase text-xs tracking-[0.2em] mb-2">Sede Centrale</p>
            <p className="text-quarto font-bold italic">{Address.indirizzo}, {Address.citta} {Address.cap}</p>
          </div>
        </div>

      </div>
    </div>
  );
}