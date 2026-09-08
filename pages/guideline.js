import Head from "next/head";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Ambient from "../components/Ambient";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";

const FAQ = [
  {
    q: "Was kann ich hier machen?",
    a: "Apple Guide vergleicht zwei Apple‑Geräte derselben Kategorie: dein aktuelles und das, über das du nachdenkst. Du bekommst eine Einschätzung, ob sich der Wechsel lohnt, und eine Tabelle mit allen Unterschieden.",
  },
  {
    q: "Wie entstehen die Punkte?",
    a: "Die Punkte von 0 bis 100 sind eine redaktionelle Gesamtbewertung innerhalb einer Kategorie. Sie gewichten Leistung, Display, Kamera, Laufzeit und Ausstattung im Verhältnis zum aktuellen Topmodell. Sie sind keine Angabe von Apple und keine Messung.",
  },
  {
    q: "Ist Apple Guide von Apple?",
    a: "Nein. Apple Guide ist ein unabhängiges Projekt und steht in keiner Verbindung zu Apple Inc. Alle Marken gehören ihren jeweiligen Eigentümern.",
  },
  {
    q: "Sind die Angaben genau?",
    a: "Die technischen Daten stammen aus den offiziellen Datenblättern, Preise sind deutsche Einführungspreise der kleinsten Konfiguration. Ältere Modelle werden mit dem nächstähnlichen Geräterahmen dargestellt, Details wie Tasten oder Kameraanordnung können abweichen.",
  },
  {
    q: "Kann ich einen Vergleich teilen?",
    a: "Ja. Die Adresse in der Browserzeile enthält deine Auswahl. Kopiere sie einfach und schicke sie weiter.",
  },
];

export default function Guideline() {
  return (
    <>
      <Head>
        <title>Hinweise & FAQ – Apple Guide</title>
        <meta name="description" content="Wie Apple Guide funktioniert, woher die Daten kommen und was die Punkte bedeuten." />
      </Head>
      <Ambient />
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36">
        <h1 className="headline text-[clamp(36px,6vw,64px)]">Hinweise & FAQ.</h1>
        <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-ink-2">Kurz erklärt, wie Apple Guide arbeitet und was du von den Angaben erwarten kannst.</p>

        <div className="glass-strong glass-specular mt-10 divide-y divide-line overflow-hidden">
          {FAQ.map((item) => (
            <Disclosure key={item.q} as="div">
              <DisclosureButton className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-semibold tracking-tight transition hover:bg-ink/3 dark:hover:bg-white/5">
                {item.q}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-ink-3 transition-transform duration-300 ease-[var(--ease-apple)] group-data-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel transition className="origin-top px-6 pb-6 text-[15px] leading-relaxed text-ink-2 transition duration-200 ease-out data-closed:-translate-y-1 data-closed:opacity-0">
                {item.a}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>

        <div className="mt-16">
          <TipCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
