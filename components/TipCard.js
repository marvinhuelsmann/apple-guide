import { useState } from "react";
import { HeartIcon, ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/solid";

export const TIP_EMAIL = "paypal@marvhuelsmann.com";
export const TIP_URL = `https://www.paypal.com/donate?business=${encodeURIComponent(TIP_EMAIL)}&currency_code=EUR&item_name=${encodeURIComponent("Trinkgeld für Apple Guide")}`;

export default function TipCard() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(TIP_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <section id="tipp" className="scroll-mt-28">
      <div className="glass-strong glass-specular relative overflow-hidden p-7 sm:p-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="pill inline-flex items-center gap-1.5 bg-accent/12 px-3 py-1 text-[13px] font-medium text-accent">
              <HeartIcon className="h-4 w-4" />
              Trinkgeld
            </div>
            <h2 className="headline mt-4 text-[32px] sm:text-[40px] text-balance">Hat dir Apple Guide bei der Entscheidung geholfen?</h2>
            <p className="mt-3 max-w-[58ch] text-[16px] leading-relaxed text-ink-2">
              Apple Guide ist kostenlos, werbefrei und ein Ein‑Personen‑Projekt. Ein kleines Trinkgeld hält den Katalog aktuell und die Server an. Danke!
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={TIP_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="pill inline-flex h-13 items-center justify-center gap-2 bg-accent px-6 text-[17px] font-medium text-white transition hover:bg-accent-strong active:scale-[0.98]"
            >
              Trinkgeld per PayPal senden
            </a>
            <div className="glass-sm flex items-center justify-between gap-3 rounded-[18px] py-2 pl-4 pr-2">
              <div className="min-w-0">
                <div className="text-[12px] font-medium text-ink-2">PayPal‑Adresse</div>
                <div className="truncate text-[15px] font-semibold">{TIP_EMAIL}</div>
              </div>
              <button
                type="button"
                onClick={copy}
                className="pill inline-flex h-9 shrink-0 items-center gap-1.5 bg-ink/6 px-3 text-[13px] font-medium transition hover:bg-ink/10 active:scale-95 dark:bg-white/10 dark:hover:bg-white/15"
              >
                {copied ? <CheckIcon className="h-4 w-4 text-good" /> : <ClipboardDocumentIcon className="h-4 w-4" />}
                {copied ? "Kopiert" : "Kopieren"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
