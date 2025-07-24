import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Error from './pages/error/Error404';
import Contact from './pages/contact/Contact';
import Redes from './pages/services/14-SoporteRedes';
import ArmadoPC from './pages/services/4-ArmadoPC';
import LimpiezaMantenimiento from './pages/services/3-LimpiezaMantenimiento';
import ReparacionGeneral from './pages/services/5-ReparacionGeneral';
import ReemplazoComponentes from './pages/services/6-ReemplazoComponentes';
import FormateoWindows from './pages/services/7-FormateoWindows';
import SoporteRemoto from './pages/services/8-SoporteRemoto';
import EliminacionVirus from './pages/services/10-EliminacionVirus';
import ErroresFallas from './pages/services/11-ErroresFallas';
import InstalacionSoftware from './pages/services/12-InstalacionSoftware';
import ConfiguracionDrivers from './pages/services/13-ConfiguracionDrivers';
import RecuperacionDatos from './pages/services/15-RecuperacionDatos';
import PlanesMedida from './pages/services/16-PlanesMedida';
import MantenimientoSoftware from './pages/services/17-MantenimientoSoftware';
import SoportePostVenta from './pages/services/18-SoportePostVenta';
import ActualizacionHardware from './pages/services/9-ActualizacionHardware';

function App() {
  return (
    <>
      <NavBar name='nav'/> 
     <Routes>
        <Route index element={<Navigate to='/home' />} />
        <Route path='/home' element={ <Home /> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='*' element={ <Error/>} />
        <Route path='/contact' element={ <Contact/> }/>  

        <Route path='/soporte-redes' element={ <Redes/> }/> 
        <Route path='/armado-pc' element={ <ArmadoPC/> }/>  
        <Route path='/limpieza-mantenimiento' element={ <LimpiezaMantenimiento/> }/>
        <Route path='/reparacion-de-pc' element={ <ReparacionGeneral/> }/>
        <Route path='/reemplazo-componentes' element={ <ReemplazoComponentes/> }/>
        <Route path='/formateo-e-instalacion-de-windows' element={ <FormateoWindows/> }/>
        <Route path='/soporte-remoto' element={ <SoporteRemoto/> }/>
        <Route path='/eliminacion-de-virus' element={ <EliminacionVirus/> }/>
        <Route path='/errores-fallas' element={ <ErroresFallas/> }/>
        <Route path='/instalacion-software' element={ <InstalacionSoftware/> }/>
        <Route path='/instalacion-drivers' element={ <ConfiguracionDrivers/> }/>
        <Route path='/recuperacion-datos' element={ <RecuperacionDatos/> }/>
        <Route path='/planes-a-medida' element={ <PlanesMedida/> }/>
        <Route path='/mantenimiento-software' element={ <MantenimientoSoftware/> }/>
        <Route path='/soporte-postventa' element={ <SoportePostVenta/> }/>
        <Route path='/actualizacion-hardware' element={ <ActualizacionHardware/> }/>
        
      </Routes> 

      <Footer/>
    </>
  );
}

export default App;
