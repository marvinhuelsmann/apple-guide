// Vergleichslogik: Bewertung, Hervorhebung und kurze Zusammenfassung zweier Geräte.
import { SPEC_GROUPS } from "./devices";

export function fmt(value, row) {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "boolean") return value ? "Ja" : "Nein";
  if (typeof value === "number") {
    const digits = Number.isInteger(value) ? 0 : 1;
    return value.toLocaleString("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: digits }) + (row?.unit || "");
  }
  return String(value);
}

// Liefert "a" | "b" | null: welche Seite bei dieser Zeile besser dasteht
export function winner(row, a, b) {
  if (!row.better) return null;
  if (a === b) return null;
  if (a === null || a === undefined) return b === null || b === undefined ? null : "b";
  if (b === null || b === undefined) return "a";
  if (row.better === "true") return b === true && a !== true ? "b" : a === true && b !== true ? "a" : null;
  if (typeof a !== "number" || typeof b !== "number") return null;
  if (row.better === "higher") return b > a ? "b" : "a";
  if (row.better === "lower") return b < a ? "b" : "a";
  return null;
}

export function isSame(a, b) {
  return a === b || ((a === null || a === undefined || a === "—") && (b === null || b === undefined || b === "—"));
}

const VERDICTS = [
  { min: -Infinity, max: -20, tone: "bad", title: "Das wäre ein Rückschritt.", text: "Dein aktuelles Gerät ist deutlich besser ausgestattet. Ein Wechsel lohnt sich nur, wenn dir Größe, Preis oder ein einzelnes Merkmal wichtiger sind als die Gesamtleistung." },
  { min: -19, max: -1, tone: "warn", title: "Eher ein Seitwärtsschritt.", text: "Insgesamt verlierst du etwas. Sieh dir unten genau an, was du aufgibst, bevor du wechselst." },
  { min: 0, max: 0, tone: "neutral", title: "Praktisch dasselbe Gerät.", text: "Beide Geräte liegen gleichauf. Entscheide nach Farbe, Zustand und Preis." },
  { min: 1, max: 5, tone: "warn", title: "Kaum spürbar.", text: "Nur kleine Neuerungen. Läuft dein Gerät noch gut, warte lieber auf die nächste Generation." },
  { min: 6, max: 10, tone: "warn", title: "Ein kleiner Schritt.", text: "Ein paar sinnvolle Verbesserungen, aber kein Muss. Kaufen, wenn dir eine der Neuerungen wirklich fehlt." },
  { min: 11, max: 20, tone: "good", title: "Ein spürbares Upgrade.", text: "Du merkst den Unterschied im Alltag. Ein Wechsel lohnt sich, wenn das Budget passt." },
  { min: 21, max: 35, tone: "good", title: "Ein großer Sprung.", text: "Viele Bereiche werden deutlich besser. Wenn du ohnehin über einen Wechsel nachdenkst: jetzt ist ein guter Zeitpunkt." },
  { min: 36, max: Infinity, tone: "great", title: "Ein komplett anderes Erlebnis.", text: "Fast alles ist neu: Leistung, Display, Kamera, Laufzeit. Der Wechsel lohnt sich klar." },
];

function phrase(row, a, b, side) {
  const av = a.specs[row.key], bv = b.specs[row.key];
  const better = side === "b" ? bv : av;
  const worse = side === "b" ? av : bv;
  if (typeof better === "boolean") return `${side === "b" ? "Neu" : "Bleibt nur hier"}: ${row.label}`;
  if (typeof better === "number" && typeof worse === "number") {
    const diff = Math.abs(better - worse);
    const d = fmt(diff, row);
    if (row.better === "lower") return `${d} ${row.key === "price" ? "günstiger" : row.key === "weight" ? "leichter" : "weniger"} (${row.label})`;
    return `${better > worse ? "+" : "−"}${d} ${row.label}`;
  }
  return `${fmt(better, row)} statt ${fmt(worse, row)}`;
}

export function compare(a, b) {
  if (!a || !b) return null;
  const delta = b.points - a.points;
  const verdict = VERDICTS.find((v) => delta >= v.min && delta <= v.max) || VERDICTS[3];
  const groups = SPEC_GROUPS[a.category] || [];
  const gains = [], losses = [];
  let differences = 0, total = 0;
  for (const g of groups) {
    for (const row of g.rows) {
      total += 1;
      const av = a.specs[row.key], bv = b.specs[row.key];
      if (!isSame(av, bv)) differences += 1;
      const w = winner(row, av, bv);
      if (w === "b") gains.push({ key: row.key, text: phrase(row, a, b, "b") });
      if (w === "a") losses.push({ key: row.key, text: phrase(row, a, b, "a") });
    }
  }
  return { delta, verdict, gains, losses, differences, total };
}
