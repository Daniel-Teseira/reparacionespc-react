import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Error404 from './pages/error/Error404';
import Contact from './pages/contact/Contact';
import ServicePage from './components/services/ServicePage';
import RouteFocus from './components/RouteFocus';
import Seo from './components/Seo';
import { services } from './data/services';

export default function App() {
  const { pathname } = useLocation();
  return <>
    <a className="skip-link" href="#main-content">Saltar al contenido</a>
    <Seo />
    <RouteFocus />
    <NavBar />
    <div key={pathname} className="route-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {services.map((service) => <Route key={service.id} path={service.path} element={<ServicePage service={service} />} />)}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
    <Footer />
  </>;
}
