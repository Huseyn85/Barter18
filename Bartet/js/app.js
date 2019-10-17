

$('.category-slider').slick({
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 2000,
  });



$('.elan-asagi').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 900,
  speed: 700,
});






var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$( "#CatTop" ).click(function() {
  $( "#Catbottom" ).toggle( "slow", function() {
  });
});


$( "#CatTop" ).click(function() {
  $( "#Slider" ).toggle( "slow", function() {
  });
});
