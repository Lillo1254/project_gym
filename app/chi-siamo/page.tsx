import { Phone, Mail, Clock } from 'lucide-react';
import Address from "@/app/components/bodyComponents/layout/Address";

export default function ChiSiamo() {
  return (
    <main className="pt-32 pb-24 bg-gradient-to-b from-primary to-tertiary">
      {/* SECTION: MISSION */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-12">
          LA NOSTRA <span className="text-secondary">FILOSOFIA</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <p className="text-xl font-light text-quarto leading-relaxed">
            Steel Wood Linear nasce dall&apos;esigenza di riportare la ginnastica artistica alle sue radici fisiche,
            potenziandole con le più moderne tecnologie di analisi biomeccanica. Non siamo solo una palestra,
            siamo un laboratorio di movimento.
          </p>
          <div className="space-y-6">
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="font-bold uppercase tracking-widest text-tertiary">Steel (Acciaio)</h3>
              <p className="text-quarto/60 text-sm">La forza strutturale necessaria per ogni evoluzione.</p>
            </div>
            <div className="border-l-4 border-quarto pl-6">
              <h3 className="font-bold uppercase tracking-widest text-tertiary">Wood (Legno)</h3>
              <p className="text-quarto/60 text-sm">La flessibilità organica che permette l&apos;adattamento.</p>
            </div>
            <div className="border-l-4 border-secondary/50 pl-6">
              <h3 className="font-bold uppercase tracking-widest text-tertiary">Linear (Linea)</h3>
              <p className="text-quarto/60 text-sm">La precisione tecnica che definisce la perfezione.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 mb-24 ">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-16 italic">
          LE NOSTRE <span className="text-secondary">ATTIVITÀ</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1: Centri Estivi */}
          <div className=" bg_centri p-10 rounded-sm border-l-4 border-secondary flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Centri Estivi</h3>
              <p className="text-tertiary  font-light leading-relaxed mb-6">
                Un&apos;estate all&apos;insegna del movimento, del gioco e dello sviluppo delle capacità motorie.
                I nostri centri estivi offrono un ambiente sicuro dove i ragazzi possono esplorare
                nuove discipline, fare squadra e divertirsi.
              </p>
            </div>
            <a href="/contatti" className="text-tertiary font-bold text-sm tracking-widest uppercase hover:underline">
              Scopri di più &rarr;
            </a>
          </div>

          {/* Card 2: Campo Scuola Allenamento */}
          <div className="bg_campi p-10 rounded-sm border-l-4 border-quarto flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Campo Scuola Allenamento</h3>
              <p className="text-tertiary font-light leading-relaxed mb-6">
                Sessioni intensive e campi di allenamento dedicati alla preparazione fisica,
                ideali per atleti che vogliono perfezionare la tecnica e raggiungere nuovi traguardi.
              </p>
            </div>
            <a href="/contatti" className="text-tertiary font-bold text-sm tracking-widest uppercase hover:underline">
              Prenota il tuo posto &rarr;
            </a>
          </div>

          {/* Card 3: Educatrici e Responsabili */}
          <div className="bg_istruttori p-10 rounded-sm border-l-4 border-secondary/50 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Educatrici e Responsabili</h3>
              <p className="text-tertiary font-light leading-relaxed mb-6">
                Il nostro team è composto da istruttori qualificati ed educatrici specializzate,
                pronti a seguire ogni partecipante con attenzione personalizzata e grande entusiasmo.
              </p>
            </div>
            <a href="/contatti" className="text-tertiary font-bold text-sm tracking-widest uppercase hover:underline">
              Conosci il team &rarr;
            </a>
          </div>
        </div>
      </section>



      {/* SECTION: CONTATTI FULL */}
      <section className=" py-24 text-primary">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase mb-12 italic text-center">Mettiti in Contatto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-primary p-8 text-tertiary rounded-sm flex flex-col items-center text-center">
              <Phone className="text-secondary mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Chiamaci</h4>
              <p className="text-quarto">{Address.numero}</p>
            </div>
            <div className="bg-primary p-8 text-tertiary rounded-sm flex flex-col items-center text-center">
              <Mail className="text-secondary mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Email</h4>
              <p className="text-quarto">{Address.email}</p>
            </div>
            <div className="bg-primary p-8 text-tertiary rounded-sm flex flex-col items-center text-center">
              <Clock className="text-secondary mb-4" size={32} />
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Visita</h4>
              <p className="text-quarto">{Address.indirizzo}, {Address.citta} {Address.cap}</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}