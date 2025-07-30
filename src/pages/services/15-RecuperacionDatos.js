import img from '../../images/services/15/Google_AI_Studio_2025-07-29T15_45_53.710Z.png';
import '../home/components/Style.css';import React from 'react';

const RecuperacionDatos = () => {
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
            💾 Recuperación de Datos y Backups
          </h1>
          <p class='text-gray-700 mb-4'>
            Utilizamos software especializado para recuperar información perdida y realizamos copias de seguridad para proteger tus datos importantes.
          </p>
        </section>

        <section class='p-6 md:p-12 max-w-4xl mx-auto container cardInfo'>
          <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
          <ul class='list-disc pl-6 text-gray-700 mb-4'>
            <li>Recuperación de archivos borrados accidentalmente.</li>
            <li>Restauración tras formateos o fallos del sistema.</li>
            <li>Rescate de datos en discos dañados o inaccesibles.</li>
            <li>Implementación de planes de backups automáticos.</li>
            <li>Asesoramiento en almacenamiento seguro y redundancia.</li>
          </ul>
          <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
            Protegé tu información valiosa y evitá pérdidas con nuestro servicio profesional de recuperación y respaldo.
          </p>
        </section>
      </section>
    </>
  );
};

export default RecuperacionDatos;
