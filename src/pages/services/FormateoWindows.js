// --- Archivo: FormateoWindows.js ---

import React from 'react';

const FormateoWindows = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        💽 Formateo e Instalación de Windows
      </h1>
      <p className="text-gray-700 mb-4">
        Servicio completo de formateo e instalación del sistema operativo Windows, con o sin conservación de tus archivos personales.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Respaldo previo de datos (si se solicita).</li>
        <li>Formateo seguro del disco principal.</li>
        <li>Instalación de Windows con activación.</li>
        <li>Instalación de drivers esenciales.</li>
        <li>Instalación de programas requeridos por el cliente.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Tu computadora queda como nueva, optimizada y lista para usar, con todos los programas que necesites.
      </p>
    </section>
  );
};

export default FormateoWindows;