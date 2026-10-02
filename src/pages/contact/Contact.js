import './Contact.css';

const Contact = () => (
  <main className="contact-page">
    <section className="contact-hero container">
      <span className="section-kicker">CONTACTO</span>
      <h1>Contanos qué le pasa a tu <span>equipo.</span></h1>
      <p>Comunicate con nosotros para recibir orientación y coordinar la revisión de tu computadora.</p>
    </section>

    <section className="contact-details container" aria-label="Información de contacto">
      <article className="contact-card contact-card-primary">
        <span className="contact-icon" aria-hidden="true">↗</span>
        <span className="contact-label">LLAMANOS</span>
        <h2>Hablemos de tu reparación</h2>
        <p>Contanos qué problema tiene tu computadora y te orientamos sobre los próximos pasos.</p>
        <a className="button button-primary" href="tel:+543812012118">(+54) 381 201 2118 <span aria-hidden="true">↗</span></a>
      </article>
      <article className="contact-card">
        <span className="contact-icon" aria-hidden="true">⌖</span>
        <span className="contact-label">DÓNDE ESTAMOS</span>
        <h2>San Miguel de Tucumán</h2>
        <p>Coronel Zelaya 451<br />San Miguel de Tucumán, Tucumán</p>
        <span className="contact-detail-note">Atención en el taller</span>
      </article>
      <article className="contact-card">
        <span className="contact-icon" aria-hidden="true">◷</span>
        <span className="contact-label">HORARIOS</span>
        <h2>Cuando podés encontrarnos</h2>
        <p>Lunes a viernes<br /><strong>09:00 a 20:00</strong></p>
        <p>Sábados<br /><strong>09:00 a 13:00</strong></p>
      </article>
    </section>
  </main>
);

export default Contact;
