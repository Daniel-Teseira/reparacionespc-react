import { business } from './business';
import { serviceAtPath } from './services';
import { questions } from './faq';

export function siteOrigin(value) {
  if (!value) return '';
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash || url.username || url.password) {
    throw new Error('VITE_SITE_URL debe ser el dominio público, sin rutas, parámetros ni credenciales.');
  }
  return url.origin;
}

export function pageMetadata(pathname, origin = '') {
  const path = pathname.replace(/\/+$/, '') || '/';
  const service = serviceAtPath(path);
  const home = path === '/' || path === '/home';
  const contact = path === '/contact';
  const known = home || contact || Boolean(service);
  const canonicalPath = home ? '/' : path;
  const title = service ? `${service.title} en Tucumán | Reparaciones PC`
    : home ? 'Reparación de PC en Tucumán | Reparaciones PC'
    : contact ? 'Contacto y consultas en Tucumán | Reparaciones PC'
    : 'Página no encontrada | Reparaciones PC';
  const description = service?.summary || (home
    ? 'Servicio técnico de PC y notebooks en San Miguel de Tucumán. Reparación, mantenimiento, redes y soporte remoto. Consultanos por tu equipo.'
    : contact ? `Consultas por WhatsApp o teléfono. Atención en ${business.street}, ${business.city}. Coordiná la revisión de tu computadora.`
    : 'El enlace solicitado no está disponible. Volvé al inicio o consultanos por tu computadora.');
  const canonical = origin && known ? `${siteOrigin(origin)}${canonicalPath}` : '';
  const structuredData = known ? {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': origin ? `${origin}/#business` : undefined,
    name: business.name,
    description: 'Servicio técnico de PC y notebooks: reparación, mantenimiento, redes y soporte remoto.',
    telephone: business.phone,
    url: origin ? `${origin}/` : undefined,
    image: origin ? `${origin}${socialImage.path}` : undefined,
    hasMap: business.mapsUrl,
    areaServed: { '@type': 'City', name: business.city },
    ...(business.geo ? { geo: { '@type': 'GeoCoordinates', ...business.geo } } : {}),
    ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
    ...(business.priceRange ? { priceRange: business.priceRange } : {}),
    address: { '@type': 'PostalAddress', streetAddress: business.street, addressLocality: business.city, addressRegion: business.region, addressCountry: 'AR' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ],
    ...(service ? { makesOffer: { '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, description: service.summary } } } : {}),
  } : null;
  const faqData = home ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  } : null;
  // Migas de pan para Google: solo con dominio configurado, porque exigen direcciones absolutas.
  const breadcrumbData = service && canonical ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteOrigin(origin)}/` },
      { '@type': 'ListItem', position: 2, name: service.title, item: canonical },
    ],
  } : null;
  return { title, description, canonical, noindex: !known, structuredData, faqData, breadcrumbData, origin };
}

// Imagen para compartir en redes (scripts/optimize-images.mjs la genera de 1200 x 630).
export const socialImage = { path: '/images/social-preview.jpg', width: 1200, height: 630, alt: 'Reparaciones PC: servicio técnico de computadoras en San Miguel de Tucumán' };

const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export function metadataTags(meta) {
  const tags = [
    `<meta data-seo name="description" content="${escape(meta.description)}">`,
    `<meta data-seo name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}">`,
    `<meta data-seo property="og:locale" content="es_AR">`,
    `<meta data-seo property="og:type" content="website">`,
    `<meta data-seo property="og:site_name" content="Reparaciones PC">`,
    `<meta data-seo property="og:title" content="${escape(meta.title)}">`,
    `<meta data-seo property="og:description" content="${escape(meta.description)}">`,
    `<meta data-seo name="twitter:card" content="summary_large_image">`,
    `<meta data-seo name="twitter:title" content="${escape(meta.title)}">`,
    `<meta data-seo name="twitter:description" content="${escape(meta.description)}">`,
  ];
  if (meta.canonical) tags.push(`<link data-seo rel="canonical" href="${escape(meta.canonical)}">`, `<meta data-seo property="og:url" content="${escape(meta.canonical)}">`);
  if (meta.origin) {
    const image = escape(`${meta.origin}${socialImage.path}`);
    tags.push(
      `<meta data-seo property="og:image" content="${image}">`,
      `<meta data-seo property="og:image:type" content="image/jpeg">`,
      `<meta data-seo property="og:image:width" content="${socialImage.width}">`,
      `<meta data-seo property="og:image:height" content="${socialImage.height}">`,
      `<meta data-seo property="og:image:alt" content="${escape(socialImage.alt)}">`,
      `<meta data-seo name="twitter:image" content="${image}">`,
      `<meta data-seo name="twitter:image:alt" content="${escape(socialImage.alt)}">`,
    );
  }
  for (const data of [meta.structuredData, meta.faqData, meta.breadcrumbData]) {
    if (data) tags.push(`<script data-seo type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n');
}
