import limpieza from '../images/services/3/image.png';
import armado from '../images/services/4/image.png';
import reparacion from '../images/services/5/image.png';
import componentes from '../images/services/6/image (2).png';
import windows from '../images/services/7/Google_AI_Studio_2025-07-28T15_32_06.870Z.png';
import remoto from '../images/services/8/Google_AI_Studio_2025-07-28T22_27_56.689Z.png';
import hardware from '../images/services/9/Google_AI_Studio_2025-07-29T12_05_31.764Z.png';
import virus from '../images/services/10/Google_AI_Studio_2025-07-29T12_08_53.794Z.png';
import fallas from '../images/services/11/Google_AI_Studio_2025-07-29T12_13_20.663Z.png';
import software from '../images/services/12/Google_AI_Studio_2025-07-29T15_53_57.790Z.png';
import drivers from '../images/services/13/Google_AI_Studio_2025-07-29T15_42_44.247Z.png';
import redes from '../images/services/14/Google_AI_Studio_2025-07-29T15_44_31.237Z.png';
import datos from '../images/services/15/Google_AI_Studio_2025-07-29T15_45_53.710Z.png';
import planes from '../images/services/16/Google_AI_Studio_2025-07-29T15_47_12.323Z.png';
import mantenimiento from '../images/services/17/Google_AI_Studio_2025-07-29T15_48_27.691Z.png';
import postventa from '../images/services/18/Google_AI_Studio_2025-07-29T15_52_34.511Z.png';

export const serviceDetails = {
  3: {
    image: limpieza,
    title: 'Limpieza y mantenimiento general',
    description: 'El polvo y los programas innecesarios pueden afectar el rendimiento de una computadora. Este servicio ayuda a recuperar eficiencia y prevenir problemas por temperatura.',
    sections: [{ title: '¿Qué incluye?', items: ['Limpieza interna de cooler, fuente y motherboard.', 'Eliminación de archivos temporales y software innecesario.', 'Revisión de pasta térmica y reemplazo si hace falta.', 'Optimización del arranque y de los recursos del sistema.', 'Revisión de amenazas digitales que puedan ralentizar el equipo.'] }],
    note: 'Recomendado cada 6 a 12 meses para mantener el equipo limpio y funcionando correctamente.'
  },
  4: {
    image: armado,
    title: 'Armado de PC a medida',
    description: 'Diseñamos y ensamblamos computadoras para gaming, trabajo o uso general, verificando que cada componente sea compatible con tus necesidades.',
    sections: [{ title: '¿Qué incluye?', items: ['Selección de componentes según tu presupuesto y uso.', 'Ensamblaje profesional y pruebas de funcionamiento.', 'Instalación del sistema operativo y software básico.', 'Configuración de BIOS y optimización inicial.', 'Asesoramiento y soporte después del armado.'] }],
    note: 'Consultanos antes de comprar las piezas para elegir una configuración equilibrada.'
  },
  5: {
    image: reparacion,
    title: 'Reparación general de equipos',
    description: 'Diagnosticamos computadoras y notebooks con fallas técnicas o bajo rendimiento para identificar el problema y proponer una solución.',
    sections: [{ title: '¿Qué incluye?', items: ['Diagnóstico de hardware y software.', 'Revisión de placa madre, disco, memoria y conexiones.', 'Reparación o reemplazo de componentes dañados.', 'Actualización del sistema operativo y controladores.', 'Optimización y pruebas después de la reparación.'] }],
    note: 'Buscamos extender la vida útil de tu equipo y explicarte las opciones antes de avanzar.'
  },
  6: {
    image: componentes,
    title: 'Reemplazo de componentes',
    description: 'Revisamos el componente que presenta fallas y determinamos si conviene repararlo o reemplazarlo por una pieza compatible.',
    sections: [{ title: '¿Qué hacemos?', items: ['Diagnóstico para identificar la pieza dañada.', 'Reemplazo de discos, memorias RAM y fuentes, entre otros.', 'Instalación y configuración de los nuevos componentes.', 'Pruebas de funcionamiento y compatibilidad.'] }],
    note: 'Elegimos el reemplazo adecuado para recuperar el funcionamiento y rendimiento del equipo.'
  },
  7: {
    image: windows,
    title: 'Formateo e instalación de Windows',
    description: 'Instalamos Windows y dejamos el sistema preparado para volver a usar, con la opción de conservar tus archivos mediante un respaldo previo.',
    sections: [{ title: '¿Qué incluye?', items: ['Respaldo de datos si lo solicitás.', 'Formateo seguro del disco principal.', 'Instalación de Windows.', 'Instalación de controladores esenciales.', 'Instalación de los programas que necesitás.'] }],
    note: 'Antes de comenzar, coordinamos con vos qué archivos y programas necesitás conservar.'
  },
  8: {
    image: remoto,
    title: 'Soporte remoto',
    description: 'Atendemos ciertos problemas informáticos a distancia, para resolver fallas de software sin que tengas que trasladar el equipo.',
    sections: [{ title: '¿Qué incluye?', items: ['Diagnóstico remoto con herramientas seguras.', 'Instalación y configuración de programas.', 'Ayuda con virus o errores menores.', 'Asistencia para problemas de red y conectividad.', 'Acompañamiento durante la sesión.'] }],
    note: 'Para la asistencia remota necesitás conexión a internet y estar frente al equipo.'
  },
  9: {
    image: hardware,
    title: 'Actualización de hardware',
    description: 'Mejoramos el rendimiento reemplazando componentes antiguos por piezas más actuales y compatibles con tu computadora.',
    sections: [{ title: '¿Qué incluye?', items: ['Evaluación del hardware y sus limitaciones.', 'Asesoramiento sobre componentes compatibles.', 'Ampliación de memoria RAM o actualización a SSD.', 'Instalación y prueba de las nuevas piezas.', 'Optimización del sistema para el hardware actualizado.'] }],
    note: 'Una actualización puede darle nueva vida a tu computadora sin tener que reemplazar todo el equipo.'
  },
  10: {
    image: virus,
    title: 'Eliminación de virus y malware',
    description: 'Revisamos el equipo para detectar y eliminar amenazas que puedan afectar la seguridad, privacidad o velocidad del sistema.',
    sections: [{ title: '¿Qué incluye?', items: ['Análisis con herramientas de seguridad.', 'Eliminación de malware, spyware y adware.', 'Revisión de configuraciones del navegador.', 'Refuerzo de la seguridad del sistema.', 'Instalación o actualización de antivirus.'] }],
    note: 'También te damos recomendaciones para reducir el riesgo de nuevas infecciones.'
  },
  11: {
    image: fallas,
    title: 'Diagnóstico de errores y fallas',
    description: 'Investigamos fallas de hardware o software que interrumpen el uso normal de tu computadora, incluso cuando aparecen de forma intermitente.',
    sections: [{ title: '¿Qué incluye?', items: ['Diagnóstico de fallas intermitentes o permanentes.', 'Revisión del sistema, disco, memoria y conexiones.', 'Corrección de errores del sistema operativo.', 'Revisión de configuraciones conflictivas.', 'Pruebas después de aplicar la solución.'] }],
    note: 'Te explicamos qué encontramos y cuáles son las alternativas para resolverlo.'
  },
  12: {
    image: software,
    title: 'Instalación y actualización de software',
    description: 'Instalamos y actualizamos programas según lo que necesitás: oficina, diseño, antivirus, videojuegos y otras aplicaciones.',
    sections: [{ title: '¿Qué incluye?', items: ['Instalación de software provisto o licenciado por el cliente.', 'Actualización de versiones existentes.', 'Configuración inicial y personalizada.', 'Ajustes según el hardware disponible.', 'Asistencia ante errores posteriores.'] }],
    note: 'Revisamos con vos qué programas necesitás antes de preparar el equipo.'
  },
  13: {
    image: drivers,
    title: 'Configuración e instalación de drivers',
    description: 'Instalamos y configuramos los controladores necesarios para que los dispositivos de tu computadora funcionen correctamente.',
    sections: [{ title: '¿Qué incluye?', items: ['Identificación del hardware instalado.', 'Instalación de controladores originales o compatibles.', 'Actualización de drivers existentes.', 'Configuración para mejorar estabilidad y rendimiento.', 'Resolución de conflictos relacionados con controladores.'] }],
    note: 'Los controladores correctos ayudan a mantener estables los componentes y periféricos.'
  },
  14: {
    image: redes,
    title: 'Instalación y soporte de redes',
    description: 'Diseñamos, instalamos y mantenemos redes cableadas e inalámbricas para hogares, comercios y empresas.',
    sections: [
      { title: 'Instalación y configuración', description: 'Armamos una red acorde al espacio y a la cantidad de dispositivos.', items: ['Cableado estructurado UTP, FTP o fibra óptica.', 'Racks, canalizaciones y organizadores.', 'Routers, switches y puntos de acceso Wi-Fi.', 'Pruebas de conectividad y rendimiento.'] },
      { title: 'Mantenimiento preventivo y correctivo', description: 'Revisamos la red para reducir interrupciones y resolver problemas de conexión.', items: ['Revisión de dispositivos de red.', 'Diagnóstico y resolución de fallas.', 'Actualización de firmware y configuraciones.', 'Asistencia técnica programada.'] },
      { title: 'Ampliaciones y buenas prácticas', description: 'Preparamos la infraestructura para acompañar el crecimiento y las necesidades de conectividad.', items: ['Organización de puestos y cableado.', 'Mejora de cobertura Wi-Fi.', 'Ampliación de capacidad y tráfico.', 'Buenas prácticas de instalación.'] }
    ],
    note: 'Evaluamos cada espacio para recomendar una solución de red adecuada.'
  },
  15: {
    image: datos,
    title: 'Recuperación de datos y copias de seguridad',
    description: 'Ayudamos a recuperar información perdida y a crear respaldos para proteger tus archivos importantes.',
    sections: [{ title: '¿Qué incluye?', items: ['Recuperación de archivos borrados accidentalmente.', 'Restauración después de formateos o fallas del sistema.', 'Revisión de discos inaccesibles o con errores.', 'Configuración de copias de seguridad.', 'Asesoramiento sobre almacenamiento seguro.'] }],
    note: 'Si el disco hace ruidos o presenta fallas, dejá de usarlo y consultanos para evitar más daños.'
  },
  16: {
    image: planes,
    title: 'Planes de soporte a medida',
    description: 'Preparamos propuestas de soporte y mantenimiento de acuerdo con las necesidades de tu empresa o PyME.',
    sections: [{ title: '¿Qué puede incluir?', items: ['Evaluación de las necesidades del negocio.', 'Soporte técnico según cantidad de equipos.', 'Mantenimiento preventivo y seguimiento.', 'Atención prioritaria según el plan acordado.', 'Posibilidad de ajustar el servicio con el tiempo.'] }],
    note: 'Cada propuesta se conversa y adapta al alcance que necesita tu organización.'
  },
  17: {
    image: mantenimiento,
    title: 'Mantenimiento de software y antivirus',
    description: 'Realizamos tareas de mantenimiento para conservar el sistema operativo y las herramientas de seguridad en buen estado.',
    sections: [{ title: '¿Qué incluye?', items: ['Eliminación de archivos temporales.', 'Actualización y configuración del antivirus.', 'Optimización del sistema.', 'Corrección de errores y conflictos de software.', 'Recomendaciones para mantener el equipo protegido.'] }],
    note: 'Un mantenimiento periódico ayuda a conservar la estabilidad y el rendimiento del equipo.'
  },
  18: {
    image: postventa,
    title: 'Soporte postventa',
    description: 'Seguimos disponibles después de la reparación para resolver dudas relacionadas con el trabajo realizado.',
    sections: [{ title: '¿Qué incluye?', items: ['Asesoramiento y consultas posteriores al servicio.', 'Ayuda con inconvenientes relacionados con la reparación.', 'Soporte remoto o presencial según el caso.', 'Revisión de garantía de los trabajos realizados.'] }],
    note: 'La atención postventa mantiene el acompañamiento una vez que retirás tu equipo.'
  }
};
