import { defineConfig, devices } from '@playwright/test';

// Pruebas en navegador real. Por defecto, sobre la compilación local (`npm run build` antes de
// `npm run test:e2e`). Con E2E_BASE_URL se prueban contra un sitio ya publicado, por ejemplo:
//   $env:E2E_BASE_URL = 'http://192.168.1.250:3005'; npm run test:e2e
const remote = process.env.E2E_BASE_URL;

export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  // Más procesos saturan el servidor de vista previa y Chromium en equipos comunes.
  workers: 2,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: remote || 'http://127.0.0.1:3005',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'escritorio', use: { ...devices['Desktop Chrome'] } },
    { name: 'celular', use: { ...devices['Pixel 7'] } },
  ],
  webServer: remote ? undefined : {
    command: 'npm run preview',
    url: 'http://127.0.0.1:3005',
    reuseExistingServer: !process.env.CI,
  },
});
