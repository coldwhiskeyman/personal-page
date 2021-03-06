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

  let popup = $('.popup-container');
  let menu = $('.menu');

  let name;
  let phone;
  let email;

  function showModal(element) {
    element.removeClass('closed');
    setTimeout(function(){
      element.removeClass('hidden');
    }, 10);
  }

  function hideModal(element) {
    element.addClass('hidden');
    setTimeout(function(){
      element.addClass('closed');
    }, 500);
  }

  $('.show-menu-btn, .menu__close-btn, .menu__link').click(function() {
    if (menu.hasClass('closed')) {
      showModal(menu);
    } else {
      hideModal(menu);
    }
  });

  $('.callback-btn, .callback-btn-full, .order-btn, .contact-btn').click(function () {
    showModal(popup);
  });
  popup.click(function (event) {
    if (event.target === this) {
      hideModal(popup);
    }
  });
  $('.leave-contacts__close').click(function () {
    hideModal(popup);
  });

  $('#name').on('change', function () {
    name = $('#name').val();
  });
  $('#phone').on('change', function () {
    phone = $('#phone').val();
  });
  $('#email').on('change', function () {
    email = $('#email').val();
  });
  $('.leave-contacts').submit(function (event) {
    event.preventDefault();
    Email.send({
      SecureToken: '195e378a-4f9e-42ad-8158-8485af1e67d0',
      To : 'eldiablo5783@gmail.com',
      From : email,
      Subject : "Contact me",
      Body : "Name: " + name + " Phone: " + phone
    }).then(
        message => alert(message)
    );
    popup.addClass('hidden');
    setTimeout(function(){
      popup.addClass('closed');
    }, 500);
  });

  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    let sc = $(this).attr("href");
    let dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 500);
  });
});