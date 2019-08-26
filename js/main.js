(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
    $('#lightSlider').lightSlider({
      //gallery: true,
      item: 1,
      loop: true,
      slideMargin: 0,
      pager: false,
      thumbItem: 9
  });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });


$('ul.nav li.dropdown').hover(function() {

  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideDown(1100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(500);
});


/*Paper page slider*/
$('#responsive').lightSlider({
      item:4,
      loop:false,
      slideMove:2,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      pager:false,
      responsive : [
          {
              breakpoint:800,
              settings: {
                  item:3,
                  slideMove:1,
                  slideMargin:6,
                }
          },
          {
              breakpoint:480,
              settings: {
                  item:2,
                  slideMove:1
                }
          }
      ]
    });
/**/

})(jQuery);

