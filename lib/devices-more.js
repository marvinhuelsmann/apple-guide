// Weitere Kategorien: Mac, AirPods, HomePod, Apple TV.
// Bilder für Geräte ohne Fotorahmen werden als SVG in scripts/svg-devices.mjs gezeichnet.

export const MORE_CATEGORIES = [
  { id: "mac", label: "Mac", noun: "Mac" },
  { id: "airpods", label: "AirPods", noun: "AirPods" },
  { id: "homepod", label: "HomePod", noun: "HomePod" },
  { id: "appletv", label: "Apple TV", noun: "Apple TV" },
];

export const MORE_SPEC_GROUPS = {
  mac: [
    {
      id: "display",
      label: "Display",
      rows: [
        { key: "displaySize", label: "Bildschirmdiagonale", unit: '"', better: "higher" },
        { key: "displayType", label: "Displaytechnologie" },
        { key: "brightness", label: "Helligkeit", unit: " Nits", better: "higher" },
      ],
    },
    {
      id: "chip",
      label: "Chip & Leistung",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "cpuCores", label: "CPU‑Kerne", better: "higher" },
        { key: "gpuCores", label: "GPU‑Kerne", better: "higher" },
        { key: "ram", label: "Arbeitsspeicher ab", unit: " GB", better: "higher" },
        { key: "storage", label: "Speicher ab", unit: " GB", better: "higher" },
        { key: "intelligence", label: "Apple Intelligence", better: "true" },
      ],
    },
    {
      id: "ports",
      label: "Anschlüsse",
      rows: [
        { key: "ports", label: "Anschlüsse" },
        { key: "externalDisplays", label: "Externe Displays", better: "higher" },
      ],
    },
    {
      id: "battery",
      label: "Batterie & Design",
      rows: [
        { key: "battery", label: "Batterielaufzeit", unit: " Std.", better: "higher" },
        { key: "weight", label: "Gewicht", unit: " kg", better: "lower" },
        { key: "material", label: "Gehäuse" },
      ],
    },
    {
      id: "price",
      label: "Preis & Jahr",
      rows: [
        { key: "year", label: "Vorgestellt", better: "higher" },
        { key: "price", label: "Einführungspreis", unit: " €", better: "lower" },
      ],
    },
  ],
  airpods: [
    {
      id: "audio",
      label: "Audio",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "anc", label: "Aktive Geräuschunterdrückung", better: "true" },
        { key: "transparency", label: "Transparenzmodus", better: "true" },
        { key: "adaptive", label: "Adaptives Audio", better: "true" },
        { key: "spatial", label: "3D‑Audio mit Headtracking", better: "true" },
      ],
    },
    {
      id: "health",
      label: "Gesundheit & Sensorik",
      rows: [
        { key: "hearingAid", label: "Hörhilfe‑Funktion", better: "true" },
        { key: "heartRate", label: "Herzfrequenz", better: "true" },
        { key: "waterRating", label: "Schutzklasse" },
      ],
    },
    {
      id: "battery",
      label: "Batterie & Case",
      rows: [
        { key: "battery", label: "Laufzeit pro Ladung", unit: " Std.", better: "higher" },
        { key: "batteryTotal", label: "Laufzeit mit Case", unit: " Std.", better: "higher" },
        { key: "caseCharging", label: "Ladecase" },
      ],
    },
    {
      id: "price",
      label: "Preis & Jahr",
      rows: [
        { key: "year", label: "Vorgestellt", better: "higher" },
        { key: "price", label: "Einführungspreis", unit: " €", better: "lower" },
      ],
    },
  ],
  homepod: [
    {
      id: "audio",
      label: "Audio",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "drivers", label: "Treiber" },
        { key: "spatial", label: "Raumklang / Dolby Atmos", better: "true" },
        { key: "stereoPair", label: "Stereopaar", better: "true" },
      ],
    },
    {
      id: "home",
      label: "Smart Home",
      rows: [
        { key: "thread", label: "Thread / Matter", better: "true" },
        { key: "sensors", label: "Temperatur- & Feuchtigkeitssensor", better: "true" },
        { key: "soundRecognition", label: "Alarmerkennung", better: "true" },
      ],
    },
    {
      id: "design",
      label: "Design",
      rows: [
        { key: "height", label: "Höhe", unit: " cm", better: "lower" },
        { key: "weight", label: "Gewicht", unit: " kg", better: "lower" },
      ],
    },
    {
      id: "price",
      label: "Preis & Jahr",
      rows: [
        { key: "year", label: "Vorgestellt", better: "higher" },
        { key: "price", label: "Einführungspreis", unit: " €", better: "lower" },
      ],
    },
  ],
  appletv: [
    {
      id: "video",
      label: "Bild & Ton",
      rows: [
        { key: "resolution", label: "Auflösung" },
        { key: "hdr", label: "HDR‑Formate" },
        { key: "atmos", label: "Dolby Atmos", better: "true" },
      ],
    },
    {
      id: "chip",
      label: "Chip & Speicher",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "storage", label: "Speicher ab", unit: " GB", better: "higher" },
        { key: "ethernet", label: "Gigabit‑Ethernet & Thread" },
        { key: "wifi", label: "WLAN" },
      ],
    },
    {
      id: "remote",
      label: "Fernbedienung",
      rows: [
        { key: "remote", label: "Siri Remote" },
        { key: "remoteCharging", label: "Laden der Remote" },
      ],
    },
    {
      id: "price",
      label: "Preis & Jahr",
      rows: [
        { key: "year", label: "Vorgestellt", better: "higher" },
        { key: "price", label: "Einführungspreis", unit: " €", better: "lower" },
      ],
    },
  ],
};

// art: Zeichenvorlage für scripts/svg-devices.mjs; frame: Fotorahmen (nur iMac)
function mac(d) { return { category: "mac", ...d }; }
function airpods(d) { return { category: "airpods", ...d }; }
function homepod(d) { return { category: "homepod", ...d }; }
function appletv(d) { return { category: "appletv", ...d }; }

const XDR = "Liquid Retina XDR (Mini‑LED)";
const LR = "Liquid Retina (LCD)";
const TB4 = "3× Thunderbolt 4, HDMI, SDXC, MagSafe 3, Kopfhörer";
const TB5 = "3× Thunderbolt 5, HDMI, SDXC, MagSafe 3, Kopfhörer";
const AIR_PORTS = "2× Thunderbolt 4, MagSafe 3, Kopfhörer";

export const MORE_DEVICES = [
  // ───────────────────────── Mac ─────────────────────────
  mac({
    id: "macbook-pro-16-m4-max", name: 'MacBook Pro 16" (M4 Max)', year: 2024, points: 100, price: 4199,
    art: { kind: "macbook", size: 16, finish: "space-black" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Das leistungsstärkste Notebook von Apple.",
    specs: { displaySize: 16.2, displayType: XDR, brightness: 1600, chip: "M4 Max", cpuCores: 14, gpuCores: 32, ram: 36, storage: 1024, intelligence: true, ports: TB5, externalDisplays: 4, battery: 21, weight: 2.14, material: "Aluminium, Space Schwarz", year: 2024, price: 4199 },
  }),
  mac({
    id: "macbook-pro-16-m4-pro", name: 'MacBook Pro 16" (M4 Pro)', year: 2024, points: 94, price: 2999,
    art: { kind: "macbook", size: 16, finish: "silver" }, wall: ["#2b2622", "#8c7b6b", "#e9dfd3"],
    tagline: "Großes XDR‑Display und 24 Stunden Laufzeit.",
    specs: { displaySize: 16.2, displayType: XDR, brightness: 1600, chip: "M4 Pro", cpuCores: 14, gpuCores: 20, ram: 24, storage: 512, intelligence: true, ports: TB5, externalDisplays: 2, battery: 24, weight: 2.14, material: "Aluminium", year: 2024, price: 2999 },
  }),
  mac({
    id: "macbook-pro-14-m5", name: 'MacBook Pro 14" (M5)', year: 2025, points: 90, price: 1799,
    art: { kind: "macbook", size: 14, finish: "space-black" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "M5 mit Neural Accelerators in jedem GPU‑Kern.",
    specs: { displaySize: 14.2, displayType: XDR, brightness: 1600, chip: "M5", cpuCores: 10, gpuCores: 10, ram: 16, storage: 512, intelligence: true, ports: "3× Thunderbolt 4, HDMI, SDXC, MagSafe 3, Kopfhörer", externalDisplays: 2, battery: 24, weight: 1.55, material: "Aluminium", year: 2025, price: 1799 },
  }),
  mac({
    id: "macbook-pro-14-m4-pro", name: 'MacBook Pro 14" (M4 Pro)', year: 2024, points: 92, price: 2399,
    art: { kind: "macbook", size: 14, finish: "space-black" }, wall: ["#0f0f12", "#3a3a40", "#9a9aa3"],
    tagline: "Pro‑Leistung im kompakten 14‑Zoll‑Format.",
    specs: { displaySize: 14.2, displayType: XDR, brightness: 1600, chip: "M4 Pro", cpuCores: 12, gpuCores: 16, ram: 24, storage: 512, intelligence: true, ports: TB5, externalDisplays: 2, battery: 22, weight: 1.6, material: "Aluminium, Space Schwarz", year: 2024, price: 2399 },
  }),
  mac({
    id: "macbook-pro-14-m4", name: 'MacBook Pro 14" (M4)', year: 2024, points: 86, price: 1799,
    art: { kind: "macbook", size: 14, finish: "silver" }, wall: ["#3b2d6b", "#a78bfa", "#f1e9ff"],
    tagline: "Einstieg ins Pro mit XDR‑Display.",
    specs: { displaySize: 14.2, displayType: XDR, brightness: 1000, chip: "M4", cpuCores: 10, gpuCores: 10, ram: 16, storage: 512, intelligence: true, ports: TB4, externalDisplays: 2, battery: 24, weight: 1.55, material: "Aluminium", year: 2024, price: 1799 },
  }),
  mac({
    id: "macbook-pro-14-m3-pro", name: 'MacBook Pro 14" (M3 Pro)', year: 2023, points: 82, price: 2499,
    art: { kind: "macbook", size: 14, finish: "space-black" }, wall: ["#1f2a30", "#6b8390", "#dbe6ec"],
    tagline: "Erstes MacBook Pro in Space Schwarz.",
    specs: { displaySize: 14.2, displayType: XDR, brightness: 1000, chip: "M3 Pro", cpuCores: 11, gpuCores: 14, ram: 18, storage: 512, intelligence: true, ports: TB4, externalDisplays: 2, battery: 18, weight: 1.61, material: "Aluminium, Space Schwarz", year: 2023, price: 2499 },
  }),
  mac({
    id: "macbook-pro-13-m2", name: 'MacBook Pro 13" (M2)', year: 2022, points: 66, price: 1599,
    art: { kind: "macbook", size: 13, finish: "space-gray" }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "Das letzte MacBook Pro mit Touch Bar.",
    specs: { displaySize: 13.3, displayType: "Retina (LCD)", brightness: 500, chip: "M2", cpuCores: 8, gpuCores: 10, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 4, Kopfhörer", externalDisplays: 1, battery: 20, weight: 1.4, material: "Aluminium", year: 2022, price: 1599 },
  }),
  mac({
    id: "macbook-air-15-m4", name: 'MacBook Air 15" (M4)', year: 2025, points: 84, price: 1449,
    art: { kind: "macbook", size: 15, finish: "sky-blue" }, wall: ["#0d2b4c", "#5aa9ff", "#e6f3ff"],
    tagline: "Großes Display, dünn und lautlos.",
    specs: { displaySize: 15.3, displayType: LR, brightness: 500, chip: "M4", cpuCores: 10, gpuCores: 10, ram: 16, storage: 256, intelligence: true, ports: AIR_PORTS, externalDisplays: 2, battery: 18, weight: 1.51, material: "Aluminium, Himmelblau", year: 2025, price: 1449 },
  }),
  mac({
    id: "macbook-air-13-m4", name: 'MacBook Air 13" (M4)', year: 2025, points: 82, price: 1199,
    art: { kind: "macbook", size: 13, finish: "sky-blue" }, wall: ["#1b2a6b", "#4c6fff", "#c7d4ff"],
    tagline: "Der beliebteste Mac, jetzt mit M4 und 16 GB.",
    specs: { displaySize: 13.6, displayType: LR, brightness: 500, chip: "M4", cpuCores: 10, gpuCores: 8, ram: 16, storage: 256, intelligence: true, ports: AIR_PORTS, externalDisplays: 2, battery: 18, weight: 1.24, material: "Aluminium, Himmelblau", year: 2025, price: 1199 },
  }),
  mac({
    id: "macbook-air-15-m3", name: 'MacBook Air 15" (M3)', year: 2024, points: 76, price: 1599,
    art: { kind: "macbook", size: 15, finish: "midnight" }, wall: ["#0b3b3d", "#2fb8b5", "#c9f2ef"],
    tagline: "Großes Air mit M3.",
    specs: { displaySize: 15.3, displayType: LR, brightness: 500, chip: "M3", cpuCores: 8, gpuCores: 10, ram: 8, storage: 256, intelligence: true, ports: AIR_PORTS, externalDisplays: 2, battery: 18, weight: 1.51, material: "Aluminium, Mitternacht", year: 2024, price: 1599 },
  }),
  mac({
    id: "macbook-air-13-m3", name: 'MacBook Air 13" (M3)', year: 2024, points: 74, price: 1299,
    art: { kind: "macbook", size: 13, finish: "starlight" }, wall: ["#5a1f3d", "#ff7eb6", "#ffe0ee"],
    tagline: "M3 und Wi‑Fi 6E im bewährten Design.",
    specs: { displaySize: 13.6, displayType: LR, brightness: 500, chip: "M3", cpuCores: 8, gpuCores: 8, ram: 8, storage: 256, intelligence: true, ports: AIR_PORTS, externalDisplays: 2, battery: 18, weight: 1.24, material: "Aluminium, Polarstern", year: 2024, price: 1299 },
  }),
  mac({
    id: "macbook-air-13-m2", name: 'MacBook Air 13" (M2)', year: 2022, points: 68, price: 1499,
    art: { kind: "macbook", size: 13, finish: "midnight" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Das neue flache Air‑Design mit MagSafe.",
    specs: { displaySize: 13.6, displayType: LR, brightness: 500, chip: "M2", cpuCores: 8, gpuCores: 8, ram: 8, storage: 256, intelligence: true, ports: AIR_PORTS, externalDisplays: 1, battery: 18, weight: 1.24, material: "Aluminium, Mitternacht", year: 2022, price: 1499 },
  }),
  mac({
    id: "macbook-air-13-m1", name: 'MacBook Air 13" (M1)', year: 2020, points: 58, price: 1129,
    art: { kind: "macbook", size: 13, finish: "space-gray", wedge: true }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Der Mac, der Apple Silicon bekannt machte.",
    specs: { displaySize: 13.3, displayType: "Retina (LCD)", brightness: 400, chip: "M1", cpuCores: 8, gpuCores: 7, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 3, Kopfhörer", externalDisplays: 1, battery: 18, weight: 1.29, material: "Aluminium", year: 2020, price: 1129 },
  }),
  mac({
    id: "imac-24-m4", name: 'iMac 24" (M4)', year: 2024, points: 84, price: 1499,
    frame: { device: "imac", color: "blue" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Der bunte All‑in‑One mit M4 und 16 GB.",
    specs: { displaySize: 24, displayType: "4,5K Retina (LCD), Nanotexturoption", brightness: 500, chip: "M4", cpuCores: 8, gpuCores: 8, ram: 16, storage: 256, intelligence: true, ports: "2–4× Thunderbolt 4 / USB‑C, Kopfhörer", externalDisplays: 2, battery: null, weight: 4.44, material: "Aluminium, 7 Farben", year: 2024, price: 1499 },
  }),
  mac({
    id: "imac-24-m3", name: 'iMac 24" (M3)', year: 2023, points: 74, price: 1599,
    frame: { device: "imac", color: "green" }, wall: ["#1c3b2b", "#4fbf8a", "#d9f5e6"],
    tagline: "Gleiches Design, M3 und Wi‑Fi 6E.",
    specs: { displaySize: 24, displayType: "4,5K Retina (LCD)", brightness: 500, chip: "M3", cpuCores: 8, gpuCores: 8, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 4, 2× USB 3, Kopfhörer", externalDisplays: 1, battery: null, weight: 4.43, material: "Aluminium, 7 Farben", year: 2023, price: 1599 },
  }),
  mac({
    id: "imac-24-m1", name: 'iMac 24" (M1)', year: 2021, points: 62, price: 1449,
    frame: { device: "imac", color: "orange" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Das dünne, farbige iMac‑Design.",
    specs: { displaySize: 24, displayType: "4,5K Retina (LCD)", brightness: 500, chip: "M1", cpuCores: 8, gpuCores: 7, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 3, 2× USB 3, Kopfhörer", externalDisplays: 1, battery: null, weight: 4.46, material: "Aluminium, 7 Farben", year: 2021, price: 1449 },
  }),
  mac({
    id: "mac-mini-m4-pro", name: "Mac mini (M4 Pro)", year: 2024, points: 88, price: 1649,
    art: { kind: "macmini" }, wall: ["#0f0f12", "#3a3a40", "#9a9aa3"],
    tagline: "Viel Leistung in 12,7 Zentimetern.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M4 Pro", cpuCores: 12, gpuCores: 16, ram: 24, storage: 512, intelligence: true, ports: "3× Thunderbolt 5, 2× USB‑C vorne, HDMI, Ethernet, Kopfhörer", externalDisplays: 3, battery: null, weight: 0.73, material: "Aluminium", year: 2024, price: 1649 },
  }),
  mac({
    id: "mac-mini-m4", name: "Mac mini (M4)", year: 2024, points: 80, price: 699,
    art: { kind: "macmini" }, wall: ["#1b2a6b", "#4c6fff", "#c7d4ff"],
    tagline: "Der kleinste Mac aller Zeiten.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M4", cpuCores: 10, gpuCores: 10, ram: 16, storage: 256, intelligence: true, ports: "3× Thunderbolt 4, 2× USB‑C vorne, HDMI, Ethernet, Kopfhörer", externalDisplays: 3, battery: null, weight: 0.67, material: "Aluminium", year: 2024, price: 699 },
  }),
  mac({
    id: "mac-mini-m2", name: "Mac mini (M2)", year: 2023, points: 66, price: 699,
    art: { kind: "macmini", legacy: true }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "Bewährtes Design mit M2.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M2", cpuCores: 8, gpuCores: 10, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 4, 2× USB‑A, HDMI, Ethernet, Kopfhörer", externalDisplays: 2, battery: null, weight: 1.18, material: "Aluminium", year: 2023, price: 699 },
  }),
  mac({
    id: "mac-mini-m1", name: "Mac mini (M1)", year: 2020, points: 56, price: 799,
    art: { kind: "macmini", legacy: true }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Der erste Desktop mit Apple Silicon.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M1", cpuCores: 8, gpuCores: 8, ram: 8, storage: 256, intelligence: true, ports: "2× Thunderbolt 3, 2× USB‑A, HDMI, Ethernet, Kopfhörer", externalDisplays: 2, battery: null, weight: 1.2, material: "Aluminium", year: 2020, price: 799 },
  }),
  mac({
    id: "mac-studio-m3-ultra", name: "Mac Studio (M3 Ultra)", year: 2025, points: 100, price: 4799,
    art: { kind: "macstudio" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Der stärkste Mac, bis zu 512 GB Arbeitsspeicher.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M3 Ultra", cpuCores: 28, gpuCores: 60, ram: 96, storage: 1024, intelligence: true, ports: "6× Thunderbolt 5, 2× USB‑A, HDMI, 10‑Gbit‑Ethernet, SDXC", externalDisplays: 8, battery: null, weight: 3.64, material: "Aluminium", year: 2025, price: 4799 },
  }),
  mac({
    id: "mac-studio-m4-max", name: "Mac Studio (M4 Max)", year: 2025, points: 96, price: 2399,
    art: { kind: "macstudio" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Workstation‑Leistung im kompakten Gehäuse.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M4 Max", cpuCores: 14, gpuCores: 32, ram: 36, storage: 512, intelligence: true, ports: "4× Thunderbolt 5, 2× USB‑C vorne, 2× USB‑A, HDMI, 10‑Gbit‑Ethernet, SDXC", externalDisplays: 5, battery: null, weight: 2.74, material: "Aluminium", year: 2025, price: 2399 },
  }),
  mac({
    id: "mac-studio-m2-max", name: "Mac Studio (M2 Max)", year: 2023, points: 84, price: 2399,
    art: { kind: "macstudio" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Zweite Generation des Studio.",
    specs: { displaySize: null, displayType: "—", brightness: null, chip: "M2 Max", cpuCores: 12, gpuCores: 30, ram: 32, storage: 512, intelligence: true, ports: "4× Thunderbolt 4, 2× USB‑C vorne, 2× USB‑A, HDMI, 10‑Gbit‑Ethernet, SDXC", externalDisplays: 5, battery: null, weight: 2.7, material: "Aluminium", year: 2023, price: 2399 },
  }),

  // ───────────────────────── AirPods ─────────────────────────
  airpods({
    id: "airpods-pro-3", name: "AirPods Pro 3", year: 2025, points: 100, price: 249,
    art: { kind: "airpods", variant: "pro" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Beste Geräuschunterdrückung, Herzfrequenz und Live‑Übersetzung.",
    specs: { chip: "H2", anc: true, transparency: true, adaptive: true, spatial: true, hearingAid: true, heartRate: true, waterRating: "IP57", battery: 8, batteryTotal: 24, caseCharging: "USB‑C, MagSafe, Qi", year: 2025, price: 249 },
  }),
  airpods({
    id: "airpods-pro-2", name: "AirPods Pro 2 (USB‑C)", year: 2023, points: 90, price: 279,
    art: { kind: "airpods", variant: "pro" }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "H2‑Chip, adaptives Audio und Hörhilfe‑Funktion.",
    specs: { chip: "H2", anc: true, transparency: true, adaptive: true, spatial: true, hearingAid: true, heartRate: false, waterRating: "IP54", battery: 6, batteryTotal: 30, caseCharging: "USB‑C, MagSafe, Qi", year: 2023, price: 279 },
  }),
  airpods({
    id: "airpods-4-anc", name: "AirPods 4 mit ANC", year: 2024, points: 82, price: 199,
    art: { kind: "airpods", variant: "open" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Offenes Design mit Geräuschunterdrückung.",
    specs: { chip: "H2", anc: true, transparency: true, adaptive: true, spatial: true, hearingAid: false, heartRate: false, waterRating: "IP54", battery: 5, batteryTotal: 30, caseCharging: "USB‑C, Qi", year: 2024, price: 199 },
  }),
  airpods({
    id: "airpods-4", name: "AirPods 4", year: 2024, points: 72, price: 149,
    art: { kind: "airpods", variant: "open" }, wall: ["#3b2d6b", "#a78bfa", "#f1e9ff"],
    tagline: "Der neue Standard mit H2 und USB‑C.",
    specs: { chip: "H2", anc: false, transparency: false, adaptive: false, spatial: true, hearingAid: false, heartRate: false, waterRating: "IP54", battery: 5, batteryTotal: 30, caseCharging: "USB‑C", year: 2024, price: 149 },
  }),
  airpods({
    id: "airpods-max-usb-c", name: "AirPods Max (USB‑C)", year: 2024, points: 86, price: 579,
    art: { kind: "airpodsmax" }, wall: ["#0d2b4c", "#5aa9ff", "#e6f3ff"],
    tagline: "Over‑Ear mit Lossless‑Audio über USB‑C.",
    specs: { chip: "H1", anc: true, transparency: true, adaptive: false, spatial: true, hearingAid: false, heartRate: false, waterRating: "—", battery: 20, batteryTotal: 20, caseCharging: "USB‑C (Smart Case)", year: 2024, price: 579 },
  }),
  airpods({
    id: "airpods-3", name: "AirPods (3. Gen.)", year: 2021, points: 60, price: 199,
    art: { kind: "airpods", variant: "open" }, wall: ["#0b3b3d", "#2fb8b5", "#c9f2ef"],
    tagline: "3D‑Audio und längere Laufzeit.",
    specs: { chip: "H1", anc: false, transparency: false, adaptive: false, spatial: true, hearingAid: false, heartRate: false, waterRating: "IPX4", battery: 6, batteryTotal: 30, caseCharging: "Lightning, MagSafe", year: 2021, price: 199 },
  }),
  airpods({
    id: "airpods-2", name: "AirPods (2. Gen.)", year: 2019, points: 44, price: 149,
    art: { kind: "airpods", variant: "classic" }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Der Klassiker mit H1‑Chip.",
    specs: { chip: "H1", anc: false, transparency: false, adaptive: false, spatial: false, hearingAid: false, heartRate: false, waterRating: "—", battery: 5, batteryTotal: 24, caseCharging: "Lightning", year: 2019, price: 149 },
  }),

  // ───────────────────────── HomePod ─────────────────────────
  homepod({
    id: "homepod-2", name: "HomePod (2. Gen.)", year: 2023, points: 100, price: 349,
    art: { kind: "homepod", finish: "midnight" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Raumfüllender Klang mit Sensoren fürs Zuhause.",
    specs: { chip: "S7", drivers: "Hochleistungs‑Tieftöner, 5 Hochtöner", spatial: true, stereoPair: true, thread: true, sensors: true, soundRecognition: true, height: 16.8, weight: 2.3, year: 2023, price: 349 },
  }),
  homepod({
    id: "homepod-mini", name: "HomePod mini", year: 2020, points: 70, price: 99,
    art: { kind: "homepodmini", finish: "white" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Klein, günstig und Smart‑Home‑Zentrale.",
    specs: { chip: "S5", drivers: "Full‑Range‑Treiber, 2 passive Radiatoren", spatial: false, stereoPair: true, thread: true, sensors: true, soundRecognition: true, height: 8.4, weight: 0.35, year: 2020, price: 99 },
  }),
  homepod({
    id: "homepod-1", name: "HomePod (1. Gen.)", year: 2018, points: 74, price: 349,
    art: { kind: "homepod", finish: "white" }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "Der erste HomePod mit 7 Hochtönern.",
    specs: { chip: "A8", drivers: "Hochleistungs‑Tieftöner, 7 Hochtöner", spatial: true, stereoPair: true, thread: false, sensors: false, soundRecognition: false, height: 17.2, weight: 2.5, year: 2018, price: 349 },
  }),

  // ───────────────────────── Apple TV ─────────────────────────
  appletv({
    id: "apple-tv-4k-3", name: "Apple TV 4K (3. Gen.)", year: 2022, points: 100, price: 169,
    art: { kind: "appletv" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "A15 Bionic, HDR10+ und Thread in der Ethernet‑Variante.",
    specs: { resolution: "4K bis 60 fps", hdr: "Dolby Vision, HDR10+, HDR10, HLG", atmos: true, chip: "A15 Bionic", storage: 64, ethernet: "Bei Wi‑Fi + Ethernet", wifi: "Wi‑Fi 6", remote: "Siri Remote (3. Gen.)", remoteCharging: "USB‑C", year: 2022, price: 169 },
  }),
  appletv({
    id: "apple-tv-4k-2", name: "Apple TV 4K (2. Gen.)", year: 2021, points: 78, price: 199,
    art: { kind: "appletv" }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "A12 Bionic und die neue Siri Remote.",
    specs: { resolution: "4K bis 60 fps", hdr: "Dolby Vision, HDR10, HLG", atmos: true, chip: "A12 Bionic", storage: 32, ethernet: "Ja, Thread", wifi: "Wi‑Fi 6", remote: "Siri Remote (2. Gen.)", remoteCharging: "Lightning", year: 2021, price: 199 },
  }),
  appletv({
    id: "apple-tv-4k-1", name: "Apple TV 4K (1. Gen.)", year: 2017, points: 58, price: 199,
    art: { kind: "appletv" }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Das erste Apple TV mit 4K und HDR.",
    specs: { resolution: "4K bis 60 fps", hdr: "Dolby Vision, HDR10", atmos: true, chip: "A10X Fusion", storage: 32, ethernet: "Ja", wifi: "Wi‑Fi 5", remote: "Siri Remote (1. Gen.)", remoteCharging: "Lightning", year: 2017, price: 199 },
  }),
  appletv({
    id: "apple-tv-hd", name: "Apple TV HD", year: 2015, points: 34, price: 179,
    art: { kind: "appletv" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Der Einstieg in tvOS.",
    specs: { resolution: "1080p", hdr: "—", atmos: false, chip: "A8", storage: 32, ethernet: "Ja", wifi: "Wi‑Fi 5", remote: "Siri Remote (1. Gen.)", remoteCharging: "Lightning", year: 2015, price: 179 },
  }),
];

export const MORE_DEFAULT_PAIR = {
  mac: ["macbook-air-13-m1", "macbook-air-13-m4"],
  airpods: ["airpods-2", "airpods-pro-3"],
  homepod: ["homepod-mini", "homepod-2"],
  appletv: ["apple-tv-4k-1", "apple-tv-4k-3"],
};
