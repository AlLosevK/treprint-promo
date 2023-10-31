$(document).ready(function() {

  var functionRefMap = function() {
    let map_block = $('body').find('#ymap_lazy');
    let map_src = map_block.attr('data-src');
    map_block.attr('src', map_src);
    map_block.removeAttr('data_src');
  };

  setTimeout(functionRefMap, "3000")


  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   asNavFor: '.slider-nav',
   dots: true,
   arrows: true,
   responsive: [
     {
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }
   ]
 });
 $('.slider-nav').slick({
   slidesToShow: 7,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   arrows: false,
   focusOnSelect: true,
   centerMode: true,
   infinite: true,
   responsive: [
     {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10px',
        focusOnSelect: true
        }
      }
   ]
 });

 $('.buttonSocials').on("click", function() {
   $('.popup').addClass('active');
 });

 $('.popup__close-icon').on("click", function() {
   $('.popup').removeClass('active');
 });

 $('.popup__bg').on("click", function() {
   $('.popup').removeClass('active');
 });

 $('.popup__input').on('keyup', function() {
    if ($('.popup__input')[0].value.length == 10) {
      $('.popup__btn').removeAttr('inert');
    } else {
      $('.popup__btn').attr('inert', '');
    }
 });

 $('.popup__btn').on('click', function() {

 });
})
