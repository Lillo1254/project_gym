import { FeatureCard } from './components/card/CardArticles';
import Image from 'next/image';
import { Activity, Zap, Target, ArrowRight } from 'lucide-react';
import ObserverImageHero from './components/componentsObserver/ObserverImageHero';
import Link from 'next/link';

export default function Home() {

  const plans = [
    { name: 'Basic', price: '89', features: ['3 Sessioni/settimana', 'Analisi Video', 'Accesso Lab'] },
    { name: 'Pre-competitive', price: '129', features: ['Sessioni Illimitate', 'Biomeccanica Pro', 'Coach Personale'], pro: true },
    { name: 'Advanced', price: '59', features: ['2 Sessioni/settimana', 'Mobilità Base', 'Accesso App'] }
  ];

console.log(
  "%c Alessandro Lucia %c alessandroluciaroma@gmail.com %c sviluppato in Next.js e Tailwind CSS ",
  "color: #ffffff; background-color: #db2777; padding: 6px 12px; font-weight: bold; border-radius: 4px 0 0 4px;", 
  "color: #ffffff; background-color: #9333ea; padding: 6px 12px; font-weight: bold; border-radius: 0 4px 4px 0;", 
  "color: #ffffff; background-color: #4b5563; padding: 6px 12px; font-weight: bold; border-radius: 4px;" 
);

  return (
    <main className=" sm:pt-16">
      
      <section className="relative min-h-[90svh] md:min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center overflow-hidden py-30 md:py-20">
  {/* Sfondo Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

  {/* Colonna Testo (Ordine 2 su mobile, 1 su desktop) */}
  <div className="w-full flex flex-col items-center text-center px-4 sm:px-6 md:px-8 z-10">
    
    {/* Titolo Principale */}
    <h2 className="text-3xl textHero font-black italic uppercase leading-[0.95] tracking-tighter text-quarto title-mirror-container">
      <span className="text-secondary titleP">F</span>ORZ<span className="text-secondary titleP">A</span>{" "}
      <br className="" /> E <br className="" />
      <span className="text-secondary titleP">P</span>REC<span className="text-secondary titleP">IS</span>ION<span className="text-secondary titleP">E</span>
    </h2>

    {/* Sottotitolo */}
    <p className="mt-5 md:mt-7 text-quarto text-base md:text-xl max-w-xl mx-auto font-semibold leading-relaxed italic">
      Accendi la tua energia. Rompi ogni barriera.
    </p>

    {/* Pulsanti */}
    <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
      <button className="w-full sm:w-auto bg-secondary text-primary px-8 py-4 rounded-sm font-black hover:bg-quarto hover:scale-105 transition-all uppercase tracking-widest cursor-pointer">
        Scopri i nostri corsi
      </button>
      <button className="w-full sm:w-auto border border-quarto/30 text-quarto px-8 py-4 rounded-sm font-bold hover:bg-quarto hover:text-primary hover:scale-105 transition-all uppercase tracking-widest cursor-pointer">
        Guarda i dati
      </button>
    </div>

    {/* Brand / Name Section */}
    <div className="text-center w-full pt-8 md:pt-12 flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-none tracking-tighter w-full">
        <div className="-translate-x-8 sm:-translate-x-16 md:-translate-x-24 transform text-quarto title-mirror-container leading-none">
          ASD
        </div>
        <div className="translate-x-4 sm:translate-x-8 md:translate-x-12 transform text-secondary titleP title-mirror-container leading-none">
          FREE MIND
        </div>
      </h1>
    </div>
  </div>

  {/* Colonna Immagine (Ordine 1 su mobile, 2 su desktop) */}
  <div className="w-full h-full min-h-87.5 md:min-h-full relative flex items-center justify-center overflow-hidden ">
    <div className="group relative w-[80%] h-[80%] overflow-hidden rounded-4xl">
    <Image
      src="/images/istruttori.webp"
      alt="Hero Image in the gym with instructors and athletes"
      priority
      fill
      sizes="(max-width: 768px) 100vw, 100vw"
      className="object-cover object-center rounded-4xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:scale-110"
    />
    </div>
  </div>
</section>

      {/* Grid Immagini - Corretta Responsività */}
      <section className="min-h-50 flex flex-col md:flex-row gap-6 py-12 px-6 justify-center items-center overflow-hidden section_1_observer ">
        {/* Photo 1 */}
        <div className="shadow_container w-full md:w-1/3 max-w-100 photo_1">
          <div className="cut_photo h-75 md:h-125"></div>
        </div>
        {/* Photo 2 */}
        <div className="shadow_container w-full md:w-1/3 max-w-100 photo_2">
          <div className="cut_photo2 h-75 md:h-125"></div>
        </div>
        {/* Photo 3 */}
        <div className="shadow_container w-full md:w-1/3 max-w-100 photo_3">
          <div className="cut_photo3 h-75 md:h-125"></div>
        </div>
      </section>

      {/* Nuova Sezione: DATA TRACKING (Rilevante per il tema Tech) */}
      <section className="py-16 md:py-24 bg-primary border-y border-quarto/10 section_2_observer">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header della sezione: Centrato su mobile/tablet, giustificato su desktop grandi */}
    <div className="flex flex-col sm:flex justify-between items-center md:items-start mb-12 md:mb-16 gap-6 text-center md:text-left">
      <div>
        <h2 className="text-secondary font-black italic text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 title_section_2">
          Work group <sup className="text-quarto">TM</sup>
        </h2>
        <h3 className="text-3xl sm:text-5xl lg:text-6xl text-quarto font-black uppercase italic leading-tight lg:leading-none title_section_2">
          Certificazioni istruttori <br className="hidden sm:block" /> enti nazionali
        </h3>
      </div>
      
      <p className="max-w-md text-quarto/60 font-light text-sm sm:text-base lg:text-left title_section_2">
        Tutti i nostri istruttori sono certificati dai principali enti nazionali per diverse discipline sportive rendendo l&apos;ambiente più sicuro e professionale.
      </p>
    </div>

    {/* Griglia delle metriche: 1 colonna su mobile, 2 su tablet, 4 su desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 square_section_2">
      {[
        { label: 'Forza G', val: '4.2', unit: 'max', icon: <Zap /> },
        { label: 'Precisione', val: '99.8', unit: '%', icon: <Target /> },
        { label: 'Battito', val: '185', unit: 'bpm', icon: <Activity /> },
        { label: 'Atleti', val: '120', unit: '+', icon: <ArrowRight /> },
      ].map((stat, i) => (
        <div 
          key={i} 
          className="flex flex-col items-center justify-center p-6 sm:p-8 border border-quarto hover:border-secondary group text-center rounded-sm shadow-[0_0_10px_0px_var(--color-secondary)] hover:shadow-[0px_10px_10px_5px_var(--color-tertiary)] hover:scale-110 hover:-translate-y-3 transition-all group"
        >
          <div className="text-secondary mb-4 group-hover:scale-110 transition-transform">
            {stat.icon}
          </div>
          <div className="text-4xl sm:text-5xl text-quarto font-black italic mb-1 flex items-baseline justify-center">
            {stat.val}
            <span className="text-xs sm:text-sm ml-1 text-quarto/80 font-normal">
              {stat.unit}
            </span>
          </div>
          <div className="text-xs uppercase tracking-widest text-quarto font-bold">
            {stat.label}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Features - Ottimizzate per Mobile */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Allenamenti adattivi"
            desc="Sviluppo della forza isometrica e stabilità dinamica attraverso il controllo motorio avanzato."
          />
          <FeatureCard
            title="Metodo d'insegnamento"
            desc="Mobilità articolare organica ispirata alla flessibilità del legno, fondamentale per ogni evoluzione."
          />
          <FeatureCard
            title="Operatività Sociale"
            desc="Potenza esplosiva per salti e rotazioni, costruita con protocolli di allenamento tech-driven."
          />
        </div>
      </section>

      {/* Section Accademia - Corretta Responsività Immagini */}
      <section className="py-24 bg-section_accademy text-quarto min-h-[80vh]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/30 -z-10" />
            <div className="bg-primary/80 h-75 md:h-112.5 w-full flex items-center justify-center overflow-hidden">
              <span className="text-quarto uppercase tracking-[0.5em] font-bold text-center px-4">Scientific Training Image</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary/60 text-white p-4 md:p-6 hidden sm:block">
              <p className="text-2xl md:text-3xl font-black italic">+250%</p>
              <p className="text-[10px] md:text-xs uppercase tracking-tighter">Precisione del movimento</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none mb-6 text_cont">
              <span className="text-primary"> L&apos;ACCADEMIA</span>
              <br /><span className="text-secondary underline decoration-primary">È PER TUTTI</span>
            </h2>
            <p className="text-base md:text-lg text-quarto font-light mb-8 leading-relaxed text_cont_2">
              Non siamo una palestra tradizionale. Utilizziamo sensori di movimento e analisi biomeccanica
              per trasformare la tua flessibilità organica in una struttura d&apos;acciaio.
            </p>
            <ul className="space-y-4 ">
              {['Analisi Biomeccanica 3D', 'Programmazione Neuro-Motoria', 'Recupero ad alta densità'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 group cursor-default">
                  <span className="w-6 h-px bg-secondary group-hover:w-10 transition-all" />
                  <span className="font-bold uppercase text-xs md:text-sm tracking-widest text-quarto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* section competizioni */}
      <section className="py-24 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none text-quarto">
              Arena <span className="text-secondary">Dati</span>
            </h2>
            <span className="text-quarto/50 uppercase tracking-[0.3em] font-bold text-sm">
              Archive 2024-2026
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-200">

            {/* Immagine Grande - Main Event */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-quarto/10 border border-quarto/20 rounded-3xl">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10 " />
              <Image
                src="https://www.riminitoday.it/~media/horizontal-hi/65385576371270/europei-ginnastica-artistica-rimini-2024-2.jpeg"
                alt="images generic for competitions gymnastics"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 "
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-linear-to-t from-primary to-transparent w-full">
                <p className="text-secondary font-black italic text-xl">WORLD CHAMPIONSHIPS</p>
                <p className="text-white/60 uppercase text-xs tracking-widest">Berlin - Gold Medal Phase</p>
              </div>
            </div>

            {/* Immagine Orizzontale */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-quarto/10 border border-quarto/20 h-75 md:h-auto rounded-3xl">
              <Image
                src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2021/05/23/3138070-64317128-2560-1440.jpg"
                alt="images generic for competitions gymnastics"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 font-black italic text-sm z-20">
                LIVE DATA
              </div>
            </div>

            {/* Immagine Verticale 1 */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-quarto/10 border border-quarto/20 h-75 md:h-auto rounded-3xl">
              <Image
                src="https://www.aicsfirenze.net/wp-content/uploads/2021/03/158100066_274792684058055_7680837354109959849_n.jpg"
                alt="images generic for competitions gymnastics"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Immagine Verticale 2 - Con CTA interna */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-secondary bg-secondary/10 flex items-center justify-center p-6 text-center h-75 md:h-auto rounded-3xl">
            <Image
                src="/images/trofeo.webp"
                alt="Call to action for view competitions"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain bg-white grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 relative"
              />
              <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center p-6 z-20 ">
                <p className="text-quarto text-xs font-light uppercase tracking-tighter mb-4">Guarda le nostre <br />competizioni</p>
                <Link href="/competizioni" className="text-[1rem] text-quarto border border-secondary px-4 py-2 hover:bg-secondary hover:text-primary transition-all font-bold">
                  LE NOSTRE GARE
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-40 sm:top-30 md:top-25 lg:top-0 right-20 sm:right-48 md:right-70 lg:right-50 text-[70px] md:text-[90px] lg:text-[150px] font-black opacity-[0.33] select-none pointer-events-none italic text-secondary">
          MIND
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black uppercase text-quarto italic">Piani di Evoluzione</h2>
            <div className="h-1 w-72 bg-secondary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`p-10 border transition-all duration-500 flex flex-col ${plan.pro
                    ? 'border-secondary bg-secondary/5 scale-105 shadow-2xl shadow-secondary/20'
                    : 'border-quarto/20 bg-primary hover:border-quarto/50'
                  }`}
              >
                <h3 className="text-xs uppercase tracking-[0.3em] text-quarto mb-2">{plan.name} Membership</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-black text-quarto">€{plan.price}</span>
                  <span className="text-quarto/50 text-sm ml-2">/mese</span>
                </div>

                <ul className="grow space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-secondary font-semibold text-sm flex items-center">
                      <span className="mr-2 text-secondary">▹</span> {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition ${plan.pro ? 'bg-secondary text-white hover:bg-quarto hover:text-primary hover:scale-105' : 'bg-quarto text-primary hover:bg-secondary hover:scale-105'
                  }`}>
                  Inizia ora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* last section video */}
      <section className="relative w-full h-[60vh] md:h-[85vh] bg-primary overflow-hidden flex items-center justify-center shadow-[0_0px_30px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            
            <source src="/videos/vediovert.mp4" media="(max-width: 450px)" />
            <source src="/videos/videoLast50.mp4" media="(min-width: 769px)" />

            
            
          </video>


        </div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-wider ">
            <div className="-translate-x-12 xxs:-translate-x-24 sm:-translate-x-36 md:-translate-x-44 lg:-translate-x-64 transform text-quarto/50">
          ASD
        </div>
        
        <div className="translate-x-0 xxs:translate-x-0 transform text-secondary/50">
          FREE
        </div>
        
        <div className="translate-x-12 xxs:translate-x-24 sm:translate-x-36 md:translate-x-44 lg:translate-x-64 transform text-quarto/50">
          MIND
        </div>
          </h2>
        </div>
      </section>


      {/* function observer */}
      <ObserverImageHero target="section_1_observer" classAdd="active" percent={0.2} />
      <ObserverImageHero target="section_2_observer" classAdd="active" percent={0.4} />
    </main>
  );
}