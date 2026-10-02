import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PageTransition.css';

const COVER_DURATION = 320;
const LOAD_DURATION = 160;
const REVEAL_DURATION = 620;

const PageTransitionContext = createContext(null);

export const usePageTransition = () => useContext(PageTransitionContext);

export const PageTransitionProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  const [phase, setPhase] = useState('idle');
  const [animatedPath, setAnimatedPath] = useState(null);
  const timers = useRef([]);
  const transitionId = useRef(0);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  const schedule = useCallback((callback, delay, id) => {
    const timer = window.setTimeout(() => {
      if (transitionId.current === id) callback();
    }, delay);
    timers.current.push(timer);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  const navigateWithTransition = useCallback((to) => {
    const destination = typeof to === 'string' ? to.split(/[?#]/)[0] : to.pathname;
    if (phase !== 'idle' || destination === pathname) {
      if (phase === 'idle' && to !== pathname) navigate(to);
      return;
    }

    clearTimers();
    const id = ++transitionId.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setAnimatedPath(to);

    if (reduceMotion) {
      navigate(to);
      return;
    }

    setPhase('covering');
    schedule(() => {
      navigate(to);
      setPhase('loading');
      schedule(() => {
        setPhase('revealing');
        schedule(() => setPhase('idle'), REVEAL_DURATION, id);
      }, LOAD_DURATION, id);
    }, COVER_DURATION, id);
  }, [clearTimers, navigate, pathname, phase, schedule]);

  return (
    <PageTransitionContext.Provider value={{ phase, animatedPath, navigateWithTransition }}>
      {children}
      <div className={`page-transition-curtain page-transition-curtain--${phase}`} aria-hidden="true" />
    </PageTransitionContext.Provider>
  );
};
