import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TransitionLink from '../TransitionLink/TransitionLink';
import { services } from '../../data/services';
import './NavBar.css';

const NavBar = () => {
  const { pathname, key } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const headerRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const servicesToggleRef = useRef(null);
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
          <TransitionLink className="navbar-brand" to="/home" onClick={closeNav}>
            <span className="brand-mark" aria-hidden="true">⌘</span>
            Reparaciones PC
          </TransitionLink>

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
                <TransitionLink className="nav-link" to="/home" onClick={closeNav} aria-current={pathname === '/home' ? 'page' : undefined}>Inicio</TransitionLink>
              </li>
              <li
                className={`nav-item nav-services${isServicesOpen ? ' is-open' : ''}`}
                onPointerEnter={() => window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)').matches && setIsServicesOpen(true)}
                onPointerLeave={(event) => {
                  if (window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)').matches && !event.currentTarget.contains(document.activeElement)) setIsServicesOpen(false);
                }}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsServicesOpen(false); }}
              >
                <button
                  ref={servicesToggleRef}
                  className="nav-link services-toggle"
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls="services-mega-menu"
                  onClick={() => setIsServicesOpen((open) => !open)}
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
                    <TransitionLink className="services-menu-all" to="/home?servicios=todos#servicios" onClick={closeNav}>Ver todos <span aria-hidden="true">↗</span></TransitionLink>
                  </div>
                  <div className="services-menu-grid">
                    {services.map((service) => (
                      <TransitionLink key={service.id} className="services-menu-link" to={service.path} onClick={closeNav} aria-current={pathname.replace(/\/+$/, '') === service.path ? 'page' : undefined}>
                        <span className="services-menu-mark" aria-hidden="true">↗</span>
                        {service.title}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <TransitionLink className="nav-contact-button" to="/contact" onClick={closeNav} aria-current={pathname === '/contact' ? 'page' : undefined}>Contactar <span aria-hidden="true">↗</span></TransitionLink>
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
