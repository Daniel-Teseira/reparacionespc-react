import TransitionLink from '../TransitionLink/TransitionLink';
import './Footer.css';
import { business, whatsappUrl } from '../../data/business';
import { services } from '../../data/services';

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
          {services.filter((service) => [3, 5, 8, 15].includes(service.id)).map((service) => <TransitionLink key={service.id} to={service.path}>{service.title}</TransitionLink>)}
        </div>
        <div className="footer-column footer-contact">
          <h3>Contacto</h3>
          <a href={`tel:${business.phone}`}>{business.phoneLabel}</a>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{business.street}, {business.city}</a>
          <span>{business.hours}</span>
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
