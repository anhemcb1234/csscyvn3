$(document).ready(function () {
  $(".slide-banner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow:
      '<button class="nav-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
      '<button class="nav-next"><i class="fas fa-arrow-right"></i></button>',
  });
});

$(document).ready(function () {
  $(".slide-banner2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
} )

$(document).ready(function () {
  $(".slide-banner3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
} )

const slideshow = new SlideShow('.slideshow', { timeout: 5000 });