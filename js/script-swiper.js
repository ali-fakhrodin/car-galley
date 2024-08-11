const checkForAddSlides = setInterval(() => {
     if (isAddData) {
          console.log(isAddData);
          const swiper = new Swiper('.swiper', {
               slidesPerView: 4,
               spaceBetween: -10,
               autoplay: {
                    delay: 2000
               },
               direction: 'horizontal',
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
               breakpoints: {
                    0: {
                         slidesPerView: 1,
                         spaceBetween: -50,
                    },
                    620: {
                         slidesPerView: 2,
                         spaceBetween: -15,
                    },
                    920: {
                         slidesPerView: 3,
                         spaceBetween: -15,
                    },
                    1300: {
                         slidesPerView: 4,
                         spaceBetween: -20,
                    }
               }
               // on: {
               // resize: function () {
               // swiper.changeDirection(getDirection());
               // },
               // },
          });

          // function getDirection() {
          // var windowWidth = window.innerWidth;
          // var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

          // return direction;
          // }
          clearInterval(checkForAddSlides)
     }
}, 100)