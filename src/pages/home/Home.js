import React from 'react'

const Home = () => {
  return (
    <>
        <section class="contacto d-flex flex-wrap justify-content-evenly">
      <div class="d-flex flex-column col-5 ">
        <h2 class="col-12">
          ¡Estamos para Ayudarte!
        </h2>

        <div class="formulario col-12">

          <form class="" method="post" action="https://www.coninfopc.com.ar/">

            <div class="formulario-nombre d-flex col-12 flex-column" data-id="nombre" data-type="input">
              {/* <label class="">
                  Nombre
                </label>  */}
              <input type="text" class="input border-0 border-bottom" value="" name="nombre"
                data-required_mark="required" data-field_type="input" data-original_id="nombre" placeholder="Nombre"/>
            </div>

            <div class=" d-flex flex-row col-12">
              <div class="formulario-email col-6" data-id="email" data-type="email">
                {/* <label for="et_pb_contact_email_1" class="et_pb_contact_form_label">
                    Email
                  </label> */}
                <input type="text" class="input border-0 border-bottom" value="" name="email"
                  data-required_mark="required" data-field_type="email" data-original_id="email" placeholder="Email"/>
              </div>

              <div class="formulario-telefono col-6" data-id="telefono" data-type="input">
                {/* <label for="et_pb_contact_telefono_1" class="et_pb_contact_form_label">
                    Teléfono
                  </label> */}
                <input type="text" class="input border-0 border-bottom" value="" name="telefono"
                  data-required_mark="required" data-field_type="input" data-original_id="telefono"
                  placeholder="Teléfono" pattern="[0-9\s-]*" title="Sólo se permiten números."/>
              </div>
            </div>


            <div class="formulario-mensaje d-flex col-12 flex-column" data-id="mensaje" data-type="text">
               {/* <label for="et_pb_contact_mensaje_1" class="et_pb_contact_form_label">
                  Mensaje
                </label>  */}
              <textarea name="mensaje-contacto" class="input border-0 border-bottom" data-required_mark="required"
                data-field_type="text" data-original_id="mensaje" placeholder="Mensaje"></textarea>
            </div>

            <input type="hidden" value="et_contact_proccess" name="et_pb_contactform_submit_1" />

            <div class="et_contact_bottom_container d-flex justify-content-center">
              <button type="submit" name="buton-enviar" class="btn btn-outline-dark">Enviá Tu Consulta</button>
            </div>

            <input type="hidden" id="_wpnonce-et-pb-contact-form-submitted-1"
              name="_wpnonce-et-pb-contact-form-submitted-1" value="a6bbcd5b9c" />
            <input type="hidden" name="_wp_http_referer" value="/" />
          </form>
        </div>
      </div>

      <div class="d-flex flex-wrap justify-content-evenly flex-column col-5 informacion">        
        <div class="d-flex direccion">
          <div class="direccion-svg">
            <a href="https://goo.gl/maps/XehQcBdWdJor3SVv5" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-geo-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
              </svg>
            </a>
          </div>

          <div class="direccion-titulo">
            <h4 class="et_pb_module_header">
              <a href="https://goo.gl/maps/XehQcBdWdJor3SVv5" target="_blank">
                Dirección
              </a>
            </h4>

            <div class="et_pb_blurb_description">
              <p>                
                <a href="https://goo.gl/maps/XehQcBdWdJor3SVv5" target="_blank" rel="noopener">
                    Martín Haedo 1747              
                <br/>                
                  Florida, Buenos Aires
                  </a>                
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex horario">
          <div class="horario-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-watch"
              viewBox="0 0 16 16">
              <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
              <path
                d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
            </svg>
          </div>

          <div class="horario-titulo">
            <h4>
              Horario
            </h4>
            <div class="horario-hs">
              <p>
                L-V: 09 a 20 hs
              </p>
              <p>
                S: 09 a 13 hs
              </p>
            </div>
          </div>

        </div>

        <div class="d-flex telefono">
          <div class="telefono-svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </div>

          <div class="telefono-numero">
            <h4 class="telefono-titulo">
              Teléfono
            </h4>

            <div class="telefono-num">
              <a href="tel:+543815694570" class="text-decoration-none">
                381-5694570
              </a>
            </div>
          </div>
        </div>        
      </div>
    </section>

    <section className='preguntas'>
      <div className='accordion accordion-flush' id='accordionFlushExample'>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingOne'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
              ¿Cuáles son los servicios principales que ofrecemos en Tecnicos de pcs?
            </button>
          </h2>
          <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Reparacion de computadoras. Servicio Tecnico de Computadoras.
              Reparacion de PC y Notebooks. Instalación de Redes Cableadas y Wi Fi.
              Soporte Tecnico de Redes. Instalacion de sistema operativo. entre otros
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingTwo'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo' aria-expanded='false' aria-controls='flush-collapseTwo'>
              ¿Cuál es el área de cobertura del Soporte Tecnico?
            </button>
          </h2>
          <div id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>El área de cobertura es todo San Miguel de Tucumán</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingThree'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree' aria-expanded='false' aria-controls='flush-collapseThree'>
              ¿Cuál es el horario de prestación del soporte tecnico?
            </button>
          </h2>
          <div id='flush-collapseThree' className='accordion-collapse collapse' aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>El horario de atención es de Lunes a Viernes de 9 a 20 horas con excepción de
              los días feriados. Sabados de 10 a 16 horas.</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingFour'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseFour' aria-expanded='false' aria-controls='flush-collapseFour'>
              ¿Atienden en horarios fuera del horario normal de atención?
            </button>
          </h2>
          <div id='flush-collapseFour' className='accordion-collapse collapse' aria-labelledby='flush-headingFour'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Sí. Siempre y cuando ésto sea pactado con el cliente.</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingFive'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseFive' aria-expanded='false' aria-controls='flush-collapseFive'>
              ¿Tienen Garantía de las reparaciones?
            </button>
          </h2>
          <div id='flush-collapseFive' className='accordion-collapse collapse' aria-labelledby='flush-headingFive'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Si.El tiempo de garantía de la mano de obra es de 30 días desde la fecha de
              reparacion. El hardware vendido tendrá el tiempo de garantía del propio repuesto.</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingSix'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseSix' aria-expanded='false' aria-controls='flush-collapseSix'>
              ¿Si vivo fuera de Capital Federal, es posible llevar la PC al taller de Tecnicos de pcs?
            </button>
          </h2>
          <div id='flush-collapseSix' className='accordion-collapse collapse' aria-labelledby='flush-headingSix'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Sí.</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingSeven'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseSeven' aria-expanded='false' aria-controls='flush-collapseSeven'>
              ¿El diagnóstico en el laboratorio tiene algún costo?
            </button>
          </h2>
          <div id='flush-collapseSeven' className='accordion-collapse collapse' aria-labelledby='flush-headingSeven'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>No. El diagnóstico que se realiza en el laboratorio no tiene costo alguno. Es
              completamente gratuito. Siempre y cuando el cliente traiga y retire la pc del taller.</div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingHeigth'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseHeigth' aria-expanded='false' aria-controls='flush-collapseHeigth'>
              ¿Cualés son los servicios que brindan ConinfoPC?
            </button>
          </h2>
          <div id='flush-collapseHeigth' className='accordion-collapse collapse' aria-labelledby='flush-headingHeigth'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Mantenimiento de Software y Hardware. Eliminación de Malware y Virus.
              Optimización de Procesos. Backups y recuperación de datos en disco rígido y otros medios de
              almacenamiento. Reparación de PC y Notebooks. Ampliaciones de discos y memorias. Instalación de Redes
              Cableadas y Wi Fi. Soporte Técnico de Redes. Instalación de sistema operativo. Consultoría y mucho más.
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingNine'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseNine' aria-expanded='false' aria-controls='flush-collapseNine'>
              ¿Es seguro darle acceso a nuestra base de datos, dispositivos y todos nuestros recursos informáticos a sus
              técnicos?
            </button>
          </h2>
          <div id='flush-collapseNine' className='accordion-collapse collapse' aria-labelledby='flush-headingNine'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Si. Nuestro compromiso es la conficialidad con los clientes. Utilizamos técnicas
              y sistemas de seguridad informática, buen proceder y manejo de herramientas de confidencialidad y alto
              impacto, por lo que su información, dispositivos y recursos estarán seguros en todo momento. </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingTen'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTen' aria-expanded='false' aria-controls='flush-collapseTen'>
              ¿Cuánto tiempo se toma resolver una falla?
            </button>
          </h2>
          <div id='flush-collapseTen' className='accordion-collapse collapse' aria-labelledby='flush-headingTen'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>Dependiendo del caso, primero se hace una evaluación de cuál es la incidencia
              reportada y se investiga. Esta evaluación tiene una duración de hasta 48 horas. Luego se le indicara la
              cantidad de horas estimadas que llevará la reparación del caso. </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingEleven'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse'
              data-bs-target='#flush-collapseEleven' aria-expanded='false' aria-controls='flush-collapseEleven'>
              ¿Cada cuánto tiempo conviene limpiar el equipo?
            </button>
          </h2>
          <div id='flush-collapseEleven' className='accordion-collapse collapse' aria-labelledby='flush-headingEleven'
            data-bs-parent='#accordionFlushExample'>
            <div className='accordion-body'>La limpieza interna y externa del equipo depende de las condiciones ambientales
              de cada trabajo. Por lo general se realiza cada 6 meses. En algunos casos el tiempo es menor.</div>
          </div>
        </div>
      </div>
    </section>

    <section className='como_trabajamos '>
      <div>
        <h3 className='d-flex justify-content-center m-3'>
          ¿Cómo trabajamos?
        </h3>
      </div>

      <div className='d-flex flex-wrap justify-content-evenly px-2 py-2'>
        <div className='col-5 px-4 py-3'>
          <iframe src='//www.youtube.com/embed/xlgcJqb12h4?wmode=opaque' width='100%' height='90%'></iframe>
        </div>

        <div className='d-flex flex-wrap justify-content-evenly flex-column col-5 px-2'>
          <div className='p-2'>
            <div className='d-flex'>
              <div className='px-3'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor'
                  className='bi bi-chat-dots' viewBox='0 0 16 16'>
                  <path
                    d='M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                  <path
                    d='m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z' />
                </svg>
              </div>

              <h3>
                <p>Consulta</p>
              </h3>
            </div>

            <div>
              <p>
                <font>Envíanos un <strong> <a href='https://wa.link/xwhmmv' target='_blank'> WhatsApp</a></strong>
                  <strong>,</strong> llámanos o consúltanos a través de nuestro <a href=''>formulario</a><strong>,
                  </strong>para acordar el ingreso de su equipo.
                </font>
              </p>
            </div>
          </div>

          <div className='p-2'>
            <div className='d-flex'>
              <div className='px-3'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor'
                  className='bi bi-clipboard2-check' viewBox='0 0 16 16'>
                  <path
                    d='M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z' />
                  <path
                    d='M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z' />
                  <path
                    d='M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z' />
                </svg>
              </div>
              <h3>Diagnóstico</h3>
            </div>

            <div>
              <p>
                <font>Nuestros <strong>técnicos </strong><strong>evalúan </strong>su
                  computadora<strong> y le </strong><strong>envían un</strong><strong>
                    presupuesto</strong> del costo de reparación y/o mantenimiento.
                </font>
              </p>
            </div>
          </div>

          <div className='p-2'>
            <div className='d-flex'>
              <div className='px-3'>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor'
                  className='bi bi-wrench-adjustable-circle' viewBox='0 0 16 16'>
                  <path d='M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z' />
                  <path
                    d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z' />
                </svg>
              </div>

              <h3>
                <p>Reparación</p>
              </h3>
            </div>

            <div>
              <p>
                <font className='wsw-48'>Basándonos en el diagnóstico, un tecnico<strong> repara tu
                    PC</strong>&nbsp;realizando la <strong>solución apropiada</strong>.</font>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className='d-flex justify-content-center my-4'>
        <font>Reparamos todas<strong>&nbsp;</strong>las marcas</font>
      </h3>

      <img
        src='https://884e910d64.clvaw-cdnwnd.com/c9bf1596b060169a98f1c40490d409e7/200000165-623bc623bf/servicio-t%C3%A9cnico-lenovo-dell-asus-hp-acer-7.jpg?ph=884e910d64'
        alt='Servicio tecnico de Lenovo, Dell, Asus, Acer, HP, etc.' loading='lazy' width='100%' className='my-2'/>

      <div className='d-flex justify-content-center my-3'>Servicio tecnico de Lenovo, Dell, Asus, Acer, HP, etc.</div>

      <div className='my-3'>
        <marquee scrolldelay='10'>servicio tecnico lenovo y exo, reparacion de laptops dell, servicio tecnico
          notebook hp, reparaciones acer, reparar asus, soporte técnico vaio reparar hp y toshiba satellite
        </marquee>
      </div>

    </section>


    <section className='nosotros py-2'>
      <div>
        <div>
          <p className='d-flex justify-content-center'>SOLUCIONES INFORMÁTICAS </p>
          <h2 className='d-flex justify-content-center'>
            Algunos de nuestros factores diferenciales
          </h2>
          <p className='d-flex justify-content-center texto1'>
            Nuestro objetivo primordial es lograr que nuestros clientes sean más competitivos y exitosos. Para esto,
            trabajamos en equipo junto a ellos, planificando a corto,
            mediano y largo plazo el desarrollo y la optimización de la plataforma informática.
          </p>
        </div>

        <div className='d-flex'>
          <div className='col-6'>
            <div className='d-flex'>
              <div>
                <img src='./images/organizacion-icon.png' alt='organizacion-icon' srcset='' width='105' height='113'/>
              </div>

              <div>
                <h3>
                  Organización
                </h3>
                <p>
                  Contamos con un coordinador técnico exclusivo para revisar los eventos que van sucediendo en el día a
                  día para hacer
                  mas dinámica la atención.
                </p>
              </div>
            </div>

            <div className='d-flex'>
              <div>
                <img src='./images/instalaciones-icon.png' alt='instalaciones-icon' srcset='' width='105' height='113'/>
              </div>
              <div>
                <h3>Instalaciones</h3>
                <p>
                  Las oficinas son propias y con espacios especialmente diseñados para optimizar el tiempo de servicio.
                </p>
              </div>
            </div>
          </div>

          <div className='col-6'>
            <div className='d-flex'>
              <div>
                <img src='./images/calidad-icon.png' alt='calidad-icon' srcset='' width='105' height='113'/>
              </div>

              <div>
                <h3 clas>
                  Calidad
                </h3>
                <p>
                  Un gerente de calidad dedicado íntegramente a hacer mas fluida la relación entre proveedor y empresa y
                  garantizar
                  los estandares de calidad ofrecidos.
                </p>

              </div>
            </div>

            <div className='d-flex'>
              <div>
                <img src='./images/experiencia-icono.png' alt='experiencia-icono' srcset='' width='105' height='113'/>
              </div>
              <div>
                <h3>
                  Experiencia
                </h3>
                <p>
                  Más de 20 años de experiencia en el mercado garantizan nuestra permanencia y liderazgo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex texto1 justify-content-center'>
        <p>LE BRINDAMOS UN SERVICIO PROFESIONAL A UN PRECIO INSUPERABLE <br /><span style={{ color: '#0056db' }}>
  <strong>USTED PODRÁ CONCENTRARSE EN SU NEGOCIO</strong>
</span>
</p>
      </div>

      <div className='d-flex flex-wrap justify-content-evenly '>
        <div className='card col-5'>
          <div className='card-body'>
            <h5 className='card-title1 d-flex justify-content-center'>
              Estrategia y satisfacción
            </h5>

            <p className='card-text texto2'>Tendrá un
              <a href='https://www.europapress.es/portaltic/internet/noticia-importancia-soporte-tecnico-mantenimiento-exito-pagina-web-20221003115908.html'
                target='_blank' rel='noopener'> socio tecnológico estratégico</a>, que le ayudará
              a desarrollar e implementar nuevas tecnologías en forma oportuna y eficiente, como así también mantener
              preventivamente su plataforma informática, servidores e
              impresoras.
            </p>

            <p className='card-text texto2'>Contamos con la infraestructura, procedimientos, recursos y personal capacitado
              en
              servicios de atención al cliente para lograr la satisfacción integral que su empresa
              necesita en materia de tecnología.
            </p>
          </div>
        </div>

        <div className='card col-5'>
          <div className='card-body'>
            <h5 className='card-title1 d-flex justify-content-center'>
              Metodología de trabajo
            </h5>

            <p className='card-text texto2'>Nuestra metodología de trabajo le permitirá tener el detalle de los trabajos
              realizados en sus computadores. En base al seguimiento entregamos informes en el
              momento de las fallas y recomendaciones pertinentes para cada caso en particular.
            </p>
            <p className='card-text texto2'>Realizamos constantes revisiones para tener el detalle de los componentes de su
              plataforma informática y poder optimizar la utilización de la misma. Asesoramos en
              nuevos proyectos basándonos en nuestra experiencia adquirida.</p>
          </div>
        </div>
      </div>

      <div className='my-5'>
        <div>
          LÍDERES EN SOPORTE TECNOLÓGICO
          <h2>Conozca más sobre nosotros</h2>
            <p>
              Proveemos un servicio de reparación de computadoras eficaz, completo y de calidad en toda la zona norte,
              llegamos desde Morón hasta Pilar y alrededores.
            </p>
        </div>

        <div>
          <div className='d-flex'>
            <div>
              <img src='./images/lab-icono.png' alt='lab-icono' srcset=''/>
            </div>

            <div className='d-flex flex-column'>
              <h3>
                Laboratorio tecnológico
              </h3>

              <p><strong>CON EQUIPOS DE ÚLTIMA GENERACIÓN</strong><br/>
                Con servidores para respaldo de imágenes de equipos, nunca perderá los datos de sus computadores en caso
                de ser necesario su transporte a nuestro taller.
              </p>
            </div>
          </div>

          <div className='d-flex'>
            <div>
              <img src='./images/instalaciones-icon.png' alt='instalaciones-icon' srcset=''/>
            </div>

            <div>
              <h3>
                Coordinador exclusivo
              </h3>
              <p>
                <strong>SIEMPRE QUE LO NECESITE</strong><br/>
                Para agenda y servicios en cada sucursal, a fin de cumplir aún más con nuestro
                compromiso de tiempos de respuesta ante problemas con las computadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='porque_nosotros py-2'>
      <div className='d-flex justify-content-center my-5'>
        <h2>¿Por qué <strong><span style={{ color: '#0056db' }}>Visión Tecnológica?</span>
        </strong></h2>
      </div>

      <div className='d-flex'>
        <div className='col-4 d-flex flex-wrap justify-content-evenly'>
          <div className='card'  style={{ width: '18rem' }}>
            <div className='card-body'>
              <h5 className='d-flex card-title justify-content-center py-1'>Entendimiento</h5>
              <p className='card-text texto2'>
                Cada cliente es un mundo y personalizamos el servicio en base a su necesidad. Nos importa el estado de
                sus computadoras, que podamos prevenir las fallas antes que sucedan y si suceden, resolver en el menor
                tiempo posible.
              </p>
            </div>
          </div>
        </div>

        <div className='col-4 d-flex flex-wrap justify-content-evenly'>
          <div className='card'  style={{ width: '18rem' }}>
            <div className='card-body'>
              <h5 className='d-flex card-title justify-content-center py-1'>Trabajar en equipo</h5>
              <p className='card-text texto2'>
                En <strong>Visión Tecnológica </strong>contamos con más de 30 profesionales con experiencia en diversos
                conocimientos para poder cubrir todas las necesidades que pudieran surgir.
              </p>
            </div>
          </div>
        </div>

        <div className='col-4 d-flex flex-wrap justify-content-evenly'>
          <div className='card'  style={{ width: '18rem' }}>
            <div className='card-body'>
              <h5 className='d-flex card-title justify-content-center py-1'>Innovación</h5>
              <p className='card-text texto2'>
                Permanentemente nos capacitamos en nuevas tecnologías para estar siempre en la vanguardia del mercado de
                reparación de computadoras.
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>

    <section className='servicios'>
      <div className='d-flex justify-content-center'>
        <h2 className='wnd-align-center'>Nuestro Servicio<strong>&nbsp;</strong>Técnico de PC<strong> </strong>y
          Notebook</h2>
      </div>

      <div className='d-flex flex-wrap justify-content-evenly' >
        <div className='card_servicio'>
          <h2>
            <a href='/servicio-tecnico-de-pc-a-domicilio-en-capital-federal/'>
              Reparaciones a Domicilio
            </a>
          </h2>

          <p>
            <font className='wsw-03'>Se <strong>aíslan los problemas </strong>de tu computadora o laptop
              y<strong>, </strong>a base de protocolo de búsqueda de fallas propio, <strong>se resuelven
                en tu domicilio.</strong></font><br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/'>Soporte Tecnico&nbsp; a
              Empresas/PyMEs</a></h2>

          <p>Juntos arreglamos un plan de servicios y visitas acorde a las necesidades de su empresa.
            <strong>Ofrecemos planes presenciales, remotos y mixtos.</strong>&nbsp;<br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/reparacion-de-pc/'>Limpieza y Mantenimiento General</a></h2>

          <p>
            <font className='wsw-03'>Se realiza una<strong> Limpieza y Mantenimiento de Hardware y Software
              </strong>para optimizar el funcionamiento de tú computo.&nbsp;<br/></font>
            &nbsp;
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/armado-de-pc/'>Armado de PC&nbsp;</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h2>
          <h2>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;</h2>

          <p>
            <font className='wsw-03'><strong>Arma y diseña tu PC</strong> <strong>a medida</strong> según tus
              necesidades (Oficina o Gamer). Con <strong>i</strong><strong>nstalación de Windows</strong>,
              Office y programas.<br/></font>
            &nbsp;
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='#'>Reparación General<br/></a></h2>
          <p href='/reparacion-de-pc/'>
            <font className='wsw-03'><br/></font>
          </p>
          
          <p>
            <font className='wsw-03'>Se <strong>aíslan los problemas </strong>de tu computadora o laptop
              y<strong>, </strong>a base de protocolo de búsqueda de fallas propio, <strong>se
                resuelven.</strong>&nbsp;</font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/reparacion-de-pc/'>Reemplazo de componentes dañados</a></h2>
          
          <p>
            <font className='wsw-02'>En caso de encontrar un <strong>componente dañado</strong> en su
              computadora de ser posible<strong> se repara o si no se cambia.</strong>&nbsp;</font><br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/formateo-e-instalacion-de-windows/'>Formatéo e Instalación de Windows</a></h2>
          
          <p href='/formateo-e-instalacion-de-windows/'>
            <font className='wsw-03'>Formateo e instalación de Windows <strong>con o sin perdida de
                datos.</strong> Incluye instalación de programas solicitados.<br/></font>
            &nbsp;
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href='/soporte-remoto/'>Soporte Remoto</a></h2>
          <p href='/soporte-remoto/'><br/></p>
          
          <p>
            <font className='wsw-03'><strong>Soporte </strong>técnico <strong>remoto</strong> para obtener
              nuestro service de computadoras <strong>sin la necesidad de</strong><strong> transportar
                equipos.</strong>&nbsp;</font><br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/armamos-tu-pc-gamer/'>Actualización de Hardware</a></font>
          </h2>
          <h2>
            <font className='wsw-38'>&nbsp;</font>
          </h2>
          <p>
            <font className='wsw-03'><strong>Cambiamos&nbsp;componentes</strong><strong>&nbsp;
              </strong>obsoletos <strong>por otros que optimicen su
                rendimiento</strong><strong>.</strong>&nbsp;</font><br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='#'>Eliminación de Virus, Malware y Spyw</a>
              <font className='wnd-font-size-110'><a href='/eliminacion-de-virus/'>are</a></font>
            </font>
          </h2>
          <p>
            <font className='wsw-03'>Mediante la utilización de
              <strong>última</strong><strong>&nbsp;tecnología se elimina todo elemento dañino</strong>
            </font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2><a href=''>Errores o Fallas del Equipo</a></h2>
          <p data-link='temp'><br/></p>
          <p>
            <font className='wsw-03'>Contamos con conocimiento suficiente para <strong>diagnosticar y arreglar
                cualquier tipo de falla</strong> que su computadora posea.</font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wnd-font-size-80'>
              <font className='wnd-font-size-120 wsw-38'><a href='/reparacion-de-pc/'>Instalación y
                  Actualización de Software</a></font>
            </font>
          </h2>
          <p>
            <font className='wsw-03'>Instalación y actualización de<strong> programas a
                pedido</strong><strong>.</strong> (antivirus, office, programas de diseño, videojuegos,
              etc.)</font><br/>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/formateo-e-instalacion-de-windows/'>Configuración e Instalación
                de Drivers</a></font>
          </h2>
          <p>
            <font className='wsw-03'>Mediante los mejores software se realiza una <strong>instalación adecuada
                de drivers.</strong></font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/'>Soporte
                de Redes</a></font>
          </h2>
          <p>
            <font className='wsw-03'><strong>Soporte</strong> técnico <strong>de redes</strong> integral
              <strong>acondicionado a</strong> las exigencias de <strong>su empresa.</strong></font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/reparacion-de-pc/'>Recuperación de Datos y Backups</a>&nbsp;
            </font>
          </h2>
          <p>
            <font className='wsw-03'><strong>Mediante un Software </strong>de recuperación de datos <strong>se
                logran obtener la información perdida</strong></font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/'>Planes a
                Medida</a></font>
          </h2>
          <p>
            <font className='wsw-03'>Se prepara un <strong>plan de servicio ilimitado</strong>
              <strong>adaptado</strong> <strong>a</strong> las necesidades de <strong>tu empresa
              </strong>o PyME.</font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wsw-38'><a href='/eliminacion-de-virus/'>Mantenimiento de Software y
                Antivirus</a></font>
          </h2>
          <p>
            <font className='wsw-03'>&nbsp;Se realizan <strong>limpiezas de fondo para optimizar</strong> el
              funcionamiento de <strong>tu computadora</strong> o notebook</font>
          </p>
        </div>

        <div className='card_servicio'>
          <h2>
            <font className='wnd-font-size-110'>
              <font className='wsw-38'><a href='/contacto/'>Soporte Post-venta</a></font>
            </font>
          </h2>
          <p>
            <font className='wsw-03'>Luego de la reparación de una PC <strong>cualquier</strong>
              <strong>d</strong><strong>uda o consulta será resulta sin cargo alguno.</strong></font>
          </p>
        </div>
      </div>

      <div className='d-flex justify-content-center'>
        <p className=''>
          <strong>
            Para más información
          </strong>

          <strong>
            <em>
              ¡
            </em>
          </strong>

          <strong>
            <em>
              <a href='/contacto/'>
                Contáctenos
              </a>
              !
            </em>
          </strong>          
        </p>
      </div>
    </section>
  

    {/*<section className='s s-basic cf sc-w   wnd-w-default wnd-s-normal wnd-h-auto'>
      <div className='s-w cf'>
        <div className='s-o cf'>
          <div className='s-bg cf'>
            <div className='s-bg-l'>
    
    
            </div>
          </div>
          <div className='s-c cf'>
            <div className='ez cf wnd-no-cols'>
              <div className='ez-c'>
                <div className='b b-text cf'>
                  <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                    
                  </div>
                </div>
                <div className='mt mt-image-left-float img-s-c b-s-t50 b-s-b50 b-s-l0 b-s-r0 cf imageLeftFloat grid-3'>
                  <div className='mt-container'>
                    <div className='mt-item cf'>
                      <a href='/mantenimiento-de-pcs/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-square wnd-type-icon' style=''
                          id='wnd_ImageBlock_306242'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
    
                              <embed id='wnd_ImageBlock_306242_img' alt='' style=''
                                data-src='https://d1di2lzuh97fh2.cloudfront.net/files/1a/1al/1als6x.svg?ph=884e910d64'
                                type='image/svg+xml'>
                              <script>checkAndChangeSvgColor('wnd_ImageBlock_306242_img');</script>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>Limpieza y Mantenimiento General</h3>
                            <p>
                              <font className='wsw-05'>Se realiza una<strong> Limpieza y Mantenimiento de Hardware y
                                  Software </strong>para optimizar el funcionamiento de tú computo.</font>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='mt-item cf'>
                      <a href='/armado-de-pc/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-square wnd-type-icon' style=''
                          id='wnd_ImageBlock_18321'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
    
                              <embed id='wnd_ImageBlock_18321_img' alt='' style=''
                                data-src='https://d1di2lzuh97fh2.cloudfront.net/files/0h/0ha/0haiww.svg?ph=884e910d64'
                                type='image/svg+xml'>
                              <script>checkAndChangeSvgColor('wnd_ImageBlock_18321_img');</script>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>
                              <p>Armado de PC</p>
                            </h3>
                            <p>
                              <font className='wsw-05'><strong>Arma y diseña tu PC</strong> <strong>a medida</strong> según
                                tus necesidades (Oficina o Gamer). Con <strong>i</strong><strong>nstalación de
                                  Windows</strong>, Office y programas solicitados.</font><br/>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='mt-item cf'>
                      <a href='/formateo-e-instalacion-de-windows/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-landscape wnd-type-image' style=''
                          id='wnd_ImageBlock_954067'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
                              <picture>
                                <source type='image/jpeg'
                                  src='https://884e910d64.clvaw-cdnwnd.com/c9bf1596b060169a98f1c40490d409e7/200000013-c0943c0946/450/windows5.png?ph=884e910d64'/>
                                <img id='wnd_ImageBlock_954067_img'
                                  src='https://884e910d64.clvaw-cdnwnd.com/c9bf1596b060169a98f1c40490d409e7/200000013-c0943c0946/windows5.png?ph=884e910d64'
                                  alt='' width='628' height='602' loading='lazy' style=''/>
                              </picture>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>
                              <p>Formatéo e Instalación de Windows</p>
                            </h3>
    
                            <p>
                              <font className='wsw-05'>Formateo e instalación de Windows <strong>con o sin perdida de
                                  datos.</strong>&nbsp;Incluye instalación de programas solicitados.</font>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='mt-item cf'>
                      <a href='/mantenimiento-y-soporte-tecnico-de-pc-para-empresas/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-square wnd-type-icon' style=''
                          id='wnd_ImageBlock_155505'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
    
                              <embed id='wnd_ImageBlock_155505_img' alt='' style=''
                                data-src='https://d1di2lzuh97fh2.cloudfront.net/files/2r/2rn/2rnqr9.svg?ph=884e910d64'
                                type='image/svg+xml'>
                              <script>checkAndChangeSvgColor('wnd_ImageBlock_155505_img');</script>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>Servicio a PyMEs<br/></h3>
    
                            <p className='wnd-align-left'>
                              <font className='wsw-05'>Juntos arreglamos un plan de servicios y visitas acorde a las
                                necesidades de su empresa.&nbsp;</font><strong
                                style='color: rgb(77, 77, 77); font-size: 0.95rem;'>Ofrecemos planes presenciales,
                                remotos y mixtos.</strong>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='mt-item cf'>
                      <a href='/reparacion-de-pc/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-square wnd-type-icon' style=''
                          id='wnd_ImageBlock_835654'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
    
                              <embed id='wnd_ImageBlock_835654_img' alt='' style=''
                                data-src='https://d1di2lzuh97fh2.cloudfront.net/files/2s/2sv/2sv0fo.svg?ph=884e910d64'
                                type='image/svg+xml'>
                              <script>checkAndChangeSvgColor('wnd_ImageBlock_835654_img');</script>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>Reparación de PC General<br/></h3>
    
                            <p>
                              <font className='wsw-05'>Se <strong>aíslan los problemas </strong>de tu computadora o laptop
                                y<strong>, </strong>en&nbsp;base de&nbsp;protocolo de búsqueda de fallas
                                propio,&nbsp;<strong>se resuelven.</strong></font>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='mt-item cf'>
                      <a href='/soporte-tecnico-remoto-para-pc/'>
                        <div className='b-img b-img-default b b-s cf wnd-orientation-square wnd-type-icon' style=''
                          id='wnd_ImageBlock_294725'>
                          <div className='b-img-w'>
                            <div className='b-img-c'>
    
                              <embed id='wnd_ImageBlock_294725_img' alt='' style=''
                                data-src='https://d1di2lzuh97fh2.cloudfront.net/files/2c/2cf/2cfk0z.svg?ph=884e910d64'
                                type='image/svg+xml'>
                              <script>checkAndChangeSvgColor('wnd_ImageBlock_294725_img');</script>
                            </div>
    
                          </div>
                        </div>
                        <div className='b b-text cf'>
                          <div className='b-c b-text-c b-s b-s-t60 b-s-b60 b-cs cf'>
                            <h3>Soporte Remoto</h3>
    
                            <p>
                              <font className='wsw-05'><strong>Soporte
                                </strong>técnico&nbsp;<strong>remoto</strong>&nbsp;para obtener nuestro service de
                                computadoras&nbsp;<strong>sin la necesidad de</strong><strong>&nbsp;transportar
                                  equipos.</strong></font>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='b b-s b-s-t150 b-s-b150 b-btn b-btn-4 wnd-align-center'>
                  <div className='b-btn-c i-a'>
                    <a className='b-btn-l' href='/servicios/'>
                      <span className='b-btn-t'>Todos los servicios</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}




    {/*<section estilo de titulo y tarjetas
      className='elementor-section elementor-top-section elementor-element elementor-element-cdfc5ea elementor-section-boxed elementor-section-height-default elementor-section-height-default'
      data-id='cdfc5ea' data-element_type='section'>
      <div className='elementor-container elementor-column-gap-default'>
        <div className='elementor-row'>
          <div className='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-35a4d32'
            data-id='35a4d32' data-element_type='column'>
            <div className='elementor-column-wrap elementor-element-populated'>
              <div className='elementor-widget-wrap'>
                <div className='elementor-element elementor-element-68d22593 elementor-widget elementor-widget-text-editor'
                  data-id='68d22593' data-element_type='widget' data-widget_type='text-editor.default'>
                  <div className='elementor-widget-container'>
                    <div className='elementor-text-editor elementor-clearfix'>
                      LÍDERES EN SOPORTE TECNOLÓGICO </div>
                  </div>
                </div>
                <div className='elementor-element elementor-element-0f4ba5f elementor-widget elementor-widget-heading'
                  data-id='0f4ba5f' data-element_type='widget' data-widget_type='heading.default'>
                  <div className='elementor-widget-container'>
                    <h2 className='elementor-heading-title elementor-size-default'>¿Por qué elegirnos?</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className='elementor-section elementor-top-section elementor-element elementor-element-465d963b elementor-section-boxed elementor-section-height-default elementor-section-height-default'
      data-id='465d963b' data-element_type='section'>
      <div className='elementor-background-overlay'></div>
      <div className='elementor-container elementor-column-gap-wide'>
        <div className='elementor-row'>
          <div className='elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-21b9d9eb'
            data-id='21b9d9eb' data-element_type='column'>
            <div className='elementor-column-wrap elementor-element-populated'>
              <div className='elementor-widget-wrap'>
                <section
                  className='elementor-section elementor-inner-section elementor-element elementor-element-1e875735 elementor-section-boxed elementor-section-height-default elementor-section-height-default'
                  data-id='1e875735' data-element_type='section'>
                  <div className='elementor-background-overlay'></div>
                  <div className='elementor-container elementor-column-gap-default'>
                    <div className='elementor-row'>
                      <div
                        className='elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-318f1c31'
                        data-id='318f1c31' data-element_type='column'>
                        <div className='elementor-column-wrap elementor-element-populated'>
                          <div className='elementor-widget-wrap'>
                            <div
                              className='elementor-element elementor-element-3538b791 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'
                              data-id='3538b791' data-element_type='widget' data-widget_type='icon-list.default'>
                              <div className='elementor-widget-container'>
                                <ul className='elementor-icon-list-items'>
                                  <li className='elementor-icon-list-item'>
                                    <span className='elementor-icon-list-icon'>
                                      <i aria-hidden='true' className='icon icon-back_up'></i> </span>
                                    <span className='elementor-icon-list-text'>Experiencia</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className='elementor-element elementor-element-d32742 elementor-widget-divider--view-line elementor-widget elementor-widget-divider'
                              data-id='d32742' data-element_type='widget' data-widget_type='divider.default'>
                              <div className='elementor-widget-container'>
                                <div className='elementor-divider'>
                                  <span className='elementor-divider-separator'>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className='elementor-element elementor-element-4549a0d4 elementor-widget elementor-widget-text-editor'
                              data-id='4549a0d4' data-element_type='widget' data-widget_type='text-editor.default'>
                              <div className='elementor-widget-container'>
                                <div className='elementor-text-editor elementor-clearfix'>
                                  <p>Desde hace años creamos y brindamos soluciones de alojamiento web para sitios y
                                    aplicaciones personales, empresariales y de alto tráfico. Nos avala la confianza de
                                    nuestros clientes que nos acompañan y se suman año tras año.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-60fd5067'
            data-id='60fd5067' data-element_type='column'>
            <div className='elementor-column-wrap elementor-element-populated'>
              <div className='elementor-widget-wrap'>
                <section
                  className='elementor-section elementor-inner-section elementor-element elementor-element-ce92950 elementor-section-boxed elementor-section-height-default elementor-section-height-default'
                  data-id='ce92950' data-element_type='section'>
                  <div className='elementor-background-overlay'></div>
                  <div className='elementor-container elementor-column-gap-default'>
                    <div className='elementor-row'>
                      <div
                        className='elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6cfda3b1'
                        data-id='6cfda3b1' data-element_type='column'>
                        <div className='elementor-column-wrap elementor-element-populated'>
                          <div className='elementor-widget-wrap'>
                            <div
                              className='elementor-element elementor-element-1370bbd4 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list'
                              data-id='1370bbd4' data-element_type='widget' data-widget_type='icon-list.default'>
                              <div className='elementor-widget-container'>
                                <ul className='elementor-icon-list-items'>
                                  <li className='elementor-icon-list-item'>
                                    <span className='elementor-icon-list-icon'>
                                      <i aria-hidden='true' className='icon icon-back_up'></i> </span>
                                    <span className='elementor-icon-list-text'>Soporte</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              className='elementor-element elementor-element-222cca9e elementor-widget-divider--view-line elementor-widget elementor-widget-divider'
                              data-id='222cca9e' data-element_type='widget' data-widget_type='divider.default'>
                              <div className='elementor-widget-container'>
                                <div className='elementor-divider'>
                                  <span className='elementor-divider-separator'>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              className='elementor-element elementor-element-403de654 elementor-widget elementor-widget-text-editor'
                              data-id='403de654' data-element_type='widget' data-widget_type='text-editor.default'>
                              <div className='elementor-widget-container'>
                                <div className='elementor-text-editor elementor-clearfix'>
                                  <p>Nuestro equipo de especialistas desarrolladores atiende por teléfono, chat y correo
                                    electrónico sus consultas sobre la Plataforma de hosting o cualquier proyecto web en el
                                    que precise asistencia.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}

    {/*agregar:
    https://visiontecnologica.com.ar/licencias-de-software/
    https://visiontecnologica.com.ar/cableado-de-redes/
    https://visiontecnologica.com.ar/soporte-tecnico-de-pc/

    importante:
    https://www.reparacionesdecomputadoras.com.ar/servicios/ (se agrego, falta pagina servicio por servicio)

    https://visiontecnologica.com.ar/mantenimiento-de-computadoras/
    https://visiontecnologica.com.ar/abonos-de-redes-para-empresas/

    https://www.supertek.com.ar/

    https://www.coninfopc.com.ar/#servicios

    https://www.tecnicosdepcs.com.ar/servicios.php
    https://www.tecnicosdepcs.com.ar/tecnico-de-pc.php
    https://www.tecnicosdepcs.com.ar/mantenimiento-de-pc.php
    https://www.tecnicosdepcs.com.ar/reparacion-de-pc.php

    https://www.graytech.com.ar/
    https://www.graytech.com.ar/otros-servicios/

    https://www.pcserviciotecnico.com/remocion-de-virus
    https://www.pcserviciotecnico.com/instalacion-de-aplicaciones
    https://www.pcserviciotecnico.com/antivirus
    https://www.pcserviciotecnico.com/recuperacion-de-datos
    https://www.pcserviciotecnico.com/sistemas-operativos
    https://www.pcserviciotecnico.com/copia-de-seguridad*/}


    </>
  )
}

export default Home