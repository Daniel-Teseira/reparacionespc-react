import React from 'react'
import './navbar.css';

const NavBar = () => {
  return (
  <>
  <section>
      <ul className='d-flex flex-row align-items-center lista col-12 justify-content-center'>
        <li>
          <section className='a1a1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
              className='bi bi-telephone-fill a1b2' viewBox='0 0 16 16'>
              <path fillRule='evenodd'
                d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z' />
            </svg>
            <a className='a1a2' href='https://www.google.com.ar/'>
              Telefono
            </a>
          </section>
        </li>

        <li>
          <section className='a1a1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-envelope'
              viewBox='0 0 16 16'>
              <path
                d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
            </svg>
            <a className='a1a2' href='https://www.google.com.ar/'>
              Gmail
            </a>
          </section>
        </li>

        <li>
          <section className='a1a1'>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor'
              className='bi bi-geo-alt-fill' viewBox='0 0 16 16'>
              <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
            </svg>
            <a className='a1a2' href='https://www.google.com.ar/'>
              Ubicación
            </a>
          </section>
        </li>
      </ul>
    </section>

    <nav>
      <section>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='nav1 container-fluid'>
            <a className='navbar-brand' href='https://www.google.com.ar/'>
            NOMBRE DE LA EMPRESA
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='https://www.google.com.ar/'>
                    Home
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='https://www.google.com.ar/'>
                    Nosotros
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='https://www.google.com.ar/'>
                    Preguntas Frecuentes
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link' href='https://www.google.com.ar/'>
                    Contacto
                  </a>
                </li>

                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='https://www.google.com.ar/' role='button' data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    Servicios
                  </a>

                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='https://www.google.com.ar/'>
                        Action
                      </a>
                    </li>

                    <li>
                      <a className='dropdown-item' href='https://www.google.com.ar/'>
                        Another action
                      </a>
                    </li>

                    <li>
                      <a className='dropdown-item' href='https://www.google.com.ar/'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </nav>
   
    </>
  )
}

export default NavBar