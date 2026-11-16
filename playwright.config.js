import { defineConfig, devices } from '@playwright/test';

// Pruebas en navegador real sobre la compilación (`npm run build` antes de `npm run test:e2e`).
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  // Más procesos saturan el servidor de vista previa y Chromium en equipos comunes.
  workers: 2,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: 'http://127.0.0.1:3005',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'escritorio', use: { ...devices['Desktop Chrome'] } },
    { name: 'celular', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'npm run preview',
    url: 'http://127.0.0.1:3005',
    reuseExistingServer: !process.env.CI,
  },
});
