# Reparaciones PC

Web de servicios técnicos de PC y notebooks en San Miguel de Tucumán. Incluye un catálogo de 16 servicios, contacto por teléfono y WhatsApp, formulario que prepara consultas, ubicación, preguntas frecuentes y páginas prerenderizadas para SEO.

El sitio no tiene autenticación, base de datos, seguimiento de reparaciones ni panel administrativo. Esas funciones requieren una etapa de desarrollo independiente.

## Tecnologías

| Herramienta | Versión | Uso |
| --- | --- | --- |
| Preact (con `preact/compat`) | 11 | Interfaz con la API de React y prerenderizado con `preact-render-to-string` |
| Vite + `@preact/preset-vite` | 8 | Servidor de desarrollo y compilación |
| Vitest + Preact Testing Library + jsdom | 5 / 3 / 29 | Pruebas unitarias |
| Playwright | 1.65 | Pruebas en navegador real (escritorio y celular) |
| ESLint | 9 | Revisión de código (con `eslint-plugin-react` y `react-hooks`) |
| sharp | 0.35 | Generación de AVIF, WebP e íconos |

### Preact en lugar de React

El código usa la API de React (`useState`, `useEffect`, etc.), pero `react` y `react-dom` son alias de `@preact/compat` en `package.json`. Así el prerenderizado y las pruebas usan Preact sin cambios en el código.

Las rutas las maneja `src/router.jsx`, un router mínimo propio (`Router`, `Link`, `useLocation`, `useSearchParams`) que reemplaza a React Router. Con los dos cambios, el JavaScript del sitio pasó de 72 KB comprimido (React y React Router) a unos 25 KB.

Los alias `react` y `react-dom` no se actualizan solos: para subir de versión `@preact/compat`, cambiá el número en ambos alias de `package.json`.

Diferencias a tener en cuenta al escribir componentes:

- `onChange` en un `<form>` o en un contenedor responde al evento nativo `change` (al salir del campo). Para reaccionar a cada tecla usá `onInput`.
- `onBlur` y `onFocus` no se propagan desde los hijos. Para detectar que el foco sale de un grupo usá un listener nativo de `focusout` (ver `NavBar.jsx`).
- Las pruebas en navegador (`npm run test:e2e`) fallan ante cualquier error de consola, incluidos los de hidratación.

Los estilos son CSS propio (`src/base.css` y un CSS por componente); el sitio ya no usa Bootstrap.

### Versiones que se mantienen a propósito

- **jsdom 29**: jsdom 30 o superior exige Node 22.22.
- **ESLint 9**: `eslint-plugin-react` todavía no admite ESLint 10.

Al actualizar dependencias, revisá estas restricciones antes de subir de versión mayor y ejecutá la secuencia completa de [Publicación](#publicación).

## Requisitos y ejecución

- Node.js 22.13 o superior (campo `engines` de `package.json` y `.nvmrc`; jsdom 29 lo necesita para las pruebas).
- npm y acceso al registro oficial de paquetes.

```sh
npm ci
npm start
```

La web abre en `http://127.0.0.1:3005`. `npm run dev` es equivalente a `npm start`.

## Configuración pública

Copiá `.env.example` a `.env.local` y completá:

```dotenv
VITE_SITE_URL=https://tu-dominio-real.com
VITE_WHATSAPP_NUMBER=5493812012118
```

El dominio del ejemplo debe reemplazarse por el dominio definitivo. Usá solo el origen, sin rutas ni parámetros. El teléfono de WhatsApp debe incluir código de país y área, sin espacios, `+`, `0` ni `15`. Para celulares argentinos corresponde `549` seguido del código de área y el número. Confirmá que el número publicado tenga WhatsApp antes de desplegar.

Estas variables son públicas y se incorporan al navegador: no guardes contraseñas ni claves en ellas. El antiguo `PORT` de Create React App ya no controla el servidor; el puerto está en `vite.config.js` y puede cambiarse con `npm start -- --port 3006`.

Sin `VITE_SITE_URL`, el sitio funciona localmente y las canonical se resuelven en el navegador. La compilación avisa y omite el sitemap y las canonical estáticas para no publicar un dominio inventado. Para producción, configurá el dominio y volvé a compilar.

## Comandos

| Comando | Resultado |
| --- | --- |
| `npm start` | Servidor de desarrollo Vite |
| `npm test` | Pruebas unitarias con Vitest y Testing Library |
| `npm run test:e2e` | Pruebas en navegador con Playwright sobre `build/` (la primera vez: `npx playwright install chromium`) |
| `npm run test:watch` | Pruebas en modo interactivo |
| `npm run lint` | Revisión de JavaScript, JSX y hooks |
| `npm run images:optimize` | Regenera los AVIF y WebP responsivos (con hash en el nombre), `src/data/images.json` y la imagen social; borra las versiones que ya no se usan |
| `npm run icons` | Regenera `favicon.ico` e íconos PNG desde `public/favicon.svg` |
| `npm run build` | Genera `build/`, HTML por ruta y metadatos; sitemap si hay dominio |
| `npm run check:build` | Comprueba páginas, metadatos, migas de pan, 404, íconos e imágenes, y los límites de peso: CSS menor a 80 KB y JavaScript menor a 35 KB comprimido |
| `npm run preview` | Previsualiza la compilación local con las redirecciones y el 404 de Nginx |

## Contenido y estructura

Datos y contenido:

- `src/data/services.json`: fuente única de nombres, rutas, resúmenes y alcance de los servicios. Rutas, menú, tarjetas, prerenderizado y verificaciones se generan desde este catálogo.
- `src/data/services.js`: combina el catálogo con las imágenes y resuelve el servicio de cada ruta.
- `src/data/business.js`: teléfono, domicilio, horarios y enlaces de contacto compartidos. Los campos opcionales `geo`, `sameAs` y `priceRange` se publican en los datos estructurados solo si se completan.
- `src/data/faq.js`: preguntas frecuentes del inicio, publicadas también como `FAQPage`.
- `src/data/seo.js`: títulos, descripciones, canonical, Open Graph (con medidas y texto alternativo de la imagen) y datos estructurados (JSON-LD, con `BreadcrumbList` en los servicios cuando hay dominio).
- `src/data/images.json`: manifiesto generado con dimensiones y variantes responsivas. No se edita a mano.

Componentes y páginas:

- `src/App.jsx`: rutas de la aplicación. `src/router.jsx` es el router. `src/index.jsx` hidrata en el navegador y `src/entry-server.jsx` renderiza cada ruta durante la compilación.
- `src/base.css`: reinicio de estilos, contenedor y barra de navegación (reemplaza a Bootstrap).
- `src/components/NavBar/` y `src/components/Footer/`: navegación con menú de servicios y pie de página.
- `src/components/services/ServicePage.jsx`: presentación compartida de los servicios, con migas de pan y enlaces a otros tres servicios del catálogo.
- `src/components/cards/Servicios.jsx`: tarjetas del catálogo.
- `src/components/ContactForm.jsx`: validación y preparación de la consulta para WhatsApp.
- `src/components/Seo.jsx`, `RouteFocus.jsx` y `ResponsiveImage.jsx`: metadatos por página, foco accesible al cambiar de ruta e imágenes responsivas (`<picture>` con AVIF y WebP).
- `src/pages/home/`, `src/pages/contact/`, `src/pages/error/`: inicio (con `components/HomeInfo.jsx` para proceso de atención y preguntas frecuentes), contacto y 404.

Imágenes y scripts:

- `scripts/image-sources.json`: relación de originales y recursos utilizados.
- `src/images/`: originales conservados para regenerar las imágenes; no se copian a producción.
- `public/images/optimized/`: AVIF y WebP generados que usa el sitio (`<picture>` sirve AVIF y deja WebP como alternativa). Cada nombre lleva un hash del contenido, por eso Nginx los guarda un año en caché.
- `public/nojs.css`: estilos que se cargan solo sin JavaScript para que el menú y los servicios sigan accesibles.
- `src/components/MobileContactBar/`: barra fija de WhatsApp y llamada en celulares.
- `e2e/`: pruebas de Playwright.
- `scripts/generate-site.mjs`: prerenderizado, `robots.txt` y `sitemap.xml` (se ejecuta dentro de `npm run build`).
- `scripts/verify-build.mjs`, `optimize-images.mjs`, `generate-icons.mjs`: verificación, imágenes e íconos.
- `deploy/`: Nginx, Docker Compose y scripts de publicación en el NUC; `deploy/https/` tiene Caddy para HTTPS cuando haya dominio y `deploy/monitoring/`, Uptime Kuma.

Después de cambiar una imagen o agregar un servicio, actualizá el catálogo y sus fuentes de imagen, ejecutá `npm run images:optimize` y comprobá pruebas y compilación. Los textos de presupuesto, diagnóstico y garantía deben ajustarse únicamente a condiciones reales del negocio.

## Cómo se genera el sitio

1. `vite build` compila la aplicación en `build/`.
2. `scripts/generate-site.mjs` compila `src/entry-server.jsx` en `tmp/prerender/` y renderiza cada ruta (`/`, `/contact`, las 16 de servicios y `404`).
3. Cada página recibe su propio `<title>`, descripción, canonical, Open Graph y JSON-LD, y se guarda como `build/<ruta>/index.html`.
4. Se escriben `robots.txt` y, si hay `VITE_SITE_URL`, `sitemap.xml`.
5. En el navegador, Preact hidrata el HTML ya generado.

## Cómo funciona el formulario

1. El visitante completa nombre, servicio y problema. Email y teléfono son opcionales.
2. El formulario valida los datos y prepara el texto de la consulta.
3. El visitante abre WhatsApp y confirma el envío allí.

No hay un servidor de correo ni almacenamiento de consultas. El sitio no afirma que un mensaje fue entregado. Para recibir consultas directamente por correo o administrarlas, es necesario integrar un backend o proveedor y sus credenciales del lado del servidor.

## Publicación

```sh
npm run lint
npm test
npm run build
npm run check:build
npm run test:e2e
```

Publicá el contenido de `build/` en la raíz del dominio. La compilación genera HTML con contenido por cada ruta, metadatos únicos, `404.html`, `robots.txt`, y `sitemap.xml` cuando está configurado el dominio. El inicio canónico es `/`; `/home` y las variantes con barra final redirigen con 301 a la URL estable.

La publicación en el NUC está automatizada con `deploy/update-nuc.ps1`; ver [deploy/NUC.md](deploy/NUC.md). La configuración de Nginx (`deploy/nginx.conf` y `deploy/security-headers.conf`) incluye compresión, caché, cabeceras de seguridad, redirecciones y 404 reales. `npm run preview` imita esas redirecciones y el 404, pero no las cabeceras.

El workflow de GitHub Actions (`.github/workflows/ci.yml`) usa la versión de Node de `.nvmrc` y ejecuta lint, pruebas unitarias, compilación, `check:build` y las pruebas de Playwright en cada push y pull request. Si algo falla, el informe de Playwright queda como artefacto del workflow durante 7 días. La variable pública de repositorio `SITE_URL` permite incluir el dominio definitivo en CI.

Dependabot (`.github/dependabot.yml`) propone una vez por mes actualizaciones de npm, de las acciones de GitHub y de las imágenes de Docker del NUC. Respeta las [versiones que se mantienen a propósito](#versiones-que-se-mantienen-a-propósito), y el CI valida cada propuesta.
