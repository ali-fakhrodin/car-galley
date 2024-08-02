window.addEventListener('DOMContentLoaded', () => {
     // swiperWrapper.innerHTML = ''
     axios({
          method: 'GET',
          url: 'https://car-gallery-62d37-default-rtdb.firebaseio.com/footer-slide.json'
     })
          .then(res => console.log( Object.entries(res.data)))
})