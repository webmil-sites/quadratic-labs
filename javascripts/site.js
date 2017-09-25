$(document).ready(function () {
  $('.loader').css("opacity", "1");

  setTimeout(function () {
    $('.loader').css("opacity", "0");
    if ($('body').width() > 1023) {
      $('#side-nav').css("display", "inline-block");
      $('#top-nav').css("display", "inline-block");
    }
    setTimeout(function () {
      $('.loader').css("display", "none");
    }, 300);
  }, 500);

  var slideNumber = document.location.hash ? parseInt(document.location.hash[1]) : 0;
  setTimeout(function () {
    if (slideNumber == 3) {
      $('.slick-slide').eq(2).click();
      $('a[href="#tab-2"]').click();
    }
    $('.slick-slide').eq(slideNumber).click();
  }, 100);

  $(document).on('click', '#mobile-nav .open', function(event){
    event.preventDefault();
    $('#mobile-nav .menu').addClass('opened');
  });

  $(document).on('click', '#mobile-nav .menu .close', function(event){
    event.preventDefault();
    $('#mobile-nav .menu').removeClass('opened');
  });

  $(document).on('click', '#mobile-nav .menu li', function(event){
    $('#mobile-nav .menu').removeClass('opened');
  });

  $(document).on('click', '#mobile-nav .solve', function(event){
    $('.slider-for-more').slick('slickGoTo', 0);
  });
  $(document).on('click', '#mobile-nav .what', function(event){
    $('.slider-for-more').slick('slickGoTo', 1);
  });
  $(document).on('click', '#mobile-nav .products', function(event){
    $('.slider-for-more').slick('slickGoTo', 2);
  });
});
