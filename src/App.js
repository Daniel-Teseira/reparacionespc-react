import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Error from './pages/error/Error404';
import Contact from './pages/contact/Contact';
import ServicePage from './components/services/ServicePage';
import { serviceDetails } from './data/serviceDetails';
import { PageTransitionProvider } from './context/PageTransitionContext';

function App() {
  const { pathname } = useLocation();

  return (
    <PageTransitionProvider>
      <NavBar name="nav" />
      <div key={pathname} className="route-content">
        <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={ <Home /> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='*' element={ <Error/>} />
        <Route path='/contact' element={ <Contact/> }/>  

        <Route path='/soporte-redes' element={<ServicePage service={serviceDetails[14]} />} />
        <Route path='/armado-pc' element={<ServicePage service={serviceDetails[4]} />} />
        <Route path='/limpieza-mantenimiento' element={<ServicePage service={serviceDetails[3]} />} />
        <Route path='/reparacion-de-pc' element={<ServicePage service={serviceDetails[5]} />} />
        <Route path='/reemplazo-componentes' element={<ServicePage service={serviceDetails[6]} />} />
        <Route path='/formateo-e-instalacion-de-windows' element={<ServicePage service={serviceDetails[7]} />} />
        <Route path='/soporte-remoto' element={<ServicePage service={serviceDetails[8]} />} />
        <Route path='/eliminacion-de-virus' element={<ServicePage service={serviceDetails[10]} />} />
        <Route path='/errores-fallas' element={<ServicePage service={serviceDetails[11]} />} />
        <Route path='/instalacion-software' element={<ServicePage service={serviceDetails[12]} />} />
        <Route path='/instalacion-drivers' element={<ServicePage service={serviceDetails[13]} />} />
        <Route path='/recuperacion-datos' element={<ServicePage service={serviceDetails[15]} />} />
        <Route path='/planes-a-medida' element={<ServicePage service={serviceDetails[16]} />} />
        <Route path='/mantenimiento-software' element={<ServicePage service={serviceDetails[17]} />} />
        <Route path='/soporte-postventa' element={<ServicePage service={serviceDetails[18]} />} />
        <Route path='/actualizacion-hardware' element={<ServicePage service={serviceDetails[9]} />} />
        
        </Routes>
      </div>
      <Footer />
    </PageTransitionProvider>
  );
}

export default App;
