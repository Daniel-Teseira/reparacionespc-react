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

    <div className="container service-content-layout">
      <section className="service-content-main">
        <div className="service-content-heading">
          <span>EL ALCANCE DEL SERVICIO</span>
          <h2>Una solución clara,<br />desde la primera revisión.</h2>
        </div>

        <div className={`service-detail-grid${sections.length === 1 ? ' service-detail-grid--single' : ''}`}>
          {sections.map((section, index) => (
            <article className="service-detail-card" key={section.title}>
              <div className="service-detail-card-heading">
                <span className="service-detail-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="service-detail-kicker">{index === 0 ? 'INCLUIDO EN EL SERVICIO' : 'ÁREA DE TRABAJO'}</span>
              </div>
              <h3>{section.title}</h3>
              {section.description && <p className="service-detail-description">{section.description}</p>}
              {section.items && (
                <ul className="service-detail-items">
                  {section.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
                </ul>
              )}
            </article>
          ))}
        </div>

        {note && <p className="service-note"><span aria-hidden="true">✦</span>{note}</p>}
      </section>

      <aside className="service-contact-card">
        <span className="service-contact-icon" aria-hidden="true">⌘</span>
        <span className="service-contact-label">¿NECESITÁS AYUDA?</span>
        <h2>Revisamos tu caso y te orientamos.</h2>
        <p>Contanos qué necesita tu computadora y coordinamos los próximos pasos.</p>
        <TransitionLink className="service-contact-button" to="/contact">Consultar servicio <span aria-hidden="true">↗</span></TransitionLink>
        <span className="service-contact-foot"><i /> Atención técnica personalizada</span>
      </aside>
    </div>
  </main>
  );
};

export default ServicePage;
