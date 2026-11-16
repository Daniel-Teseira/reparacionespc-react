import './App.css';
import { useLocation } from './router';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Error404 from './pages/error/Error404';
import Contact from './pages/contact/Contact';
import ServicePage from './components/services/ServicePage';
import RouteFocus from './components/RouteFocus';
import Seo from './components/Seo';
import MobileContactBar from './components/MobileContactBar/MobileContactBar';
import { serviceAtPath } from './data/services';

// Rutas fijas: inicio (también /home, que nginx redirige), contacto, un servicio por slug y 404.
// Se aceptan con o sin barra final, igual que en el servidor.
function pageFor(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/home') return <Home />;
  if (path === '/contact') return <Contact />;
  const service = serviceAtPath(path);
  return service ? <ServicePage service={service} /> : <Error404 />;
}

export default function App() {
  const { pathname } = useLocation();
  return <>
    <a className="skip-link" href="#main-content">Saltar al contenido</a>
    <Seo />
    <RouteFocus />
    <NavBar />
    <div key={pathname} className="route-content">
      {pageFor(pathname)}
    </div>
    <Footer />
    <MobileContactBar />
  </>;
}
