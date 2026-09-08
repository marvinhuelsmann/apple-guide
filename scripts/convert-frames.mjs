// Wandelt die gerenderten Geräterahmen in WebP um und schreibt die Maße für next/image.
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";

const src = process.argv[2];
const out = "public/devices";
const metaPath = "lib/imageMeta.json";
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, "utf8")) : {};

for (const f of readdirSync(src).filter((f) => f.endsWith(".png"))) {
  const id = f.replace(/\.png$/, "");
  const target = `${out}/${id}.webp`;
  execFileSync("magick", [`${src}/${f}`, "-resize", "1600x1600>", "-quality", "86", "-define", "webp:alpha-quality=95", target]);
  const [w, h] = execFileSync("magick", ["identify", "-format", "%w %h", target]).toString().trim().split(" ").map(Number);
  meta[id] = { w, h, type: "webp" };
  console.log(id, w, h);
}
writeFileSync(metaPath, JSON.stringify(meta, null, 2) + "\n");
