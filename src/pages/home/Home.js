import './Home.css';

import Carrusel from './components/Carrusel';
import Servicios from '../../components/cards/Servicios';
import Contacto from './components/Contacto';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
// import ComoTrabajamos from './components/ComoTrabajamos';
// import SpeedTest from './components/SpeedTest';
// import PorqueElegirnos from './components/PorqueElegirnos';

const Home = () => {
  return (
    <>    
      <Carrusel/>
      <Servicios/>

      <PreguntasFrecuentes/>
      <Contacto/>      
      {/* <ComoTrabajamos/> */}
      
      {/* <SpeedTest/> */}
      {/* <PorqueElegirnos/> */}

          
      {/*agregar:
    https://visiontecnologica.com.ar/licencias-de-software/
    https://visiontecnologica.com.ar/cableado-de-redes/
    https://visiontecnologica.com.ar/soporte-tecnico-de-pc/

    importante:
    https://www.reparacionesdecomputadoras.com.ar/servicios/ (se agrego, falta pagina servicio por servicio)

    https://visiontecnologica.com.ar/mantenimiento-de-computadoras/
    https://visiontecnologica.com.ar/abonos-de-redes-para-empresas/

    https://www.supertek.com.ar/

    https://www.coninfopc.com.ar/#servicios

    https://www.tecnicosdepcs.com.ar/servicios.php
    https://www.tecnicosdepcs.com.ar/tecnico-de-pc.php
    https://www.tecnicosdepcs.com.ar/mantenimiento-de-pc.php
    https://www.tecnicosdepcs.com.ar/reparacion-de-pc.php

    https://www.graytech.com.ar/
    https://www.graytech.com.ar/otros-servicios/

    https://www.pcserviciotecnico.com/remocion-de-virus
    https://www.pcserviciotecnico.com/instalacion-de-aplicaciones
    https://www.pcserviciotecnico.com/antivirus
    https://www.pcserviciotecnico.com/recuperacion-de-datos
    https://www.pcserviciotecnico.com/sistemas-operativos
    https://www.pcserviciotecnico.com/copia-de-seguridad*/}
    </>
  );
};

export default Home;
