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

  $('.slider-for-more').slick({
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-more',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.slider-nav-more').slick({
    slidesToShow: 3,
    asNavFor: '.slider-for-more',
    dots: false,
    draggable: false,
    swipe: false,
    focusOnSelect: true
  });

  $( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).on('click', '#more-content #main-nav .first', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 0);
  });
  $(document).on('click', '#more-content #main-nav .second', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 1);
  });
  $(document).on('click', '#more-content #main-nav .third', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 2);
  });
});