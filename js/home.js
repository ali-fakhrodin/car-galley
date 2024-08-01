const $ = document

const backImage = $.querySelector('.main-top-section')
const mainImagesUrls = [
     "url('../img/main/julian-friedle-mTDbPUKUvNE-unsplash.jpg')",
     "url('../img/main/peter-broomfield-m3m-lnR90uM-unsplash.jpg')",
     "url('../img/main/donny-jiang-41xHdTcuWq0-unsplash.jpg')",
     "url('../img/main/jonathan-gallegos-5FGqfV6UjzI-unsplash.jpg')",
]
let index = 0
const swiperWrapper = $.querySelector('.swiper-wrapper')
const slidesData = [
     { img: './img/footer/andre-tan-pQ4_FXwi90c-unsplash.jpg', title: 'Car Wash', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
     { img: './img/footer/sten-rademaker.jpg', title: 'Repair', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
     { img: './img/footer/tanya-prodaan.jpg', title: 'Car Charging', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
     { img: './img/footer/justus-menke.jpg', title: 'Electronic Car', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
     { img: './img/footer/clarity-coat.jpg', title: 'Car Coating', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
     { img: './img/footer/dylan-calluy.jpg', title: 'Painting', txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id veadipisicing elit. Id ve l quas voluptatum et, earum qui sint distinctio quisquam alias?`, price: 'Rp.123000' },
]

// ---------------------------------------- Start Changing Main Images ----------------------------------------

backImage.style.setProperty = ('--brightness-img', '0')
setInterval(() => {
     backImage.classList.add('animate')

     // ------------------------------- Change Img -------------------------------
     setTimeout(() => {
          if (index < mainImagesUrls.length) {
               backImage.style.backgroundImage = mainImagesUrls[index];
               index++

               if (index == mainImagesUrls.length) {
                    index = 0
               }
          }

     }, 500)

     setTimeout(() => {
          backImage.classList.remove('animate')
     }, 800)
}, 5000)

// ---------------------------------------- End Changing Main Images ----------------------------------------

// ---------------------------------------- Start Swiper Wrapper ----------------------------------------

slidesData.forEach(info => {
     swiperWrapper.insertAdjacentHTML('beforeend', `
          <div class="swiper-slide">
                    <div class="slide-box">
                         <div class="img">
                              <img src="${info.img}" alt="image">
                         </div>
     
                         <div class="slider-infos">
                              <h3 style="color: var(--color-yellow); font-size: 1.7rem; margin: 0.6rem 0;">${info.title}</h3>
                              <p style="font-size: 13px; width: 95%; margin: 1rem 0;">${info.txt}</p>
                              <div class="info-bottom flex jus-sp-bet align-center">
                                   <span class="slider-price" style="font-size: 14px; color: var(--color-yellow);letter-spacing: 2px;"> ${info.price} 
                                   </span>
                                   <button>Buy Now</button>
                              </div>
                         </div>
                    </div>
               </div>
     `)
})

swiperWrapper.insertAdjacentHTML('beforeend', `
     <div class="swiper-slide" style="position: relative; height: 28rem; background-color: var(--color-light-gray);">
          <a href="#"
               style="position: absolute;top: 13rem;text-align: center; left: 0; right: 0;">More...
          </a>
     </div>
`)

// ---------------------------------------- End Swiper Wrapper ----------------------------------------

// ---------------------------------------- End Swiper Wrapper ----------------------------------------