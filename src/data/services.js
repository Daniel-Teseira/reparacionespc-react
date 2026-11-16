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
