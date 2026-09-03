import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = "C:/Users/Monzurul/Downloads/global tech images";
const PREFIX = "\\\\?\\";
const OUT_ROOT = path.resolve("public/images");
const toAbs = (p) => PREFIX + p.replaceAll("/", "\\");

const FOLDERS = {
  dt: "Deep Tubewell",
  eq: "Equipment Pictures/general equipment",
  req: "Equipment Pictures/RO Equipment",
  iw: "Integrated WASH Projetc",
  ro: "Reverse Osmosis Plant (RO)",
  sol: "Solar Powerd Water Supply System",
  sro: "Solar Powered RO Plant",
};

const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".jfif", ".gif", ".avif"]);

// id -> original file, ordered by file size (largest first) — same order used during visual review
const fileIndex = {};
for (const [prefix, folder] of Object.entries(FOLDERS)) {
  const dir = path.join(ROOT, folder);
  const files = fs.readdirSync(dir)
    .filter((f) => EXTS.has(path.extname(f).toLowerCase()))
    .sort((a, b) => fs.statSync(toAbs(path.join(dir, b))).size - fs.statSync(toAbs(path.join(dir, a))).size);
  fileIndex[prefix] = files;
}
const resolveSrc = (id) => {
  const m = /^([a-z]+)-(\d+)$/.exec(id);
  if (!m) throw new Error(`bad id ${id}`);
  const [, prefix, num] = m;
  const file = fileIndex[prefix][Number(num) - 1];
  if (!file) throw new Error(`missing file for ${id}`);
  return toAbs(path.join(ROOT, FOLDERS[prefix], file));
};

// destination -> { id, width } (width = max long edge in px)
const ASSETS = {
  // full-width page heroes (also reused for project detail heroes via /images/projects)
  "hero-home.jpg": { id: "dt-01", width: 1920 },
  "hero-about.jpg": { id: "dt-02", width: 1920 },
  "hero-services.jpg": { id: "eq-31", width: 1920 },
  "hero-wash.jpg": { id: "dt-23", width: 1920 },
  "hero-projects.jpg": { id: "dt-15", width: 1920 },
  "hero-capacity.jpg": { id: "eq-27", width: 1920 },
  "hero-contact.jpg": { id: "dt-03", width: 1920 },
  "about-preview.jpg": { id: "eq-18", width: 1200 },
  "og-default.jpg": { id: "dt-01", width: 1200, cover: { w: 1200, h: 630 } },

  // project cards + detail heroes
  "projects/p1.jpg": { id: "dt-26", width: 1600 },
  "projects/p2.jpg": { id: "dt-06", width: 1600 },
  "projects/p3.jpg": { id: "eq-03", width: 1600 },
  "projects/p4.jpg": { id: "iw-01", width: 1600 },
  "projects/p5.jpg": { id: "sol-04", width: 1600 },
  "projects/p6.jpg": { id: "dt-09", width: 1600 },
  "projects/p7.jpg": { id: "sol-05", width: 1600 },
  "projects/p8.jpg": { id: "ro-13", width: 1600 },

  // gallery
  "gallery/g01.jpg": { id: "dt-23", width: 1400 },
  "gallery/g02.jpg": { id: "dt-22", width: 1400 },
  "gallery/g03.jpg": { id: "dt-08", width: 1400 },
  "gallery/g04.jpg": { id: "iw-04", width: 1400 },
  "gallery/g05.jpg": { id: "ro-12", width: 1400 },
  "gallery/g06.jpg": { id: "sol-04", width: 1400 },
  "gallery/g07.jpg": { id: "sro-01", width: 1400 },
  "gallery/g08.jpg": { id: "sol-03", width: 1400 },
  "gallery/g09.jpg": { id: "eq-31", width: 1400 },
  "gallery/g10.jpg": { id: "eq-10", width: 1400 },
  "gallery/g11.jpg": { id: "eq-42", width: 1400 },
  "gallery/g12.jpg": { id: "eq-24", width: 1400 },
  "gallery/g13.jpg": { id: "eq-21", width: 1400 },
  "gallery/g14.jpg": { id: "eq-27", width: 1400 },
  "gallery/g15.jpg": { id: "eq-28", width: 1400 },
  "gallery/g16.jpg": { id: "dt-26", width: 1400 },
  "gallery/g17.jpg": { id: "dt-16", width: 1400 },
  "gallery/g18.jpg": { id: "dt-27", width: 1400 },
  "gallery/g19.jpg": { id: "req-20", width: 1400 },
  "gallery/g20.jpg": { id: "req-36", width: 1400 },
  "gallery/g21.jpg": { id: "req-45", width: 1400 },
  "gallery/g22.jpg": { id: "eq-05", width: 1400 },
  "gallery/g23.jpg": { id: "eq-02", width: 1400 },
  "gallery/g24.jpg": { id: "eq-33", width: 1400 },

  // home field-evidence strip
  "field/f01.jpg": { id: "dt-02", width: 900 },
  "field/f02.jpg": { id: "dt-05", width: 900 },
  "field/f03.jpg": { id: "dt-07", width: 900 },
  "field/f04.jpg": { id: "eq-26", width: 900 },
  "field/f05.jpg": { id: "eq-21", width: 900 },
  "field/f06.jpg": { id: "dt-14", width: 900 },
  "field/f07.jpg": { id: "sol-01", width: 900 },
  "field/f08.jpg": { id: "ro-13", width: 900 },
  "field/f09.jpg": { id: "eq-31", width: 900 },
  "field/f10.jpg": { id: "dt-04", width: 900 },
  "field/f11.jpg": { id: "sol-03", width: 900 },
  "field/f12.jpg": { id: "ro-16", width: 900 },
  "field/f13.jpg": { id: "dt-16", width: 900 },
};

// Only remove outputs this script owns — never touch other folders (e.g. public/images/testimonials)
for (const dest of Object.keys(ASSETS)) {
  fs.rmSync(path.join(OUT_ROOT, dest), { force: true });
}

let done = 0;
for (const [dest, cfg] of Object.entries(ASSETS)) {
  const outPath = path.join(OUT_ROOT, dest);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  let pipeline = sharp(resolveSrc(cfg.id)).rotate();
  if (cfg.cover) {
    pipeline = pipeline.resize({ width: cfg.cover.w, height: cfg.cover.h, fit: "cover", position: "centre" });
  } else {
    pipeline = pipeline.resize({ width: cfg.width, height: cfg.width, fit: "inside", withoutEnlargement: false });
  }
  const meta = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(outPath);
  done += 1;
  console.log(`${dest}  <-  ${cfg.id}  ${meta.width}x${meta.height} ${Math.round(meta.size / 1024)}KB`);
}
console.log(`\n${done} assets written to ${OUT_ROOT}`);
