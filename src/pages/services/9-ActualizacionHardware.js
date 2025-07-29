import img from '../../images/services/9/Google_AI_Studio_2025-07-29T12_05_31.764Z.png';
import '../home/components/Style.css';

const ActualizacionHardware = () => {
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
            ⚙️ Actualización de Hardware
          </h1>
          <p class='text-gray-700 mb-4'>
            Reemplazamos los componentes antiguos de tu equipo por versiones más modernas y eficientes para mejorar su rendimiento.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Evaluación del hardware actual y sus limitaciones.</li>
            <li>Asesoramiento sobre nuevas piezas compatibles.</li>
            <li>Reemplazo de disco rígido por SSD, ampliación de RAM, entre otros.</li>
            <li>Instalación y prueba de nuevos componentes.</li>
            <li>Optimización del sistema para el nuevo hardware.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Dale nueva vida a tu computadora sin necesidad de comprar una nueva completa.
          </p>
        </section>
    </section>
  </>
  );
};

export default ActualizacionHardware;
