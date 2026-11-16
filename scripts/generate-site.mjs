import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises';
import { build, loadEnv } from 'vite';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const env = loadEnv('production', process.cwd(), '');
const catalog = JSON.parse(await readFile('src/data/services.json', 'utf8'));
await build({ build: { ssr: 'src/entry-server.jsx', outDir: 'tmp/prerender', emptyOutDir: true, copyPublicDir: false } });
const { render, pageMetadata, metadataTags, siteOrigin } = await import(pathToFileURL(path.resolve('tmp/prerender/entry-server.js')).href);
const origin = siteOrigin(env.VITE_SITE_URL || '');
const template = await readFile('build/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) throw new Error('Ejecutá npm run build para generar una plantilla limpia antes del prerenderizado.');
const routes = ['/', '/home', '/contact', ...catalog.map((service) => `/${service.slug}`), '/404'];
for (const route of routes) {
  const meta = pageMetadata(route, origin);
  const html = template.replace(/<title>.*?<\/title>/, `<title>${meta.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`)
    .replace(/\s*<meta[^>]*name="description"[^>]*>/, '')
    .replace('</head>', `${metadataTags(meta)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`);
  const destination = route === '/404' ? 'build/404.html' : path.join('build', route, 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
const publicRoutes = routes.filter((route) => !['/', '/404'].includes(route));
await writeFile('build/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`);
if (origin) {
  await writeFile('build/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicRoutes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')}\n</urlset>\n`);
} else {
  await unlink('build/sitemap.xml').catch((error) => { if (error.code !== 'ENOENT') throw error; });
  console.warn('SEO: configurá VITE_SITE_URL para generar el sitemap y los canonical estáticos del dominio definitivo.');
}
// Netlify: servir archivos prerenderizados primero y devolver una página 404 real para rutas desconocidas.
await writeFile('build/_redirects', '/* /404.html 404\n');
console.log(`Prerenderizadas ${routes.length} páginas con contenido y metadatos propios.`);
