import { render, screen, within, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';
import { services } from './data/services';
import { business } from './data/business';

function renderPage(path = '/home') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
}

describe('Navegación y catálogo', () => {
  it('muestra seis servicios y permite expandir y contraer el catálogo', async () => {
    const user = userEvent.setup();
    renderPage();
    const section = screen.getByRole('region', { name: /Soluciones para que tu equipo/ });
    expect(within(section).getAllByRole('article')).toHaveLength(6);
    await user.click(screen.getByRole('button', { name: /Ver todos los servicios/ }));
    expect(within(section).getAllByRole('article')).toHaveLength(services.length);
    await user.click(screen.getByRole('button', { name: /Mostrar menos/ }));
    expect(within(section).getAllByRole('article')).toHaveLength(6);
  });

  it('el enlace del menú Ver todos expande el catálogo y cierra la navegación', async () => {
    const user = userEvent.setup();
    renderPage('/contact');
    await user.click(screen.getByRole('button', { name: 'Abrir navegación' }));
    await user.click(screen.getByRole('button', { name: /^Servicios/ }));
    await user.click(screen.getByRole('link', { name: /Ver todos/ }));
    expect(screen.getByRole('button', { name: /Mostrar menos/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Abrir navegación' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('permite cerrar el menú con Escape y devuelve el foco al control', async () => {
    const user = userEvent.setup();
    renderPage();
    const toggle = screen.getByRole('button', { name: /^Servicios/ });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
    expect(screen.getByText('ASISTENCIA PARA TU EQUIPO').closest('#services-mega-menu')).not.toBeVisible();
  });

  it('acepta varias navegaciones consecutivas sin bloquear el último destino', async () => {
    const user = userEvent.setup();
    renderPage();
    await user.click(screen.getByRole('link', { name: /Solicitar asistencia/ }));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contanos');
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Inicio' }));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tu equipo vuelve');
  });

  it.each(services)('publica la ruta de $title con una consulta contextual', (service) => {
    renderPage(`${service.path}/`);
    expect(screen.getByRole('heading', { level: 1, name: service.title })).toBeInTheDocument();
    const direct = screen.getByRole('link', { name: /Consultar por WhatsApp/ });
    const url = new URL(direct.href);
    expect(url.hostname).toBe('wa.me');
    expect(url.pathname).toBe(`/${business.whatsapp}`);
    expect(url.searchParams.get('text')).toContain(service.title);
    expect(screen.getByRole('link', { name: /Describir el problema/ })).toHaveAttribute('href', `/contact?servicio=${service.slug}`);
  });

  it('presenta una página desconocida sin indexarla', async () => {
    renderPage('/no-existe');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Esta página no está disponible');
    await waitFor(() => expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow'));
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
  });
});

describe('Consultas', () => {
  it('conserva el servicio y prepara un mensaje sin afirmar que fue enviado', async () => {
    const user = userEvent.setup();
    renderPage('/contact?servicio=armado-pc');
    expect(screen.getByLabelText('Servicio')).toHaveValue('armado-pc');
    await user.type(screen.getByLabelText(/^Nombre/), 'Ana');
    await user.type(screen.getByLabelText(/Qué le pasa/), 'Quiero una PC para trabajar.');
    await user.click(screen.getByRole('button', { name: /Preparar consulta/ }));
    const link = screen.getByRole('link', { name: /Abrir WhatsApp y revisar/ });
    const text = new URL(link.href).searchParams.get('text');
    expect(text).toContain('Hola, soy Ana.');
    expect(text).toContain('Armado de PC a medida');
    expect(text).toContain('Quiero una PC para trabajar.');
    expect(screen.getByRole('status')).toHaveTextContent('confirmá el envío allí');
    await user.type(screen.getByLabelText(/^Nombre/), ' María');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('rechaza consultas que contienen solamente espacios', async () => {
    const user = userEvent.setup();
    renderPage('/contact');
    await user.type(screen.getByLabelText(/^Nombre/), '  ');
    await user.type(screen.getByLabelText(/Qué le pasa/), '          ');
    await user.click(screen.getByRole('button', { name: /Preparar consulta/ }));
    expect(screen.getByRole('alert')).toHaveTextContent('Ingresá tu nombre');
    expect(screen.queryByRole('link', { name: /Abrir WhatsApp y revisar/ })).not.toBeInTheDocument();
  });
});
