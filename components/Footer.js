import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 pt-14 text-[13px] leading-relaxed text-ink-2">
      <div className="border-t border-line pt-6">
        <p>
          Apple Guide ist ein unabhängiges Projekt von{" "}
          <a className="text-ink underline-offset-2 hover:underline" rel="noreferrer noopener" href="https://marvhuelsmann.com" target="_blank">
            Marvin Hülsmann
          </a>{" "}
          und steht in keiner Verbindung zu Apple Inc. Apple, iPhone, iPad, Mac, Apple Watch, AirPods, HomePod und Apple TV sind Marken von Apple Inc.
          Punkte sind eine redaktionelle Gesamtbewertung, keine Angabe von Apple. Alle Angaben ohne Gewähr.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>
            © 2022–{new Date().getFullYear()}{" "}
            <a className="text-ink hover:underline" rel="noreferrer noopener" href="https://marvhuelsmann.com" target="_blank">
              Marvin Hülsmann
            </a>
          </span>
          <Link href="/guideline" className="text-ink hover:underline">
            Hinweise & FAQ
          </Link>
          <a href="#tipp" className="text-ink hover:underline">
            Trinkgeld
          </a>
          <a className="text-ink hover:underline" rel="noreferrer noopener" href="https://www.mhcreations.de/legal/thirdparty" target="_blank">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
