import img from '../../images/services/13/Google_AI_Studio_2025-07-29T15_42_44.247Z.png';
import '../home/components/Style.css';

const ConfiguracionDrivers = () => {
  return (
    <>
      <section class='position-relative' >
        <img
          src={img}
          alt='Limpieza y Mantenimiento'
          class='w-100 img-fluid imagen'          
        />

        <section
          class='position-absolute top-0 end-0 cardInfo'          
        >
          <h1 class='text-3xl font-bold text-blue-800 mb-6'>
            🔌 Configuración e Instalación de Drivers
          </h1>
          <p class='text-gray-700 mb-4'>
            Realizamos la instalación y configuración precisa de los drivers necesarios para que todos los dispositivos de tu computadora funcionen correctamente.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Detección automática de hardware y componentes.</li>
            <li>Instalación de drivers originales o compatibles.</li>
            <li>Configuración personalizada para maximizar el rendimiento.</li>
            <li>Actualización de drivers existentes para mejorar estabilidad.</li>
            <li>Solución de conflictos o errores relacionados con drivers.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Mantén tus dispositivos funcionando al máximo con controladores actualizados y configurados.
          </p>
        </section>
      </section>
    </>
  );
};

export default ConfiguracionDrivers;
