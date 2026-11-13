import { Mail, Send, Paperclip } from 'lucide-react';

export default function LavoraConNoiPage() {


  const emailDestinatario = "asdfm.artistica@gmail.com";
  const oggettoEmail = encodeURIComponent("Candidatura spontanea / Collaborazione - ASD Free Mind");
  const corpoEmail = encodeURIComponent(
    "Salve ASD Free Mind,\n\n" +
    "Sono molto interessato/a a collaborare con voi.\n\n" +
    "Nome e Cognome:\n" +
    "Telefono:\n" +
    "Ruolo di interesse (es. Istruttore / Collaboratore):\n\n" +
    "Breve presentazione:\n[Scrivi qui due righe su di te]\n\n" +
    "ATTENZIONE: Ricordati di allegare il tuo Curriculum Vitae (CV in formato PDF) prima di inviare questa email!"
  );

  const mailtoLink = `mailto:${emailDestinatario}?subject=${oggettoEmail}&body=${corpoEmail}`;

  return (
    <main className="sm:pt-16 bg-primary min-h-screen text-quarto">

      {/* SECTION HERO / HEADER */}
      <section className="relative min-h-[50svh] md:min-h-[60vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4 md:px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-150 h-75 md:h-150 bg-secondary/20 rounded-full blur-[80px] md:blur-[120px] -z-10 pointer-events-none" />

        <div className="w-full flex flex-col items-center text-center z-10 max-w-4xl mx-auto">
          <div className="text-secondary font-black italic text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            Unisciti al team <sup className="text-quarto">TM</sup>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase leading-[0.95] tracking-tighter text-quarto title-mirror-container mb-6">
            LAVORA <span className="text-secondary">CON</span> NOI
          </h2>

          <p className="mt-4 text-quarto/80 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Vista la straordinaria affluenza e la crescente frequenza dei nostri corsi, ASD Free Mind è alla ricerca di nuovi talenti, istruttori qualificati e collaboratori motivati per ampliare il nostro staff.
            La nostra crescita si fonda da sempre sui valori dell&apos;accoglienza e della condivisione. Per questo motivo, desideriamo integrare nel nostro team professionisti che condividano una visione dello sport totalmente inclusiva, accessibile e aperta a tutti. Siamo particolarmente interessati a stringere nuove collaborazioni per lo sviluppo di progetti dedicati all&apos;inclusione sociale, al supporto della disabilità e alla cooperazione con le comunità locali.
            Se credi nello sport come strumento di abbattimento delle barriere e vuoi fare la differenza sul territorio, unisciti a noi!
          </p>
        </div>
      </section>


      <section className="py-16 md:py-24 border-t border-quarto/10 relative">
        <div className="max-w-3xl mx-auto px-6">

          <div className="border border-quarto/20 bg-primary/80 p-8 sm:p-12 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.5)] relative text-center">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/30 -z-10 pointer-events-none hidden sm:block" />

            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-black uppercase italic text-quarto mb-4">
                Inviaci il tuo <span className="text-secondary">CV</span>
              </h3>
              <p className="text-sm text-quarto/80 leading-relaxed max-w-xl mx-auto">
                Cliccando sul pulsante qui sotto si aprirà il tuo programma di posta elettronica con un messaggio precompilato.
                Ti basterà inserire i tuoi dati, <strong className="text-secondary">allegare il tuo CV</strong> e inviare!
              </p>
            </div>

            {/* Box informativo */}
            <div className="bg-primary border border-quarto/20 p-6 rounded-sm mb-8 text-left space-y-3">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-secondary font-bold">
                <Mail size={16} />
                <span>Indirizzo di riferimento:</span>
              </div>
              <p className="text-sm text-quarto font-mono select-all bg-secondary/10 p-2 rounded">
                {emailDestinatario}
              </p>

              <div className="flex items-start space-x-2 text-xs text-quarto/70 pt-2">
                <Paperclip size={14} className="text-secondary shrink-0 mt-0.5" />
                <span>Ricordati di allegare il file PDF del tuo curriculum prima di premere invia sulla tua app di posta.</span>
              </div>
            </div>

            {/* Pulsante Mailto */}
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-secondary text-primary py-4 px-10 rounded-sm font-black hover:bg-quarto hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(219,39,119,0.3)] cursor-pointer"
            >
              <Send size={18} />
              Apri programma di posta e candidati
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}