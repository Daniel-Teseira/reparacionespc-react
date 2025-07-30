import img from '../../images/services/3/image.png';
import '../home/components/Style.css';
  
const PlanesMedida = () => {
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
            📊 Planes a Medida
          </h1>
          <p class='text-gray-700 mb-4'>
            Creamos planes de servicio ilimitados y personalizados, diseñados para ajustarse a las necesidades específicas de tu empresa o PyME.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Evaluación detallada de las necesidades de tu negocio.</li>
            <li>Servicios técnicos adaptados a volumen y complejidad.</li>
            <li>Soporte continuo y mantenimiento preventivo.</li>
            <li>Atención prioritaria y seguimiento personalizado.</li>
            <li>Escalabilidad para futuros crecimientos o cambios.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Un plan flexible y eficaz para que tu infraestructura tecnológica siempre esté en óptimas condiciones.
          </p>
        </section>
      </section>
    </>
  );
};

export default PlanesMedida;
