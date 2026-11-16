import { useEffect, useState } from 'react';
import { Link } from '../../router';
import './Home.css';
import Servicios from '../../components/cards/Servicios';
import images from '../../data/images.json';
import ResponsiveImage from '../../components/ResponsiveImage';
import HomeInfo from './components/HomeInfo';

const heroImages = [
  { ...images['hero-pc2'], alt: 'Servicio técnico de computadoras' },
  { ...images['hero-pc1'], alt: 'Reparación y mantenimiento de PC' },
  { ...images['hero-redes1'], alt: 'Instalación y soporte de redes' },
  { ...images['hero-redes2'], alt: 'Trabajo técnico en redes' },
];

const Home = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  // Solo se descargan la imagen visible y la siguiente; las demás se agregan a medida que el carrusel avanza.
  const [mounted, setMounted] = useState(() => new Set([0]));

  useEffect(() => {
    if (!mounted.has(activeImage)) {
      setMounted((current) => new Set(current).add(activeImage));
      return undefined;
    }
    if (paused || reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const next = (activeImage + 1) % heroImages.length;
    if (mounted.has(next)) return undefined;
    // Esperar a que termine la carga inicial para no competir con el contenido principal.
    const schedule = () => setMounted((current) => new Set(current).add(next));
    if (document.readyState === 'complete') { schedule(); return undefined; }
    window.addEventListener('load', schedule, { once: true });
    return () => window.removeEventListener('load', schedule);
  }, [activeImage, paused, reduceMotion, mounted]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [paused, reduceMotion]);

  return (
  <main className="home-page" id="main-content" tabIndex={-1}>
    <section className="hero-section">
      <div className="hero-ambient" aria-hidden="true">
        {heroImages.map((image, index) => mounted.has(index) && (
          <ResponsiveImage
            key={image.src}
            className={index === activeImage ? 'is-active' : ''}
            image={image}
            sizes="(max-width: 650px) 100vw, 50vw"
            alt=""
          />
        ))}
      </div>
      <div className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> Servicio técnico de PC y notebooks</span>
          <h1>Tu equipo vuelve a <span>funcionar.</span></h1>
          <p className="hero-description">
            Diagnóstico claro, soluciones confiables y atención personalizada para que vuelvas a trabajar, estudiar o jugar sin interrupciones.
          </p>
          <p className="hero-location">Atención en San Miguel de Tucumán y soporte remoto.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact">Solicitar asistencia <span aria-hidden="true">↗</span></Link>
            <a className="button button-quiet" href="#servicios">Explorar servicios <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof">
            <span className="proof-mark" aria-hidden="true">✓</span>
            <p><strong>Atención cercana</strong><br />Te explicamos cada paso y cada opción.</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame" role="group" aria-roledescription="carrusel" aria-label="Imágenes de servicios técnicos">
            {heroImages.map((image, index) => mounted.has(index) && (
              <ResponsiveImage
                key={image.src}
                className={index === activeImage ? 'is-active' : ''}
                image={image}
                sizes="(max-width: 650px) 100vw, 50vw"
                fetchPriority={index === 0 ? 'high' : 'low'}
                alt={image.alt}
                aria-hidden={index !== activeImage}
              />
            ))}
            {!reduceMotion && <button className="carousel-control" type="button" aria-pressed={paused} onClick={() => setPaused((value) => !value)}>{paused ? 'Reanudar imágenes' : 'Pausar imágenes'}</button>}
          </div>
          <div className="hero-float-card">
            <span className="float-icon" aria-hidden="true">⌘</span>
            <span><strong>Diagnóstico</strong><small>Hardware y software</small></span>
            <span className="float-check" aria-hidden="true">✓</span>
          </div>
          <div className="hero-corner-note">REPARACIÓN <span>·</span> MANTENIMIENTO <span>·</span> SOPORTE</div>
        </div>
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
    <HomeInfo />
  </main>
  );
};

export default Home;
