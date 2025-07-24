import React from 'react';

const ErroresFallas = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🚨 Errores o Fallas del Equipo
      </h1>
      <p className="text-gray-700 mb-4">
        Solucionamos todo tipo de fallas de hardware o software que impidan el correcto funcionamiento de tu computadora.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Diagnóstico completo de fallas intermitentes o permanentes.</li>
        <li>Revisión de sistema, disco, memoria y conexiones.</li>
        <li>Reparación de errores del sistema operativo.</li>
        <li>Cambio de configuraciones conflictivas.</li>
        <li>Pruebas de estrés y monitoreo post-reparación.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Detectamos y solucionamos errores que muchos técnicos no encuentran fácilmente.
      </p>
    </section>
  );
};

export default ErroresFallas;
