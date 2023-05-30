// Global jQuery

/* import $ from "jquery"; */

  // Close nav on side click
 /*  $(".navbar_mobile-close").click(function (e) {
    e.preventDefault();
    $(".w-nav-button").trigger("click");
  }); */

  // Add & Remove class - form entretien - main radio
/*   $(".form_radio.is-main").click(function () {
    $(".form_radio.is-main").removeClass("is-active");
    $(".form_radio-state").removeClass("is-active");
    $(this).addClass("is-active");
    $(this).find(".form_radio-state").addClass("is-active");
  }); */

  // Hide preheader & move navbar when scroll
/*   $(document).ready(function () {
    $(".preheader_component").css("display", "block");
  });

  $(window).scroll(function () {
    var windowScrollTop = $(this).scrollTop();

    if (
      windowScrollTop > 250 &&
      $(".preheader_component").css("display") === "block"
    ) {
      $(".preheader_component").css({
        transform: "translateY(-2.6rem)"
      });
      $(".navbar_component").css({
        transform: "translateY(-2.6rem)"
      });
    } else {
      $(".preheader_component").css({
        transform: "translateY(0rem)"
      });
      $(".navbar_component").css({
        transform: "translateY(0rem)"
      });
    }
  }); */

  // Popup with navbar Logo sticky - jQuery OK - Refaire module
  /*   $(document).ready(function () {
    $(".a--p-contact, .a--p-brochure, .a--p-discount, .a--p-entretien").click(
      function () {
        $(".navbar_menu, .navbar_cta, .navbar_bg").hide();
        $(".p-close-w").fadeIn(500, function () {
          $(".p-close-w").show();
        });
      }
    );

    $(".p-close-w").click(function () {
      $(".navbar_menu, .navbar_cta, .navbar_bg").show();
      $(".p-close-w").fadeOut(function () {
        $(".p-close-w").hide();
      });
    });
  }); */

  // Custom text & afficage discount selon bouton
/*   $(document).ready(function () {
    $(".a--p-entretien").click(function () {
      $(".heading-style-h2.is-keilla.is-popup").text("Nous contacter");
    });

    $(".a--p-discount").click(function () {
      $(".heading-style-h2.is-keilla.is-popup").text("Nos discounts");
      $(".p-discount_wrapper").fadeIn();
    });

    $(".p-general_close-w").click(function () {
      $(".p-discount_wrapper").fadeOut();
    });

    $(".a--p-brochure").click(function () {
      $(".heading-style-h2.is-keilla.is-popup").text("Telecharger la Brochure");
    });

    $(".a--p-contact").click(function () {
      $(".heading-style-h2.is-keilla.is-popup").text("Contact");
    });
  }); */

  // Add query param in form
/*   $(document).ready(function () {
    $(".a--p-entretien").click(function () {
      $("#general-form-origin").val("entretien");
    });
    $(".a--p-contact").click(function () {
      $("#general-form-origin").val("contact");
    });
    $(".a--p-brochure").click(function () {
      $("#general-form-origin").val("brochure");
    });
    $(".a--p-discount").click(function () {
      $("#general-form-origin").val("discount");
    });
    $(".a--p-contact.is-financement").click(function () {
      $("#general-form-origin").val("financement");
    });
  }); */

  // Form origin

// Style CSS
/* Slick Slider Customizations */
/* .slick-list {
    display: flex;
    overflow: visible;
    width: 100%;
  }
  
  .slick-track {
    display: flex;
    margin-left: none;
  }
  
  .slick-slide {
    width: 16.666666666666668%;
  }
  
  .private-button--transparent {
    color: red !important;
  } */

  // Home GSAP
  /* import { gsap } from "gsap"; */
/* gsap.registerPlugin(ScrollTrigger); */

/* var Webflow = Webflow || [];
Webflow.push(function () {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    markers: true
  }); 

  //bullet & cards highlights
  $(".line_is-solution-left").each(function (index) {
    let targetElement = $(".bullet_highlight");
    let targetElement2 = $(".home-solution_cards-1");
    let targetElement3 = $(".home-bbs_crypto");

    // bullet highlights
    let tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: ".line_is-solution-left",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true
      }
    });
    tl.to(targetElement, {
      backgroundColor: "#5cc700",
      duration: 0.25,
      stagger: 0.25
    });

    // cards highlights
    let tl2 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: ".line_is-solution-left",
        start: "top 60%",
        end: "bottom 60%",
        scrub: true
      }
    });
    tl2.to(targetElement2, {
      opacity: 100,
      duration: 0.1,
      stagger: 0.25
    }); */

    /*  // BBSSchool crypto BG move
    let tl3 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: ".home-bbs_scroll-trigger",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true
      }
    });

       gsap.set(targetElement3, {
      x: "-5%",
      scale: 1.1
    });

    tl3.to(targetElement3, {
      x: "5%"
    }); */
  });

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


  