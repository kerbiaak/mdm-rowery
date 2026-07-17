import sharp from "sharp";
import path from "node:path";

const IN = path.resolve("..", "right-nobg.png");
const OUT = path.resolve("public/images/hero-bike.png");

await sharp(IN)
  .trim({ threshold: 10 })
  .flop()
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const m = await sharp(OUT).metadata();
console.log("hero-bike.png", m.width, "x", m.height);
