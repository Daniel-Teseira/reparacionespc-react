import React from 'react';
import TransitionLink from '../TransitionLink/TransitionLink';
import limpiezaImage from '../../images/services/3/image.png';
import armadoImage from '../../images/services/4/image.png';
import reparacionImage from '../../images/services/5/image.png';
import componentesImage from '../../images/services/6/image (2).png';
import windowsImage from '../../images/services/7/Google_AI_Studio_2025-07-28T15_33_56.390Z.png';
import remotoImage from '../../images/services/8/Google_AI_Studio_2025-07-29T11_58_48.552Z.png';
import hardwareImage from '../../images/services/9/Google_AI_Studio_2025-07-29T12_06_25.082Z.png';
import virusImage from '../../images/services/10/Google_AI_Studio_2025-07-29T12_09_16.016Z.png';
import fallasImage from '../../images/services/11/Google_AI_Studio_2025-07-29T12_13_20.663Z.png';
import softwareImage from '../../images/services/12/Google_AI_Studio_2025-07-29T15_54_05.653Z.png';
import driversImage from '../../images/services/13/Google_AI_Studio_2025-07-29T15_42_44.247Z.png';
import redesImage from '../../images/services/14/Google_AI_Studio_2025-07-29T15_44_45.277Z.png';
import datosImage from '../../images/services/15/Google_AI_Studio_2025-07-29T15_46_09.147Z.png';
import planesImage from '../../images/services/16/Google_AI_Studio_2025-07-29T15_47_12.323Z.png';
import mantenimientoImage from '../../images/services/17/Google_AI_Studio_2025-07-29T15_48_27.691Z.png';
import postventaImage from '../../images/services/18/Google_AI_Studio_2025-07-29T15_52_34.511Z.png';

const Servicios = () => {
  const servicios = [
    // {
    //   id: 1,
    //   titulo: "Reparaciones a Domicilio",
    //   descripcion: "Se aíslan los problemas de tu computadora o laptop y, a base de protocolo de búsqueda de fallas propio, se resuelven en tu domicilio.",
    //   link: "/servicio-tecnico-de-pc-a-domicilio-en-capital-federal/",
    //   destacado: true
    // },
    // {
    //   id: 2,
    //   titulo: "Soporte Técnico a Empresas/PyMEs",
    //   descripcion: "Juntos arreglamos un plan de servicios y visitas acorde a las necesidades de su empresa. Ofrecemos planes presenciales, remotos y mixtos.",
    //   link: "/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/",
    //   destacado: false
    // },
    {
      id: 3,
      titulo: "Limpieza y Mantenimiento General",
      imagen: limpiezaImage,
      descripcion: "Se realiza una Limpieza y Mantenimiento de Hardware y Software para optimizar el funcionamiento de tu computadora.",
      link: "/limpieza-mantenimiento/",
      destacado: false
    },
    {
      id: 4,
      titulo: "Armado de PC",
      imagen: armadoImage,
      descripcion: "Arma y diseña tu PC a medida según tus necesidades (Oficina o Gamer). Con instalación de Windows, Office y programas.",
      link: "/armado-pc/",
      destacado: false
    },
    {
      id: 5,
      titulo: "Reparación General",
      imagen: reparacionImage,
      descripcion: "Se aíslan los problemas de tu computadora o laptop y, a base de protocolo de búsqueda de fallas propio, se resuelven.",
      link: "/reparacion-de-pc/",
      destacado: false
    },
    {
      id: 6,
      titulo: "Reemplazo de Componentes Dañados",
      imagen: componentesImage,
      descripcion: "En caso de encontrar un componente dañado en su computadora de ser posible se repara o si no se cambia.",
      link: "/reemplazo-componentes/",
      destacado: false
    },
    {
      id: 7,
      titulo: "Formateo e Instalación de Windows",
      imagen: windowsImage,
      descripcion: "Formateo e instalación de Windows con o sin pérdida de datos. Incluye instalación de programas solicitados.",
      link: "/formateo-e-instalacion-de-windows/",
      destacado: false
    },
    {
      id: 8,
      titulo: "Soporte Remoto",
      imagen: remotoImage,
      descripcion: "Soporte técnico remoto para obtener nuestro service de computadoras sin la necesidad de transportar equipos.",
      link: "/soporte-remoto/",
      destacado: false
    },
    {
      id: 9,
      titulo: "Actualización de Hardware",
      imagen: hardwareImage,
      descripcion: "Cambiamos componentes obsoletos por otros que optimicen su rendimiento.",
      link: "/actualizacion-hardware/",
      destacado: false
    },
    {
      id: 10,
      titulo: "Eliminación de Virus, Malware y Spyware",
      imagen: virusImage,
      descripcion: "Mediante la utilización de última tecnología se elimina todo elemento dañino.",
      link: "/eliminacion-de-virus/",
      destacado: false
    },
    {
      id: 11,
      titulo: "Errores o Fallas del Equipo",
      imagen: fallasImage,
      descripcion: "Contamos con conocimiento suficiente para diagnosticar y arreglar cualquier tipo de falla que su computadora posea.",
      link: "/errores-fallas/",
      destacado: false
    },
    {
      id: 12,
      titulo: "Instalación y Actualización de Software",
      imagen: softwareImage,
      descripcion: "Instalación y actualización de programas a pedido (antivirus, office, programas de diseño, videojuegos, etc.).",
      link: "/instalacion-software/",
      destacado: false
    },
    {
      id: 13,
      titulo: "Configuración e Instalación de Drivers",
      imagen: driversImage,
      descripcion: "Mediante los mejores software se realiza una instalación adecuada de drivers.",
      link: "/instalacion-drivers/",
      destacado: false
    },
    {
      id: 14,
      titulo: "Soporte de Redes",
      imagen: redesImage,
      descripcion: "Soporte técnico de redes integral acondicionado a las exigencias de su empresa.",
      link: "/soporte-redes/",
      destacado: false
    },
    {
      id: 15,
      titulo: "Recuperación de Datos y Backups",
      imagen: datosImage,
      descripcion: "Mediante un Software de recuperación de datos se logran obtener la información perdida.",
      link: "/recuperacion-datos/",
      destacado: false
    },
    {
      id: 16,
      titulo: "Planes a Medida",
      imagen: planesImage,
      descripcion: "Se prepara un plan de servicio ilimitado adaptado a las necesidades de tu empresa o PyME.",
      link: "/planes-a-medida/",
      destacado: false
    },
    {
      id: 17,
      titulo: "Mantenimiento de Software y Antivirus",
      imagen: mantenimientoImage,
      descripcion: "Se realizan limpiezas de fondo para optimizar el funcionamiento de tu computadora o notebook.",
      link: "/mantenimiento-software/",
      destacado: false
    },
    {
      id: 18,
      titulo: "Soporte Post-venta",
      imagen: postventaImage,
      descripcion: "Luego de la reparación de una PC cualquier duda o consulta será resulta sin cargo alguno.",
      link: "/soporte-postventa/",
      destacado: false
    }
  ];

  return (
    <section className="services-section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">QUÉ PODEMOS HACER</span>
            <h2>Soluciones para que tu equipo <span>rinda mejor.</span></h2>
          </div>
          <p>Desde una limpieza preventiva hasta una reparación compleja: encontramos la solución adecuada para vos.</p>
        </div>

        <div className="services-grid">
          {servicios.map((servicio, index) => (
            <article key={servicio.id} className="service-card">
              <TransitionLink className="service-card-image" to={servicio.link} tabIndex={-1} aria-hidden="true">
                <img src={servicio.imagen} alt="" loading="lazy" />
                <span className="service-image-index">{String(index + 1).padStart(2, '0')}</span>
              </TransitionLink>
              <div className="service-card-content">
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true">{['⌘', '⚙', '⌕', '↗'][index % 4]}</span>
                  <span className="service-index">SERVICIO TÉCNICO</span>
                </div>
                <h3>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
                <TransitionLink className="service-link" to={servicio.link} aria-label={`Ver ${servicio.titulo}`}>
                  Ver servicio <span aria-hidden="true">↗</span>
                </TransitionLink>
              </div>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <div><strong>¿No sabés qué necesita tu equipo?</strong><span>Contanos qué está pasando y te orientamos.</span></div>
          <TransitionLink className="button button-primary" to="/contact">Hablemos <span aria-hidden="true">↗</span></TransitionLink>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
