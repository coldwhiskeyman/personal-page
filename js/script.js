$(function () {
  // initialize swiper when document ready
  let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.show-menu-btn, .menu__close-btn, .menu__link').click(function() {
    $('.menu').toggle();
  });

  $('.callback-btn, .callback-btn-full, .order-btn, .contact-btn').click(function () {
    $('.popup-container').show();
  });
  $('.popup-container').click(function (event) {
    if (event.target === this) {
      $(this).hide();
    }
  });
});