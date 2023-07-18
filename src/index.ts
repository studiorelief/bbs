import { loadAttributesScript } from '$utils/fs-attributes';
import { greetUser } from '$utils/greet';
import { animateElements, fadeBatch } from '$utils/gsap';
import { jqueryCC } from '$utils/jquery';
import { loadModelViewerScript } from '$utils/modal-viewer';
import { animateHero, animatePreloader } from '$utils/preloader';
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
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'
    ),
    loadAttributesScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-copyclip@1/copyclip.js'
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
  /*   // load gsap function in Home
  if (currentPathname === '/equipe' && !isMobile()) {
    fadeBatch();
  } */

  // Refresh on filter

  // Function to check if the device is mobile
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Preloader only once a week
  window.onload = function () {
    // preloader
    const preloader = document.getElementById('preloader');

    // Vérifiez si le cookie de la première visite existe
    if (
      document.cookie.replace(/(?:(?:^|.*;\s*)firstVisit\s*\=\s*([^;]*).*$)|^.*$/, '$1') !== 'true'
    ) {
      // Si le cookie n'existe pas, c'est la première visite de l'utilisateur
      // Afficher preloader
      // Immediately set the display and opacity of .loader_component
      animatePreloader();

      // Puis, définissez le cookie pour indiquer que l'utilisateur a déjà visité le site
      document.cookie = 'firstVisit=true; expires=Fri, 2023 23:59:59 GMT; path=/';
    } else {
      // Si le cookie existe, ce n'est pas la première visite de l'utilisateur
      // Cachez votre preloader
      animateHero();
    }
  };
});
