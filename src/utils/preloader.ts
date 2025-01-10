import { gsap } from 'gsap';

function animatePreloader() {
  gsap.set('.loader_component', { display: 'flex', opacity: 1 });
  gsap.set('.home-hero_h1.is-fade', { opacity: 0 });
  gsap.set('.home-hero_right', { opacity: 0 });
  gsap.set('.loader_img', { opacity: 1 });

  gsap
    .timeline()
    .to('.loader_img', { opacity: 0, duration: 0.5, delay: 1 })
    .to('.loader_component', {
      opacity: 0,
      duration: 0.5,
      onComplete: function () {
        gsap.set('.loader_component', { display: 'none' });
      },
    })
    .set('.home-hero_right', { scale: 0 })
    .set('.home-hero_h1.is-fade', { opacity: 0 })
    .set('.home-hero_right', { opacity: 0 })
    .to('.home-hero_h1.is-fade', { opacity: 1, duration: 0.75 })
    .to('.home-hero_right', { scale: 1, opacity: 1, duration: 2 });
}

function animateHero() {
  gsap.set('.home-hero_right', { opacity: 0 });

  gsap
    .timeline()
    .set('.home-hero_right', { scale: 0 })
    .set('.home-hero_right', { opacity: 0 })
    .to('.home-hero_right', { scale: 1.25, opacity: 1, duration: 1.5 });
}

// Call the function
export { animateHero, animatePreloader };
