import React from 'react';

const LimpiezaMantenimiento = () => {
  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🧼 Limpieza y Mantenimiento General
      </h1>
      <p className="text-gray-700 mb-4">
        Con el paso del tiempo, las computadoras acumulan polvo, archivos innecesarios y residuos de software que afectan su rendimiento. Nuestro servicio de limpieza y mantenimiento está diseñado para restaurar la eficiencia del equipo y prolongar su vida útil.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">🔧 ¿Qué incluye?</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Limpieza interna de componentes: cooler, fuente, motherboard y más.</li>
        <li>Revisión del estado físico general: pasta térmica, conectores, polvo acumulado.</li>
        <li>Desinstalación de software innecesario o dañino.</li>
        <li>Optimización del sistema operativo y discos.</li>
        <li>Actualización de antivirus y eliminación de archivos temporales.</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">💡 ¿Por qué es importante?</h2>
      <p className="text-gray-700 mb-4">
        Un mantenimiento preventivo puede evitar fallos graves, reducir el calor interno del equipo y mejorar el tiempo de respuesta del sistema. Ideal para computadoras que ya tienen más de 1 año de uso continuo.
      </p>

      <p className="bg-blue-100 p-4 rounded-lg text-blue-800 font-medium">
        Recomendamos hacer este mantenimiento cada 6 a 12 meses para equipos de uso frecuente.
      </p>
    </section>
  );
};

export default LimpiezaMantenimiento;