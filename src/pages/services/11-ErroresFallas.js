import img from '../../images/services/11/Google_AI_Studio_2025-07-29T12_13_20.663Z.png';
import '../home/components/Style.css';

const ErroresFallas = () => {
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
            🚨 Errores o Fallas del Equipo
          </h1>
          <p class='text-gray-700 mb-4'>
            Solucionamos todo tipo de fallas de hardware o software que impidan el correcto funcionamiento de tu computadora.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Diagnóstico completo de fallas intermitentes o permanentes.</li>
            <li>Revisión de sistema, disco, memoria y conexiones.</li>
            <li>Reparación de errores del sistema operativo.</li>
            <li>Cambio de configuraciones conflictivas.</li>
            <li>Pruebas de estrés y monitoreo post-reparación.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Detectamos y solucionamos errores que muchos técnicos no encuentran fácilmente.
          </p>
        </section>
    </section>
  </>
  );
};

export default ErroresFallas;
