// --- Archivo: SoporteRemoto.js ---

import React from 'react';

const SoporteRemoto = () => {
  return (
    <section class='p-6 md:p-12 max-w-4xl mx-auto'>
      <h1 class='text-3xl font-bold text-blue-800 mb-6'>
        📡 Soporte Remoto
      </h1>
      <p class='text-gray-700 mb-4'>
        Atendé tus problemas informáticos sin moverte de tu casa. Con nuestro soporte remoto resolvemos fallas en tiempo real.
      </p>
      <h2 class='text-xl font-semibold text-blue-700 mb-2'>🔧 ¿Qué incluye?</h2>
      <ul class='list-disc pl-6 text-gray-700 mb-4'>
        <li>Diagnóstico remoto a través de software seguro.</li>
        <li>Instalación o configuración de programas.</li>
        <li>Eliminación de virus o errores menores.</li>
        <li>Asistencia para problemas de red o conectividad.</li>
        <li>Acompañamiento durante la sesión para resolver todas tus dudas.</li>
      </ul>
      <p class='bg-blue-100 p-4 rounded-lg text-blue-800 font-medium'>
        Ideal para emergencias, clientes del interior o usuarios con poca movilidad. Solo necesitás conexión a internet.
      </p>
    </section>
  );
};

export default SoporteRemoto;