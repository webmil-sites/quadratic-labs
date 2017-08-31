function goBack() {
  window.history.back();
}
window.onload=function(){
  $('.slider-for-index').slick({
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    fade: true,
    asNavFor: '.slider-nav-index',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.slider-for-more').slick({
    autoplay: true,
    autoplaySpeed: 9000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    fade: true,
    asNavFor: '.slider-nav-more',
    pauseOnFocus: false,
    pauseOnHover: false
  });
};

$(document).ready(function(){
  $('.slider-nav-index').slick({
    slidesToShow: 3,
    asNavFor: '.slider-for-index',
    dots: false,
    draggable: false,
    swipe: false,
    focusOnSelect: true
  });

  $('.slider-nav-more').slick({
    slidesToShow: 3,
    asNavFor: '.slider-for-more',
    dots: false,
    draggable: false,
    swipe: false,
    focusOnSelect: true
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    swipe: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    asNavFor: '.slider-for',
    dots: false,
    draggable: false,
    swipe: false,
    centerMode: true,
    focusOnSelect: true
  });
        

  $( function() {
    $( "#tabs" ).tabs();
  } );

  $('.slider-for-index').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (nextSlide == 0) {
      slide0();
    } else if (nextSlide == 1) {
      slide1();
    } else {
      slide2();
    }
  });

  $(document).on('click', '.slider-nav-more .first', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 0);
  });
  $(document).on('click', '.slider-nav-more .second', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 1);
  });
  $(document).on('click', '.slider-nav-more .third', function(event){
    event.preventDefault();
    $('.slider-for-more').slick('slickGoTo', 2);
  });
});