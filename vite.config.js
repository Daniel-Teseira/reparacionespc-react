import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import catalog from './src/data/services.json' with { type: 'json' };

const pagePaths = new Set(['/', '/contact', ...catalog.map((service) => `/${service.slug}`)]);

export default defineConfig({
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  plugins: [react(), {
    // Imita en `npm run preview` las redirecciones y el 404 de deploy/nginx.conf.
    name: 'preview-like-nginx',
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url, 'http://localhost');
        const redirect = (location) => { response.statusCode = 301; response.setHeader('Location', location + url.search); response.end(); };
        if (url.pathname === '/home' || url.pathname === '/home/') return redirect('/');
        if (url.pathname.length > 1 && url.pathname.endsWith('/') && pagePaths.has(url.pathname.slice(0, -1))) return redirect(url.pathname.slice(0, -1));
        if (pagePaths.has(url.pathname)) {
          // Como `try_files $uri/index.html` de nginx: cada ruta recibe su propio HTML prerenderizado,
          // no el del inicio (que provocaría errores de hidratación).
          if (url.pathname !== '/') request.url = `${url.pathname}/index.html${url.search}`;
          return next();
        }
        if (!request.headers.accept?.includes('text/html')) return next();
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(readFileSync(path.resolve('build/404.html')));
      });
    },
  }],
  server: { port: 3005, host: '127.0.0.1', watch: { ignored: ['**/tmp/**'] } },
  optimizeDeps: { entries: ['index.html'] },
  preview: { port: 3005, host: '127.0.0.1' },
  build: { outDir: 'build' },
  test: {
    include: ['src/**/*.test.{js,jsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    restoreMocks: true,
  },
});
