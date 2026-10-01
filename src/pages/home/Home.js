import TransitionLink from '../../components/TransitionLink/TransitionLink';
import './Home.css';
import Servicios from '../../components/cards/Servicios';
import tallerPc from '../../images/carrusel/pc2.png';

const Home = () => (
  <main className="home-page">
    <section className="hero container">
      <div className="hero-copy">
        <span className="eyebrow"><span className="status-dot" /> Servicio técnico de PC y notebooks</span>
        <h1>Tu equipo vuelve a <span>funcionar.</span></h1>
        <p className="hero-description">
          Diagnóstico claro, soluciones confiables y atención personalizada para que vuelvas a trabajar, estudiar o jugar sin interrupciones.
        </p>
        <div className="hero-actions">
          <TransitionLink className="button button-primary" to="/contact">Solicitar asistencia <span aria-hidden="true">↗</span></TransitionLink>
          <a className="button button-quiet" href="#servicios">Explorar servicios <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-proof">
          <span className="proof-mark" aria-hidden="true">✓</span>
          <p><strong>Atención cercana</strong><br />Te explicamos cada paso y cada opción.</p>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src={tallerPc} alt="Técnica revisando una computadora en el taller" />
        </div>
        <div className="hero-float-card">
          <span className="float-icon" aria-hidden="true">⌘</span>
          <span><strong>Diagnóstico</strong><small>Hardware y software</small></span>
          <span className="float-check" aria-hidden="true">✓</span>
        </div>
        <div className="hero-corner-note">REPARACIÓN <span>·</span> MANTENIMIENTO <span>·</span> SOPORTE</div>
      </div>
    </section>

    <section className="trust-strip" aria-label="Áreas de servicio">
      <div className="container trust-strip-inner">
        <span>Hardware</span><i />
        <span>Software</span><i />
        <span>Redes</span><i />
        <span>Soporte remoto</span>
      </div>
    </section>

    <Servicios />
  </main>
);

export default Home;
