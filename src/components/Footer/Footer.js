import TransitionLink from '../TransitionLink/TransitionLink';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-cta">
        <div>
          <span className="footer-kicker">¿EMPEZAMOS?</span>
          <h2>Estamos para ayudarte con tu equipo.</h2>
        </div>
        <TransitionLink className="button footer-button" to="/contact">Contactar al técnico <span aria-hidden="true">↗</span></TransitionLink>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <TransitionLink className="footer-brand" to="/home"><span className="brand-mark" aria-hidden="true">⌘</span> Reparaciones PC</TransitionLink>
          <p>Servicio técnico, mantenimiento y soporte para que tu computadora siga tu ritmo.</p>
        </div>
        <div className="footer-column">
          <h3>Servicios</h3>
          <TransitionLink to="/reparacion-de-pc">Reparación de PC</TransitionLink>
          <TransitionLink to="/limpieza-mantenimiento">Mantenimiento</TransitionLink>
          <TransitionLink to="/recuperacion-datos">Recuperación de datos</TransitionLink>
          <TransitionLink to="/soporte-remoto">Soporte remoto</TransitionLink>
        </div>
        <div className="footer-column footer-contact">
          <h3>Contacto</h3>
          <a href="tel:+543815694570">(+54) 381 569 4570</a>
          <span>San Miguel de Tucumán</span>
          <span>Lun. a vie. 09 a 20 · Sáb. 09 a 13</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Reparaciones PC</span>
        <span>Atención técnica con claridad y confianza.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
