// const swiper = new Swiper('.swiper', {
//      // Optional parameters
//      direction: 'horizental',
//      loop: true,

//      // If we need pagination
//      pagination: {
//           el: '.swiper-pagination',
//      },

//      // Navigation arrows
//      navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//      },

//      // And if we need scrollbar
//      scrollbar: {
//           el: '.swiper-scrollbar',
//      },
// });

var swiper = new Swiper('.swiper', {
     slidesPerView: 3,
     direction: getDirection(),
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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