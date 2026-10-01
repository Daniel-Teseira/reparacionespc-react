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
  const isTransitionDestination = animatedPath === pathname;

  return (
  <>
    <div className="top-contact-bar"><span>Soluciones confiables para tu computadora</span></div>
    <header key={pathname} className={`site-navbar${isTransitionDestination ? ' navbar--route-transition' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <TransitionLink className="navbar-brand" to="/home">
            <span className="brand-mark" aria-hidden="true">⌘</span>
            Reparaciones PC
          </TransitionLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Abrir navegación"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <TransitionLink className="nav-link" to="/home">Inicio</TransitionLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/home#servicios">Servicios</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#servicios" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Todos los servicios
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {servicios.map(([nombre, ruta]) => (
                    <li key={ruta}>
                      <TransitionLink className="dropdown-item" to={ruta}>{nombre}</TransitionLink>
                    </li>
                  ))}
                </ul>
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
