import TransitionLink from '../TransitionLink/TransitionLink';
import './ServicePage.css';

const ServicePage = ({ service }) => {
  const { image, title, description, sections, note } = service;

  return (
  <main className="service-page">
    <section className="service-hero">
      <img className="service-hero-image" src={image} alt="" />
      <div className="service-hero-shade" />
      <div className="container service-hero-inner">
        <div className="service-hero-copy">
          <span className="service-eyebrow"><i /> Servicio técnico especializado</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>

    <div className="container service-content">
      <div className="service-content-main">
        {sections.map((section, index) => (
          <section className="service-detail-card" key={section.title}>
            <div className="service-detail-heading">
              <span className="service-detail-number">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
            </div>
            {section.description && <p className="service-detail-description">{section.description}</p>}
            {section.items && (
              <ul className="service-detail-list">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
        {note && <p className="service-note"><span aria-hidden="true">✓</span>{note}</p>}
      </div>

      <aside className="service-contact-card">
        <span className="service-contact-label">¿NECESITÁS AYUDA?</span>
        <h2>Revisamos tu caso y te orientamos.</h2>
        <p>Contanos qué necesita tu computadora y coordinamos los próximos pasos.</p>
        <TransitionLink className="service-contact-button" to="/contact">Consultar servicio <span aria-hidden="true">↗</span></TransitionLink>
        <span className="service-contact-foot">Atención técnica personalizada</span>
      </aside>
    </div>
  </main>
  );
};

export default ServicePage;
