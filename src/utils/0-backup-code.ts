import $ from 'jquery'; 

// Press slider - Home
  $(document).ready(function () {
    //-------- Create slider ----------

    $("#cms-slider").slick({
      infinite: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 0,
      pauseOnFocus: true,
      pauseOnHover: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });
});

// Equipe GSAP
/* import { gsap } from "gsap"; */


  /* a--fade-b animation */
/*   gsap.set(".a--fade-b", { opacity: 0.1, y: 30 });

  ScrollTrigger.batch(".a--fade-b", {
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 30 }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 30 }),
    start: "top 85%",
    end: "bottom 15%",
    markers: false
  }); */

  /* a--fade-b animation V2 */
  /* $(".founders_partenaires-w").each(function (index) {
  let targetElement = $(".founders_partenaires-cards");


  // bullet highlights
  let tl = gsap.timeline({
    scrollTrigger: {
      markers: true,
      trigger: ".founders_partenaires-w",
      start: "top 60%",
      end: "bottom 60%",
      scrub: true
    }
  });

  tl.set(targetElement, {
    opacity: 0.1,
    y:-30,
  });

  tl.to(targetElement, {
    opacity : 1,
    y: 0,
    duration: 0.25,
    stagger: 0.25
  }); */


  