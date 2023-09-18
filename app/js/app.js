$(document).ready(function() {
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
   centerMode: false,
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
})
