import img from '../../images/services/18/Google_AI_Studio_2025-07-29T15_51_37.449Z.png';
import '../home/components/Style.css';

const SoportePostVenta = () => {
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
            🤝 Soporte Post-venta
          </h1>
          <p class='text-gray-700 mb-4'>
            Luego de la reparación o servicio, seguimos disponibles para resolver cualquier duda o inconveniente que pueda surgir, sin costo adicional.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Asesoramiento y consultas post-servicio.</li>
            <li>Resolución de problemas menores relacionados.</li>
            <li>Soporte remoto o presencial según conveniencia.</li>
            <li>Garantía en trabajos realizados.</li>
            <li>Compromiso con la satisfacción del cliente.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Nuestra relación no termina con la reparación: estamos para ayudarte siempre.
          </p>
        </section>
      </section>
    </>
  );
};

export default SoportePostVenta;
