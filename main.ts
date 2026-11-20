// news-image-20261120 — "THE WORLD" front page, Friday 20 November 2026.
// Copies the pre-built front-page image (entry.png) to the grader output dir.
// Deterministic: no network, no randomness, same bytes on every run.
// Output is exactly 1024x1024 PNG, under 1 MiB, as the bounty requires.
import * as fs from "node:fs";
import * as path from "node:path";

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || path.join(ROOT, "output");
const SRC = path.join(ROOT, "entry.png");
const DST = path.join(OUT_DIR, "entry.png");

if (!fs.existsSync(SRC)) {
  throw new Error(`missing source image: ${SRC}`);
}
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.copyFileSync(SRC, DST);
const size = fs.statSync(DST).size;
if (size > 1024 * 1024) {
  throw new Error(`entry.png too large: ${size} bytes (limit 1 MiB)`);
}
console.log(`wrote ${DST} (${size} bytes)`);
