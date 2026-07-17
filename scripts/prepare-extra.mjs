import sharp from "sharp";
import { stat } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("..");
const OUT = path.resolve("public/images");
const src = (n) => path.join(SRC, n);

const report = [];
async function logFile(file) {
  const s = await stat(file);
  report.push(`${path.basename(file).padEnd(28)} ${(s.size / 1024).toFixed(0)} KB`);
}

// --- Transparent logo variants (dark for light bg, light for dark bg) ---
const trimmed = await sharp(src("logo.png")).trim({ threshold: 25 }).toBuffer();
const { data, info } = await sharp(trimmed)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const px = info.width * info.height;
const dark = Buffer.alloc(px * 4);
const light = Buffer.alloc(px * 4);

for (let i = 0; i < px; i++) {
  const o = i * 4;
  const r = data[o];
  const g = data[o + 1];
  const b = data[o + 2];

  let a = 255 - Math.min(r, g, b);
  if (a < 16) a = 0;
  if (a > 242) a = 255;

  let ar = 0;
  let ag = 0;
  let ab = 0;
  if (a > 0) {
    const af = a / 255;
    ar = Math.min(255, Math.max(0, Math.round((r - 255 * (1 - af)) / af)));
    ag = Math.min(255, Math.max(0, Math.round((g - 255 * (1 - af)) / af)));
    ab = Math.min(255, Math.max(0, Math.round((b - 255 * (1 - af)) / af)));
  }

  dark[o] = ar;
  dark[o + 1] = ag;
  dark[o + 2] = ab;
  dark[o + 3] = a;

  const isRed = ar > 90 && ar - Math.max(ag, ab) > 50;
  light[o] = isRed ? 209 : 255;
  light[o + 1] = isRed ? 29 : 255;
  light[o + 2] = isRed ? 37 : 255;
  light[o + 3] = a;
}

const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
const darkFile = path.join(OUT, "logo-dark.png");
const lightFile = path.join(OUT, "logo-light.png");
await sharp(dark, raw).resize({ width: 600 }).png({ compressionLevel: 9 }).toFile(darkFile);
await sharp(light, raw).resize({ width: 600 }).png({ compressionLevel: 9 }).toFile(lightFile);
await logFile(darkFile);
await logFile(lightFile);

const outMeta = await sharp(darkFile).metadata();
report.push(`logo intrinsic: ${outMeta.width}x${outMeta.height} (trimmed from ${info.width}x${info.height})`);

// --- Soft-focus workshop backdrop for the services section ---
{
  const blurWorkshop = path.join(OUT, "workshop-blur.jpg");
  await sharp(src("serwis.png"))
    .blur(12)
    .modulate({ saturation: 0.94 })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(blurWorkshop);
  await logFile(blurWorkshop);
}

// --- Soft-focus showroom heroes (stylised backdrop, not a literal photo) ---
const blurHero = path.join(OUT, "showroom-blur.jpg");
await sharp(src("hero.png"))
  .resize({ width: 2400 })
  .blur(12)
  .modulate({ saturation: 0.94 })
  .jpeg({ quality: 72, mozjpeg: true })
  .toFile(blurHero);
await logFile(blurHero);

{
  const m = await sharp(src("hero.png")).metadata();
  const left = Math.round(m.width * 0.372);
  const top = Math.round(m.height * 0.19);
  const region = { left, top, width: m.width - left, height: m.height - top };
  const blurRight = path.join(OUT, "showroom-right-blur.jpg");
  await sharp(src("hero.png"))
    .extract(region)
    .resize({ width: 2200 })
    .blur(12)
    .modulate({ saturation: 0.94 })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(blurRight);
  await logFile(blurRight);
}

console.log(report.join("\n"));
