import img1 from '../../../images/carrusel/pc1.png';
import img2 from '../../../images/carrusel/pc2.png';
import img3 from '../../../images/carrusel/redes1.png';
import img4 from '../../../images/carrusel/redes2.png';


const Carrusel = () => {
  return (
    <section class='carrusel'>
        <div
          id='carouselhome'
          class='carousel slide carousel-fade'
          data-bs-ride='carousel'
        >
          <div class='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselhome'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselhome'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselhome'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselhome'
              data-bs-slide-to='3'
              aria-label='Slide 4'
            ></button>
          </div>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={img1} class='d-block w-100' alt='Reparacion PC 1'></img>
              <div class='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={img2} class='d-block w-100' alt='Reparacion PC 2'></img>
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src={img3}
                class='d-block w-100'
                alt='Instalacion Redes 1'
              ></img>
              <div class='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src={img4}
                class='d-block w-100'
                alt='Instalacion Redes 2'
              ></img>
              <div class='carousel-caption d-none d-md-block'>
                <h5>Fourth slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class='carousel-control-prev'
            type='button'
            data-bs-target='#carouselhome'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next'
            type='button'
            data-bs-target='#carouselhome'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </section>
  )
}

export default Carrusel