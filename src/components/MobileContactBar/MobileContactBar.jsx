import { useLocation } from 'react-router-dom';
import { business, whatsappUrl } from '../../data/business';
import { serviceAtPath } from '../../data/services';
import './MobileContactBar.css';

// Accesos fijos a WhatsApp y llamada en pantallas chicas. En /contact no se muestra
// porque la página ya presenta esos mismos accesos al principio.
export default function MobileContactBar() {
  const { pathname } = useLocation();
  if (pathname.replace(/\/+$/, '') === '/contact') return null;
  const service = serviceAtPath(pathname);
  const message = service ? `Hola, quiero consultar por el servicio de ${service.title}.` : undefined;

  return (
    <div className="mobile-contact-bar" role="region" aria-label="Contacto rápido">
      <a className="mobile-contact-whatsapp" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M4 18.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg> WhatsApp
      </a>
      <a className="mobile-contact-call" href={`tel:${business.phone}`}>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M6.6 3.5h2.8l1.4 4.2-2 1.3a12 12 0 0 0 6.2 6.2l1.3-2 4.2 1.4v2.8a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg> Llamar
      </a>
    </div>
  );
}
