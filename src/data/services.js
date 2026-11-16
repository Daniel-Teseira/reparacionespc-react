import catalog from './services.json';
import images from './images.json';

export const services = catalog.map((service) => ({
  ...service,
  path: `/${service.slug}`,
  cardImage: images[`service${service.id}-card`],
  heroImage: images[`service${service.id}-hero`],
}));

export function serviceAtPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return services.find((service) => service.path === path);
}

// Los tres servicios siguientes del catálogo (en ronda): cada página enlaza a otras tres
// y cada servicio recibe enlaces desde tres páginas.
export function relatedServices(service, count = 3) {
  const index = services.indexOf(service);
  return Array.from({ length: Math.min(count, services.length - 1) }, (_, offset) => services[(index + offset + 1) % services.length]);
}
