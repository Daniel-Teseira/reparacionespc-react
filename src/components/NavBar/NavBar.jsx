import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TransitionLink from '../TransitionLink/TransitionLink';
import { usePageTransition } from '../../context/PageTransitionContext';
import './NavBar.css';

const servicios = [
  ['Limpieza y mantenimiento', '/limpieza-mantenimiento'],
  ['Armado de PC', '/armado-pc'],
  ['Reparación de PC', '/reparacion-de-pc'],
  ['Reemplazo de componentes', '/reemplazo-componentes'],
  ['Formateo e instalación de Windows', '/formateo-e-instalacion-de-windows'],
  ['Soporte remoto', '/soporte-remoto'],
  ['Actualización de hardware', '/actualizacion-hardware'],
  ['Eliminación de virus', '/eliminacion-de-virus'],
  ['Errores y fallas', '/errores-fallas'],
  ['Instalación de software', '/instalacion-software'],
  ['Instalación de drivers', '/instalacion-drivers'],
  ['Soporte de redes', '/soporte-redes'],
  ['Recuperación de datos', '/recuperacion-datos'],
  ['Planes a medida', '/planes-a-medida'],
  ['Mantenimiento de software', '/mantenimiento-software'],
  ['Soporte postventa', '/soporte-postventa'],
];

const NavBar = () => {
  const { pathname } = useLocation();
  const { animatedPath } = usePageTransition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isTransitionDestination = animatedPath === pathname;

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileNavOpen(false);
  }, [pathname]);

  return (
  <>
    <div className="top-contact-bar"><span>Soluciones confiables para tu computadora</span></div>
    <header key={pathname} className={`site-navbar${isScrolled ? ' is-scrolled' : ''}${isTransitionDestination ? ' navbar--route-transition' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <TransitionLink className="navbar-brand" to="/home">
            <span className="brand-mark" aria-hidden="true">⌘</span>
            Reparaciones PC
          </TransitionLink>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavDropdown"
            aria-expanded={isMobileNavOpen}
            aria-label={isMobileNavOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            onClick={() => {
              setIsMobileNavOpen((open) => !open);
              setIsServicesOpen(false);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`navbar-collapse justify-content-end${isMobileNavOpen ? ' is-expanded' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <TransitionLink className="nav-link" to="/home">Inicio</TransitionLink>
              </li>
              <li
                className={`nav-item nav-services${isServicesOpen ? ' is-open' : ''}`}
                onPointerEnter={() => window.matchMedia('(hover: hover) and (pointer: fine)').matches && setIsServicesOpen(true)}
                onPointerLeave={() => window.matchMedia('(hover: hover) and (pointer: fine)').matches && setIsServicesOpen(false)}
              >
                <button
                  className="nav-link services-toggle"
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-mega-menu"
                  onClick={() => {
                    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                    setIsServicesOpen((open) => hasHover ? true : !open);
                  }}
                >
                  Servicios <span className="services-chevron" aria-hidden="true" />
                </button>
                <div
                  className={`services-mega-menu${isServicesOpen ? ' is-open' : ''}`}
                  id="services-mega-menu"
                >
                  <div className="services-menu-heading">
                    <div>
                      <span>ASISTENCIA PARA TU EQUIPO</span>
                      <h2>¿Qué necesitás resolver?</h2>
                    </div>
                    <TransitionLink className="services-menu-all" to="/home#servicios">Ver todos <span aria-hidden="true">↗</span></TransitionLink>
                  </div>
                  <div className="services-menu-grid">
                    {servicios.map(([nombre, ruta]) => (
                      <TransitionLink key={ruta} className="services-menu-link" to={ruta}>
                        <span className="services-menu-mark" aria-hidden="true">↗</span>
                        {nombre}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <TransitionLink className="nav-contact-button" to="/contact">Contactar <span aria-hidden="true">↗</span></TransitionLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
  );
};

export default NavBar;
