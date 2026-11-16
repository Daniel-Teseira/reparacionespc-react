import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sources = JSON.parse(await readFile('scripts/image-sources.json', 'utf8'));
const manifest = {};
const countedSources = new Set();
let originalBytes = 0;
let optimizedBytes = 0;
let avifBytes = 0;
await mkdir('public/images/optimized', { recursive: true });

for (const [key, source] of Object.entries(sources)) {
  const sourcePath = path.resolve(root, source);
  if (!sourcePath.startsWith(`${root}${path.sep}`)) throw new Error('Imagen fuera del proyecto');
  if (!countedSources.has(sourcePath)) {
    originalBytes += (await stat(sourcePath)).size;
    countedSources.add(sourcePath);
  }
  const widths = key.endsWith('-card') ? [480, 800] : [640, 1280];
  const card = key.endsWith('-card');
  const variants = [];
  const avifVariants = [];
  for (const width of widths) {
    const resized = sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true });
    const filename = `${key}-${width}.webp`;
    const info = await resized.clone().webp({ quality: card ? 76 : 80, effort: 5 })
      .toFile(path.join('public/images/optimized', filename));
    // AVIF pesa ~30-40 % menos con calidad visual equivalente; WebP queda como alternativa.
    const avifName = `${key}-${width}.avif`;
    const avif = await resized.clone().avif({ quality: card ? 52 : 55, effort: 5 })
      .toFile(path.join('public/images/optimized', avifName));
    optimizedBytes += info.size;
    avifBytes += avif.size;
    variants.push({ src: `/images/optimized/${filename}`, width: info.width, height: info.height });
    avifVariants.push({ src: `/images/optimized/${avifName}`, width: avif.width });
  }
  const largest = variants.at(-1);
  manifest[key] = {
    ...largest,
    srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(', '),
    avifSrcSet: avifVariants.map((v) => `${v.src} ${v.width}w`).join(', '),
  };
}
await writeFile('src/data/images.json', `${JSON.stringify(manifest, null, 2)}\n`);
await sharp(sources['hero-pc2']).rotate().resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 80, mozjpeg: true }).toFile('public/images/social-preview.jpg');
const mb = (bytes) => (bytes / 1048576).toFixed(2);
console.log(`Imágenes: ${mb(originalBytes)} MB originales → ${mb(optimizedBytes)} MB en WebP y ${mb(avifBytes)} MB en AVIF (incluye ambos tamaños).`);
