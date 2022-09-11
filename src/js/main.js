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
    autoHeight: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
}
