import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

document.addEventListener("DOMContentLoaded", function () {
  transformBlockHeader();
});

window.onresize = function () {
  transformBlockHeader();
}

function transformBlockHeader() {
  const headerWrap = document.querySelector('.header__wrapper'),
    headerMenu = document.querySelector('.header__wrap > ul'),
    clientWidth = document.documentElement.clientWidth

  if (clientWidth <= 992) {
    headerMenu.append(document.querySelector('.header__contacts'))
  } else {
    headerWrap.prepend(document.querySelector('.header__contacts'));
  }

}

if (document.querySelectorAll('.book__slider').length > 0) {
  let swiperBook = new Swiper(".book-slider", {
    mousewheel: false,
    //autoHeight: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
}


// Custom input type "Number"

if (document.querySelectorAll('.book-step-three-origin').length > 0) {
  function catalogItemCounter(field){

    var fieldCount = function(el) {

      var
        // Min. value
        min = el.data('min') || false,

        // Max. value
        max = el.data('max') || false,

        // Decrease button
        dec = el.prev('.dec'),

        // Increase Quantity Button
        inc = el.next('.inc');

      function init(el) {
        if(!el.attr('disabled')){
          dec.on('click', decrement);
          inc.on('click', increment);
        }

        // Decrease the value
        function decrement() {
          var value = parseInt(el[0].value);
          value--;

          if(!min || value >= min) {
            el[0].value = value;
          }
        };

        // Увеличим значение
        function increment() {
          var value = parseInt(el[0].value);

          value++;

          if(!max || value <= max) {
            el[0].value = value++;
          }
        };

      }

      el.each(function() {
        init($(this));
      });
    };

    $(field).each(function(){
      fieldCount($(this));
    });
  }

catalogItemCounter('.fieldCount');
}


// Toggle return form

if (document.querySelectorAll('.book-step-two').length > 0) {
  let returnInp = document.querySelector('#return-inp');

  let form  = document.getElementById("return");


    returnInp.addEventListener('click', () => {
    form.classList.toggle('active');

    if (form.classList.contains('active')) {

      let allElements = form.elements;
      for (var i = 0, l = allElements.length; i < l; ++i) {
        // allElements[i].readOnly = true;
           allElements[i].disabled=false;
           form.style.opacity = '1';
     }
    } else {
      let allElements = form.elements;
      for (var i = 0, l = allElements.length; i < l; ++i) {
        // allElements[i].readOnly = true;
           allElements[i].disabled=true;
           form.style.opacity = '0.4';
     }
    }
  })

}







