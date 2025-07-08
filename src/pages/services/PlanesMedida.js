import React from 'react';

const PlanesMedida = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        📊 Planes a Medida
      </h1>
      <p className="text-gray-700 mb-4">
        Creamos planes de servicio ilimitados y personalizados, diseñados para ajustarse a las necesidades específicas de tu empresa o PyME.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Evaluación detallada de las necesidades de tu negocio.</li>
        <li>Servicios técnicos adaptados a volumen y complejidad.</li>
        <li>Soporte continuo y mantenimiento preventivo.</li>
        <li>Atención prioritaria y seguimiento personalizado.</li>
        <li>Escalabilidad para futuros crecimientos o cambios.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Un plan flexible y eficaz para que tu infraestructura tecnológica siempre esté en óptimas condiciones.
      </p>
    </section>
  );
};

export default PlanesMedida;
