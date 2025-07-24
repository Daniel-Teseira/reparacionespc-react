import React from 'react';

const SoportePostVenta = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🤝 Soporte Post-venta
      </h1>
      <p className="text-gray-700 mb-4">
        Luego de la reparación o servicio, seguimos disponibles para resolver cualquier duda o inconveniente que pueda surgir, sin costo adicional.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Asesoramiento y consultas post-servicio.</li>
        <li>Resolución de problemas menores relacionados.</li>
        <li>Soporte remoto o presencial según conveniencia.</li>
        <li>Garantía en trabajos realizados.</li>
        <li>Compromiso con la satisfacción del cliente.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Nuestra relación no termina con la reparación: estamos para ayudarte siempre.
      </p>
    </section>
  );
};

export default SoportePostVenta;
