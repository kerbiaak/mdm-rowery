import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("..");
const OUT = path.resolve("public/images");
await mkdir(OUT, { recursive: true });

const report = [];

async function save(pipeline, name) {
  const file = path.join(OUT, name);
  await pipeline.toFile(file);
  const s = await stat(file);
  report.push(`${name.padEnd(28)} ${(s.size / 1024).toFixed(0)} KB`);
}

const src = (n) => path.join(SRC, n);

{
  const m = await sharp(src("hero.png")).metadata();
  const left = Math.round(m.width * 0.372);
  const top = Math.round(m.height * 0.19);
  const region = { left, top, width: m.width - left, height: m.height - top };
  await save(
    sharp(src("hero.png")).extract(region).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 78, mozjpeg: true }),
    "og.jpg"
  );
}

await save(sharp(src("serwis.png")).jpeg({ quality: 82, mozjpeg: true }), "workshop.jpg");
await save(sharp(src("akcesoria.png")).jpeg({ quality: 82, mozjpeg: true }), "accessories.jpg");
await save(sharp(src("czesci.png")).jpeg({ quality: 82, mozjpeg: true }), "parts.jpg");
await save(sharp(src("opony.png")).jpeg({ quality: 82, mozjpeg: true }), "tyres.jpg");

{
  const patch = await sharp(src("mdm.png"))
    .extract({ left: 236, top: 50, width: 92, height: 84 })
    .blur(0.8)
    .toBuffer();
  await save(
    sharp(src("mdm.png"))
      .composite([{ input: patch, left: 146, top: 50 }])
      .jpeg({ quality: 86, mozjpeg: true }),
    "storefront.jpg"
  );
}

await save(sharp(src("logo.png")).resize({ width: 480 }).png({ compressionLevel: 9 }), "logo.png");

// Katalog rowerów – zdjęcia produktowe UNIBIKE (jednolite tło #f7f7f7 rozjaśnione do bieli).
const BIKES = [
  ["mtbsport.webp", "bike-gorskie.webp"],
  ["ebike.webp", "bike-elektryczne.webp"],
  ["tekking.webp", "bike-trekkingowe.webp"],
  ["cross.webp", "bike-miejskie.webp"],
  ["kid.webp", "bike-dzieciece.webp"],
];

for (const [from, to] of BIKES) {
  await save(
    sharp(src(from))
      .linear(255 / 247, 0)
      .trim({ threshold: 8 })
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 86 }),
    to
  );
}

console.log(report.join("\n"));
