import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { services } from '../../data/services';
import './NavBar.css';

const HOVER_DESKTOP = '(min-width: 992px) and (hover: hover) and (pointer: fine)';

const NavBar = () => {
  const { pathname, key } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const servicesToggleRef = useRef(null);
  const servicesItemRef = useRef(null);
  const closeNav = () => { setIsServicesOpen(false); setIsMobileNavOpen(false); };

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileNavOpen(false);
  }, [key]);

  // Cerrar el menú de servicios cuando el foco sale de él (por ejemplo, con Tab).
  // Se usa `focusout` nativo porque en Preact `onBlur` no se propaga desde los hijos.
  useEffect(() => {
    const item = servicesItemRef.current;
    const closeOnFocusOut = (event) => { if (!item.contains(event.relatedTarget)) setIsServicesOpen(false); };
    item.addEventListener('focusout', closeOnFocusOut);
    return () => item.removeEventListener('focusout', closeOnFocusOut);
  }, []);

  useEffect(() => {
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setIsServicesOpen(false);
        setIsMobileNavOpen(false);
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  return (
  <>
    <div className="top-contact-bar"><span>Soluciones confiables para tu computadora</span></div>
    <header ref={headerRef} className={`site-navbar${isScrolled ? ' is-scrolled' : ''}`}
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return;
        event.preventDefault();
        if (isServicesOpen) { setIsServicesOpen(false); servicesToggleRef.current?.focus(); }
        else if (isMobileNavOpen) { setIsMobileNavOpen(false); mobileToggleRef.current?.focus(); }
      }}>
      <nav className="navbar navbar-expand-lg" aria-label="Navegación principal">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNav}>
            <span className="brand-mark" aria-hidden="true">⌘</span>
            Reparaciones PC
          </Link>

          <button
            ref={mobileToggleRef}
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
                <Link className="nav-link" to="/" onClick={closeNav} aria-current={['/', '/home'].includes(pathname) ? 'page' : undefined}>Inicio</Link>
              </li>
              <li
                ref={servicesItemRef}
                className={`nav-item nav-services${isServicesOpen ? ' is-open' : ''}`}
                onPointerEnter={() => window.matchMedia(HOVER_DESKTOP).matches && setIsServicesOpen(true)}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse' && window.matchMedia(HOVER_DESKTOP).matches) setIsServicesOpen(false);
                }}
              >
                <button
                  ref={servicesToggleRef}
                  className="nav-link services-toggle"
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-mega-menu"
                  onClick={(event) => {
                    // Con mouse en escritorio el menú ya se abrió al pasar el cursor: el clic no debe cerrarlo.
                    // El teclado (detail === 0) y las pantallas táctiles siguen alternando.
                    if (event.detail > 0 && window.matchMedia(HOVER_DESKTOP).matches) setIsServicesOpen(true);
                    else setIsServicesOpen((open) => !open);
                  }}
                >
                  Servicios <span className="services-chevron" aria-hidden="true" />
                </button>
                <div
                  className={`services-mega-menu${isServicesOpen ? ' is-open' : ''}`}
                  id="services-mega-menu"
                  hidden={!isServicesOpen}
                >
                  <div className="services-menu-heading">
                    <div>
                      <span>ASISTENCIA PARA TU EQUIPO</span>
                      <h2>¿Qué necesitás resolver?</h2>
                    </div>
                    <Link className="services-menu-all" to="/?servicios=todos#servicios" onClick={closeNav}>Ver todos <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="services-menu-grid">
                    {services.map((service) => (
                      <Link key={service.id} className="services-menu-link" to={service.path} onClick={closeNav} aria-current={pathname.replace(/\/+$/, '') === service.path ? 'page' : undefined}>
                        <span className="services-menu-mark" aria-hidden="true">↗</span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-contact-button" to="/contact" onClick={closeNav} aria-current={pathname === '/contact' ? 'page' : undefined}>Contactar <span aria-hidden="true">↗</span></Link>
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
