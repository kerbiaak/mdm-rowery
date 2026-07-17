import sharp from "sharp";
import path from "node:path";

const IN = path.resolve("..", "right.png");
const OUT = path.resolve("public/images/hero-bike.png");

const { data, info } = await sharp(IN).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const N = W * H;

const bright = new Uint8Array(N);
for (let i = 0; i < N; i++) {
  const o = i * C;
  const m = Math.min(data[o], data[o + 1], data[o + 2]);
  bright[i] = m >= 215 ? 1 : 0;
}

const label = new Int32Array(N);
const clearMask = new Uint8Array(N);
const stack = new Int32Array(N);
let comp = 0;

for (let s = 0; s < N; s++) {
  if (!bright[s] || label[s]) continue;
  comp++;
  let top = 0;
  stack[top++] = s;
  label[s] = comp;
  const members = [];
  let touchesBorder = false;
  while (top > 0) {
    const p = stack[--top];
    members.push(p);
    const x = p % W;
    const y = (p / W) | 0;
    if (x === 0 || y === 0 || x === W - 1 || y === H - 1) touchesBorder = true;
    if (x > 0) {
      const q = p - 1;
      if (bright[q] && !label[q]) { label[q] = comp; stack[top++] = q; }
    }
    if (x < W - 1) {
      const q = p + 1;
      if (bright[q] && !label[q]) { label[q] = comp; stack[top++] = q; }
    }
    if (y > 0) {
      const q = p - W;
      if (bright[q] && !label[q]) { label[q] = comp; stack[top++] = q; }
    }
    if (y < H - 1) {
      const q = p + W;
      if (bright[q] && !label[q]) { label[q] = comp; stack[top++] = q; }
    }
  }
  if (touchesBorder || members.length >= 120) {
    for (const p of members) clearMask[p] = 1;
  }
}

const out = Buffer.alloc(N * 4);
for (let i = 0; i < N; i++) {
  const o = i * C;
  const q = i * 4;
  out[q] = data[o];
  out[q + 1] = data[o + 1];
  out[q + 2] = data[o + 2];
  out[q + 3] = clearMask[i] ? 0 : 255;
}

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = y * W + x;
    if (clearMask[i]) continue;
    const o = i * C;
    const m = Math.min(data[o], data[o + 1], data[o + 2]);
    if (m < 185) continue;
    const adjClear =
      (x > 0 && clearMask[i - 1]) ||
      (x < W - 1 && clearMask[i + 1]) ||
      (y > 0 && clearMask[i - W]) ||
      (y < H - 1 && clearMask[i + W]);
    if (adjClear) out[i * 4 + 3] = 110;
  }
}

await sharp(out, { raw: { width: W, height: H, channels: 4 } })
  .trim({ threshold: 10 })
  .flop()
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const m = await sharp(OUT).metadata();
console.log("hero-bike.png", m.width, "x", m.height);
