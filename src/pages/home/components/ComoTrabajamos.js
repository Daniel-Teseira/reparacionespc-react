const ComoTrabajamos = () => {
  return (
    <section class='como_trabajamos '>
        <div>
          <h3 class='d-flex justify-content-center m-3'>
            ¿Cómo trabajamos?
          </h3>
        </div>

        <div class='d-flex flex-wrap justify-content-evenly px-2 py-2'>
          <div class='col-5 px-4 py-3'>
            <iframe
              src='//www.youtube.com/embed/xlgcJqb12h4?wmode=opaque'
              width='100%'
              height='90%'
               title='Video Ejemplo'
            ></iframe>
          </div>

          <div class='d-flex flex-wrap justify-content-evenly flex-column col-5 px-2'>
            <div class='p-2'>
              <div class='d-flex'>
                <div class='px-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-chat-dots'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                    <path d='m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z' />
                  </svg>
                </div>

                <h3>
                  <p>Consulta</p>
                </h3>
              </div>

              <div>
                <p>
                  <font>
                    Envíanos un{' '}
                    <strong>
                      {' '}
                      <a href='https://wa.link/xwhmmv' target='_blank' rel='noopener noreferrer'>
                        {' '}
                        WhatsApp
                      </a>
                    </strong>
                    <strong>,</strong> llámanos o consúltanos a través de
                    nuestro <a href='https://www.google.com/'>formulario</a>
                    <strong>,</strong>para acordar el ingreso de su equipo.
                  </font>
                </p>
              </div>
            </div>

            <div class='p-2'>
              <div class='d-flex'>
                <div class='px-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-clipboard2-check'
                    viewBox='0 0 16 16'
                  >
                    <path d='M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z' />
                    <path d='M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z' />
                    <path d='M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z' />
                  </svg>
                </div>
                <h3>Diagnóstico</h3>
              </div>

              <div>
                <p>
                  <font>
                    Nuestros <strong>técnicos </strong>
                    <strong>evalúan </strong>su computadora
                    <strong> y le </strong>
                    <strong>envían un</strong>
                    <strong>presupuesto</strong> del costo de reparación y/o
                    mantenimiento.
                  </font>
                </p>
              </div>
            </div>

            <div class='p-2'>
              <div class='d-flex'>
                <div class='px-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='currentColor'
                    class='bi bi-wrench-adjustable-circle'
                    viewBox='0 0 16 16'
                  >
                    <path d='M12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Z' />
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.49 4.49 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8Zm-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z' />
                  </svg>
                </div>

                <h3>
                  <p>Reparación</p>
                </h3>
              </div>

              <div>
                <p>
                  <font class='wsw-48'>
                    Basándonos en el diagnóstico, un tecnico
                    <strong> repara tu PC</strong>&nbsp;realizando la{' '}
                    <strong>solución apropiada</strong>.
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 class='d-flex justify-content-center my-4'>
          <font>
            Reparamos todas<strong>&nbsp;</strong>las marcas
          </font>
        </h3>

        <img
          src='https://884e910d64.clvaw-cdnwnd.com/c9bf1596b060169a98f1c40490d409e7/200000165-623bc623bf/servicio-t%C3%A9cnico-lenovo-dell-asus-hp-acer-7.jpg?ph=884e910d64'
          alt='Servicio tecnico de Lenovo, Dell, Asus, Acer, HP, etc.'
          loading='lazy'
          width='100%'
          class='my-2'
        />

        <div class='d-flex justify-content-center my-3'>
          Servicio tecnico de Lenovo, Dell, Asus, Acer, HP, etc.
        </div>

        {/* <div class='overflow-hidden whitespace-nowrap'>
         <p class='animate-marquee'>
            servicio tecnico lenovo y exo, reparacion de laptops dell, servicio
            tecnico notebook hp, reparaciones acer, reparar asus, soporte
            técnico vaio reparar hp y toshiba satellite
          </p>
        </div> */}

        <div class='my-3'>
          <marquee scrolldelay='10'>
            servicio tecnico lenovo y exo, reparacion de laptops dell, servicio
            tecnico notebook hp, reparaciones acer, reparar asus, soporte
            técnico vaio reparar hp y toshiba satellite
          </marquee>
        </div>
      </section>
  )
}

export default ComoTrabajamos