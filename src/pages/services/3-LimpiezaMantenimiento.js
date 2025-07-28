import img from '../../images/services/3/image.png';
import Nosotros from '../home/components/Nosotros';
import '../home/components/Style.css';

const LimpiezaMantenimiento = () => {
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
          <h1 class='text-3xl font-bold mb-4'>🧼 Limpieza y Mantenimiento General</h1>
          <p>
            Con el paso del tiempo, las computadoras acumulan polvo y software innecesario que afecta su rendimiento.
            Este servicio restaura la eficiencia de tu equipo y previene daños por sobrecalentamiento.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
            <ul class='list-disc pl-6 text-gray-700 mb-4'>
              <li>Limpieza interna de componentes físicos (cooler, fuente, motherboard).</li>
              <li>Eliminación de archivos temporales y software innecesario.</li>
              <li>Revisión de pasta térmica y reemplazo si es necesario.</li>
              <li>Optimización del arranque del sistema y recursos en segundo plano.</li>
              <li>Escaneo y eliminación de amenazas digitales que ralentizan el sistema.</li>
            </ul>
            <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
              Ideal para mantener el equipo fresco, rápido y libre de errores. Recomendamos hacerlo cada 6 a 12 meses.
            </p> 
        </section>
    </section>
    
    <Nosotros/>
  </>
  );
};

export default LimpiezaMantenimiento;