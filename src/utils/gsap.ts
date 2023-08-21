import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

gsap.registerPlugin(ScrollTrigger);

// jQuery function
//bullet & cards highlights
function animateElements() {
  $('.line_is-solution-left').each(function () {
    const targetElement = $('.bullet_highlight');
    const targetElement2 = $('.home-solution_cards-1');

    // bullet highlights
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.line_is-solution-left',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
    tl.to(targetElement, {
      backgroundColor: '#5cc700',
      duration: 0.25,
      stagger: 0.25,
    });

    // cards highlights
    const tl2 = gsap.timeline({
      scrollTrigger: {
        markers: false,
        trigger: '.line_is-solution-left',
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
      },
    });
    tl2.to(targetElement2, {
      opacity: 100,
      duration: 0.1,
      stagger: 0.25,
    });
  });
}

export { animateElements };
