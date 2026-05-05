"use client";

import { useState } from 'react';
import { X, Target, Zap } from 'lucide-react';

const CORSI = [
  { id: '01', nome: 'Artistica Pro', focus: 'Anelli, Cavallo, Parallele', intensita: 'High', descrizione: 'Il corso definitivo per ginnasti esperti. Focalizzato sulla tecnica olimpica e sulla forza esplosiva agli attrezzi.' },
  { id: '02', nome: 'Linear Acrobatics', focus: 'Corpo libero e Trampolino', intensita: 'Medium-High', descrizione: 'Perfeziona le tue rotazioni e il controllo aereo. Ideale per chi cerca precisione acrobatica e linee pulite.' },
  { id: '03', nome: 'Wood Mobility', focus: 'Flessibilità e Stretching Dinamico', intensita: 'Low-Medium', descrizione: 'Rendi il tuo corpo flessibile come il legno giovane. Tecniche di allungamento PNF e mobilità articolare avanzata.' },
  { id: '04', nome: 'Steel Core', focus: 'Potenziamento Isometrico', intensita: 'Very High', descrizione: 'Costruisci un nucleo d&apos;acciaio. Allenamento specifico per la tenuta del corpo e stabilità in ogni posizione.' },
  { id: '05', nome: 'Calisthenics Lab', focus: 'Forza a corpo libero', intensita: 'High', descrizione: 'L&apos;arte del controllo motorio estremo. Muscle-up, planche e front lever analizzati tramite biomeccanica.' },
  { id: '06', nome: 'Pre-Agonistica Junior', focus: 'Basi motorie e disciplina', intensita: 'Medium', descrizione: 'Il percorso per i futuri campioni. Sviluppo coordinativo e approccio alla disciplina della ginnastica.' },
];

export default function Corsi() {
  const [selectedCorso, setSelectedCorso] = useState<typeof CORSI[0] | null>(null);

  return (
    <section className="pt-36 pb-24 relative bg-gradient-to-b from-primary to-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">Training Programs</span>
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mt-4">
            Scegli la tua <br/> 
            <span className="text-transparent border-b-2 border-secondary">Evoluzione</span>
          </h1>
        </header>

        {/* GRID CORSI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-quarto/20 border border-quarto/20">
          {CORSI.map((corso) => (
            <div key={corso.id} className="bg-primary p-12 hover:bg-quarto/5 transition-colors group relative overflow-hidden">
              <span className="absolute -right-4 -top-8 text-9xl font-black text-quarto/5 group-hover:text-secondary/10 transition-colors pointer-events-none">
                {corso.id}
              </span>
              
              <div className="relative z-10">
                <span className="text-secondary text-xs font-bold uppercase tracking-widest">{corso.intensita} Intensity</span>
                <h3 className="text-2xl font-bold uppercase mt-2 mb-6 group-hover:text-secondary transition-colors">{corso.nome}</h3>
                
                <div className="space-y-2 mb-8">
                  <p className="text-xs text-quarto/40 uppercase tracking-widest">Focus Area:</p>
                  <p className="text-quarto text-sm font-light">{corso.focus}</p>
                </div>

                <button 
                  onClick={() => setSelectedCorso(corso)}
                  className="text-xs font-black uppercase tracking-widest border-b border-secondary pb-1 hover:text-secondary transition-all"
                >
                  Dettagli Corso +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODALE */}
        {selectedCorso && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Overlay scuro */}
            <div 
              className="absolute inset-0 bg-primary/80 backdrop-blur-md" 
              onClick={() => setSelectedCorso(null)}
            />
            
            {/* Contenuto Modale */}
            <div className="relative bg-primary border border-quarto/30 w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
              {/* Barra superiore colorata */}
              <div className="h-2 w-full bg-secondary" />
              
              <button 
                onClick={() => setSelectedCorso(null)}
                className="absolute top-6 right-6 text-quarto hover:text-secondary transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px]">
                  Scheda Tecnica Corso {selectedCorso.id}
                </span>
                <h2 className="text-4xl font-black uppercase italic text-tertiary mt-2 mb-8">
                  {selectedCorso.nome}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-sm">
                  <div className="flex items-start space-x-3">
                    <Zap className="text-secondary shrink-0" size={20} />
                    <div>
                      <p className="font-bold uppercase tracking-tighter text-tertiary">Intensità</p>
                      <p className="text-quarto/60">{selectedCorso.intensita}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="text-secondary shrink-0" size={20} />
                    <div>
                      <p className="font-bold uppercase tracking-tighter text-tertiary">Focus</p>
                      <p className="text-quarto/60">{selectedCorso.focus}</p>
                    </div>
                  </div>
                </div>

                <p className="text-quarto/80 leading-relaxed font-light mb-10 border-l-2 border-quarto/20 pl-6 italic">
                  &quot;{selectedCorso.descrizione}&quot;
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                  <button className="flex-1 bg-secondary text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-secondary/80 transition">
                    Prenota Posto
                  </button>
                  <button 
                    onClick={() => setSelectedCorso(null)}
                    className="flex-1 border border-quarto/20 text-quarto py-4 font-black uppercase tracking-widest text-xs hover:bg-quarto/10 transition"
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="mt-32 p-12 bg-secondary flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-3xl font-black uppercase italic mb-6 md:mb-0">Vuoi una consulenza biomeccanica gratuita?</h2>
          <button className="bg-primary text-tertiary px-10 py-4 font-bold uppercase tracking-widest hover:bg-quarto hover:text-primary transition">
            Prenota Ora
          </button>
        </section>
      </div>
    </section>
  );
}