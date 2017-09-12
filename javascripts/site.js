window.onload=function(){
  $('.loader').css("opacity", "1");
  setTimeout(function () {
    $('#index-content').css("opacity", "1");
    $('.loader').css("opacity", "0");
    if ($('body').width() > 1023) {
      $('#side-nav').css("display", "inline-block");
      $('#top-nav').css("display", "inline-block");
    }
    slide0();
  }, 2000);
  setTimeout(function () {
    $('.loader').css("display", "none");
  }, 3000);
  $('.slider-for-index').slick({
    autoplay: true,
    autoplaySpeed: 8500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-index',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $('.slider-for-more').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-more',
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var moreLink = $('.js-more');
  var moreHref = moreLink.prop('href');

  $('.slider-for-index').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    window['slide' + nextSlide]()
    moreLink.prop('href', moreHref + '#' + nextSlide)
  });


  var slideNumber = document.location.hash ? parseInt(document.location.hash[1]) : 0;
  if (slideNumber == 3) {
    $('.slick-slide').eq(2).click();
    $('a[href="#tab-2"]').click();
  }

  $('.slick-slide').eq(slideNumber).click();
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
        

  $( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).on('click', '#mobile-nav .open', function(event){
    event.preventDefault();
    $('#mobile-nav .menu').addClass('opened');
  });

  $(document).on('click', '#mobile-nav .menu .close', function(event){
    event.preventDefault();
    $('#mobile-nav .menu').removeClass('opened');
  });

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

$(window).on('orientationchange', function() {    
  $('.slider-nav-team .thumbnail.first').trigger("click");
});