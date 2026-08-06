"use client";

import { useState } from 'react';
import { X, Target, Zap } from 'lucide-react';

const CORSI = [
  {
    "id": 1,
    "nome": "Gioco Sport",
    "focus": "Allenamento psicomotorio",
    "intensita": "Bassa",
    "descrizione": "Corso dedicato ai bambini dai 3 ai 5 anni focalizzato sullo sviluppo psicomotorio, il coordinamento di base e l'approccio ludico allo sport."
  },
  {
    "id": 2,
    "nome": "Corsi Base Avviamento alla Ginnastica Artistica",
    "focus": "Corpo libero, volteggio, parallele e trave",
    "intensita": "Medio-Bassa",
    "descrizione": "Corso ad età variabile per introdurre i partecipanti ai concetti chiave e agli attrezzi fondamentali della ginnastica artistica."
  },
  {
    "id": 3,
    "nome": "Preagonismo",
    "focus": "Potenziamento capacità fisiche e preparazione all'agonismo",
    "intensita": "Medio-Alta",
    "descrizione": "Percorso ad età variabile mirato al potenziamento delle capacità fisiche tramite lavoro specifico su trave, parallele, volteggio e corpo libero per impostare l'attività agonistica."
  },
  {
    "id": 4,
    "nome": "Agonistico",
    "focus": "Strutturazione avanzata delle tecniche e coordinazione complessa",
    "intensita": "Alta",
    "descrizione": "Corso ad età variabile focalizzato sulla strutturazione avanzata delle tecniche della ginnastica artistica e sulla coordinazione di precisione durante l'esecuzione degli esercizi."
  },
  {
    "id": 5,
    "nome": "Master (Over 30)",
    "focus": "Adeguamento capacità motorie ludico-competitivo amatoriale",
    "intensita": "Media",
    "descrizione": "Dedicato agli adulti Over 30 (livello base) per sviluppare ed adeguare le capacità motorie con finalità amatoriali, ludiche e amichevolmente competitive."
  },
  {
    "id": 6,
    "nome": "GAM (Ginnastica Artistica Maschile)",
    "focus": "Utilizzo di parallele, trave, trampolino, volteggio e sbarra",
    "intensita": "Media",
    "descrizione": "Corso base maschile per ragazzi dai 3 ai 17 anni focalizzato sull'apprendimento e la pratica degli attrezzi specifici della disciplina."
  },
];

const Corsi2 = [
  {
    "id": 1,
    "nome": "Corso Over 65 - Ginnastica Dolce",
    "focus": "Mantenimento, elasticità, equilibrio, forza e prevenzione cadute",
    "intensita": "Bassa",
    "descrizione": "Attività di ginnastica dolce pensata per migliorare il benessere generale, l'equilibrio e la forza, riducendo i dolori ossei e il rischio di cadute."
  },
  {
    "id": 3,
    "nome": "Sport e Disabilità",
    "focus": "Adattamento abilità motorie, cognitive e sensoriali per l'inclusione",
    "intensita": "Personalizzata",
    "descrizione": "Progetto sociale di inclusione ed eguaglianza focalizzato sull'adattamento delle abilità motorie, cognitive e sensoriali in un ambiente favorevole e stimolante."
  },
  {
    "id": 4,
    "nome": "Pallacanestro Over 18 Amatoriale",
    "focus": "Allenamenti funzionali e basket amatoriale",
    "intensita": "Media",
    "descrizione": "Corso rivolto ad adulti dai 18 anni in su che desiderano praticare la pallacanestro a livello amatoriale affiancata da sessioni di allenamento funzionale."
  },
  {
    "id": 5,
    "nome": "Calcio a 5 Under 13 - Primi Passi",
    "focus": "Regolamentazione, fondamenta del gioco e partite amatoriali",
    "intensita": "Medio-Bassa",
    "descrizione": "Corso di avviamento al calcio a 5 per ragazzi sotto i 13 anni, incentrato sulle prime fasi del gioco, sulla comprensione delle regole e su partite amatoriali formative."
  }
]

export default function Corsi() {
  const [selectedCorso, setSelectedCorso] = useState<typeof CORSI[0] | null>(null);

  return (
    <section className="pt-30 sm:pt-28 md:pt-36 pb-16 sm:pb-24 relative bg-gradient-to-b from-primary to-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <header className="mb-10 sm:mb-16 md:mb-20 text-center sm:text-left">
          <span className="text-secondary font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[10px] sm:text-xs">
            Training Programs
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter mt-2 sm:mt-4 leading-tight text-quarto">
            Scegli la tua <br className="hidden sm:block" />
            <span className="text-secondary border-b-2 border-secondary inline-block">Evoluzione</span>
          </h1>
        </header>

        {/* GRID CORSI */}
                <div className="text-center">
          <h3 className="text-secondary text-xl sm:text-2xl font-bold uppercase mt-8 sm:mt-12 mb-4 sm:mb-6">CORSI GINNASTICA ARTISTICA</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-quarto/20 border-2 border-quarto/20 rounded-md">
          {CORSI.map((corso) => (
            <div key={corso.id} className="bg-primary p-6 sm:p-8 lg:p-12 hover:bg-quarto/5 transition-colors group relative overflow-hidden flex flex-col justify-between">

              {/* Numero id id sfumato */}
              <span className="absolute -right-1 -top-2 sm:-right-1 sm:-top-5 text-7xl sm:text-8xl lg:text-9xl font-black text-quarto/30 group-hover:text-transparent transition-colors pointer-events-none select-none">
                {corso.id}
              </span>

              <div className="relative z-10">
                <span className="text-quarto text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  {corso.intensita} Intensity
                </span>
                <h3 className="text-secondary text-xl sm:text-2xl font-bold uppercase mt-1 sm:mt-2 mb-4 sm:mb-6 group-hover:text-secondary transition-colors leading-snug">
                  {corso.nome}
                </h3>

                <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                  <p className="text-[10px] sm:text-xs text-quarto/40 uppercase tracking-widest">Focus Area:</p>
                  <p className="text-quarto text-xs sm:text-sm font-light leading-relaxed">{corso.focus}</p>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                <button
                  onClick={() => setSelectedCorso(corso)}
                  className="text-quarto text-xs font-black uppercase tracking-widest border-b border-secondary pb-1 hover:text-secondary transition-all w-fit"
                >
                  Dettagli Corso +
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-secondary text-xl sm:text-2xl font-bold uppercase mt-8 sm:mt-12 mb-4 sm:mb-6">ALTRI CORSI</h3>
        </div>

        {/* GRID CORSI2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-quarto/20 border-2 border-quarto/20 rounded-md">
          {Corsi2.map((corso) => (
            <div key={corso.id} className="bg-primary p-6 sm:p-8 lg:p-12 hover:bg-quarto/5 transition-colors group relative overflow-hidden flex flex-col justify-between">

              {/* Numero id id sfumato */}
              <span className="absolute -right-1 -top-2 sm:-right-1 sm:-top-5 text-7xl sm:text-8xl lg:text-9xl font-black text-quarto/30 group-hover:text-transparent transition-colors pointer-events-none select-none">
                {corso.id}
              </span>

              <div className="relative z-10">
                <span className="text-quarto text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  {corso.intensita} Intensity
                </span>
                <h3 className="text-secondary text-xl sm:text-2xl font-bold uppercase mt-1 sm:mt-2 mb-4 sm:mb-6 group-hover:text-secondary transition-colors leading-snug">
                  {corso.nome}
                </h3>

                <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                  <p className="text-[10px] sm:text-xs text-quarto/40 uppercase tracking-widest">Focus Area:</p>
                  <p className="text-quarto text-xs sm:text-sm font-light leading-relaxed">{corso.focus}</p>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                <button
                  onClick={() => setSelectedCorso(corso)}
                  className="text-quarto text-xs font-black uppercase tracking-widest border-b border-secondary pb-1 hover:text-secondary transition-all w-fit"
                >
                  Dettagli Corso +
                </button>
              </div>

            </div>
          ))}
        </div>
        {/* MODALE RESPONSIVE */}
        {selectedCorso && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-primary/80 backdrop-blur-md"
              onClick={() => setSelectedCorso(null)}
            />

            {/* Card Modale */}
            <div className="relative bg-primary border border-quarto/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 my-auto">
              {/* Barra superiore */}
              <div className="h-2 w-full bg-secondary sticky top-0 z-20" />

              {/* Pulsante di chiusura fluttuante */}
              <button
                onClick={() => setSelectedCorso(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-quarto hover:text-secondary transition-colors z-20 p-2"
                aria-label="Chiudi modale"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              <div className="p-5 sm:p-8 md:p-12">
                <span className="text-quarto font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px]">
                  Scheda Tecnica Corso {selectedCorso.id}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase italic text-secondary mt-1 sm:mt-2 mb-6 sm:mb-8 leading-tight pr-8">
                  {selectedCorso.nome}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-10 text-xs sm:text-sm">
                  <div className="flex items-start space-x-3">
                    <Zap className="text-secondary shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold uppercase tracking-tighter text-secondary">Intensità</p>
                      <p className="text-quarto/60">{selectedCorso.intensita}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="text-secondary shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold uppercase tracking-tighter text-secondary">Focus</p>
                      <p className="text-quarto/60">{selectedCorso.focus}</p>
                    </div>
                  </div>
                </div>

                <p className="text-quarto/80 text-xs sm:text-sm leading-relaxed font-light mb-6 sm:mb-10 border-l-2 border-quarto/20 pl-4 sm:pl-6 italic">
                  &quot;{selectedCorso.descrizione}&quot;
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="w-full sm:flex-1 bg-secondary text-white py-3.5 sm:py-4 font-black uppercase tracking-widest text-xs hover:bg-secondary/80 transition rounded-md">
                    Prenota Posto
                  </button>
                  <button
                    onClick={() => setSelectedCorso(null)}
                    className="w-full sm:flex-1 border border-quarto/20 text-quarto py-3.5 sm:py-4 font-black uppercase tracking-widest text-xs hover:bg-quarto/90 hover:text-primary transition rounded-md "
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BANNER CTA */}
        <section className="mt-16 sm:mt-24 md:mt-32 p-6 sm:p-8 md:p-12 bg-secondary flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-8 rounded-md shadow-[0_0_2px_0px_var(--color-quarto)] hover:-translate-y-4 hover:shadow-[0_10px_15px_0px_var(--color-quarto)]  transition-all">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase italic leading-tight text-primary">
            Vuoi una consulenza biomeccanica gratuita?
          </h2>
          <button className="w-full md:w-auto shrink-0 bg-quarto text-primary px-6 sm:px-10 py-3.5 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-primary hover:text-quarto transition rounded-lg">
            Prenota Ora
          </button>
        </section>

      </div>
    </section>
  );
}