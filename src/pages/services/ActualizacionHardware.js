import React from 'react';

const ActualizacionHardware = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        ⚙️ Actualización de Hardware
      </h1>
      <p className="text-gray-700 mb-4">
        Reemplazamos los componentes antiguos de tu equipo por versiones más modernas y eficientes para mejorar su rendimiento.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Evaluación del hardware actual y sus limitaciones.</li>
        <li>Asesoramiento sobre nuevas piezas compatibles.</li>
        <li>Reemplazo de disco rígido por SSD, ampliación de RAM, entre otros.</li>
        <li>Instalación y prueba de nuevos componentes.</li>
        <li>Optimización del sistema para el nuevo hardware.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Dale nueva vida a tu computadora sin necesidad de comprar una nueva completa.
      </p>
    </section>
  );
};

export default ActualizacionHardware;
