import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/bodyComponents/layout/Navbar";
import Footer from "./components/bodyComponents/layout/Footer";
import Address from "./components/bodyComponents/layout/Address";

export const metadata: Metadata = {
   title: {
    default: "GIO - Precisione e Forza | ASD FREE MIND Roma",
    template: "%s | ASD FREE MIND", 
  },
  description: "L'evoluzione della ginnastica artistica a Roma attraverso la tecnologia. Uniamo forza strutturale e precisione lineare per atleti del futuro.",
  

  alternates: {
    canonical: "https://asdfreemind.it", 
  },
  

  openGraph: {
    title: "GIM - Precisione e Forza | ASD FREE MIND",
    description: "L'evoluzione della ginnastica artistica attraverso la tecnologia a Roma.",
    url: "https://asdfreemind.it",
    siteName: "ASD FREE MIND",
    locale: "it_IT",
    type: "website",
  },


  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation", // Specifica che si tratta di un centro/palestra sportiva
    "name": "ASD FREE MIND",
    "description": "L'eccellenza nella ginnastica artistica a Roma. Uniamo forza strutturale e precisione lineare per atleti del futuro.",
    "url": "https://asdfreemind.it",
    "telephone": `+39 ${Address.numero}`,
    "email": Address.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": Address.indirizzo,
      "addressLocality": Address.citta,
      "postalCode": Address.cap,
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.862344", // Coordinate ricavate dal tuo link Maps
      "longitude": "12.554858"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "21:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/a.s.d.freemind/",
      "https://www.facebook.com/ASDFREEMIND/"
    ],
    "knowsAbout": ["Ginnastica Artistica", "Allenamento Sportivo", "Tecnologia applicata allo sport"],
    "vatID": Address.partitaiva
  };

  return (
    <html lang="it">
      <body className="selection:bg-secondary selection:text-white">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
