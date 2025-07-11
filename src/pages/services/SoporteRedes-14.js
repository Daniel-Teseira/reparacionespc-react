import React from 'react';
// https://visiontecnologica.com.ar/abonos-de-redes-para-empresas/
// https://www.reparacionesdecomputadoras.com.ar/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/
// https://www.graytech.com.ar/instalacion-y-configuracion-de-redes/
// https://visiontecnologica.com.ar/cableado-de-redes/

// Ampliaciones, Reparaciones y Redes
// Diseño, armado y mantenimiento de Redes Informáticas
// Cableado Estructurado
// Solución a problemas en Redes
// Redes híbridas WiFi/Ethernet
// Mantenimiento de impresoras
// Cambio de pantallas, teclados y pad
// Cambio de Batería
// Instalación de discos SSD
// Ampliación de RAM
// Cambio o reparaciones de componentes o conectores
// Potenciación de señal de Wi-Fi

const ServiciosRedes = () => {
  return (
    <section className="p-6 md:p-12 max-w-6xl mx-auto container">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Servicios de Mantenimiento e Instalaciones de Redes
      </h1>

      {/* Instalación */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔧 Instalación y configuración de redes estructuradas</h2>
        <p className="mb-4 text-gray-700">
          Diseñamos e instalamos redes cableadas e inalámbricas adaptadas a las necesidades de tu empresa, comercio u hogar.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Tendido de cableado estructurado (UTP, FTP, fibra óptica)</li>
          <li>Armado de racks, canalizaciones y organizadores</li>
          <li>Instalación de routers, switches, puntos de acceso Wi-Fi</li>
          <li>Pruebas de conectividad y rendimiento</li>
        </ul>
      </div>

      {/* Mantenimiento */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🛠️ Mantenimiento preventivo y correctivo</h2>
        <p className="mb-4 text-gray-700">
          El mantenimiento de red es clave para evitar cortes de servicio, pérdida de productividad y riesgos de seguridad.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Revisión periódica de dispositivos de red</li>
          <li>Diagnóstico y resolución de fallas</li>
          <li>Actualización de firmware y configuraciones</li>
          <li>Monitoreo remoto y asistencia técnica programada</li>
        </ul>
      </div>

      {/* Normas */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">⚖️ Cumplimiento de normas y buenas prácticas</h2>
        <p className="text-gray-700">
          Trabajamos según estándares internacionales como <strong>TIA/EIA-568</strong>, cumpliendo también con normativas eléctricas locales.
          Usamos herramientas certificadas y seguimos procedimientos de instalación profesional.
        </p>
      </div>

      {/* Tecnología */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🚀 Tecnología de calidad y visión a futuro</h2>
        <p className="mb-4 text-gray-700">
          Apostamos por soluciones de alta calidad con marcas reconocidas y productos con respaldo técnico.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Cámaras de seguridad IP</li>
          <li>Sistemas de domótica y control de acceso</li>
          <li>Ampliación de puestos de trabajo</li>
          <li>Mayor demanda de velocidad y tráfico</li>
        </ul>
      </div>

      {/* Contacto */}
      <div className="text-center bg-blue-100 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">📞 Consultanos</h3>
        <p className="text-gray-700">
          Ofrecemos abonos mensuales, servicios puntuales o proyectos llave en mano. 
          ¡Solicitá un diagnóstico sin cargo y conocé cómo podemos ayudarte!
        </p>
      </div>
    </section>
  );
};

export default ServiciosRedes;