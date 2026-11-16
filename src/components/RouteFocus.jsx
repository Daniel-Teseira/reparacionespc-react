import { useEffect, useRef } from 'react';
import { useLocation } from '../router';

export default function RouteFocus() {
  const { pathname, hash, type: navigationType } = useLocation();

  const previousPath = useRef(pathname);

  useEffect(() => {
    const pageChanged = previousPath.current !== pathname;
    previousPath.current = pathname;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try { id = decodeURIComponent(id); } catch { /* Conservar fragmentos incompletos. */ }
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        target?.focus({ preventScroll: true });
      } else if (pageChanged && navigationType !== 'POP') {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.querySelector('main')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigationType]);

  return null;
}
