import img from '../../images/services/12/Google_AI_Studio_2025-07-29T15_53_52.606Z.png';
import '../home/components/Style.css';

const InstalacionSoftware = () => {
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
            📦 Instalación y Actualización de Software
          </h1>
          <p class='text-gray-700 mb-4'>
            Instalamos y actualizamos programas a medida, según las necesidades del cliente: antivirus, suites de oficina, diseño, videojuegos y más.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Instalación de software original o licenciado por el cliente.</li>
            <li>Actualización de versiones anteriores.</li>
            <li>Configuración inicial y personalizada.</li>
            <li>Optimización para el hardware disponible.</li>
            <li>Soporte posterior en caso de errores.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Tu equipo contará con las últimas versiones de los programas que usás a diario, listos para funcionar sin errores.
          </p>
        </section>
      </section>

    <section class='p-6 md:p-12 max-w-4xl mx-auto'>
      
      
    </section>
    </>
  );
};

export default InstalacionSoftware;
