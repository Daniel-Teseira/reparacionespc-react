import ContactForm from '../../../utils/formulario';

const Contacto = () => {
  return (
    <section class='contacto d-flex flex-wrap justify-content-evenly container my-5'>
        <div class='d-flex flex-column col-5 '>
          <h2 class='col-12'>¡Estamos para Ayudarte!</h2>

          <div class='formulario col-12'>
            <ContactForm />
          </div>
        </div>

        <div class='d-flex flex-wrap justify-content-evenly flex-column col-5 informacion'>
          <div class='d-flex direccion'>
            <div class='direccion-svg'>
              <a href='https://goo.gl/maps/XehQcBdWdJor3SVv5' target='_blank' rel='noopener noreferrer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-geo-fill'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z'
                  />
                </svg>
              </a>
            </div>

            <div class='direccion-titulo'>
              <h4 class='et_pb_module_header'>
                <a href='https://goo.gl/maps/XehQcBdWdJor3SVv5' target='_blank' rel='noopener noreferrer'>
                  Dirección
                </a>
              </h4>

              <div class='et_pb_blurb_description'>
                <p>
                  <a
                    href='https://goo.gl/maps/XehQcBdWdJor3SVv5'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Coronel Zelaya 451, Duplex 7
                    <br />
                    San Miguel de Tucumán, Tucumán
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class='d-flex horario'>
            <div class='horario-svg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-watch'
                viewBox='0 0 16 16'
              >
                <path d='M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z' />
                <path d='M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z' />
              </svg>
            </div>

            <div class='horario-titulo'>
              <h4>Horario</h4>
              <div class='horario-hs'>
                <p>L-V: 09 a 20 hs</p>
                <p>S: 09 a 13 hs</p>
              </div>
            </div>
          </div>

          <div class='d-flex telefono'>
            <div class='telefono-svg'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-telephone-fill'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                />
              </svg>
            </div>

            <div class='telefono-numero'>
              <h4 class='telefono-titulo'>Teléfono</h4>

              <div class='telefono-num'>
                <a href='tel:+543815694570' class='text-decoration-none'>
                  (+54) 381-5694570
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contacto