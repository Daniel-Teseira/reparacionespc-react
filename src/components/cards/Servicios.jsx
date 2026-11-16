import { useSearchParams } from 'react-router-dom';
import TransitionLink from '../TransitionLink/TransitionLink';
import ResponsiveImage from '../ResponsiveImage';
import { services } from '../../data/services';
import useHydrated from '../../utils/useHydrated';

export default function Servicios() {
  const [params, setParams] = useSearchParams();
  const hydrated = useHydrated();
  const showAll = hydrated && params.get('servicios') === 'todos';

  const toggleServices = () => {
    const next = new URLSearchParams(params);
    if (showAll) next.delete('servicios');
    else next.set('servicios', 'todos');
    setParams(next, { replace: true, preventScrollReset: true });
  };

  return (
    <section className="services-section" id="servicios" tabIndex={-1} aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">QUÉ PODEMOS HACER</span>
            <h2 id="services-heading">Soluciones para que tu equipo <span>rinda mejor.</span></h2>
          </div>
          <p>Desde una limpieza preventiva hasta una reparación compleja: evaluamos la solución adecuada para vos.</p>
        </div>
        <div className="services-grid" id="services-grid">
          {services.slice(0, showAll ? services.length : 6).map((service, index) => (
            <article key={service.id} className="service-card">
              <TransitionLink className="service-card-link" to={service.path} aria-label={`Ver servicio: ${service.title}`}>
                <div className="service-card-image">
                  <ResponsiveImage image={service.cardImage} sizes="(max-width: 650px) 100vw, (max-width: 991px) 50vw, 400px" loading="lazy" />
                  <span className="service-image-index">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="service-card-content">
                  <div className="service-card-top">
                    <span className="service-icon" aria-hidden="true">{['⌘', '⚙', '⌕', '↗'][index % 4]}</span>
                    <span className="service-index">SERVICIO TÉCNICO</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="service-link" aria-hidden="true">Ver servicio <span>↗</span></span>
                </div>
              </TransitionLink>
            </article>
          ))}
        </div>
        <div className="services-show-all">
          <button className="services-show-all-button" type="button" aria-controls="services-grid" aria-expanded={showAll} onClick={toggleServices}>
            {showAll ? 'Mostrar menos' : 'Ver todos los servicios'}
            {!showAll && <span className="services-show-all-count">+{services.length - 6}</span>}
            <span className="services-show-all-chevron" aria-hidden="true">{showAll ? '↑' : '↓'}</span>
          </button>
        </div>
        <div className="services-cta">
          <div><strong>¿No sabés qué necesita tu equipo?</strong><span>Contanos qué está pasando y te orientamos.</span></div>
          <TransitionLink className="button button-primary" to="/contact">Hablemos <span aria-hidden="true">↗</span></TransitionLink>
        </div>
      </div>
    </section>
  );
}
