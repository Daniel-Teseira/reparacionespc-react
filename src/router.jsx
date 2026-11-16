import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// Router mínimo para las rutas fijas del sitio. Reemplaza a React Router (unos 13 KB comprimidos)
// con lo único que se usa: la ubicación actual, el historial del navegador y enlaces internos.
const RouterContext = createContext(null);
let keyCounter = 0;

function locationFrom(url) {
  const { pathname, search, hash } = new URL(url, 'http://localhost');
  return { pathname, search, hash };
}

// `url` fija la ubicación al prerenderizar en el servidor. En el navegador se omite.
export function Router({ url, children }) {
  const [state, setState] = useState(() => ({
    location: locationFrom(url ?? window.location.href),
    type: 'POP',
    key: 'default',
  }));

  useEffect(() => {
    if (url !== undefined) return undefined;
    // Atrás, adelante y los enlaces a un fragmento (#main-content) disparan popstate.
    const sync = () => setState({ location: locationFrom(window.location.href), type: 'POP', key: `k${++keyCounter}` });
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, [url]);

  const navigate = useCallback((to, { replace = false } = {}) => {
    const target = new URL(to, window.location.href);
    window.history[replace ? 'replaceState' : 'pushState'](null, '', target.pathname + target.search + target.hash);
    setState({ location: locationFrom(target.href), type: replace ? 'REPLACE' : 'PUSH', key: `k${++keyCounter}` });
  }, []);

  const value = useMemo(() => ({ ...state.location, key: state.key, type: state.type, navigate }), [state, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

// { pathname, search, hash, key, type ('POP' | 'PUSH' | 'REPLACE'), navigate(to, { replace }) }
export function useLocation() {
  return useContext(RouterContext);
}

export function useSearchParams() {
  const { pathname, search, navigate } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);
  // Igual que React Router: cambiar los parámetros descarta el fragmento (#...).
  const setParams = useCallback((next, options) => {
    const query = String(next);
    navigate(`${pathname}${query ? `?${query}` : ''}`, options);
  }, [navigate, pathname]);
  return [params, setParams];
}

export function Link({ to, replace, onClick, ...props }) {
  const { pathname, search, hash, navigate } = useLocation();
  const handleClick = (event) => {
    onClick?.(event);
    // Clic central, Ctrl/Cmd+clic o target: el navegador abre el enlace como siempre.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (props.target && props.target !== '_self') return;
    event.preventDefault();
    // Repetir la ubicación actual no agrega una entrada al historial.
    navigate(to, { replace: replace ?? to === pathname + search + hash });
  };
  return <a {...props} href={to} onClick={handleClick} />;
}
