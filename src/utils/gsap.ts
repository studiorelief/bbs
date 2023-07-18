import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// jQuery function
//bullet & cards highlights
function animateElements() {
  $('.line_is-solution-left').each(function (index) {
    const targetElement = $('.bullet_highlight');
    const targetElement2 = $('.home-solution_cards-1');
    const targetElement3 = $('.home-bbs_crypto');

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

/* function fadeBatch() {
  gsap.set('.a--fade-b', { opacity: 0.1, y: 30 });

  ScrollTrigger.batch('.a--fade-b', {
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1 }),
    onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 30 }),
    onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 30 }),
    start: 'top 85%',
    end: 'bottom 15%',
    markers: true,
  });
} */

export { animateElements };
