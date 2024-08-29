import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <section className='info-pie d-fleX col-12'>
    <div className='grupo-1'>
      <div className='d-flex flex-column'>
        <div className='info-1 d-flex flex-column col-12'>
          <p>
            LLEGASTE HASTA EL FINAL
          </p>
          <h3>
            ¿Necesitas reparar tu equipo?
          </h3>
        </div>
      </div>

      <div className='d-flex flex-row col-12'>
        <div className='info-2 d-flex flex-row col-6'>
          <div className='info-num d-flex flex-column col-6'>
            <p>
              San Miguel de Tucumán
            </p>
            <strong>
              (381)-5694570
            </strong>
          </div>

          <div className='info-ubi d-flex flex-column col-6'>
            <strong>
              Lunes a Viernes de 10 a 17hs
            </strong>
            <p>
              Suipacha 217
            </p>
            <>
              Ciudad Autónoma de Buenos Aires
            </>
            <p>
              CP1008
            </p>
          </div>
        </div>

        <div className='info-link d-flex flex-row col-6'>
          <div className='link1 d-flex flex-column col-6'>
            <div className=''>
              <h2>
                Links Útiles
              </h2>
            </div>

            <div>
              <ul>
                <li>
                  <a className='text-decoration-none text-white' href='https://www.supertek.com.ar/club/'>
                    Beneficios al Gremio
                  </a>
                </li>

                <li>
                  <a className='text-decoration-none text-white' href='https://www.supertek.com.ar/club/'>
                    Club Supertek
                  </a>
                </li>

                <li>
                  <a className='text-decoration-none text-white' href='https://www.supertek.com.ar/contacto'>
                    Contacto
                  </a>
                </li>

                <li>
                  <a className='text-decoration-none text-white' href='https://www.supertek.com.ar/glosario/staking/'>
                    Glosario
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='link2 d-flex flex-column col-6'>
            <div className=''>
              <div>
                <h2>
                  Más Links Útiles
                </h2>
              </div>

              <div>
                <ul>
                  <li>
                    <a className='text-decoration-none text-white' href='https://www.supertek.com.ar/blog'>
                      Blog
                    </a>
                  </li>

                  <li>
                    <a className='text-decoration-none text-white'
                      href='https://www.supertek.com.ar/trabaja-con-nosotros'>
                      Trabajá con Nosotros
                    </a>
                  </li>

                  <li>
                    <a className='text-decoration-none text-white'
                      href='https://www.supertek.com.ar/terminos-y-condiciones'>
                      Términos y Condiciones
                    </a>
                  </li>

                  <li>
                    <a className='text-decoration-none text-white' href=''>
                      Vendé tu equipo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='grupo-2 d-flex py-2 align-items-center justify-content-center text-white'>
      <small>&copy; 2024 <b>Reparacion de Computadoras.</b> Todos los Derechos
        Reservados</small>
    </div>
  </section>
  )
}

export default Footer