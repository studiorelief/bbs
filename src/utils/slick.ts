import 'slick-carousel';

function slickLoop() {
  const $carousel = $('#cms-slider');
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        // le carousel est visible, lancer l'animation
        $carousel.slick('slickPlay');
      } else {
        // le carousel n'est pas visible, arrêter l'animation
        $carousel.slick('slickPause');
      }
    },
    { threshold: 1 } // Adjust this value to suit your needs
  );

  $carousel.slick({
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
  const carouselElement = $carousel.get(0); // Get the first element from the jQuery object

  if (carouselElement) {
    observer.observe(carouselElement); // Only observe if the element is not null or undefined
  }
}

function slickLoopPartners() {
  const $carousel = $('#cms-slider-partners');
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        // le carousel est visible, lancer l'animation
        $carousel.slick('slickPlay');
      } else {
        // le carousel n'est pas visible, arrêter l'animation
        $carousel.slick('slickPause');
      }
    },
    { threshold: 1 } // Adjust this value to suit your needs
  );

  $carousel.slick({
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 5.5,
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
  const carouselElement = $carousel.get(0); // Get the first element from the jQuery object

  if (carouselElement) {
    observer.observe(carouselElement); // Only observe if the element is not null or undefined
  }
}

export { slickLoop, slickLoopPartners };
