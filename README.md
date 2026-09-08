# Apple Guide

Vergleichsportal für Apple‑Geräte: Wähle dein aktuelles Gerät und dein Wunschgerät und sieh sofort, ob sich der Wechsel lohnt.

- **Stack:** Next.js 16 (Pages Router), React 19, Tailwind CSS v4, Motion 13 (`motion/react` + `LazyMotion`), Headless UI 2, Heroicons.
- **Design:** Liquid‑Glass‑Oberflächen (`glass`, `glass-strong`, `glass-sm`, `glass-specular` in `styles/globals.css`), SF‑Pro‑Systemschrift, helles und dunkles Farbschema.
- **Katalog:** `lib/devices.js` (iPhone, iPad, Apple Watch) und `lib/devices-more.js` (Mac, AirPods, HomePod, Apple TV). Punkte sind eine redaktionelle Bewertung 0–100 pro Kategorie.
- **Vergleichslogik:** `lib/compare.js` (Einschätzung, Gewinne/Verluste, Hervorhebung des besseren Werts).
- **Bilder:** `public/devices/`. Fotorahmen (iPhone, iPad, iMac, Apple Watch) wurden mit dem Screenflow‑MCP‑Werkzeug gerendert und mit `scripts/convert-frames.mjs` zu WebP konvertiert; Wallpapers kommen aus `scripts/wallpapers.mjs`. MacBook, Mac mini, Mac Studio, AirPods, HomePod und Apple TV werden von `scripts/svg-devices.mjs` als SVG gezeichnet. Maße stehen in `lib/imageMeta.json`.
- **Firebase (optional):** Mit `APIKEY`, `AUTHDOMAIN`, `PROJECTID` überschreiben Einträge der Firestore‑Sammlung `products` (`name`, `points`) die Katalogpunkte. Pflege unter `/dashboard/panel`.
- **Trinkgeld:** PayPal‑Adresse in `components/TipCard.js`.

## Entwicklung

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Ein Vergleich lässt sich per URL teilen, z. B. `/?c=iphone&a=iphone-13&b=iphone-17-pro`.
