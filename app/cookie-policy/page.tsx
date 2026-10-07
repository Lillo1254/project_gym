import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'utilizzo dei cookie di ASD FREE MIND.",
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-white leading-relaxed">
      <h1 className="text-3xl font-black italic uppercase tracking-tighter text-quarto mb-8">
        Cookie Policy
      </h1>
      
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">Cosa sono i Cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in visite successive.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">Tipologie di Cookie utilizzati</h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <strong>Cookie Tecnici:</strong> Strettamente necessari per il corretto funzionamento del sito. In assenza di essi, il sito o alcune sue parti potrebbero non funzionare correttamente. Non richiedono il consenso preventivo dell&apos;utente.
            </li>
            <li>
              <strong>Cookie di Terze Parti (Google Maps):</strong> Il widget di mappa incorporato nel footer rilascia cookie statistici o di preferenza di proprietà di Google Inc.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-secondary uppercase mb-2">Come disabilitare i cookie</h2>
          <p>
            L&apos;utente può scegliere di bloccare o eliminare i cookie in qualsiasi momento intervenendo direttamente sulle impostazioni del proprio browser di navigazione (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
          </p>
        </div>
      </section>
    </div>
  );
}
