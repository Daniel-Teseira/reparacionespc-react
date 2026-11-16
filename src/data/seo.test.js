import { describe, expect, it } from 'vitest';
import { metadataTags, pageMetadata, siteOrigin } from './seo';
import { services } from './services';

describe('Metadatos y publicación', () => {
  it('usa una canonical estable sin variantes de parámetros o barra final', () => {
    expect(pageMetadata('/armado-pc/', 'https://example.test').canonical).toBe('https://example.test/armado-pc');
    expect(pageMetadata('/home', 'https://example.test').canonical).toBe('https://example.test/');
    expect(pageMetadata('/', 'https://example.test').canonical).toBe('https://example.test/');
  });
  it('cada servicio tiene título y descripción propios', () => {
    const metas = services.map((service) => pageMetadata(service.path, 'https://example.test'));
    expect(new Set(metas.map((meta) => meta.title)).size).toBe(services.length);
    expect(new Set(metas.map((meta) => meta.description)).size).toBe(services.length);
    metas.forEach((meta) => expect(meta.structuredData.makesOffer.itemOffered['@type']).toBe('Service'));
  });
  it('publica las preguntas frecuentes solo en el inicio', () => {
    expect(pageMetadata('/').faqData.mainEntity.length).toBeGreaterThan(0);
    expect(metadataTags(pageMetadata('/'))).toContain('"@type":"FAQPage"');
    expect(pageMetadata('/contact').faqData).toBeNull();
  });
  it('rechaza dominios con rutas, protocolos o credenciales incorrectas', () => {
    for (const value of ['https://example.test/ruta', 'javascript:alert(1)', 'https://user:pass@example.test', 'https://example.test/?x=1']) {
      expect(() => siteOrigin(value)).toThrow();
    }
    expect(siteOrigin('https://example.test/')).toBe('https://example.test');
  });
  it('escapa contenido antes de insertarlo en HTML o JSON-LD', () => {
    const html = metadataTags({ title: '<script>"', description: '" onload="bad', structuredData: { text: '</script><script>bad' } });
    expect(html).toContain('&lt;script&gt;&quot;');
    expect(html).not.toContain('</script><script>');
    expect(html).toContain('\\u003c/script>');
  });
  it('publica migas de pan en los servicios cuando hay dominio', () => {
    const meta = pageMetadata('/armado-pc', 'https://example.test');
    expect(meta.breadcrumbData.itemListElement.map((item) => item.item)).toEqual(['https://example.test/', 'https://example.test/armado-pc']);
    expect(metadataTags(meta)).toContain('"@type":"BreadcrumbList"');
    expect(pageMetadata('/armado-pc').breadcrumbData).toBeNull();
    expect(pageMetadata('/', 'https://example.test').breadcrumbData).toBeNull();
  });
  it('describe la imagen para compartir con medidas y texto alternativo', () => {
    const html = metadataTags(pageMetadata('/', 'https://example.test'));
    expect(html).toContain('property="og:image" content="https://example.test/images/social-preview.jpg"');
    expect(html).toContain('property="og:image:width" content="1200"');
    expect(html).toContain('property="og:image:height" content="630"');
    expect(html).toMatch(/property="og:image:alt" content="[^"]+"/);
  });
});
