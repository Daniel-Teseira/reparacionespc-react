import img from '../../images/services/17/Google_AI_Studio_2025-07-29T15_48_27.691Z.png';
import '../home/components/Style.css';

const MantenimientoSoftware = () => {
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
            🧰 Mantenimiento de Software y Antivirus
          </h1>
          <p class='text-gray-700 mb-4'>
            Realizamos limpiezas profundas y optimizaciones para mantener tu sistema operativo y antivirus funcionando con máxima eficiencia.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Eliminación de archivos basura y temporales.</li>
            <li>Actualización y configuración de antivirus.</li>
            <li>Optimización del sistema para mejorar velocidad.</li>
            <li>Corrección de errores y conflictos de software.</li>
            <li>Asesoramiento para mantener el equipo protegido.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Mantén tu computadora segura y funcionando al máximo rendimiento.
          </p>
        </section>
      </section>
    </>
  );
};

export default MantenimientoSoftware;
