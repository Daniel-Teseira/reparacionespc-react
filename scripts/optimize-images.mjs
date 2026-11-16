import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const sources = JSON.parse(await readFile('scripts/image-sources.json', 'utf8'));
const manifest = {};
const countedSources = new Set();
let originalBytes = 0;
let optimizedBytes = 0;
await mkdir('public/images/optimized', { recursive: true });

for (const [key, source] of Object.entries(sources)) {
  const sourcePath = path.resolve(root, source);
  if (!sourcePath.startsWith(`${root}${path.sep}`)) throw new Error('Imagen fuera del proyecto');
  if (!countedSources.has(sourcePath)) {
    originalBytes += (await stat(sourcePath)).size;
    countedSources.add(sourcePath);
  }
  const widths = key.endsWith('-card') ? [480, 800] : [640, 1280];
  const variants = [];
  for (const width of widths) {
    const filename = `${key}-${width}.webp`;
    const info = await sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true })
      .webp({ quality: key.endsWith('-card') ? 76 : 80, effort: 5 })
      .toFile(path.join('public/images/optimized', filename));
    optimizedBytes += info.size;
    variants.push({ src: `/images/optimized/${filename}`, width: info.width, height: info.height });
  }
  const largest = variants.at(-1);
  manifest[key] = { ...largest, srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(', ') };
}
await writeFile('src/data/images.json', `${JSON.stringify(manifest, null, 2)}\n`);
await sharp(sources['hero-pc2']).rotate().resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 80, mozjpeg: true }).toFile('public/images/social-preview.jpg');
console.log(`Imágenes: ${(originalBytes / 1048576).toFixed(2)} MB originales → ${(optimizedBytes / 1048576).toFixed(2)} MB optimizados (incluye ambos tamaños).`);
