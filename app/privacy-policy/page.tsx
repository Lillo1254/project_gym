import type { Metadata } from "next";
import Address from "@/app/components/bodyComponents/layout/Address"; // Adatta il percorso al tuo file

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sulla privacy di ASD FREE MIND in conformità al GDPR.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-white leading-relaxed">
      <h1 className="text-3xl font-black italic uppercase tracking-tighter text-quarto mb-8">
        Informativa sulla Privacy
      </h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">1. Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento dei dati è <strong>ASD FREE MIND</strong>, con sede legale in {Address.indirizzo}, {Address.cap} {Address.citta} ({Address.nazione}), P.IVA/CF: {Address.partitaiva}, Email: {Address.email}.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">2. Tipologia di Dati Raccolti</h2>
          <p>
            Questo sito web non raccoglie in modo attivo alcun dato personale identificativo dell&apos;utente (come nomi, email o numeri di telefono), in quanto non sono presenti moduli di contatto, iscrizioni o newsletter.
          </p>
          <p className="mt-2">
            Gli unici dati trattati sono i <strong>dati di navigazione</strong> forniti implicitamente dai protocolli di comunicazione internet (es. indirizzo IP, tipo di browser, orario della richiesta), registrati dai server che ospitano il sito web per garantire il corretto funzionamento dello stesso.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">3. Finalità e Base Giuridica</h2>
          <p>
            I dati di navigazione vengono utilizzati al solo fine di consentire la fruizione del sito e monitorarne la sicurezza informatica. La base giuridica del trattamento è il legittimo interesse del Titolare al corretto funzionamento della piattaforma.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">4. Servizi di Terze Parti</h2>
          <p>
            Il sito integra un widget di <strong>Google Maps</strong> nel piè di pagina per mostrare la posizione della sede. L&apos;interazione con questa mappa potrebbe comportare il trasferimento di dati di navigazione verso Google Inc. (USA) regolato dalle relative norme sulla privacy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">5. Diritti degli Utenti</h2>
          <p>
            Ai sensi del Regolamento UE 679/2016 (GDPR), gli utenti hanno il diritto di richiedere informazioni sull&apos;eventuale trattamento dei propri dati di navigazione contattando il Titolare all&apos;indirizzo email indicato.
          </p>
        </div>
      </section>
    </div>
  );
}
