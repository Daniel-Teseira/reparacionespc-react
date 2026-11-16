import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const catalog = JSON.parse(readFileSync(new URL('../src/data/services.json', import.meta.url), 'utf8'));
const routes = ['/', '/contact', ...catalog.map((service) => `/${service.slug}`)];

// Falla ante cualquier error de consola o de página (incluidos los de hidratación de React).
test.beforeEach(async ({ page }, testInfo) => {
  const errors = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  testInfo.errors_ = errors;
});
// Playwright exige desestructurar el primer argumento aunque no se use ningún fixture.
// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  expect(testInfo.errors_, 'errores en la consola del navegador').toEqual([]);
});

test.describe('Rutas publicadas', () => {
  for (const route of routes) {
    test(`${route} carga con un h1 y sin errores`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response.status()).toBe(200);
      // El servidor debe entregar el HTML prerenderizado de esta ruta, no el del inicio.
      const ssrTitle = (await response.text()).match(/<title>(.*?)<\/title>/)[1];
      await expect(page).toHaveTitle(ssrTitle);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main')).toBeVisible();
      // Esperar la hidratación: los errores de React aparecen en este momento.
      await page.waitForLoadState('networkidle');
    });
  }

  test('/home redirige al inicio y una ruta inexistente responde 404', async ({ page, request }, testInfo) => {
    const redirect = await request.get('/home', { maxRedirects: 0 });
    expect(redirect.status()).toBe(301);
    expect(redirect.headers().location).toBe('/');
    const missing = await page.goto('/no-existe');
    expect(missing.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/no está disponible/);
    await page.waitForLoadState('networkidle');
    // El navegador informa el 404 del documento en la consola: es el resultado esperado.
    testInfo.errors_ = testInfo.errors_.filter((text) => !/status of 404/.test(text));
  });
});

test.describe('Inicio', () => {
  test('el carrusel descarga solo la imagen visible al cargar', async ({ page }) => {
    const heroRequests = [];
    page.on('request', (request) => { if (/hero-/.test(request.url())) heroRequests.push(request.url()); });
    await page.goto('/');
    await expect(page.locator('.hero-image-frame img.is-active')).toBeVisible();
    const before = new Set(heroRequests.map((url) => url.match(/hero-([a-z0-9]+)-/)[1]));
    expect([...before].length).toBeLessThanOrEqual(2);
  });

  test('el catálogo se expande y contrae', async ({ page }) => {
    await page.goto('/');
    const grid = page.locator('#services-grid');
    await expect(grid.locator('article')).toHaveCount(6);
    await page.getByRole('button', { name: /Ver todos los servicios/ }).click();
    await expect(grid.locator('article')).toHaveCount(catalog.length);
    await page.getByRole('button', { name: /Mostrar menos/ }).click();
    await expect(grid.locator('article')).toHaveCount(6);
  });
});

test.describe('Navegación', () => {
  test('el menú de servicios lleva a un servicio', async ({ page, isMobile }) => {
    await page.goto('/');
    if (isMobile) await page.getByRole('button', { name: 'Abrir navegación' }).click();
    const toggle = page.getByRole('button', { name: /^Servicios/ });
    if (isMobile) await toggle.click();
    else { await toggle.hover(); await toggle.click(); }
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.locator('#services-mega-menu').getByRole('link', { name: catalog[1].title }).click();
    await expect(page).toHaveURL(`/${catalog[1].slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(catalog[1].title);
  });

  test('Escape cierra el menú de servicios', async ({ page, isMobile }) => {
    test.skip(isMobile, 'El atajo de teclado se prueba en escritorio');
    await page.goto('/contact');
    const toggle = page.getByRole('button', { name: /^Servicios/ });
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toBeFocused();
  });
});

test.describe('Contacto', () => {
  test('el formulario prepara el mensaje de WhatsApp', async ({ page }) => {
    await page.goto(`/contact?servicio=${catalog[1].slug}`);
    await expect(page.getByLabel('Servicio')).toHaveValue(catalog[1].slug);
    await page.getByLabel(/^Nombre/).fill('Ana');
    await page.getByLabel(/Qué le pasa/).fill('La computadora no enciende desde ayer.');
    await page.getByRole('button', { name: /Preparar consulta/ }).click();
    const link = page.getByRole('link', { name: /Abrir WhatsApp y revisar/ });
    const text = new URL(await link.getAttribute('href')).searchParams.get('text');
    expect(text).toContain('Hola, soy Ana.');
    expect(text).toContain(catalog[1].title);
  });

  test('la barra fija de contacto aparece solo en celulares y no en /contact', async ({ page, isMobile }) => {
    await page.goto(`/${catalog[0].slug}`);
    const bar = page.getByRole('region', { name: 'Contacto rápido' });
    if (!isMobile) { await expect(bar).toBeHidden(); return; }
    await expect(bar).toBeVisible();
    const whatsapp = new URL(await bar.getByRole('link', { name: /WhatsApp/ }).getAttribute('href'));
    expect(whatsapp.searchParams.get('text')).toContain(catalog[0].title);
    await expect(bar.getByRole('link', { name: /Llamar/ })).toHaveAttribute('href', /^tel:/);
    // La barra no debe tapar el final del pie de página.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const footerBottom = await page.locator('.footer-bottom').boundingBox();
    const barBox = await bar.boundingBox();
    expect(footerBottom.y + footerBottom.height).toBeLessThanOrEqual(barBox.y + 1);
    await page.goto('/contact');
    await expect(bar).toHaveCount(0);
  });
});

test.describe('Sin JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('se puede llegar a cualquier servicio desde el menú', async ({ page, isMobile }) => {
    await page.goto('/');
    await expect(page.getByText(/JavaScript desactivado/)).toBeVisible();
    const menu = page.locator('#services-mega-menu');
    if (!isMobile) await page.getByRole('button', { name: /^Servicios/ }).hover();
    const last = catalog.at(-1);
    await menu.getByRole('link', { name: last.title }).click();
    await expect(page).toHaveURL(`/${last.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(last.title);
  });
});
