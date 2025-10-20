// First Slide

let swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    1250: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
// Second Slide

let swiper2 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },

  breakpoints: {
    1250: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
