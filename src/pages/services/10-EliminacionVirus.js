import img from '../../images/services/10/Google_AI_Studio_2025-07-29T12_09_16.016Z.png';
import '../home/components/Style.css';

const EliminacionVirus = () => {
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
            🛡️ Eliminación de Virus, Malware y Spyware
          </h1>
          <p class='text-gray-700 mb-4'>
            Limpieza profunda de amenazas digitales que comprometen la seguridad, privacidad y velocidad de tu sistema.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Escaneo con herramientas profesionales.</li>
            <li>Eliminación de malware, spyware y adware.</li>
            <li>Revisión de configuraciones del navegador.</li>
            <li>Reforzamiento de la seguridad general del sistema.</li>
            <li>Instalación de antivirus actualizado.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Tu equipo quedará más seguro, rápido y confiable frente a amenazas digitales.
          </p>
        </section>
    </section>
  </>
  );
};

export default EliminacionVirus;
