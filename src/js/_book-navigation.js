if (document.querySelectorAll('.book__slider').length > 0) {
  let swiperBook = new Swiper(".book-slider", {
    mousewheel: false,
    //autoHeight: true,
    allowTouchMove: false,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
}
