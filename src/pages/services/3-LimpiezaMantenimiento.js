// --- Archivo: LimpiezaMantenimiento.js ---

import React from 'react';

const LimpiezaMantenimiento = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🧼 Limpieza y Mantenimiento General
      </h1>
      <p className="text-gray-700 mb-4">
        Con el paso del tiempo, las computadoras acumulan polvo y software innecesario que afecta su rendimiento. Este servicio restaura la eficiencia de tu equipo y previene daños por sobrecalentamiento.
      </p>
      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Limpieza interna de componentes físicos (cooler, fuente, motherboard).</li>
        <li>Eliminación de archivos temporales y software innecesario.</li>
        <li>Revisión de pasta térmica y reemplazo si es necesario.</li>
        <li>Optimización del arranque del sistema y recursos en segundo plano.</li>
        <li>Escaneo y eliminación de amenazas digitales que ralentizan el sistema.</li>
      </ul>
      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Ideal para mantener el equipo fresco, rápido y libre de errores. Recomendamos hacerlo cada 6 a 12 meses.
      </p>
    </section>
  );
};

export default LimpiezaMantenimiento;