import React from 'react';

const SoporteRedes = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🌐 Soporte de Redes
      </h1>
      <p className="text-gray-700 mb-4">
        Brindamos soporte técnico integral en redes para hogares y empresas, asegurando conectividad estable y segura.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Configuración y optimización de routers y switches.</li>
        <li>Diagnóstico y solución de problemas de conexión.</li>
        <li>Seguridad y protección de redes contra intrusos.</li>
        <li>Soporte para redes cableadas e inalámbricas.</li>
        <li>Asesoramiento para ampliaciones y actualizaciones de red.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Mantén tu red funcionando de forma óptima para garantizar productividad y comunicación sin interrupciones.
      </p>
    </section>
  );
};

export default SoporteRedes;
