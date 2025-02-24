import './index.css';

import { loadAttributesScript } from '$utils/fs-attributes';
import { animateElements } from '$utils/gsap';
import { jqueryCC } from '$utils/jquery';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { animateHero /* animatePreloader */ } from '$utils/preloader';
import { slickLoop, slickLoopPartners } from '$utils/slick';
import { swiperApprenants } from '$utils/swiper';
import { fillUTMParametersFromUrl } from '$utils/utm';

window.Webflow ||= [];
window.Webflow.push(() => {
  // load modalviewser
  loadModelViewerScript();

  // Load Finsweet Attributes scripts
  Promise.all([
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-formsubmit@1/formsubmit.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-copyclip@1/copyclip.js'
    ),
  ]);

  // Load UTM tracking
  fillUTMParametersFromUrl();

  // Load jQuery CC
  jqueryCC();

  const currentPathname = window.location.pathname;
  // load gsap function in Home
  if (currentPathname === '/') {
    animateElements();
    slickLoop();
    slickLoopPartners();
    swiperApprenants();
    animateHero();
  }

  // Function to check if the device is mobile
  /* function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } */

  // Preloader only once a week
  // window.onload = function () {
  //   // preloader
  //   /* const preloader = document.getElementById('preloader'); */

  //   // Check if the first visit cookie exists
  //   if (
  //     document.cookie.replace(/(?:(?:^|.*;\s*)firstVisit\s*\=\s*([^;]*).*$)|^.*$/, '$1') !== 'true'
  //   ) {
  //     // If the cookie doesn't exist, it's the user's first visit
  //     // animatePreloader();
  //     // Then, set the cookie to indicate that the user has already visited the site
  //     document.cookie = 'firstVisit=true; expires=Fri, 2023 23:59:59 GMT; path=/';
  //   } else {
  //     animateHero();
  //   }
  // };

  // alert('test');
  // openFormationAnchor();
});
