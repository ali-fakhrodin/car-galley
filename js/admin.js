const $ = document
const carImage = $.querySelector('#image-inp')
const carName = $.querySelector('#car-name-inp')
const carPrice = $.querySelector('#car-price-inp')
const moreDetailes = $.querySelector('#more-data-inp')
const submitBtn = $.querySelector('#submit-btn')


// ---------------------------------------- Funcs ----------------------------------------
// --------- Start Setting Api ---------
const setCarDataInFirbase = (e) => {
     e.preventDefault()
     if (carImage.value && carName.value && carPrice.value && moreDetailes.value) {

          const dataObj = {
               img: carImage.value,
               name: carName.value,
               price: carPrice.value,
               detailes: moreDetailes.value,
          }

          axios({
               method: 'post',
               url: 'https://car-gallery-62d37-default-rtdb.firebaseio.com/all-cars.json',
               data: JSON.stringify(dataObj)
          })
               .then(response => {
                    console.log(response);
               })
               .catch(error => {
                    console.log(error);
               });
     }
}

submitBtn.addEventListener('click', setCarDataInFirbase)