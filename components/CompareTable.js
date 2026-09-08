import { useState } from "react";
import Image from "next/image";
import { Switch } from "@headlessui/react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";
import { SPEC_GROUPS } from "../lib/devices";
import { fmt, winner, isSame } from "../lib/compare";

function Cell({ row, value, isWinner }) {
  const boolish = typeof value === "boolean";
  return (
    <div className={`flex items-center gap-2 text-[17px] font-semibold tracking-tight sm:text-[19px] ${isWinner ? "text-accent" : value === null || value === undefined ? "text-ink-3" : ""}`}>
      {boolish ? (
        value ? (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-good/15 text-good">
            <CheckIcon className="h-4 w-4" />
          </span>
        ) : (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ink/6 text-ink-3 dark:bg-white/10">
            <MinusIcon className="h-4 w-4" />
          </span>
        )
      ) : null}
      <span className={boolish ? "text-[15px] font-medium text-ink-2" : ""}>{boolish ? (value ? "Ja" : "Nein") : fmt(value, row)}</span>
    </div>
  );
}

export default function CompareTable({ a, b }) {
  const [onlyDiff, setOnlyDiff] = useState(false);
  const groups = SPEC_GROUPS[a.category] || [];

  return (
    <section id="vergleich" className="scroll-mt-28">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="headline text-[34px] sm:text-[44px]">Im Detail.</h2>
          <p className="mt-2 max-w-[60ch] text-[15px] text-ink-2">Blau markiert ist der jeweils bessere Wert. Angaben nach Apple‑Datenblättern, Preise sind deutsche Einführungspreise.</p>
        </div>
        <Switch.Group as="label" className="flex cursor-pointer items-center gap-3 text-[15px] font-medium">
          <Switch.Label>Nur Unterschiede</Switch.Label>
          <Switch
            checked={onlyDiff}
            onChange={setOnlyDiff}
            className="group relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-ink/15 transition-colors data-checked:bg-good dark:bg-white/20"
          >
            <span className="inline-block h-6 w-6 translate-x-0.5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-transform group-data-checked:translate-x-[22px]" />
          </Switch>
        </Switch.Group>
      </div>

      <div className="glass-strong glass-specular overflow-clip rounded-[28px]">
        <div className="sticky top-[116px] z-10 grid grid-cols-2 gap-3 rounded-t-[28px] border-b border-line bg-surface/92 px-4 py-3 backdrop-blur-2xl sm:grid-cols-[200px_1fr_1fr] sm:px-6 lg:top-[72px]">
          <div className="hidden text-[13px] font-medium text-ink-2 sm:flex sm:items-center">Merkmal</div>
          {[a, b].map((d, i) => (
            <div key={d.id} className="flex min-w-0 items-center gap-3">
              <span className="relative grid h-10 w-10 shrink-0 place-items-center">
                <Image src={d.image} alt="" width={40} height={40} sizes="40px" unoptimized={d.image.endsWith(".svg")} className="h-9 w-9 object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[15px] font-semibold">{d.name}</span>
                <span className="block text-[12px] text-ink-2">{i === 0 ? "Dein Gerät" : "Dein Wunschgerät"}</span>
              </span>
            </div>
          ))}
        </div>

        {groups.map((g) => {
          const rows = g.rows.filter((row) => !onlyDiff || !isSame(a.specs[row.key], b.specs[row.key]));
          if (rows.length === 0) return null;
          return (
            <div key={g.id} className="border-b border-line last:border-b-0">
              <h3 className="px-4 pb-1 pt-6 text-[20px] font-semibold tracking-tight sm:px-6">{g.label}</h3>
              {rows.map((row) => {
                const av = a.specs[row.key], bv = b.specs[row.key];
                const w = winner(row, av, bv);
                return (
                  <div key={row.key} className="grid grid-cols-2 gap-x-3 gap-y-1 px-4 py-3.5 sm:grid-cols-[200px_1fr_1fr] sm:px-6 sm:py-4">
                    <div className="col-span-2 text-[13px] font-medium text-ink-2 sm:col-span-1 sm:self-center sm:text-[15px]">{row.label}</div>
                    <Cell row={row} value={av} isWinner={w === "a"} />
                    <Cell row={row} value={bv} isWinner={w === "b"} />
                  </div>
                );
              })}
              <div className="h-2" />
            </div>
          );
        })}
        {onlyDiff && groups.every((g) => g.rows.every((row) => isSame(a.specs[row.key], b.specs[row.key]))) && (
          <div className="px-6 py-10 text-center text-[15px] text-ink-2">Keine Unterschiede in den erfassten Merkmalen.</div>
        )}
      </div>
    </section>
  );
}
