// Zeichnet Geräte ohne Fotorahmen als SVG (MacBook, Mac mini, Mac Studio, AirPods, HomePod, Apple TV)
// und trägt die Maße in lib/imageMeta.json ein.
import { writeFileSync, readFileSync } from "node:fs";
import { MORE_DEVICES } from "../lib/devices-more.js";

const metaPath = "lib/imageMeta.json";
const meta = JSON.parse(readFileSync(metaPath, "utf8"));

const FINISH = {
  silver: ["#e6e7e9", "#c3c5c9", "#9c9ea3"],
  "space-gray": ["#9a9b9f", "#77787c", "#55565a"],
  "space-black": ["#4a4a4d", "#2b2b2e", "#151517"],
  midnight: ["#3a4150", "#232834", "#141821"],
  starlight: ["#efe9de", "#d9d0c0", "#b9ae9a"],
  "sky-blue": ["#dbe6f1", "#b7c9db", "#8ea6bd"],
  white: ["#f4f4f2", "#e0e0dd", "#c4c4c0"],
};

const defs = (id, wall, extra = "") => `
  <defs>
    <linearGradient id="${id}-screen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${wall[0]}"/><stop offset="0.55" stop-color="${wall[1]}"/><stop offset="1" stop-color="${wall[2]}"/>
    </linearGradient>
    <radialGradient id="${id}-glow" cx="0.3" cy="0.75" r="0.6">
      <stop offset="0" stop-color="${wall[2]}" stop-opacity="0.9"/><stop offset="1" stop-color="${wall[2]}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-shine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity="0.55"/><stop offset="0.5" stop-color="#fff" stop-opacity="0.05"/><stop offset="1" stop-color="#000" stop-opacity="0.12"/>
    </linearGradient>
    <filter id="${id}-shadow" x="-20%" y="-20%" width="140%" height="160%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
    ${extra}
  </defs>`;

const metal = (id, [a, b, c], dir = "v") => `
    <linearGradient id="${id}-metal" x1="0" y1="0" x2="${dir === "v" ? 0 : 1}" y2="${dir === "v" ? 1 : 0}">
      <stop offset="0" stop-color="${a}"/><stop offset="0.5" stop-color="${b}"/><stop offset="1" stop-color="${c}"/>
    </linearGradient>`;

const mesh = (id, color) => `
    <pattern id="${id}-mesh" width="12" height="12" patternUnits="userSpaceOnUse">
      <circle cx="6" cy="6" r="3.2" fill="${color}" fill-opacity="0.55"/>
    </pattern>`;

const svg = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" fill="none">${body}</svg>`;

function macbook(d) {
  const id = d.id;
  const f = FINISH[d.art.finish] || FINISH.silver;
  const scale = { 13: 0.9, 14: 0.94, 15: 1, 16: 1.04 }[d.art.size] || 1;
  const wedge = d.art.wedge;
  const W = 1200, H = 780;
  const lidW = 1000 * scale, lidH = 630 * scale, lidX = (W - lidW) / 2, lidY = 40 + (630 - lidH);
  const bez = wedge ? 30 : 14;
  const baseW = lidW + 90, baseX = (W - baseW) / 2, baseY = lidY + lidH - 2;
  return svg(W, H, `${defs(id, d.wall, metal(id, f))}
    <ellipse cx="${W / 2}" cy="${baseY + 60}" rx="${baseW / 2 - 40}" ry="22" fill="#000" fill-opacity="0.28" filter="url(#${id}-shadow)"/>
    <rect x="${lidX}" y="${lidY}" width="${lidW}" height="${lidH}" rx="${34 * scale}" fill="url(#${id}-metal)"/>
    <rect x="${lidX + 10}" y="${lidY + 10}" width="${lidW - 20}" height="${lidH - 20}" rx="${26 * scale}" fill="#050506"/>
    <rect x="${lidX + 10 + bez}" y="${lidY + 10 + bez}" width="${lidW - 20 - bez * 2}" height="${lidH - 20 - bez * 2 - (wedge ? 22 : 0)}" rx="${wedge ? 4 : 14}" fill="url(#${id}-screen)"/>
    <rect x="${lidX + 10 + bez}" y="${lidY + 10 + bez}" width="${lidW - 20 - bez * 2}" height="${lidH - 20 - bez * 2 - (wedge ? 22 : 0)}" rx="${wedge ? 4 : 14}" fill="url(#${id}-glow)"/>
    ${wedge ? "" : `<path d="M${W / 2 - 46} ${lidY + 10} h92 v20 a10 10 0 0 1 -10 10 h-72 a10 10 0 0 1 -10 -10 z" fill="#050506"/>`}
    <rect x="${baseX}" y="${baseY}" width="${baseW}" height="${wedge ? 22 : 30}" rx="${wedge ? 8 : 12}" fill="url(#${id}-metal)"/>
    <rect x="${baseX}" y="${baseY}" width="${baseW}" height="${wedge ? 22 : 30}" rx="${wedge ? 8 : 12}" fill="url(#${id}-shine)"/>
    <rect x="${W / 2 - 70}" y="${baseY}" width="140" height="7" rx="3.5" fill="#000" fill-opacity="0.35"/>`);
}

function macmini(d) {
  const id = d.id;
  const W = 1200, H = 760;
  const legacy = d.art.legacy;
  const bw = legacy ? 760 : 680, bh = legacy ? 300 : 380, bx = (W - bw) / 2, by = legacy ? 240 : 200;
  const front = legacy ? 44 : 64;
  return svg(W, H, `${defs(id, d.wall, metal(id, FINISH.silver))}
    <ellipse cx="${W / 2}" cy="${by + bh + 30}" rx="${bw / 2 - 30}" ry="30" fill="#000" fill-opacity="0.3" filter="url(#${id}-shadow)"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="${legacy ? 54 : 74}" fill="url(#${id}-metal)"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh - front}" rx="${legacy ? 54 : 74}" fill="url(#${id}-shine)"/>
    <rect x="${bx}" y="${by + bh - front}" width="${bw}" height="${front}" fill="#000" fill-opacity="0.16"/>
    <rect x="${bx}" y="${by + bh - front}" width="${bw}" height="${front}" rx="${legacy ? 20 : 24}" fill="#000" fill-opacity="0.1"/>
    ${legacy
      ? `<circle cx="${bx + 40}" cy="${by + bh - front / 2}" r="3.5" fill="#fff" fill-opacity="0.9"/>`
      : `<rect x="${W / 2 - 60}" y="${by + bh - front / 2 - 6}" width="30" height="12" rx="6" fill="#1a1a1c"/>
         <rect x="${W / 2 - 15}" y="${by + bh - front / 2 - 6}" width="30" height="12" rx="6" fill="#1a1a1c"/>
         <circle cx="${W / 2 + 50}" cy="${by + bh - front / 2}" r="7" fill="#1a1a1c"/>
         <circle cx="${bx + 46}" cy="${by + bh - front / 2}" r="3.5" fill="#fff" fill-opacity="0.9"/>`}`);
}

function macstudio(d) {
  const id = d.id;
  const W = 1200, H = 760;
  const bw = 620, bh = 540, bx = (W - bw) / 2, by = 110, front = 150;
  return svg(W, H, `${defs(id, d.wall, metal(id, FINISH.silver))}
    <ellipse cx="${W / 2}" cy="${by + bh + 30}" rx="${bw / 2 - 30}" ry="32" fill="#000" fill-opacity="0.32" filter="url(#${id}-shadow)"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="86" fill="url(#${id}-metal)"/>
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh - front}" rx="86" fill="url(#${id}-shine)"/>
    <rect x="${bx}" y="${by + bh - front}" width="${bw}" height="${front}" fill="#000" fill-opacity="0.16"/>
    <rect x="${bx}" y="${by + bh - front}" width="${bw}" height="${front}" rx="40" fill="#000" fill-opacity="0.1"/>
    <rect x="${W / 2 - 110}" y="${by + bh - front / 2 - 7}" width="34" height="14" rx="7" fill="#1a1a1c"/>
    <rect x="${W / 2 - 60}" y="${by + bh - front / 2 - 7}" width="34" height="14" rx="7" fill="#1a1a1c"/>
    <rect x="${W / 2 + 20}" y="${by + bh - front / 2 - 5}" width="70" height="10" rx="3" fill="#1a1a1c"/>
    <circle cx="${bx + 50}" cy="${by + bh - front / 2}" r="4" fill="#fff" fill-opacity="0.9"/>`);
}

function airpods(d) {
  const id = d.id;
  const W = 1000, H = 800;
  const v = d.art.variant;
  const stem = v === "pro" ? 110 : v === "open" ? 150 : 190;
  const headR = v === "pro" ? 52 : 46;
  const bud = (x, y, flip) => `
    <g transform="translate(${x} ${y}) scale(${flip ? -1 : 1} 1)">
      <rect x="-16" y="${headR - 20}" width="32" height="${stem}" rx="16" fill="url(#${id}-white)"/>
      <ellipse cx="0" cy="0" rx="${headR}" ry="${headR + 8}" fill="url(#${id}-white)"/>
      ${v === "pro" ? `<ellipse cx="-22" cy="6" rx="26" ry="30" fill="#2e2e33" fill-opacity="0.85"/>` : `<ellipse cx="-24" cy="4" rx="16" ry="20" fill="#0d0d0f" fill-opacity="0.55"/>`}
      <rect x="-16" y="${headR - 20}" width="32" height="${stem}" rx="16" fill="url(#${id}-shine)"/>
    </g>`;
  return svg(W, H, `${defs(id, d.wall, `
    <linearGradient id="${id}-white" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/><stop offset="0.6" stop-color="#ececec"/><stop offset="1" stop-color="#cfcfd2"/>
    </linearGradient>`)}
    <ellipse cx="500" cy="700" rx="300" ry="26" fill="#000" fill-opacity="0.26" filter="url(#${id}-shadow)"/>
    <rect x="300" y="240" width="400" height="440" rx="110" fill="url(#${id}-white)"/>
    <rect x="300" y="240" width="400" height="440" rx="110" fill="url(#${id}-shine)"/>
    <path d="M300 430 Q500 448 700 430" stroke="#000" stroke-opacity="0.16" stroke-width="3"/>
    <circle cx="500" cy="500" r="7" fill="${d.wall[1]}" fill-opacity="0.9"/>
    <circle cx="500" cy="500" r="14" fill="${d.wall[1]}" fill-opacity="0.25"/>
    ${bud(255, 330, false)}
    ${bud(745, 330, true)}`);
}

function airpodsmax(d) {
  const id = d.id;
  const W = 1000, H = 900;
  return svg(W, H, `${defs(id, d.wall, metal(id, FINISH.midnight, "h") + mesh(id, "#0b0d12"))}
    <ellipse cx="500" cy="800" rx="330" ry="26" fill="#000" fill-opacity="0.26" filter="url(#${id}-shadow)"/>
    <path d="M230 470 C 230 200, 770 200, 770 470" stroke="url(#${id}-metal)" stroke-width="42" stroke-linecap="round"/>
    <path d="M250 470 C 250 230, 750 230, 750 470" stroke="#3a3f4a" stroke-width="24" stroke-linecap="round"/>
    <path d="M250 470 C 250 230, 750 230, 750 470" stroke="url(#${id}-mesh)" stroke-width="24" stroke-linecap="round"/>
    <rect x="216" y="430" width="28" height="140" rx="14" fill="url(#${id}-metal)"/>
    <rect x="756" y="430" width="28" height="140" rx="14" fill="url(#${id}-metal)"/>
    <rect x="130" y="470" width="220" height="300" rx="100" fill="url(#${id}-metal)"/>
    <rect x="650" y="470" width="220" height="300" rx="100" fill="url(#${id}-metal)"/>
    <rect x="130" y="470" width="220" height="300" rx="100" fill="url(#${id}-shine)"/>
    <rect x="650" y="470" width="220" height="300" rx="100" fill="url(#${id}-shine)"/>
    <rect x="160" y="500" width="160" height="240" rx="80" fill="#1c1f27"/>
    <rect x="680" y="500" width="160" height="240" rx="80" fill="#1c1f27"/>
    <rect x="160" y="500" width="160" height="240" rx="80" fill="url(#${id}-mesh)"/>
    <rect x="680" y="500" width="160" height="240" rx="80" fill="url(#${id}-mesh)"/>`);
}

function homepod(d) {
  const id = d.id;
  const W = 800, H = 900;
  const f = FINISH[d.art.finish] || FINISH.midnight;
  const dark = d.art.finish === "midnight";
  return svg(W, H, `${defs(id, d.wall, metal(id, f, "h") + mesh(id, dark ? "#0a0b0e" : "#9a9a97"))}
    <ellipse cx="400" cy="820" rx="230" ry="26" fill="#000" fill-opacity="0.3" filter="url(#${id}-shadow)"/>
    <rect x="190" y="120" width="420" height="690" rx="200" fill="url(#${id}-metal)"/>
    <rect x="190" y="120" width="420" height="690" rx="200" fill="url(#${id}-mesh)"/>
    <ellipse cx="400" cy="150" rx="156" ry="50" fill="${dark ? "#0f1013" : "#2a2a2e"}"/>
    <ellipse cx="400" cy="150" rx="120" ry="36" fill="url(#${id}-screen)" opacity="0.95"/>
    <ellipse cx="400" cy="150" rx="120" ry="36" fill="url(#${id}-glow)"/>
    <ellipse cx="400" cy="150" rx="156" ry="50" fill="url(#${id}-shine)" opacity="0.5"/>`);
}

function homepodmini(d) {
  const id = d.id;
  const W = 800, H = 900;
  const f = FINISH[d.art.finish] || FINISH.white;
  return svg(W, H, `${defs(id, d.wall, metal(id, f, "h") + mesh(id, "#9a9a97"))}
    <ellipse cx="400" cy="790" rx="220" ry="26" fill="#000" fill-opacity="0.3" filter="url(#${id}-shadow)"/>
    <path d="M160 470 A240 240 0 1 0 640 470 A240 240 0 0 0 160 470 Z" fill="url(#${id}-metal)"/>
    <path d="M160 470 A240 240 0 1 0 640 470 A240 240 0 0 0 160 470 Z" fill="url(#${id}-mesh)"/>
    <ellipse cx="400" cy="270" rx="150" ry="48" fill="#1f2024"/>
    <ellipse cx="400" cy="270" rx="118" ry="36" fill="url(#${id}-screen)"/>
    <ellipse cx="400" cy="270" rx="118" ry="36" fill="url(#${id}-glow)"/>
    <ellipse cx="400" cy="270" rx="150" ry="48" fill="url(#${id}-shine)" opacity="0.45"/>`);
}

function appletv(d) {
  const id = d.id;
  const W = 1000, H = 700;
  return svg(W, H, `${defs(id, d.wall, metal(`${id}-r`, FINISH.silver))}
    <ellipse cx="480" cy="560" rx="300" ry="26" fill="#000" fill-opacity="0.3" filter="url(#${id}-shadow)"/>
    <rect x="200" y="230" width="560" height="300" rx="46" fill="#111113"/>
    <rect x="200" y="230" width="560" height="240" rx="46" fill="#1d1d20"/>
    <rect x="200" y="230" width="560" height="240" rx="46" fill="url(#${id}-shine)" opacity="0.7"/>
    <ellipse cx="480" cy="350" rx="150" ry="70" fill="url(#${id}-glow)" opacity="0.5"/>
    <circle cx="480" cy="500" r="4" fill="${d.wall[2]}"/>
    <rect x="805" y="150" width="76" height="420" rx="38" fill="url(#${id}-r-metal)"/>
    <rect x="805" y="150" width="76" height="420" rx="38" fill="url(#${id}-shine)" opacity="0.7"/>
    <circle cx="843" cy="215" r="30" fill="#0a0a0b" fill-opacity="0.9"/>
    <circle cx="843" cy="215" r="12" fill="#2b2b2e"/>
    <circle cx="843" cy="290" r="9" fill="#0a0a0b" fill-opacity="0.35"/>
    <circle cx="843" cy="330" r="9" fill="#0a0a0b" fill-opacity="0.35"/>
    <circle cx="843" cy="370" r="9" fill="#0a0a0b" fill-opacity="0.35"/>
    <circle cx="843" cy="410" r="9" fill="#0a0a0b" fill-opacity="0.35"/>`);
}

const DRAW = { macbook, macmini, macstudio, airpods, airpodsmax, homepod, homepodmini, appletv };

for (const d of MORE_DEVICES) {
  if (!d.art) continue;
  const out = DRAW[d.art.kind](d);
  const [, w, h] = out.match(/viewBox="0 0 (\d+) (\d+)"/);
  writeFileSync(`public/devices/${d.id}.svg`, out);
  meta[d.id] = { w: Number(w), h: Number(h), type: "svg" };
  console.log(d.id, d.art.kind);
}
writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");
