import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import catalog from './src/data/services.json';

const pagePaths = new Set(['/', '/home', '/contact', ...catalog.map((service) => `/${service.slug}`)]);

export default defineConfig({
  plugins: [react(), {
    name: 'preview-not-found',
    configurePreviewServer(server) {
      server.middlewares.use((request, response, next) => {
        const pathname = new URL(request.url, 'http://localhost').pathname.replace(/\/+$/, '') || '/';
        if (!request.headers.accept?.includes('text/html') || pagePaths.has(pathname)) return next();
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
