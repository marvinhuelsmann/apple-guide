// Gerätekatalog für Apple Guide.
// Punkte (0–100) sind eine redaktionelle Gesamtbewertung, keine Apple-Angabe.
// Preise sind unverbindliche deutsche Einführungspreise der kleinsten Konfiguration.

import { MORE_CATEGORIES, MORE_SPEC_GROUPS, MORE_DEVICES, MORE_DEFAULT_PAIR } from "./devices-more.js";
import imageMeta from "./imageMeta.json" with { type: "json" };

const CORE_CATEGORIES = [
  { id: "iphone", label: "iPhone", noun: "iPhone" },
  { id: "ipad", label: "iPad", noun: "iPad" },
  { id: "watch", label: "Apple Watch", noun: "Apple Watch" },
];

// better: "higher" | "lower" | "true" | null — steuert die Hervorhebung im Vergleich
const CORE_SPEC_GROUPS = {
  iphone: [
    {
      id: "display",
      label: "Display",
      rows: [
        { key: "displaySize", label: "Bildschirmdiagonale", unit: '"', better: "higher" },
        { key: "displayType", label: "Displaytechnologie" },
        { key: "refresh", label: "Bildwiederholrate", unit: " Hz", better: "higher" },
        { key: "alwaysOn", label: "Always‑On Display", better: "true" },
        { key: "dynamicIsland", label: "Dynamic Island", better: "true" },
      ],
    },
    {
      id: "chip",
      label: "Chip & Leistung",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "ram", label: "Arbeitsspeicher", unit: " GB", better: "higher" },
        { key: "intelligence", label: "Apple Intelligence", better: "true" },
      ],
    },
    {
      id: "camera",
      label: "Kamera",
      rows: [
        { key: "rearCameras", label: "Rückkameras" },
        { key: "zoom", label: "Optischer Zoom", unit: "x", better: "higher" },
        { key: "frontCamera", label: "Frontkamera", unit: " MP", better: "higher" },
        { key: "cameraControl", label: "Kamerasteuerung", better: "true" },
      ],
    },
    {
      id: "battery",
      label: "Batterie & Anschluss",
      rows: [
        { key: "video", label: "Videowiedergabe", unit: " Std.", better: "higher" },
        { key: "charging", label: "Kabelloses Laden" },
        { key: "connector", label: "Anschluss" },
      ],
    },
    {
      id: "design",
      label: "Design",
      rows: [
        { key: "material", label: "Gehäuse" },
        { key: "weight", label: "Gewicht", unit: " g", better: "lower" },
        { key: "thickness", label: "Dicke", unit: " mm", better: "lower" },
        { key: "actionButton", label: "Aktionstaste", better: "true" },
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
  ipad: [
    {
      id: "display",
      label: "Display",
      rows: [
        { key: "displaySize", label: "Bildschirmdiagonale", unit: '"', better: "higher" },
        { key: "displayType", label: "Displaytechnologie" },
        { key: "refresh", label: "Bildwiederholrate", unit: " Hz", better: "higher" },
      ],
    },
    {
      id: "chip",
      label: "Chip & Leistung",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "ram", label: "Arbeitsspeicher", unit: " GB", better: "higher" },
        { key: "storage", label: "Speicher ab", unit: " GB", better: "higher" },
        { key: "intelligence", label: "Apple Intelligence", better: "true" },
      ],
    },
    {
      id: "camera",
      label: "Kamera & Zubehör",
      rows: [
        { key: "rearCameras", label: "Rückkamera" },
        { key: "frontCamera", label: "Frontkamera" },
        { key: "pencil", label: "Apple Pencil" },
        { key: "faceId", label: "Face ID", better: "true" },
      ],
    },
    {
      id: "battery",
      label: "Batterie & Anschluss",
      rows: [
        { key: "video", label: "Videowiedergabe", unit: " Std.", better: "higher" },
        { key: "connector", label: "Anschluss" },
      ],
    },
    {
      id: "design",
      label: "Design",
      rows: [
        { key: "weight", label: "Gewicht", unit: " g", better: "lower" },
        { key: "thickness", label: "Dicke", unit: " mm", better: "lower" },
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
  watch: [
    {
      id: "display",
      label: "Display",
      rows: [
        { key: "sizes", label: "Gehäusegrößen" },
        { key: "displayType", label: "Displaytechnologie" },
        { key: "alwaysOn", label: "Always‑On Display", better: "true" },
      ],
    },
    {
      id: "chip",
      label: "Chip & Verbindung",
      rows: [
        { key: "chip", label: "Chip" },
        { key: "cellular", label: "Mobilfunk" },
        { key: "intelligence", label: "Siri auf dem Gerät", better: "true" },
      ],
    },
    {
      id: "health",
      label: "Gesundheit",
      rows: [
        { key: "ecg", label: "EKG", better: "true" },
        { key: "bloodOxygen", label: "Blutsauerstoff", better: "true" },
        { key: "tempSensor", label: "Temperatursensor", better: "true" },
        { key: "hypertension", label: "Bluthochdruck‑Hinweise", better: "true" },
      ],
    },
    {
      id: "battery",
      label: "Batterie & Robustheit",
      rows: [
        { key: "battery", label: "Batterielaufzeit", unit: " Std.", better: "higher" },
        { key: "waterRating", label: "Wasserschutz" },
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
};

const OLED = "Super Retina XDR (OLED)";
const LCD = "Liquid Retina (LCD)";
const USB3 = "USB‑C (USB 3, 10 Gbit/s)";
const USB2 = "USB‑C (USB 2)";
const LIGHTNING = "Lightning";
const MAGSAFE25 = "MagSafe bis 25 W, Qi2";
const MAGSAFE15 = "MagSafe bis 15 W";
const MAGSAFE_QI = "MagSafe bis 15 W, Qi";
const QI = "Qi bis 7,5 W";

function iphone(d) { return { category: "iphone", ...d }; }
function ipad(d) { return { category: "ipad", ...d }; }
function watch(d) { return { category: "watch", ...d }; }

const CORE_DEVICES = [
  // ───────────────────────── iPhone ─────────────────────────
  iphone({
    id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", year: 2025, points: 100, price: 1449,
    frame: { device: "iphone-17-pro", color: "deep-blue" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Das leistungsstärkste iPhone mit der längsten Laufzeit.",
    specs: { displaySize: 6.9, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A19 Pro", ram: 12, intelligence: true, rearCameras: "48 MP Weitwinkel, 48 MP Ultraweitwinkel, 48 MP Tele", zoom: 8, frontCamera: 18, cameraControl: true, video: 39, charging: MAGSAFE25, connector: USB3, material: "Aluminium‑Unibody, Ceramic Shield 2", weight: 233, thickness: 8.75, actionButton: true, year: 2025, price: 1449 },
  }),
  iphone({
    id: "iphone-17-pro", name: "iPhone 17 Pro", year: 2025, points: 97, price: 1299,
    frame: { device: "iphone-17-pro", color: "cosmic-orange" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Pro‑Leistung, Pro‑Kameras, kompakter als das Max.",
    specs: { displaySize: 6.3, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A19 Pro", ram: 12, intelligence: true, rearCameras: "48 MP Weitwinkel, 48 MP Ultraweitwinkel, 48 MP Tele", zoom: 8, frontCamera: 18, cameraControl: true, video: 33, charging: MAGSAFE25, connector: USB3, material: "Aluminium‑Unibody, Ceramic Shield 2", weight: 206, thickness: 8.75, actionButton: true, year: 2025, price: 1299 },
  }),
  iphone({
    id: "iphone-air", name: "iPhone Air", year: 2025, points: 88, price: 1199,
    frame: { device: "iphone-air", color: "blue" }, wall: ["#0d2b4c", "#5aa9ff", "#e6f3ff"],
    tagline: "Das dünnste iPhone aller Zeiten, mit Titan und A19 Pro.",
    specs: { displaySize: 6.5, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A19 Pro", ram: 12, intelligence: true, rearCameras: "48 MP Fusion Weitwinkel", zoom: 2, frontCamera: 18, cameraControl: true, video: 27, charging: MAGSAFE25, connector: USB2, material: "Titan, Ceramic Shield 2", weight: 165, thickness: 5.64, actionButton: true, year: 2025, price: 1199 },
  }),
  iphone({
    id: "iphone-17", name: "iPhone 17", year: 2025, points: 90, price: 949,
    frame: { device: "iphone-17", color: "lavender" }, wall: ["#3b2d6b", "#a78bfa", "#f1e9ff"],
    tagline: "Endlich ProMotion und ein größeres Display im Standardmodell.",
    specs: { displaySize: 6.3, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A19", ram: 8, intelligence: true, rearCameras: "48 MP Weitwinkel, 48 MP Ultraweitwinkel", zoom: 2, frontCamera: 18, cameraControl: true, video: 30, charging: MAGSAFE25, connector: USB2, material: "Aluminium, Ceramic Shield 2", weight: 177, thickness: 7.95, actionButton: true, year: 2025, price: 949 },
  }),
  iphone({
    id: "iphone-16e", name: "iPhone 16e", year: 2025, points: 74, price: 699,
    frame: { device: "iphone-16", color: "white" }, wall: ["#1c1c1e", "#5e5e63", "#e5e5ea"],
    tagline: "Der günstige Einstieg mit A18 und Apple Intelligence.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A18", ram: 8, intelligence: true, rearCameras: "48 MP Fusion Weitwinkel", zoom: 2, frontCamera: 12, cameraControl: false, video: 26, charging: QI, connector: USB2, material: "Aluminium, Ceramic Shield", weight: 167, thickness: 7.8, actionButton: true, year: 2025, price: 699 },
  }),
  iphone({
    id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", year: 2024, points: 93, price: 1449,
    frame: { device: "iphone-16-pro", color: "natural" }, wall: ["#2b2622", "#8c7b6b", "#e9dfd3"],
    tagline: "Titan, A18 Pro und 5x Tele im großen Format.",
    specs: { displaySize: 6.9, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A18 Pro", ram: 8, intelligence: true, rearCameras: "48 MP Weitwinkel, 48 MP Ultraweitwinkel, 12 MP Tele", zoom: 5, frontCamera: 12, cameraControl: true, video: 33, charging: MAGSAFE25, connector: USB3, material: "Titan, Ceramic Shield", weight: 227, thickness: 8.25, actionButton: true, year: 2024, price: 1449 },
  }),
  iphone({
    id: "iphone-16-pro", name: "iPhone 16 Pro", year: 2024, points: 91, price: 1199,
    frame: { device: "iphone-16-pro", color: "black" }, wall: ["#0f0f12", "#3a3a40", "#9a9aa3"],
    tagline: "Pro‑Kameras mit 5x Tele im kompakten Titan‑Gehäuse.",
    specs: { displaySize: 6.3, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A18 Pro", ram: 8, intelligence: true, rearCameras: "48 MP Weitwinkel, 48 MP Ultraweitwinkel, 12 MP Tele", zoom: 5, frontCamera: 12, cameraControl: true, video: 27, charging: MAGSAFE25, connector: USB3, material: "Titan, Ceramic Shield", weight: 199, thickness: 8.25, actionButton: true, year: 2024, price: 1199 },
  }),
  iphone({
    id: "iphone-16-plus", name: "iPhone 16 Plus", year: 2024, points: 84, price: 1099,
    frame: { device: "iphone-16", color: "teal" }, wall: ["#0b3b3d", "#2fb8b5", "#c9f2ef"],
    tagline: "Großes Display und lange Laufzeit ohne Pro‑Aufpreis.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: true, chip: "A18", ram: 8, intelligence: true, rearCameras: "48 MP Fusion Weitwinkel, 12 MP Ultraweitwinkel", zoom: 2, frontCamera: 12, cameraControl: true, video: 27, charging: MAGSAFE25, connector: USB2, material: "Aluminium, Ceramic Shield", weight: 199, thickness: 7.8, actionButton: true, year: 2024, price: 1099 },
  }),
  iphone({
    id: "iphone-16", name: "iPhone 16", year: 2024, points: 82, price: 949,
    frame: { device: "iphone-16", color: "ultramarine" }, wall: ["#1b2a6b", "#4c6fff", "#c7d4ff"],
    tagline: "Kamerasteuerung, Aktionstaste und A18 im Standardmodell.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: true, chip: "A18", ram: 8, intelligence: true, rearCameras: "48 MP Fusion Weitwinkel, 12 MP Ultraweitwinkel", zoom: 2, frontCamera: 12, cameraControl: true, video: 22, charging: MAGSAFE25, connector: USB2, material: "Aluminium, Ceramic Shield", weight: 170, thickness: 7.8, actionButton: true, year: 2024, price: 949 },
  }),
  iphone({
    id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", year: 2023, points: 87, price: 1449,
    frame: { device: "iphone-16-pro", color: "natural" }, wall: ["#1f2a30", "#6b8390", "#dbe6ec"],
    tagline: "Das erste Titan‑iPhone mit 5x Tele und USB‑C.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A17 Pro", ram: 8, intelligence: true, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 5, frontCamera: 12, cameraControl: false, video: 29, charging: MAGSAFE15, connector: USB3, material: "Titan, Ceramic Shield", weight: 221, thickness: 8.25, actionButton: true, year: 2023, price: 1449 },
  }),
  iphone({
    id: "iphone-15-pro", name: "iPhone 15 Pro", year: 2023, points: 85, price: 1199,
    frame: { device: "iphone-16-pro", color: "white" }, wall: ["#2a2f3a", "#7d8aa6", "#e6e9f2"],
    tagline: "Titan, Aktionstaste und A17 Pro im kompakten Format.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A17 Pro", ram: 8, intelligence: true, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 3, frontCamera: 12, cameraControl: false, video: 23, charging: MAGSAFE15, connector: USB3, material: "Titan, Ceramic Shield", weight: 187, thickness: 8.25, actionButton: true, year: 2023, price: 1199 },
  }),
  iphone({
    id: "iphone-15-plus", name: "iPhone 15 Plus", year: 2023, points: 77, price: 1099,
    frame: { device: "iphone-16", color: "pink" }, wall: ["#5a1f3d", "#ff7eb6", "#ffe0ee"],
    tagline: "Großes Display, Dynamic Island und USB‑C.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: true, chip: "A16 Bionic", ram: 6, intelligence: false, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 2, frontCamera: 12, cameraControl: false, video: 26, charging: MAGSAFE15, connector: USB2, material: "Aluminium, Ceramic Shield", weight: 201, thickness: 7.8, actionButton: false, year: 2023, price: 1099 },
  }),
  iphone({
    id: "iphone-15", name: "iPhone 15", year: 2023, points: 75, price: 949,
    frame: { device: "iphone-16", color: "black" }, wall: ["#1c3b2b", "#4fbf8a", "#d9f5e6"],
    tagline: "Dynamic Island und 48‑MP‑Kamera im Standardmodell.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: true, chip: "A16 Bionic", ram: 6, intelligence: false, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 2, frontCamera: 12, cameraControl: false, video: 20, charging: MAGSAFE15, connector: USB2, material: "Aluminium, Ceramic Shield", weight: 171, thickness: 7.8, actionButton: false, year: 2023, price: 949 },
  }),
  iphone({
    id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", year: 2022, points: 80, price: 1449,
    frame: { device: "iphone-16-pro", color: "black" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Erste Dynamic Island, Always‑On und 48 MP.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A16 Bionic", ram: 6, intelligence: false, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 3, frontCamera: 12, cameraControl: false, video: 29, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 240, thickness: 7.85, actionButton: false, year: 2022, price: 1449 },
  }),
  iphone({
    id: "iphone-14-pro", name: "iPhone 14 Pro", year: 2022, points: 78, price: 1299,
    frame: { device: "iphone-16-pro", color: "black" }, wall: ["#2a1e10", "#b78a4e", "#f3e6d2"],
    tagline: "Dynamic Island, 120 Hz und 48 MP im kompakten Pro.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 120, alwaysOn: true, dynamicIsland: true, chip: "A16 Bionic", ram: 6, intelligence: false, rearCameras: "48 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 3, frontCamera: 12, cameraControl: false, video: 23, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 206, thickness: 7.85, actionButton: false, year: 2022, price: 1299 },
  }),
  iphone({
    id: "iphone-14-plus", name: "iPhone 14 Plus", year: 2022, points: 70, price: 1149,
    frame: { device: "iphone-16", color: "white" }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Das große Standardmodell mit langer Laufzeit.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 26, charging: MAGSAFE15, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 203, thickness: 7.8, actionButton: false, year: 2022, price: 1149 },
  }),
  iphone({
    id: "iphone-14", name: "iPhone 14", year: 2022, points: 68, price: 999,
    frame: { device: "iphone-16", color: "ultramarine" }, wall: ["#1b2f5a", "#5b8def", "#dbe7ff"],
    tagline: "Solides Standardmodell mit A15 und Unfallerkennung.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 20, charging: MAGSAFE15, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 172, thickness: 7.8, actionButton: false, year: 2022, price: 999 },
  }),
  iphone({
    id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", year: 2021, points: 74, price: 1249,
    frame: { device: "iphone-16-pro", color: "natural" }, wall: ["#0e2a3a", "#3f8fb5", "#d6ecf6"],
    tagline: "Erstes ProMotion‑Display und starke Laufzeit.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 120, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 3, frontCamera: 12, cameraControl: false, video: 28, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 238, thickness: 7.65, actionButton: false, year: 2021, price: 1249 },
  }),
  iphone({
    id: "iphone-13-pro", name: "iPhone 13 Pro", year: 2021, points: 72, price: 1149,
    frame: { device: "iphone-16-pro", color: "white" }, wall: ["#1e2f2a", "#5fa88f", "#dff2ea"],
    tagline: "ProMotion, Makro und 3x Tele.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 120, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 3, frontCamera: 12, cameraControl: false, video: 22, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 203, thickness: 7.65, actionButton: false, year: 2021, price: 1149 },
  }),
  iphone({
    id: "iphone-13", name: "iPhone 13", year: 2021, points: 64, price: 899,
    frame: { device: "iphone-16", color: "pink" }, wall: ["#4a1a2e", "#e0607e", "#fbe0e8"],
    tagline: "Beliebtes Standardmodell mit A15 und Kinomodus.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 19, charging: MAGSAFE15, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 173, thickness: 7.65, actionButton: false, year: 2021, price: 899 },
  }),
  iphone({
    id: "iphone-13-mini", name: "iPhone 13 mini", year: 2021, points: 62, price: 799,
    frame: { device: "iphone-16", color: "teal" }, wall: ["#0d3d3f", "#38b3a8", "#d2f1ec"],
    tagline: "Das letzte kleine iPhone.",
    specs: { displaySize: 5.4, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A15 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 17, charging: MAGSAFE15, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 140, thickness: 7.65, actionButton: false, year: 2021, price: 799 },
  }),
  iphone({
    id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", year: 2020, points: 66, price: 1217,
    frame: { device: "iphone-16-pro", color: "natural" }, wall: ["#0f2740", "#3d6fa8", "#d5e3f4"],
    tagline: "Erstes 5G‑Pro‑Max mit LiDAR.",
    specs: { displaySize: 6.7, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A14 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 2.5, frontCamera: 12, cameraControl: false, video: 20, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 226, thickness: 7.4, actionButton: false, year: 2020, price: 1217 },
  }),
  iphone({
    id: "iphone-12-pro", name: "iPhone 12 Pro", year: 2020, points: 64, price: 1120,
    frame: { device: "iphone-16-pro", color: "white" }, wall: ["#22303a", "#7f97a8", "#e4ebf0"],
    tagline: "Kantiges Design, 5G und LiDAR.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A14 Bionic", ram: 6, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 2, frontCamera: 12, cameraControl: false, video: 17, charging: MAGSAFE15, connector: LIGHTNING, material: "Edelstahl, Ceramic Shield", weight: 189, thickness: 7.4, actionButton: false, year: 2020, price: 1120 },
  }),
  iphone({
    id: "iphone-12", name: "iPhone 12", year: 2020, points: 58, price: 876,
    frame: { device: "iphone-16", color: "ultramarine" }, wall: ["#13285f", "#3f63d6", "#d3dcfb"],
    tagline: "Erstes 5G‑iPhone mit OLED im Standardmodell.",
    specs: { displaySize: 6.1, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A14 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 17, charging: MAGSAFE15, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 164, thickness: 7.4, actionButton: false, year: 2020, price: 876 },
  }),
  iphone({
    id: "iphone-12-mini", name: "iPhone 12 mini", year: 2020, points: 56, price: 778,
    frame: { device: "iphone-16", color: "white" }, wall: ["#3a1f1f", "#d95a5a", "#fadada"],
    tagline: "Klein, leicht und trotzdem 5G.",
    specs: { displaySize: 5.4, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A14 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 15, charging: MAGSAFE_QI, connector: LIGHTNING, material: "Aluminium, Ceramic Shield", weight: 135, thickness: 7.4, actionButton: false, year: 2020, price: 778 },
  }),
  iphone({
    id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", year: 2019, points: 58, price: 1249,
    frame: { device: "iphone-16-pro", color: "black" }, wall: ["#0f2a25", "#2e7d6e", "#d0ebe4"],
    tagline: "Erstes Triple‑Kamera‑iPhone mit großer Laufzeit.",
    specs: { displaySize: 6.5, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A13 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 2, frontCamera: 12, cameraControl: false, video: 20, charging: QI, connector: LIGHTNING, material: "Edelstahl, Glas", weight: 226, thickness: 8.1, actionButton: false, year: 2019, price: 1249 },
  }),
  iphone({
    id: "iphone-11-pro", name: "iPhone 11 Pro", year: 2019, points: 56, price: 1149,
    frame: { device: "iphone-16-pro", color: "black" }, wall: ["#1c2430", "#5a6b85", "#dfe4ec"],
    tagline: "Kompaktes Pro mit Triple‑Kamera.",
    specs: { displaySize: 5.8, displayType: OLED, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A13 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel, 12 MP Tele", zoom: 2, frontCamera: 12, cameraControl: false, video: 18, charging: QI, connector: LIGHTNING, material: "Edelstahl, Glas", weight: 188, thickness: 8.1, actionButton: false, year: 2019, price: 1149 },
  }),
  iphone({
    id: "iphone-11", name: "iPhone 11", year: 2019, points: 50, price: 849,
    frame: { device: "iphone-16", color: "white" }, wall: ["#2f2a55", "#8f7fd6", "#e9e4fb"],
    tagline: "Der langjährige Bestseller mit LCD und Dual‑Kamera.",
    specs: { displaySize: 6.1, displayType: LCD, refresh: 60, alwaysOn: false, dynamicIsland: false, chip: "A13 Bionic", ram: 4, intelligence: false, rearCameras: "12 MP Weitwinkel, 12 MP Ultraweitwinkel", zoom: 1, frontCamera: 12, cameraControl: false, video: 17, charging: QI, connector: LIGHTNING, material: "Aluminium, Glas", weight: 194, thickness: 8.3, actionButton: false, year: 2019, price: 849 },
  }),

  // ───────────────────────── iPad ─────────────────────────
  ipad({
    id: "ipad-pro-13-m5", name: 'iPad Pro 13" (M5)', year: 2025, points: 100, price: 1549,
    frame: { device: "ipad-pro-13", color: "space-gray" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Das dünnste und stärkste iPad mit Tandem‑OLED.",
    specs: { displaySize: 13, displayType: "Ultra Retina XDR (Tandem‑OLED)", refresh: 120, chip: "M5", ram: 12, storage: 256, intelligence: true, rearCameras: "12 MP Weitwinkel, LiDAR", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: true, video: 10, connector: "USB‑C (Thunderbolt 4)", weight: 579, thickness: 5.1, year: 2025, price: 1549 },
  }),
  ipad({
    id: "ipad-pro-11-m5", name: 'iPad Pro 11" (M5)', year: 2025, points: 97, price: 1199,
    frame: { device: "ipad-pro-11", color: "silver-with-apple-pencil" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Pro‑Leistung im handlichen Format.",
    specs: { displaySize: 11, displayType: "Ultra Retina XDR (Tandem‑OLED)", refresh: 120, chip: "M5", ram: 12, storage: 256, intelligence: true, rearCameras: "12 MP Weitwinkel, LiDAR", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: true, video: 10, connector: "USB‑C (Thunderbolt 4)", weight: 444, thickness: 5.3, year: 2025, price: 1199 },
  }),
  ipad({
    id: "ipad-pro-13-m4", name: 'iPad Pro 13" (M4)', year: 2024, points: 94, price: 1549,
    frame: { device: "ipad-pro-13", color: "silver" }, wall: ["#2b2622", "#8c7b6b", "#e9dfd3"],
    tagline: "Das erste OLED‑iPad, extrem dünn.",
    specs: { displaySize: 13, displayType: "Ultra Retina XDR (Tandem‑OLED)", refresh: 120, chip: "M4", ram: 8, storage: 256, intelligence: true, rearCameras: "12 MP Weitwinkel, LiDAR", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: true, video: 10, connector: "USB‑C (Thunderbolt 4)", weight: 579, thickness: 5.1, year: 2024, price: 1549 },
  }),
  ipad({
    id: "ipad-pro-11-m4", name: 'iPad Pro 11" (M4)', year: 2024, points: 92, price: 1199,
    frame: { device: "ipad-pro-11", color: "space-gray" }, wall: ["#0f0f12", "#3a3a40", "#9a9aa3"],
    tagline: "OLED und M4 im kompakten Pro.",
    specs: { displaySize: 11, displayType: "Ultra Retina XDR (Tandem‑OLED)", refresh: 120, chip: "M4", ram: 8, storage: 256, intelligence: true, rearCameras: "12 MP Weitwinkel, LiDAR", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: true, video: 10, connector: "USB‑C (Thunderbolt 4)", weight: 444, thickness: 5.3, year: 2024, price: 1199 },
  }),
  ipad({
    id: "ipad-air-13-m3", name: 'iPad Air 13" (M3)', year: 2025, points: 84, price: 969,
    frame: { device: "ipad-pro-13", color: "silver" }, wall: ["#0d2b4c", "#5aa9ff", "#e6f3ff"],
    tagline: "Großes Display und M3 zum Air‑Preis.",
    specs: { displaySize: 13, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "M3", ram: 8, storage: 128, intelligence: true, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: false, video: 10, connector: "USB‑C (USB 3)", weight: 616, thickness: 6.1, year: 2025, price: 969 },
  }),
  ipad({
    id: "ipad-air-11-m3", name: 'iPad Air 11" (M3)', year: 2025, points: 82, price: 699,
    frame: { device: "ipad-pro-11", color: "silver" }, wall: ["#3b2d6b", "#a78bfa", "#f1e9ff"],
    tagline: "Der Allrounder mit M3.",
    specs: { displaySize: 11, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "M3", ram: 8, storage: 128, intelligence: true, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: false, video: 10, connector: "USB‑C (USB 3)", weight: 460, thickness: 6.1, year: 2025, price: 699 },
  }),
  ipad({
    id: "ipad-air-11-m2", name: 'iPad Air 11" (M2)', year: 2024, points: 78, price: 699,
    frame: { device: "ipad-pro-11", color: "space-gray" }, wall: ["#0b3b3d", "#2fb8b5", "#c9f2ef"],
    tagline: "Air mit M2 und Querformat‑Kamera.",
    specs: { displaySize: 11, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "M2", ram: 8, storage: 128, intelligence: true, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Querformat", pencil: "Apple Pencil Pro, USB‑C", faceId: false, video: 10, connector: "USB‑C (USB 3)", weight: 462, thickness: 6.1, year: 2024, price: 699 },
  }),
  ipad({
    id: "ipad-a16", name: "iPad (A16)", year: 2025, points: 64, price: 399,
    frame: { device: "ipad-pro-11", color: "silver" }, wall: ["#1b2a6b", "#4c6fff", "#c7d4ff"],
    tagline: "Das Einsteiger‑iPad mit A16.",
    specs: { displaySize: 11, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "A16", ram: 6, storage: 128, intelligence: false, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Querformat", pencil: "Apple Pencil (USB‑C), 1. Generation", faceId: false, video: 10, connector: "USB‑C (USB 2)", weight: 477, thickness: 7.0, year: 2025, price: 399 },
  }),
  ipad({
    id: "ipad-mini-a17-pro", name: "iPad mini (A17 Pro)", year: 2024, points: 72, price: 599,
    frame: { device: "ipad-pro-11", color: "space-gray-with-apple-pencil" }, wall: ["#5a1f3d", "#ff7eb6", "#ffe0ee"],
    tagline: "Klein, stark und mit Apple Intelligence.",
    specs: { displaySize: 8.3, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "A17 Pro", ram: 8, storage: 128, intelligence: true, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Hochformat", pencil: "Apple Pencil Pro, USB‑C", faceId: false, video: 10, connector: "USB‑C (USB 3)", weight: 293, thickness: 6.3, year: 2024, price: 599 },
  }),
  ipad({
    id: "ipad-pro-12-9-m2", name: 'iPad Pro 12,9" (M2)', year: 2022, points: 80, price: 1449,
    frame: { device: "ipad-pro-13", color: "space-gray" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Mini‑LED‑Pro mit M2.",
    specs: { displaySize: 12.9, displayType: "Liquid Retina XDR (Mini‑LED)", refresh: 120, chip: "M2", ram: 8, storage: 128, intelligence: true, rearCameras: "12 MP Weitwinkel, 10 MP Ultraweitwinkel, LiDAR", frontCamera: "12 MP Hochformat", pencil: "Apple Pencil 2, USB‑C", faceId: true, video: 10, connector: "USB‑C (Thunderbolt 4)", weight: 682, thickness: 6.4, year: 2022, price: 1449 },
  }),
  ipad({
    id: "ipad-10", name: "iPad (10. Generation)", year: 2022, points: 56, price: 579,
    frame: { device: "ipad-pro-11", color: "silver" }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Neues Design, USB‑C und A14.",
    specs: { displaySize: 10.9, displayType: "Liquid Retina (LCD)", refresh: 60, chip: "A14 Bionic", ram: 4, storage: 64, intelligence: false, rearCameras: "12 MP Weitwinkel", frontCamera: "12 MP Querformat", pencil: "Apple Pencil (USB‑C), 1. Generation", faceId: false, video: 10, connector: "USB‑C (USB 2)", weight: 477, thickness: 7.0, year: 2022, price: 579 },
  }),

  // ───────────────────────── Apple Watch ─────────────────────────
  watch({
    id: "apple-watch-ultra-3", name: "Apple Watch Ultra 3", year: 2025, points: 100, price: 899,
    frame: { device: "apple-watch-ultra", color: "black-alpine-loop" }, wall: ["#0b1f4b", "#2f6df6", "#9ad0ff"],
    tagline: "Größtes Display, Satellit und die längste Laufzeit.",
    specs: { sizes: "49 mm", displayType: "Wide‑Angle OLED, LTPO3", alwaysOn: true, chip: "S10", cellular: "5G, Satellit", intelligence: true, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: true, battery: 42, waterRating: "100 m, EN13319", material: "Titan", year: 2025, price: 899 },
  }),
  watch({
    id: "apple-watch-series-11", name: "Apple Watch Series 11", year: 2025, points: 92, price: 449,
    frame: { device: "apple-watch-series-11", color: "titanium-slate-milanese-loop" }, wall: ["#3a1500", "#ff7a00", "#ffd39a"],
    tagline: "Dünn, 5G und 24 Stunden Laufzeit.",
    specs: { sizes: "42 mm, 46 mm", displayType: "Wide‑Angle OLED, LTPO3", alwaysOn: true, chip: "S10", cellular: "5G", intelligence: true, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: true, battery: 24, waterRating: "50 m", material: "Aluminium oder Titan", year: 2025, price: 449 },
  }),
  watch({
    id: "apple-watch-se-3", name: "Apple Watch SE 3", year: 2025, points: 74, price: 269,
    frame: { device: "apple-watch-series-11", color: "titanium-natural-sport-band-stone-gray" }, wall: ["#0d2b4c", "#5aa9ff", "#e6f3ff"],
    tagline: "Günstiger Einstieg mit S10 und Always‑On.",
    specs: { sizes: "40 mm, 44 mm", displayType: "OLED, LTPO", alwaysOn: true, chip: "S10", cellular: "5G", intelligence: true, ecg: false, bloodOxygen: false, tempSensor: true, hypertension: false, battery: 18, waterRating: "50 m", material: "Aluminium", year: 2025, price: 269 },
  }),
  watch({
    id: "apple-watch-series-10", name: "Apple Watch Series 10", year: 2024, points: 86, price: 449,
    frame: { device: "apple-watch-series-11", color: "titanium-gold-milanese-loop" }, wall: ["#2b2622", "#8c7b6b", "#e9dfd3"],
    tagline: "Das dünnste Design mit größerem Display.",
    specs: { sizes: "42 mm, 46 mm", displayType: "Wide‑Angle OLED, LTPO3", alwaysOn: true, chip: "S10", cellular: "LTE", intelligence: true, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: true, battery: 18, waterRating: "50 m", material: "Aluminium oder Titan", year: 2024, price: 449 },
  }),
  watch({
    id: "apple-watch-ultra-2", name: "Apple Watch Ultra 2", year: 2023, points: 90, price: 899,
    frame: { device: "apple-watch-ultra", color: "natural-alpine-loop" }, wall: ["#0f0f12", "#3a3a40", "#9a9aa3"],
    tagline: "Robust, hell und mit 36 Stunden Laufzeit.",
    specs: { sizes: "49 mm", displayType: "OLED, LTPO2", alwaysOn: true, chip: "S9", cellular: "LTE", intelligence: true, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: true, battery: 36, waterRating: "100 m, EN13319", material: "Titan", year: 2023, price: 899 },
  }),
  watch({
    id: "apple-watch-series-9", name: "Apple Watch Series 9", year: 2023, points: 78, price: 449,
    frame: { device: "apple-watch-series-11", color: "titanium-natural-magnetic-link-caramel" }, wall: ["#5a1f3d", "#ff7eb6", "#ffe0ee"],
    tagline: "S9‑Chip mit Doppeltipp‑Geste.",
    specs: { sizes: "41 mm, 45 mm", displayType: "OLED, LTPO2", alwaysOn: true, chip: "S9", cellular: "LTE", intelligence: true, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: true, battery: 18, waterRating: "50 m", material: "Aluminium oder Edelstahl", year: 2023, price: 449 },
  }),
  watch({
    id: "apple-watch-se-2", name: "Apple Watch SE (2. Gen.)", year: 2022, points: 60, price: 299,
    frame: { device: "apple-watch-series-11", color: "titanium-slate-magnetic-link-navy" }, wall: ["#1b2a6b", "#4c6fff", "#c7d4ff"],
    tagline: "Die Grundlagen zum günstigen Preis.",
    specs: { sizes: "40 mm, 44 mm", displayType: "OLED", alwaysOn: false, chip: "S8", cellular: "LTE", intelligence: false, ecg: false, bloodOxygen: false, tempSensor: false, hypertension: false, battery: 18, waterRating: "50 m", material: "Aluminium", year: 2022, price: 299 },
  }),
  watch({
    id: "apple-watch-series-8", name: "Apple Watch Series 8", year: 2022, points: 70, price: 499,
    frame: { device: "apple-watch-series-11", color: "titanium-gold-magnetic-link-sage-gray" }, wall: ["#0b3b3d", "#2fb8b5", "#c9f2ef"],
    tagline: "Temperatursensor und Unfallerkennung.",
    specs: { sizes: "41 mm, 45 mm", displayType: "OLED, LTPO", alwaysOn: true, chip: "S8", cellular: "LTE", intelligence: false, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: false, battery: 18, waterRating: "50 m", material: "Aluminium oder Edelstahl", year: 2022, price: 499 },
  }),
  watch({
    id: "apple-watch-ultra", name: "Apple Watch Ultra", year: 2022, points: 82, price: 999,
    frame: { device: "apple-watch-ultra", color: "black-milanese" }, wall: ["#2b1a3d", "#7b5ea7", "#e4d9f5"],
    tagline: "Die erste Ultra für Abenteuer.",
    specs: { sizes: "49 mm", displayType: "OLED, LTPO", alwaysOn: true, chip: "S8", cellular: "LTE", intelligence: false, ecg: true, bloodOxygen: true, tempSensor: true, hypertension: false, battery: 36, waterRating: "100 m, EN13319", material: "Titan", year: 2022, price: 999 },
  }),
  watch({
    id: "apple-watch-series-7", name: "Apple Watch Series 7", year: 2021, points: 62, price: 429,
    frame: { device: "apple-watch-series-11", color: "titanium-natural-sport-band-stone-gray" }, wall: ["#3d2a0b", "#f2b233", "#fff0c9"],
    tagline: "Größeres Display und schnelleres Laden.",
    specs: { sizes: "41 mm, 45 mm", displayType: "OLED, LTPO", alwaysOn: true, chip: "S7", cellular: "LTE", intelligence: false, ecg: true, bloodOxygen: true, tempSensor: false, hypertension: false, battery: 18, waterRating: "50 m", material: "Aluminium oder Edelstahl", year: 2021, price: 429 },
  }),
];

// Reihenfolge der Kategorien in der Navigation
const ORDER = ["iphone", "ipad", "mac", "watch", "airpods", "homepod", "appletv"];
const ALL_CATEGORIES = [...CORE_CATEGORIES, ...MORE_CATEGORIES];
export const CATEGORIES = ORDER.map((id) => ALL_CATEGORIES.find((c) => c.id === id));
export const SPEC_GROUPS = { ...CORE_SPEC_GROUPS, ...MORE_SPEC_GROUPS };

// Bildpfad und Maße: Fotorahmen liegen als WebP, gezeichnete Geräte als SVG in public/devices.
function withImage(d) {
  const meta = imageMeta[d.id] || { w: 1000, h: 1000, type: "svg" };
  return { ...d, image: `/devices/${d.id}.${meta.type}`, imageW: meta.w, imageH: meta.h };
}
export const DEVICES = [...CORE_DEVICES, ...MORE_DEVICES].map(withImage);

export function devicesFor(category) {
  return DEVICES.filter((d) => d.category === category);
}

export function deviceById(id) {
  return DEVICES.find((d) => d.id === id) || null;
}

// Standard-Vergleich pro Kategorie: ein verbreitetes älteres Gerät gegen das aktuelle Topmodell.
const CORE_DEFAULT_PAIR = {
  iphone: ["iphone-13", "iphone-17-pro"],
  ipad: ["ipad-10", "ipad-pro-11-m5"],
  watch: ["apple-watch-series-8", "apple-watch-series-11"],
};

export const DEFAULT_PAIR = { ...CORE_DEFAULT_PAIR, ...MORE_DEFAULT_PAIR };
