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

  popup = $('.popup-container');
  menu = $('.menu')

  $('.show-menu-btn, .menu__close-btn, .menu__link').click(function() {
    if (menu.hasClass('closed')) {
      menu.removeClass('closed');
      setTimeout(function(){
        menu.removeClass('hidden');
      }, 10);
    } else {
      menu.addClass('hidden');
      setTimeout(function(){
        menu.addClass('closed');
      }, 500);
    }
  });

  $('.callback-btn, .callback-btn-full, .order-btn, .contact-btn').click(function () {
    popup.removeClass('closed');
    setTimeout(function(){
      popup.removeClass('hidden');
    }, 10);
  });
  popup.click(function (event) {
    if (event.target === this) {
      $(this).addClass('hidden');
      setTimeout(function(){
        popup.addClass('closed');
      }, 500);
    };
  });
  $('.leave-contacts__close').click(function() {
    popup.addClass('hidden');
    setTimeout(function(){
      popup.addClass('closed');
    }, 500);
  })

  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 500);
    
    /*
    * 500 скорость перехода в миллисекундах
    */
  });
});