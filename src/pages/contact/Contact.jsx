import './Contact.css';
import { useSearchParams } from 'react-router-dom';
import { business, whatsappUrl } from '../../data/business';
import { services } from '../../data/services';
import ContactForm from '../../components/ContactForm';
import useHydrated from '../../utils/useHydrated';

const Contact = () => {
  const [params] = useSearchParams();
  const hydrated = useHydrated();
  const service = hydrated ? services.find((item) => item.slug === params.get('servicio')) : undefined;
  const message = service ? `Hola, quiero consultar por el servicio de ${service.title}.` : undefined;
  return (
  <main className="contact-page" id="main-content" tabIndex={-1}>
    <section className="contact-hero container">
      <span className="section-kicker">CONTACTO</span>
      <h1>Contanos qué le pasa a tu <span>equipo.</span></h1>
      <p>Comunicate con nosotros para recibir orientación y coordinar la revisión de tu computadora.</p>
    </section>

    <section className="contact-details container" aria-label="Información de contacto">
      <article className="contact-card contact-card-primary">
        <span className="contact-icon" aria-hidden="true">↗</span>
        <span className="contact-label">HABLEMOS</span>
        <h2>Hablemos de tu reparación</h2>
        <p>Contanos qué problema tiene tu computadora y te orientamos sobre los próximos pasos.</p>
        <a className="button button-primary" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
        <a className="contact-phone" href={`tel:${business.phone}`}>Llamar al {business.phoneLabel}</a>
      </article>
      <article className="contact-card">
        <span className="contact-icon" aria-hidden="true">⌖</span>
        <span className="contact-label">DÓNDE ESTAMOS</span>
        <h2>{business.city}</h2>
        <p>{business.street}<br />{business.city}, {business.region}</p>
        <a className="button button-quiet" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a>
      </article>
      <article className="contact-card">
        <span className="contact-icon" aria-hidden="true">◷</span>
        <span className="contact-label">HORARIOS</span>
        <h2>Cuando podés encontrarnos</h2>
        <p>Lunes a viernes<br /><strong>09:00 a 20:00</strong></p>
        <p>Sábados<br /><strong>09:00 a 13:00</strong></p>
      </article>
    </section>
    <section className="contact-form-section container" aria-label="Consulta por WhatsApp">
      <ContactForm key={service?.slug || 'general'} service={service?.slug || ''} />
      <aside className="contact-before-visit">
        <span className="section-kicker">ANTES DE LA REVISIÓN</span>
        <h2>Coordinemos los detalles.</h2>
        <p>Consultanos la disponibilidad y las condiciones del diagnóstico antes de acercarte.</p>
        <p>El presupuesto, los tiempos estimados y las condiciones de garantía se coordinan según el caso. Si necesitás conservar archivos, avisalo al solicitar la revisión.</p>
      </aside>
    </section>
  </main>
  );
};

export default Contact;
