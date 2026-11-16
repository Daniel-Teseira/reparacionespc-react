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
        <span aria-hidden="true">↗</span> WhatsApp
      </a>
      <a className="mobile-contact-call" href={`tel:${business.phone}`}>
        <span aria-hidden="true">✆</span> Llamar
      </a>
    </div>
  );
}
