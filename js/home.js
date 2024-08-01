const $ = document

const backImage = $.querySelector('.main-top-section')
const mainImagesUrls = [
     "url('../img/main/julian-friedle-mTDbPUKUvNE-unsplash.jpg')",
     "url('../img/main/peter-broomfield-m3m-lnR90uM-unsplash.jpg')",
     "url('../img/main/donny-jiang-41xHdTcuWq0-unsplash.jpg')",
     "url('../img/main/jonathan-gallegos-5FGqfV6UjzI-unsplash.jpg')",
]
let index = 0

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