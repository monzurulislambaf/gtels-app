/**
 * GTELS logo asset pipeline.
 *
 * Source (edit this if the folder moves):
 *   C:/Users/Monzurul/Downloads/gtels-logo
 *     favicon.png                 -> emblem tile (69x54)
 *     website-logo-dark.png       -> white-on-navy wordmark lockup
 *     website-logo-transparent.png-> navy-on-charcoal wordmark lockup
 *
 * Outputs (all generated, safe to re-run):
 *   public/images/logos/gtels-logo.png         512x512 square emblem tile (schema.org logo)
 *   public/images/logos/gtels-emblem.png       96x96  square emblem tile (header / footer icon)
 *   public/images/logos/gtels-logo-dark.png    wordmark lockup, resized to 400px wide
 *   public/images/logos/gtels-logo-transparent.png wordmark lockup, resized to 400px wide
 *   app/favicon.ico                            multi-size (16/32/48) PNG-in-ICO
 *   app/apple-icon.png                         180x180
 *
 * The emblem sources are opaque tiles with a baked #202020 background, so we
 * keep them as tiles and let CSS rounding frame them.
 */
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "C:/Users/Monzurul/Downloads/gtels-logo";
const LOGOS_DIR = join(root, "public", "images", "logos");
const APP_DIR = join(root, "app");

const faviconSrc = join(SRC, "favicon.png");
const darkSrc = join(SRC, "website-logo-dark.png");
const transparentSrc = join(SRC, "website-logo-transparent.png");

mkdirSync(LOGOS_DIR, { recursive: true });

/** Make a square tile from the source favicon: centre on a square canvas
 *  filled with the tile's edge colour, then resize. */
async function squareTile(size) {
  const meta = await sharp(faviconSrc).metadata();
  const w = meta.width, h = meta.height;
  const edge = 32; // baked tile background colour (sampled from corners)
  const side = Math.max(w, h);
  const top = Math.floor((side - h) / 2);
  const left = Math.floor((side - w) / 2);
  return sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: { r: edge, g: edge, b: edge, alpha: 255 },
    },
  })
    .composite([{ input: faviconSrc, left, top }])
    .resize(size, size)
    .png()
    .toBuffer();
}

/** Build a multi-size .ico by wrapping PNG payloads (supported by all modern
 *  browsers and Windows Vista+). */
function buildIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngBuffers.length, 4);
  const entries = Buffer.alloc(16 * pngBuffers.length);
  let offset = 6 + entries.length;
  pngBuffers.forEach((buf, i) => {
    const meta = requireImgSize(buf);
    const e = i * 16;
    entries[e] = meta.w >= 256 ? 0 : meta.w; // width byte (0 => 256)
    entries[e + 1] = meta.h >= 256 ? 0 : meta.h;
    entries[e + 2] = 0; // palette
    entries[e + 3] = 0; // reserved
    entries.writeUInt16LE(1, e + 4); // colour planes
    entries.writeUInt16LE(32, e + 6); // bits per pixel
    entries.writeUInt32LE(buf.length, e + 8); // size of PNG
    entries.writeUInt32LE(offset, e + 12); // offset
    offset += buf.length;
  });
  return Buffer.concat([header, entries, ...pngBuffers]);
}

/** Read PNG IHDR width/height (lightweight). */
function requireImgSize(png) {
  if (png.readUInt32BE(0) !== 0x89504e47) throw new Error("not a png");
  return { w: png.readUInt32BE(16), h: png.readUInt32BE(20) };
}

async function main() {
  // 1. Square emblem tiles
  const logo512 = await squareTile(512);
  const logo96 = await squareTile(96);
  writeFileSync(join(LOGOS_DIR, "gtels-logo.png"), logo512);
  writeFileSync(join(LOGOS_DIR, "gtels-emblem.png"), logo96);

  // 2. Favicon.ico (16 / 32 / 48) — regenerate from the square tile
  const icoSizes = [16, 32, 48];
  const icoPngs = [];
  for (const s of icoSizes) {
    const png = await sharp(logo512).resize(s, s).png().toBuffer();
    icoPngs.push(png);
  }
  writeFileSync(join(APP_DIR, "favicon.ico"), buildIco(icoPngs));

  // 3. Apple touch icon (180)
  const apple = await sharp(logo512).resize(180, 180).png().toBuffer();
  writeFileSync(join(APP_DIR, "apple-icon.png"), apple);

  // 4. Wordmark lockups -> 400px wide (retina-friendly for <=200px renders)
  for (const [src, name] of [
    [darkSrc, "gtels-logo-dark.png"],
    [transparentSrc, "gtels-logo-transparent.png"],
  ]) {
    const meta = await sharp(src).metadata();
    const resized = await sharp(src).resize(400, Math.round((400 * meta.height) / meta.width)).png().toBuffer();
    writeFileSync(join(LOGOS_DIR, name), resized);
  }

  console.log("✔ logos generated:");
  for (const f of ["gtels-logo.png", "gtels-emblem.png", "gtels-logo-dark.png", "gtels-logo-transparent.png"]) {
    const p = join(LOGOS_DIR, f);
    if (existsSync(p)) console.log("   public/images/logos/" + f, (readFileSync(p).length / 1024).toFixed(1) + " KB");
  }
  console.log("   app/favicon.ico", (readFileSync(join(APP_DIR, "favicon.ico")).length / 1024).toFixed(1) + " KB");
  console.log("   app/apple-icon.png", (readFileSync(join(APP_DIR, "apple-icon.png")).length / 1024).toFixed(1) + " KB");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
