import { act, fireEvent, render, screen } from '@testing-library/preact';
import { describe, expect, it } from 'vitest';
import { Link, Router, useLocation, useSearchParams } from './router';

function Where() {
  const { pathname, search, hash, type } = useLocation();
  const [params, setParams] = useSearchParams();
  return <>
    <output>{`${pathname}${search}${hash} ${type}`}</output>
    <button type="button" onClick={() => setParams(new URLSearchParams({ q: params.get('q') ? '' : '1' }), { replace: true })}>Parámetro</button>
    <Link to="/destino#seccion">Ir</Link>
  </>;
}

function renderAt(path) {
  window.history.replaceState(null, '', path);
  return render(<Router><Where /></Router>);
}

describe('Router', () => {
  it('navega con el historial al hacer clic en un enlace interno', () => {
    renderAt('/inicio');
    const before = window.history.length;
    fireEvent.click(screen.getByRole('link', { name: 'Ir' }), { button: 0 });
    expect(screen.getByRole('status')).toHaveTextContent('/destino#seccion PUSH');
    expect(window.location.pathname).toBe('/destino');
    expect(window.history.length).toBe(before + 1);
  });

  it('deja al navegador los clics con teclas modificadoras', () => {
    renderAt('/inicio');
    let preventedByRouter;
    // Al final del recorrido del evento: registrar si el router lo canceló y evitar que jsdom
    // intente abrir otra página (no lo implementa).
    window.addEventListener('click', (event) => { preventedByRouter = event.defaultPrevented; event.preventDefault(); }, { once: true });
    screen.getByRole('link', { name: 'Ir' }).dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, ctrlKey: true }));
    expect(preventedByRouter).toBe(false);
    expect(screen.getByRole('status')).toHaveTextContent('/inicio POP');
  });

  it('cambia los parámetros sin agregar historial y sigue los botones Atrás y Adelante', () => {
    renderAt('/lista#arriba');
    const before = window.history.length;
    fireEvent.click(screen.getByRole('button', { name: 'Parámetro' }));
    expect(screen.getByRole('status')).toHaveTextContent('/lista?q=1 REPLACE');
    expect(window.history.length).toBe(before);
    act(() => {
      window.history.replaceState(null, '', '/otra');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
    expect(screen.getByRole('status')).toHaveTextContent('/otra POP');
  });

  it('usa la ubicación indicada al prerenderizar', () => {
    window.history.replaceState(null, '', '/navegador');
    render(<Router url="/servidor?x=1"><Where /></Router>);
    expect(screen.getByRole('status')).toHaveTextContent('/servidor?x=1 POP');
  });
});
