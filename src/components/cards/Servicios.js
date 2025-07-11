import React from 'react';
import img5 from '../../images/cards/1/image.png'; // Ajusta la ruta según tu estructura

const Servicios = () => {
  // Array de servicios con toda la información
  const servicios = [
    {
      id: 1,
      titulo: "Reparaciones a Domicilio",
      descripcion: "Se aíslan los problemas de tu computadora o laptop y, a base de protocolo de búsqueda de fallas propio, se resuelven en tu domicilio.",
      link: "/servicio-tecnico-de-pc-a-domicilio-en-capital-federal/",
      destacado: true
    },
    {
      id: 2,
      titulo: "Soporte Técnico a Empresas/PyMEs",
      descripcion: "Juntos arreglamos un plan de servicios y visitas acorde a las necesidades de su empresa. Ofrecemos planes presenciales, remotos y mixtos.",
      link: "/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/",
      destacado: false
    },
    {
      id: 3,
      titulo: "Limpieza y Mantenimiento General",
      descripcion: "Se realiza una Limpieza y Mantenimiento de Hardware y Software para optimizar el funcionamiento de tu computadora.",
      link: "/reparacion-de-pc/",
      destacado: false
    },
    {
      id: 4,
      titulo: "Armado de PC",
      descripcion: "Arma y diseña tu PC a medida según tus necesidades (Oficina o Gamer). Con instalación de Windows, Office y programas.",
      link: "/armado-pc/",
      destacado: false
    },
    {
      id: 5,
      titulo: "Reparación General",
      descripcion: "Se aíslan los problemas de tu computadora o laptop y, a base de protocolo de búsqueda de fallas propio, se resuelven.",
      link: "/reparacion-de-pc/",
      destacado: false
    },
    {
      id: 6,
      titulo: "Reemplazo de Componentes Dañados",
      descripcion: "En caso de encontrar un componente dañado en su computadora de ser posible se repara o si no se cambia.",
      link: "/reparacion-de-pc/",
      destacado: false
    },
    {
      id: 7,
      titulo: "Formateo e Instalación de Windows",
      descripcion: "Formateo e instalación de Windows con o sin pérdida de datos. Incluye instalación de programas solicitados.",
      link: "/formateo-e-instalacion-de-windows/",
      destacado: false
    },
    {
      id: 8,
      titulo: "Soporte Remoto",
      descripcion: "Soporte técnico remoto para obtener nuestro service de computadoras sin la necesidad de transportar equipos.",
      link: "/soporte-remoto/",
      destacado: false
    },
    {
      id: 9,
      titulo: "Actualización de Hardware",
      descripcion: "Cambiamos componentes obsoletos por otros que optimicen su rendimiento.",
      link: "/armamos-tu-pc-gamer/",
      destacado: false
    },
    {
      id: 10,
      titulo: "Eliminación de Virus, Malware y Spyware",
      descripcion: "Mediante la utilización de última tecnología se elimina todo elemento dañino.",
      link: "/eliminacion-de-virus/",
      destacado: false
    },
    {
      id: 11,
      titulo: "Errores o Fallas del Equipo",
      descripcion: "Contamos con conocimiento suficiente para diagnosticar y arreglar cualquier tipo de falla que su computadora posea.",
      link: "/diagnostico-fallas/",
      destacado: false
    },
    {
      id: 12,
      titulo: "Instalación y Actualización de Software",
      descripcion: "Instalación y actualización de programas a pedido (antivirus, office, programas de diseño, videojuegos, etc.).",
      link: "/instalacion-software/",
      destacado: false
    },
    {
      id: 13,
      titulo: "Configuración e Instalación de Drivers",
      descripcion: "Mediante los mejores software se realiza una instalación adecuada de drivers.",
      link: "/instalacion-drivers/",
      destacado: false
    },
    {
      id: 14,
      titulo: "Soporte de Redes",
      descripcion: "Soporte técnico de redes integral acondicionado a las exigencias de su empresa.",
      link: "/soporte-redes/",
      destacado: false
    },
    {
      id: 15,
      titulo: "Recuperación de Datos y Backups",
      descripcion: "Mediante un Software de recuperación de datos se logran obtener la información perdida.",
      link: "/recuperacion-datos/",
      destacado: false
    },
    {
      id: 16,
      titulo: "Planes a Medida",
      descripcion: "Se prepara un plan de servicio ilimitado adaptado a las necesidades de tu empresa o PyME.",
      link: "/planes-empresas/",
      destacado: false
    },
    {
      id: 17,
      titulo: "Mantenimiento de Software y Antivirus",
      descripcion: "Se realizan limpiezas de fondo para optimizar el funcionamiento de tu computadora o notebook.",
      link: "/mantenimiento-software/",
      destacado: false
    },
    {
      id: 18,
      titulo: "Soporte Post-venta",
      descripcion: "Luego de la reparación de una PC cualquier duda o consulta será resulta sin cargo alguno.",
      link: "/soporte-postventa/",
      destacado: false
    }
  ];

  // Servicio destacado (el primero con imagen)
  const servicioDestacado = servicios.find(servicio => servicio.destacado);
  
  // Servicios regulares (sin imagen)
  const serviciosRegulares = servicios.filter(servicio => !servicio.destacado);

  return (
    <section className="servicios">
      <div className="d-flex justify-content-center">
        <h2 className="wnd-align-center">
          Nuestro Servicio<strong>&nbsp;</strong>Técnico de PC
          <strong> </strong>y Notebook
        </h2>
      </div>

      {/* Servicio destacado con imagen */}
      {servicioDestacado && (
        <div className="container my-5">
          <div className="row justify-content-center gap-3">
            <div className="">
              <div className="card border-0 position-relative text-center flex-row h-100">
                {/* Imagen desplazada hacia arriba */}
                <img
                  src={img5}
                  alt={servicioDestacado.titulo}
                  className="img-fluid w-50 object-fit-cover"
                  style={{
                    transform: "translateY(-5%)",
                    zIndex: 1,
                    borderRadius: "1rem",
                    boxShadow: "0 4px 50px rgba(0, 0, 0, 0.36)",
                  }}
                />

                {/* Texto desplazado hacia abajo */}
                <div
                  className="card-body"
                  style={{
                    transform: "translateX(-5%)",
                    zIndex: 10,
                    boxShadow: "0 4px 50px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <h3 className="card-title fw-bold mb-3">
                    {servicioDestacado.titulo}
                  </h3>
                  <p
                    className="card-text fw-bold"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {servicioDestacado.descripcion}
                  </p>
                  <a 
                    href={servicioDestacado.link} 
                    className="btn btn-primary mt-3"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Servicios regulares en formato de tarjetas */}
      <div className="d-flex flex-wrap justify-content-evenly">
        {serviciosRegulares.map((servicio) => (
          <div key={servicio.id} className="card_servicio">
            <h2>
              <a href={servicio.link}>
                {servicio.titulo}
              </a>
            </h2>
            <p>
              <font className="wsw-03">
                {servicio.descripcion}
              </font>
            </p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <p className="">
          <strong>Para más información</strong>
          <strong>
            <em>¡</em>
          </strong>
          <strong>
            <em>
              <a href="/contacto/">Contáctenos</a>!
            </em>
          </strong>
        </p>
      </div>
    </section>
  );
};

export default Servicios;