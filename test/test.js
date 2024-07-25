var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      updateSlideSizes(swiper);
    },
    init: function () {
      updateSlideSizes(swiper);
    },
  },
});

function updateSlideSizes(swiper) {
  swiper.slides.removeClass('center-slide');
  var centerIndex = swiper.activeIndex + Math.floor(swiper.params.slidesPerView / 2);
  $(swiper.slides[centerIndex]).addClass('center-slide');
}
