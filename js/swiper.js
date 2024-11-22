const mainSwiper = new Swiper('.swiper:not(.comments-swiper)', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const commentsSwiper = new Swiper('.swiper.comments-swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 15000, 
    disableOnInteraction: false, 
  },
});
