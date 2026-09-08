// Erzeugt pro Gerät ein abstraktes Wallpaper (ImageMagick), das anschließend in den Geräterahmen gelegt wird.
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { DEVICES } from "../lib/devices.js";

const out = process.argv[2];
mkdirSync(out, { recursive: true });

const SIZE = {
  "iphone-17-pro": [1206, 2622], "iphone-17": [1206, 2622], "iphone-air": [1260, 2736],
  "iphone-16-pro": [1206, 2622], "iphone-16": [1179, 2556],
  "ipad-pro-11": [1668, 2420], "ipad-pro-13": [2064, 2752],
  "apple-watch-series-11": [416, 496], "apple-watch-ultra": [410, 502],
};

DEVICES.forEach((d, i) => {
  const [W, H] = SIZE[d.frame.device];
  const w = Math.round(W / 4), h = Math.round(H / 4);
  const [c1, c2, c3] = d.wall;
  const r = Math.round(Math.min(w, h) * 0.55);
  const blur = Math.round(Math.min(w, h) * 0.16);
  const ax = Math.round(w * (0.2 + (i % 3) * 0.25)), ay = Math.round(h * 0.72);
  const bx = Math.round(w * (0.8 - (i % 2) * 0.35)), by = Math.round(h * 0.22);
  execFileSync("magick", [
    "-size", `${w}x${h}`, `gradient:${c1}-${c2}`, "-rotate", i % 2 ? "180" : "0",
    "(", "-size", `${w}x${h}`, "xc:none", "-fill", c3, "-draw", `circle ${ax},${ay} ${ax + r},${ay}`, "-blur", `0x${blur}`, ")", "-compose", "over", "-composite",
    "(", "-size", `${w}x${h}`, "xc:none", "-fill", c2, "-draw", `circle ${bx},${by} ${bx + Math.round(r * 0.7)},${by}`, "-blur", `0x${blur}`, ")", "-compose", "over", "-composite",
    "-resize", `${W}x${H}!`, "-depth", "8", `${out}/${d.id}.png`,
  ]);
  console.log(d.id, d.frame.device, d.frame.color);
});
