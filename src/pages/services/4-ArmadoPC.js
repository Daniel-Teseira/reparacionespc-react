import '../home/components/Style.css';
import img from '../../images/services/4/image.png';

const ArmadoPC = () => {
  return (
    <>
      <section class='position-relative'>
        <img
          src={img} 
          alt='Armado de PC a Medida'
          class='w-100 img-fluid imagen'
        /> 

        <section
          class='position-absolute top-0 end-0 cardInfo'
        >      
          <h1 class='text-3xl font-bold mb-4'>🖥️ Armado de PC a Medida</h1>
          <p>
            Diseñamos y ensamblamos computadoras personalizadas según tus necesidades, ya sea para gaming, trabajo o uso general.
            Nos aseguramos de que cada componente sea compatible y de alta calidad.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Selección de componentes según tu presupuesto y necesidades.</li>
            <li>Ensamblaje profesional con pruebas de rendimiento.</li>
            <li>Instalación de sistema operativo y software básico.</li>
            <li>Configuración de BIOS y optimización del sistema.</li>
            <li>Garantía de funcionamiento y soporte post-venta.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Ideal para quienes buscan un equipo personalizado y optimizado. Recomendamos consultar con nosotros para elegir los mejores componentes.
          </p>
        </section>       
      </section>


    </>
  );
};

export default ArmadoPC;