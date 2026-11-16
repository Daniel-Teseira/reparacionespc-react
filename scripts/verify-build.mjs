import assert from 'node:assert/strict';
import { readFile, readdir, access, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const JS_BUDGET = 35_000; // bytes comprimidos con gzip
const catalog = JSON.parse(await readFile('src/data/services.json', 'utf8'));
const images = JSON.parse(await readFile('src/data/images.json', 'utf8'));
const routes = ['/', '/contact', ...catalog.map((service) => `/${service.slug}`)];
const titles = new Set();
for (const route of routes) {
  const html = await readFile(path.join('build', route, 'index.html'), 'utf8');
  assert.match(html, /<main\b/, `Falta contenido prerenderizado: ${route}`);
  assert.match(html, /<h1\b/, `Falta encabezado: ${route}`);
  assert.match(html, /<meta data-seo name="description" content="[^"]+"/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /cdn\.jsdelivr|unpkg\.com|%PUBLIC_URL%/);
  assert.doesNotMatch(html, /href="\/home"/, `Enlace a /home en lugar de /: ${route}`);
  if (catalog.some((service) => route === `/${service.slug}`)) {
    assert.match(html, /aria-label="Ruta de navegación"/, `Faltan las migas de pan: ${route}`);
    assert.match(html, /class="service-related-link"/, `Faltan los otros servicios: ${route}`);
    // Con dominio configurado (hay canonical) también va el BreadcrumbList para Google.
    if (/rel="canonical"/.test(html)) assert.match(html, /"@type":"BreadcrumbList"/, `Falta BreadcrumbList: ${route}`);
  }
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert(!titles.has(title), `Título duplicado: ${route}`);
  titles.add(title);
}
const home = await readFile('build/index.html', 'utf8');
assert.match(home, /"@type":"FAQPage"/, 'Falta FAQPage en el inicio');

const notFound = await readFile('build/404.html', 'utf8');
assert.match(notFound, /noindex, follow/);
assert.doesNotMatch(notFound, /rel="canonical"/);

// nginx guarda /images/optimized/ un año en caché: cada archivo debe llevar hash en el nombre
// y no debe quedar ninguno sin usar.
const referenced = new Set();
for (const image of Object.values(images)) {
  assert(image.width > 0 && image.height > 0);
  assert(image.avifSrcSet, `Falta la versión AVIF de ${image.src}`);
  for (const variant of [...image.srcSet.split(', '), ...image.avifSrcSet.split(', ')]) {
    const src = variant.split(' ')[0];
    await access(path.join('build', src));
    referenced.add(path.basename(src));
  }
}
for (const file of await readdir('build/images/optimized')) {
  assert.match(file, /\.[0-9a-f]{8}\.(avif|webp)$/, `Imagen sin hash en el nombre: ${file}`);
  assert(referenced.has(file), `Imagen sin usar (ejecutá npm run images:optimize): ${file}`);
}
for (const file of ['images/social-preview.jpg', 'favicon.ico', 'favicon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) {
  await access(path.join('build', file));
}

// Presupuesto de peso: evita que vuelva a colarse un framework CSS completo.
const assets = await readdir('build/assets');
const cssBytes = (await Promise.all(assets.filter((f) => f.endsWith('.css')).map((f) => stat(path.join('build/assets', f))))).reduce((sum, s) => sum + s.size, 0);
assert(cssBytes < 80_000, `El CSS pesa ${Math.round(cssBytes / 1024)} KB; el límite es 80 KB.`);
// JavaScript medido comprimido, como lo entrega nginx. Hoy ronda los 26 KB.
const jsGzip = (await Promise.all(assets.filter((f) => f.endsWith('.js')).map((f) => readFile(path.join('build/assets', f)))))
  .reduce((sum, file) => sum + gzipSync(file).length, 0);
assert(jsGzip < JS_BUDGET, `El JavaScript pesa ${(jsGzip / 1024).toFixed(1)} KB comprimido; el límite es ${JS_BUDGET / 1000} KB.`);

console.log(`Publicación verificada: ${routes.length} rutas, página 404, íconos, imágenes responsivas con hash (WebP y AVIF), CSS de ${Math.round(cssBytes / 1024)} KB y JavaScript de ${(jsGzip / 1024).toFixed(1)} KB comprimido.`);
