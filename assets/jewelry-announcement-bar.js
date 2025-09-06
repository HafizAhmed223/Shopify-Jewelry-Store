document.addEventListener("DOMContentLoaded", function() {
   const swiper = new Swiper('.swiper', {
    loop: true,

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      }
  });

  swiper.on('slideChange', function () {
    console.log('slide changed');
  });

  });
