import img from '../../images/services/6/image.png';
import '../home/components/Style.css';

const ReemplazoComponentes = () => {
  return (
    <>
      <section class='position-relative'>
        <img
          src={img}
          alt='Reemplazo de Componentes'  
          class='w-100 img-fluid imagen'          
        />
        
        <section
          class='position-absolute top-0 end-0 cardInfo'            
        >
          <h1 class='text-3xl font-bold text-blue-800 mb-6'>
            🔧 Reemplazo de Componentes Dañados
          </h1>
          <p class='text-gray-700 mb-4'>
            Cuando se identifica un componente dañado en tu computadora, realizamos un análisis para determinar si es posible repararlo o si se necesita reemplazo inmediato.
          </p>
        </section>

      <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
        <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔍 ¿Qué hacemos?</h2>
        <ul class='list-disc pl-6 text-gray-700 mb-4'>
          <li>Diagnóstico completo del hardware para identificar fallas.</li>
          <li>Reemplazo de componentes como discos duros, memorias RAM, fuentes de poder, etc.</li>
          <li>Instalación y configuración de nuevos componentes para asegurar compatibilidad y rendimiento óptimo.</li>
          <li>Pruebas exhaustivas post-reemplazo para garantizar que todo funcione correctamente.</li>
        </ul>
        <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
          Aseguramos que tu equipo vuelva a estar en óptimas condiciones, prolongando su vida útil y mejorando su rendimiento.
        </p>
      </section>
      
      
    </section>

    </>
  );
};

export default ReemplazoComponentes;