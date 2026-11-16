import assert from 'node:assert/strict';
import { readFile, readdir, access, stat } from 'node:fs/promises';
import path from 'node:path';

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
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert(!titles.has(title), `Título duplicado: ${route}`);
  titles.add(title);
}
const home = await readFile('build/index.html', 'utf8');
assert.match(home, /"@type":"FAQPage"/, 'Falta FAQPage en el inicio');

const notFound = await readFile('build/404.html', 'utf8');
assert.match(notFound, /noindex, follow/);
assert.doesNotMatch(notFound, /rel="canonical"/);

for (const image of Object.values(images)) {
  assert(image.width > 0 && image.height > 0);
  for (const variant of image.srcSet.split(', ')) {
    await access(path.join('build', variant.split(' ')[0]));
  }
}
for (const file of ['images/social-preview.jpg', 'favicon.ico', 'favicon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']) {
  await access(path.join('build', file));
}

// Presupuesto de peso: evita que vuelva a colarse un framework CSS completo.
const assets = await readdir('build/assets');
const cssBytes = (await Promise.all(assets.filter((f) => f.endsWith('.css')).map((f) => stat(path.join('build/assets', f))))).reduce((sum, s) => sum + s.size, 0);
assert(cssBytes < 80_000, `El CSS pesa ${Math.round(cssBytes / 1024)} KB; el límite es 80 KB.`);

console.log(`Publicación verificada: ${routes.length} rutas, página 404, íconos, imágenes responsivas y CSS de ${Math.round(cssBytes / 1024)} KB.`);
