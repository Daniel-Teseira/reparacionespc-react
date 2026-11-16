import { createHash } from 'node:crypto';
import { readFile, writeFile, mkdir, stat, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outputDir = 'public/images/optimized';
const sources = JSON.parse(await readFile('scripts/image-sources.json', 'utf8'));
const manifest = {};
const countedSources = new Set();
const written = new Set();
let originalBytes = 0;
let optimizedBytes = 0;
let avifBytes = 0;
await mkdir(outputDir, { recursive: true });

// El nombre lleva un hash del contenido (hero-pc1-1280.1a2b3c4d.avif): si la imagen cambia, cambia
// la dirección, así nginx puede guardarlas en caché un año sin que nadie vea una versión vieja.
async function save(buffer, key, width, extension) {
  const hash = createHash('sha256').update(buffer).digest('hex').slice(0, 8);
  const filename = `${key}-${width}.${hash}.${extension}`;
  await writeFile(path.join(outputDir, filename), buffer);
  written.add(filename);
  return `/images/optimized/${filename}`;
}

for (const [key, source] of Object.entries(sources)) {
  const sourcePath = path.resolve(root, source);
  if (!sourcePath.startsWith(`${root}${path.sep}`)) throw new Error('Imagen fuera del proyecto');
  if (!countedSources.has(sourcePath)) {
    originalBytes += (await stat(sourcePath)).size;
    countedSources.add(sourcePath);
  }
  const card = key.endsWith('-card');
  // 960 px cubre celulares con pantalla de densidad 2 sin bajar la versión de 1280.
  const widths = card ? [480, 800] : [640, 960, 1280];
  const variants = [];
  const avifVariants = [];
  for (const width of widths) {
    const resized = sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true });
    const webp = await resized.clone().webp({ quality: card ? 76 : 80, effort: 5 }).toBuffer({ resolveWithObject: true });
    // AVIF pesa ~30-40 % menos con calidad visual equivalente; WebP queda como alternativa.
    const avif = await resized.clone().avif({ quality: card ? 52 : 55, effort: 5 }).toBuffer({ resolveWithObject: true });
    optimizedBytes += webp.info.size;
    avifBytes += avif.info.size;
    variants.push({ src: await save(webp.data, key, width, 'webp'), width: webp.info.width, height: webp.info.height });
    avifVariants.push({ src: await save(avif.data, key, width, 'avif'), width: avif.info.width });
  }
  const largest = variants.at(-1);
  manifest[key] = {
    ...largest,
    srcSet: variants.map((v) => `${v.src} ${v.width}w`).join(', '),
    avifSrcSet: avifVariants.map((v) => `${v.src} ${v.width}w`).join(', '),
  };
}

// Borrar las versiones anteriores que ya no usa ninguna página.
let removed = 0;
for (const file of await readdir(outputDir)) {
  if (!written.has(file)) {
    await unlink(path.join(outputDir, file));
    removed += 1;
  }
}

await writeFile('src/data/images.json', `${JSON.stringify(manifest, null, 2)}\n`);
await sharp(sources['hero-pc2']).rotate().resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 80, mozjpeg: true }).toFile('public/images/social-preview.jpg');
const mb = (bytes) => (bytes / 1048576).toFixed(2);
console.log(`Imágenes: ${mb(originalBytes)} MB originales → ${mb(optimizedBytes)} MB en WebP y ${mb(avifBytes)} MB en AVIF (todos los tamaños). ${written.size} archivos; ${removed} anteriores borrados.`);
