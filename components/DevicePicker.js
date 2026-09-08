import { useMemo, useState } from "react";
import Image from "next/image";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

function normalize(s) {
  return s.toLowerCase().replace(/[\s"‑-]+/g, "");
}

export default function DevicePicker({ label, value, onChange, devices, align = "left" }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query);
    const list = q === "" ? devices : devices.filter((d) => normalize(d.name).includes(q) || String(d.year).includes(q));
    return list;
  }, [query, devices]);

  const years = useMemo(() => {
    const map = new Map();
    for (const d of filtered) {
      if (!map.has(d.year)) map.set(d.year, []);
      map.get(d.year).push(d);
    }
    return [...map.entries()].sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <Combobox value={value} onChange={(d) => d && onChange(d)} onClose={() => setQuery("")} immediate>
      <div className="relative">
        <span className="mb-2 block text-[13px] font-medium text-ink-2">{label}</span>
        <div className="glass glass-specular flex items-center rounded-[22px] pl-5 pr-2 transition-shadow focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-accent)_28%,transparent),var(--glass-shadow)]">
          <ComboboxInput
            aria-label={label}
            displayValue={(d) => (d ? d.name : "")}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Gerät suchen …"
            autoComplete="off"
            className="h-14 w-full min-w-0 bg-transparent text-[19px] font-semibold tracking-tight text-ink placeholder:font-medium placeholder:text-ink-3 focus:outline-none"
          />
          <ComboboxButton className="pill grid h-10 w-10 shrink-0 place-items-center text-ink-2 transition hover:text-ink">
            <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <ComboboxOptions
          anchor={{ to: align === "right" ? "bottom end" : "bottom start", gap: 10 }}
          transition
          className="glass-strong glass-specular thin-scroll z-50 max-h-[min(60vh,440px)] w-(--input-width) min-w-[300px] origin-top overflow-y-auto rounded-[22px] p-1.5 transition duration-150 ease-[var(--ease-apple)] focus:outline-none data-closed:scale-[0.97] data-closed:opacity-0 data-leave:duration-100"
        >
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-center text-[15px] text-ink-2">
              Kein Gerät gefunden. Versuche es mit dem Modellnamen, etwa „Pro Max“ oder „Air“.
            </div>
          )}
          {years.map(([year, list]) => (
            <div key={year}>
              <div className="px-3 pb-1 pt-2.5 text-[12px] font-semibold text-ink-3">{year}</div>
              {list.map((d) => (
                <ComboboxOption
                  key={d.id}
                  value={d}
                  className="group flex cursor-pointer select-none items-center gap-3 rounded-[14px] px-2.5 py-2 text-[15px] data-focus:bg-accent data-focus:text-white"
                >
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-black/5 dark:bg-white/8">
                    <Image src={d.image} alt="" width={40} height={40} sizes="40px" className="h-9 w-9 object-contain" unoptimized={d.image.endsWith(".svg")} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{d.name}</span>
                    <span className="block truncate text-[13px] text-ink-2 group-data-focus:text-white/80">{d.tagline}</span>
                  </span>
                  <span className="tnum shrink-0 text-[13px] font-semibold text-ink-2 group-data-focus:text-white/90">{d.points}</span>
                  <CheckIcon className="hidden h-4 w-4 shrink-0 group-data-selected:block" aria-hidden="true" />
                </ComboboxOption>
              ))}
            </div>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
}
