# Reparaciones PC

Web de servicios técnicos de PC y notebooks en San Miguel de Tucumán. Incluye un catálogo de 16 servicios, contacto por teléfono y WhatsApp, formulario que prepara consultas, ubicación, preguntas frecuentes y páginas prerenderizadas para SEO.

El sitio no tiene autenticación, base de datos, seguimiento de reparaciones ni panel administrativo. Esas funciones requieren una etapa de desarrollo independiente.

## Requisitos y ejecución

- Node.js 22.12 o superior.
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
| `npm test` | Pruebas con Vitest y Testing Library |
| `npm run test:watch` | Pruebas en modo interactivo |
| `npm run lint` | Revisión de JavaScript, JSX y hooks |
| `npm run images:optimize` | Regenera los WebP responsivos y la imagen social |
| `npm run build` | Genera `build/`, HTML por ruta y metadatos; sitemap si hay dominio |
| `npm run check:build` | Comprueba páginas, metadatos, 404 e imágenes de la compilación |
| `npm run preview` | Previsualiza la compilación local |

## Contenido y estructura

- `src/data/services.json`: fuente única de nombres, rutas, resúmenes y alcance de los servicios. Rutas, menú y tarjetas se generan desde este catálogo.
- `src/data/business.js`: teléfono, domicilio, horarios y enlaces de contacto compartidos.
- `src/data/seo.js`: títulos, descripciones, canonical, Open Graph y datos estructurados.
- `src/components/services/ServicePage.jsx`: presentación compartida de los servicios.
- `src/components/ContactForm.jsx`: validación y preparación de la consulta para WhatsApp.
- `src/pages/home/components/HomeInfo.jsx`: proceso de atención y preguntas frecuentes.
- `scripts/image-sources.json`: relación de originales y recursos utilizados.
- `src/data/images.json`: manifiesto generado con dimensiones y variantes responsivas.
- `src/images/`: originales conservados para regenerar las imágenes; no se copian a producción.
- `public/images/optimized/`: WebP generados que usa el sitio.

Después de cambiar una imagen o agregar un servicio, actualizá el catálogo y sus fuentes de imagen, ejecutá `npm run images:optimize` y comprobá pruebas y compilación. Los textos de presupuesto, diagnóstico y garantía deben ajustarse únicamente a condiciones reales del negocio.

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
```

Publicá el contenido de `build/` en la raíz del dominio. La compilación genera HTML con contenido por cada ruta, metadatos únicos, `404.html`, `robots.txt`, y `sitemap.xml` cuando está configurado el dominio. La ruta `/` comparte canonical con `/home`; las variantes con barra final y las consultas apuntan a la URL estable del servicio.

Netlify puede usar el archivo `_redirects` generado: los archivos existentes se sirven normalmente y las rutas desconocidas devuelven la página 404 con estado 404. En otros alojamientos, configurá la búsqueda de `ruta/index.html` y una página de error 404. Evitá devolver siempre el inicio con estado 200 para las rutas inexistentes.

Ejemplo para Nginx, dentro del bloque `server` del sitio:

```nginx
location / {
    try_files $uri $uri/index.html =404;
}
error_page 404 /404.html;
location = /404.html {
    internal;
}
```

La previsualización de Vite no sustituye la configuración HTTP del alojamiento. Verificá el estado 404 y las redirecciones en el entorno de publicación. El proyecto incluye un workflow de GitHub Actions que ejecuta lint, pruebas y compilación; la variable pública de repositorio `SITE_URL` permite incluir el dominio definitivo en CI.
