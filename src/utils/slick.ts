function slickLoop() {
  $('#cms-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
}

export { slickLoop };
