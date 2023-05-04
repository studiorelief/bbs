import { loadAttributesScript } from '$utils/fs-attributes';
import { greetUser } from '$utils/greet';
import { animateElements, fadeBatch } from '$utils/gsap';
import { jqueryCC } from '$utils/jquery';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { slickLoop } from '$utils/slick';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Clément';
  greetUser(name);
  // load modalviewser
  loadModelViewerScript()
    .then(() => {
      console.log('Model Viewer Load');
    })
    .catch((error) => {
      console.error('Model Viewer Error', error);
    });

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
  ])
    .then(() => {
      console.log('All Finsweet Attributes scripts loaded');
    })
    .catch((error) => {
      console.error(error);
    });

  // Load jQuery CC
  jqueryCC();

  const currentPathname = window.location.pathname;
  // load gsap function in Home
  if (currentPathname === '/') {
    animateElements();
    slickLoop();
  }
  // load gsap function in Home
  if (currentPathname === '/equipe' && !isMobile()) {
    fadeBatch();
  }

  // Function to check if the device is mobile
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
});
