import { useState } from 'react';
import { services } from '../data/services';
import { whatsappUrl } from '../data/business';

export default function ContactForm({ service = '' }) {
  const [prepared, setPrepared] = useState(null);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('nombre').trim();
    const message = data.get('mensaje').trim();
    if (name.length < 2 || message.length < 10) {
      setError('Ingresá tu nombre y describí el problema con al menos 10 caracteres.');
      return;
    }
    const selected = services.find((item) => item.slug === data.get('servicio'));
    const lines = [
      `Hola, soy ${name}.`,
      `Consulta: ${selected?.title || 'Asistencia general'}.`,
      data.get('email').trim() && `Email de contacto: ${data.get('email').trim()}`,
      data.get('telefono').trim() && `Teléfono de contacto: ${data.get('telefono').trim()}`,
      '', message,
    ].filter((line) => line !== false && line !== undefined);
    setError('');
    setPrepared(whatsappUrl(lines.join('\n')));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} onInput={() => { setPrepared(null); setError(''); }} aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading">Prepará tu consulta</h2>
      <p id="contact-form-help">Completá los datos y revisá el mensaje en WhatsApp antes de enviarlo. Este formulario no guarda tus datos ni envía mensajes automáticamente.</p>
      <div className="contact-form-fields">
        <div className="contact-field">
          <label htmlFor="contact-name">Nombre <span>(obligatorio)</span></label>
          <input id="contact-name" name="nombre" autoComplete="given-name" required minLength={2} maxLength={80} />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-service">Servicio</label>
          <select id="contact-service" name="servicio" defaultValue={service}>
            <option value="">No sé qué necesita mi equipo</option>
            {services.map((item) => <option key={item.id} value={item.slug}>{item.title}</option>)}
          </select>
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email">Email <span>(opcional)</span></label>
          <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={120} />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-phone">Teléfono <span>(opcional)</span></label>
          <input id="contact-phone" name="telefono" type="tel" autoComplete="tel" maxLength={30} />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-message">¿Qué le pasa al equipo? <span>(obligatorio)</span></label>
          <textarea id="contact-message" name="mensaje" required minLength={10} maxLength={2000} rows={5} aria-describedby="contact-message-help" />
          <small id="contact-message-help">Podés indicar el modelo, cuándo empezó la falla y qué estabas haciendo. No incluyas contraseñas.</small>
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary" type="submit">Preparar consulta por WhatsApp <span aria-hidden="true">↗</span></button>
      {prepared && <div className="form-result" role="status">
        <p>Tu consulta está preparada. Abrí WhatsApp, revisá el mensaje y confirmá el envío allí.</p>
        <a className="button button-primary" href={prepared} target="_blank" rel="noopener noreferrer">Abrir WhatsApp y revisar mensaje <span aria-hidden="true">↗</span></a>
        <small>Si no abre, podés llamarnos desde los datos de contacto.</small>
      </div>}
    </form>
  );
}
