const checkForAddSlides = setInterval(() => {
     if (isAddData) {
          console.log(isAddData);
          const swiper = new Swiper('.swiper', {
               slidesPerView: 4,
               spaceBetween: -10,
               autoplay: {
                    delay: 2000
               },
               direction: getDirection(),
               grabCursor: true,
               scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
               },
               navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
               },
               pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
               },
               keyboard: {
                    enabled: true,
                    onlyInViewport: false,
               },
               on: {
                    resize: function () {
                         swiper.changeDirection(getDirection());
                    },
               },
          });

          function getDirection() {
               var windowWidth = window.innerWidth;
               var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

               return direction;
          }
          clearInterval(checkForAddSlides)
     }
}, 100)