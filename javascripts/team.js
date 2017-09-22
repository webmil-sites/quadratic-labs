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

  $('.slider-for-team').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-team',
    mobileFirst: true
  });

  $('.slider-nav-team').slick({
    slidesToShow: 5,
    asNavFor: '.slider-for-team',
    dots: false,
    draggable: false,
    swipe: false,
    centerMode: true,
    focusOnSelect: true
  });
});

$(window).on('orientationchange', function() {
  $('.slider-nav-team .thumbnail.first').trigger("click");
});