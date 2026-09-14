import Image from "next/image";

export default function Competizioni() {

  const competitions = [
    {
      id: 1,
      title: 'Campionato Nazionale Assoluto',
      entity: 'Federazione X',
      description: 'Riconoscimento nazionale ',
      imageUrl: "/images/logo_coni.svg",
      featured: true, 
    },
    {
      id: 2,
      title: 'Winter Cup Tech Challenge',
      entity: 'Ente Y',
      description: 'Torneo incentrato sulla precisione e sull’esplosività, con focus sui dati di atterraggio e rotazione.',
      imageUrl: '/images/logoFGI.png',
      featured: false,
    },
  ];
  // csi csen uisp , sport e salute

  return (
    <>
      {/* Hero Section per la pagina Competizioni */}
      <section className="relative h-[60svh] md:h-[70svh] flex items-center justify-center overflow-hidden pt-30 md:py-20 bg-primary">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-secondary/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />

        <div className="text-center px-6 pt-15 w-full flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black italic uppercase leading-[0.9] tracking-tighter mb-6">
            <span className="text-secondary titleP">A</span><span className="text-secondary brightness-125">RENA</span> <br className="md:hidden" />
            <span className="text-secondary titleP mx-0 px-0">G</span><span className="text-secondary brightness-125 mx-0 px-0">ARE</span>
          </h2>
          <p className="mt-2 text-quarto text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Esplora la nostra offerta formativa e scopri tutti i corsi pensati per ogni età e livello: dallo sviluppo psicomotorio dei più piccoli all&apos;agonismo, dal fitness amatoriale all&apos;inclusione, per allenare il corpo e superare ogni tuo limite.
          </p>
        </div>
      </section>

      {/* Sezione Principale delle Competizioni */}
      <section className="py-24 bg-primary border-t border-quarto/10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Introduzione e descrizione della pagina */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-black italic text-sm tracking-[0.3em] uppercase mb-4 block">
                Stagione 2024 - 2026
              </span>
              <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-6 ">
                <span className="text-secondary brightness-125">Le competizioni</span> <br />
                <span className="text-secondary underline decoration-primary">del nostro circuito</span>
              </h3>
            </div>
            <p className="text-quarto text-base md:text-xl max-w-md mx-auto font-light leading-relaxed">
              Ogni sessione di allenamento unisce la forza e l&apos;energia dei nostri partecipanti a un metodo strutturato, per migliorare costantemente tecnica, coordinazione e benessere.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary border-t border-quarto/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-primary/40 border border-quarto/20 p-8 md:p-12 hover:border-secondary/50 transition-all duration-500 group">


            <div className="w-full md:w-1/2 h-75 md:h-100 relative flex items-center justify-center p-8 bg-white/5 border border-quarto/10">
              <div className="w-4/5 h-4/5 relative">
                <Image
                  src={competitions[0].imageUrl}
                  alt={competitions[0].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary/80 border border-quarto/20 text-secondary px-3 py-1 font-black italic text-xs tracking-widest uppercase">
                {competitions[0].entity}
              </div>
            </div>

            {/* Contenitore Testo */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
              <div>
                <span className="text-secondary font-black italic text-xs tracking-[0.3em] uppercase mb-2 block">
                  Evento Principale
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-6 text-quarto group-hover:text-secondary transition-colors">
                  {competitions[0].title}
                </h3>
                <p className="text-quarto/70 text-base font-light leading-relaxed mb-8">
                  {competitions[0].description}
                </p>
              </div>


            </div>

          </div>
        </div>
      </section>

      {/* Sezione Seconda Competizione */}
      <section className="py-24 bg-primary border-t border-quarto/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center bg-primary/40 border border-quarto/20 p-8 md:p-12 hover:border-secondary/50 transition-all duration-500 group">


            <div className="w-full md:w-1/2 h-75 md:h-100 relative flex items-center justify-center p-8 bg-white/5 border border-quarto/10">
              <div className="w-4/5 h-4/5 relative">
                <Image
                  src={competitions[1].imageUrl}
                  alt={competitions[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary/80 border border-quarto/20 text-secondary px-3 py-1 font-black italic text-xs tracking-widest uppercase">
                {competitions[1].entity}
              </div>
            </div>

            {/* Contenitore Testo */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
              <div>
                <span className="text-secondary font-black italic text-xs tracking-[0.3em] uppercase mb-2 block">
                  Evento Secondario
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-6 text-quarto group-hover:text-secondary transition-colors">
                  {competitions[1].title}
                </h3>
                <p className="text-quarto/70 text-base font-light leading-relaxed mb-8">
                  {competitions[1].description}
                </p>
              </div>


            </div>

          </div>

        </div>
      </section>
    </>
  );
}