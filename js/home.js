const $ = document

const backImage = $.querySelector('.main-top-section')
const mainImagesUrls = [
     "url('img/main/julian-friedle-mTDbPUKUvNE-unsplash.jpg')",
     "url('img/main/peter-broomfield-m3m-lnR90uM-unsplash.jpg')",
     "url('img/main/donny-jiang-41xHdTcuWq0-unsplash.jpg')",
     "url('img/main/jonathan-gallegos-5FGqfV6UjzI-unsplash.jpg')",
]
let index = 0
const swiperParent = $.querySelector('.wrapper')
const swiperWrapper = $.querySelector('.swiper-wrapper')

let isAddData = false

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

// ---------------------------------------- Start Geting Api ----------------------------------------
window.addEventListener('DOMContentLoaded', () => {
     swiperWrapper.innerHTML = ''
     axios({
          method: 'GET',
          url: 'https://car-gallery-62d37-default-rtdb.firebaseio.com/footer-slide.json'
     })
          .then(res => res.data)
          .then(data => {
               let mainData = Object.entries(data);

               mainData.forEach((info => {
                    console.log(info[1].img);
                    swiperWrapper.insertAdjacentHTML('beforeend', `
                         <div class="swiper-slide">
                              <div class="slide-box">
                                   <div class="img">
                                        <img src="${info[1].img}" alt="image">
                                   </div>
                    
                                   <div class="slider-infos">
                                        <h3 style="color: var(--color-yellow); font-size: 1.7rem; margin: 0.6rem 0;">${info[1].title}</h3>
                                        <p style="font-size: 13px; width: 95%; margin: 1rem 0;">${info[1].txt}</p>
                                        <div class="info-bottom flex jus-sp-bet align-center">
                                             <span class="slider-price" style="font-size: 14px; color: var(--color-yellow);letter-spacing: 2px;"> ${info[1].price} 
                                             </span>
                                             <button>Buy Now</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    `)
               }))
          })
          .then(() => {
               swiperWrapper.insertAdjacentHTML('beforeend', `
                    <div class="swiper-slide" style="position: relative; height: 28rem; background-color: var(--color-light-gray);">
                         <a href="./cars.html"
                              style="position: absolute;top: 13rem;text-align: center; left: 0; right: 0;">More...
                         </a>
                    </div>
               `)
               isAddData = true
               console.log(isAddData);
          })
          .catch(err => console.log(err))
})