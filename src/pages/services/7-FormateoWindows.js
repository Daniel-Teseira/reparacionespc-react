import img from '../../images/services/7/Google_AI_Studio_2025-07-28T15_32_06.870Z.png';
import '../home/components/Style.css';

const FormateoWindows = () => {
  return (
    <>
    <section class='position-relative'>
      <img  
        src={img}
        alt='Formateo e Instalación de Windows' 
        class='w-100 img-fluid imagen'
      />

      <section class='position-absolute top-0 end-0 cardInfo'>
        <h1 class='text-3xl font-bold text-blue-800 mb-6'>
        💽 Formateo e Instalación de Windows
        </h1>
        <p class='text-gray-700 mb-4'>
          Servicio completo de formateo e instalación del sistema operativo Windows, con o sin conservación de tus archivos personales.
        </p>
      </section>

      <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
        <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
        <ul class='list-disc pl-6 text-gray-700 mb-4'>
          <li>Respaldo previo de datos (si se solicita).</li>
          <li>Formateo seguro del disco principal.</li>
          <li>Instalación de Windows con activación.</li>
          <li>Instalación de drivers esenciales.</li>
          <li>Instalación de programas requeridos por el cliente.</li>
        </ul>
        <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
          Tu computadora queda como nueva, optimizada y lista para usar, con todos los programas que necesites.
        </p>     
      </section>
  </section>
    </>
  );
};

export default FormateoWindows;