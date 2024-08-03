const $ = document
const carsContainer = $.querySelector('.cars-wrapper')

// console.log(carsContainer);

// -------------------------------- Start Funcs -------------------------------

// -------- Get cars --------
const getCarsFromFirbase = () => {
     axios({
          method: 'GET',
          url: 'https://car-gallery-62d37-default-rtdb.firebaseio.com/all-cars.json'
     })
          .then(res => res.data)
          .then(data => Object.entries(data))
          .then(infos => {
               infos.forEach((info) => {
                    console.log(info[1]);
                    carsContainer.insertAdjacentHTML('afterbegin', `
                         <div class="swiper-slide">
                              <div class="slide-box">
                                   <div class="img">
                                        <img src="img/cars/porche.jpg" alt="image">
                                   </div>

                                   <div class="slider-infos">
                                        <h3 style="color: var(--color-yellow); font-size: 1.7rem; margin: 0.6rem 0;">
                                             ${info[1].name}</h3>
                                        <p style="font-size: 14px; width: 95%; margin: 1rem 0; color: #fff;">${info[1].detailes}</p>
                                        <div class="info-bottom flex jus-sp-bet align-center">
                                             <span class="slider-price"
                                                  style="font-size: 14px; color: var(--color-yellow);letter-spacing: 2px;">
                                                  ${info[1].price}
                                             </span>
                                             <button>Buy Now</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    `)

               })
          })
          .catch(err => console.log(err))
}

// -------------------------------- End Funcs --------------------------------

// -------------------------------- Stars Events --------------------------------
window.addEventListener('load', getCarsFromFirbase)
// -------------------------------- End Events --------------------------------