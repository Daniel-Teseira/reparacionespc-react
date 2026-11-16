import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const catalog = JSON.parse(await readFile('src/data/services.json', 'utf8'));
const images = JSON.parse(await readFile('src/data/images.json', 'utf8'));
const routes = ['/', '/home', '/contact', ...catalog.map((service) => `/${service.slug}`)];
const titles = new Set();
for (const route of routes) {
  const html = await readFile(path.join('build', route, 'index.html'), 'utf8');
  assert.match(html, /<main\b/, `Falta contenido prerenderizado: ${route}`);
  assert.match(html, /<h1\b/, `Falta encabezado: ${route}`);
  assert.match(html, /<meta data-seo name="description" content="[^"]+"/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /cdn\.jsdelivr|unpkg\.com|%PUBLIC_URL%/);
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  if (route !== '/') {
    assert(!titles.has(title), `Título duplicado: ${route}`);
    titles.add(title);
  }
}
const notFound = await readFile('build/404.html', 'utf8');
assert.match(notFound, /noindex, follow/);
assert.doesNotMatch(notFound, /rel="canonical"/);
for (const image of Object.values(images)) {
  assert(image.width > 0 && image.height > 0);
  for (const variant of image.srcSet.split(', ')) {
    await access(path.join('build', variant.split(' ')[0]));
  }
}
await access('build/images/social-preview.jpg');
console.log(`Publicación verificada: ${routes.length} rutas, página 404 e imágenes responsivas.`);
