// https://visiontecnologica.com.ar/soporte-tecnico-de-pc/
// https://visiontecnologica.com.ar/mantenimiento-de-computadoras/
// https://www.tecnicosdepcs.com.ar/mantenimiento-de-pc.php
// https://www.tecnicosdepcs.com.ar/reparacion-de-pc.php
// https://www.graytech.com.ar/reparacion-de-notebook-servicio-tecnico-notebook/
// https://www.graytech.com.ar/reparacion-de-pc-servicio-tecnico-pc/

import img from '../../images/services/5/image.png';
import '../home/components/Style.css';

const ReparacionGeneral = () => {
  return (
    <>  
      <section class='position-relative'>
        <img  
          src={img}
          alt='Reparación General' 
          class='w-100 img-fluid imagen'
        />

        <section class='position-absolute top-0 end-0 cardInfo'>
          <h1 class='text-3xl font-bold text-blue-800 mb-6'>
          🛠️ Reparación General de Equipos
          </h1>
          <p class='text-gray-700 mb-4'>
            Diagnóstico completo de computadoras y notebooks ante fallas técnicas o bajo rendimiento. Seguimos un protocolo propio para aislar y resolver el problema.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔍 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Diagnóstico detallado de hardware y software.</li>
            <li>Reparación de componentes dañados (placa madre, disco duro, memoria RAM).</li>
            <li>Actualización de sistemas operativos y controladores.</li>
            <li>Optimización del rendimiento general del equipo.</li>
            <li>Recuperación de datos en caso de fallos críticos.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Servicio ideal para prolongar la vida útil de tu equipo y evitar gastos innecesarios en nuevos dispositivos.
          </p>
        </section>         
      </section>
    </>
  );
};

export default ReparacionGeneral;