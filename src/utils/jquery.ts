function jqueryCC() {
  $('.navbar_mobile-close').click(function (e) {
    e.preventDefault();
    $('.w-nav-button').trigger('click');
  });

  // Add & Remove class - form entretien - main radio
  $('.form_radio.is-main').click(function () {
    $('.form_radio.is-main').removeClass('is-active');
    $('.form_radio-state').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).find('.form_radio-state').addClass('is-active');
  });

  // Hide preheader & move navbar when scroll
  $(document).ready(function () {
    $('.preheader_component').css('display', 'block');
  });

  $(window).scroll(function () {
    const windowScrollTop = $(this).scrollTop();

    if (windowScrollTop < 250 && $('.preheader_component').css('display') === 'block') {
      $('.preheader_component').css({
        transform: 'translateY(-2.6rem)',
      });
      $('.navbar_component').css({
        transform: 'translateY(-2.6rem)',
      });
    } else {
      $('.preheader_component').css({
        transform: 'translateY(0rem)',
      });
      $('.navbar_component').css({
        transform: 'translateY(0rem)',
      });
    }
  });

  // Custom text & afficage discount selon bouton
  $(document).ready(function () {
    $('.a--p-entretien').click(function () {
      $('.p-discount_wrapper').fadeOut();
      $('.heading-style-h2.is-keilla.is-popup').text('Nous contacter');
    });

    $('.a--p-discount').click(function () {
      $('.heading-style-h2.is-keilla.is-popup').text('Nos discounts');
      $('.p-discount_wrapper').fadeOut();
    });

    $('.a--p-brochure').click(function () {
      $('.p-discount_wrapper').fadeOut();
      $('.heading-style-h2.is-keilla.is-popup').text('Telecharger la Brochure');
      $('.form_field-wrapper.is-linkedin').hide();
      $('.form_field-wrapper.is-choix-formation-short').show();
      // add required on open
      $('#choix-formation-short').prop('required', true);
    });

    $('.a--p-contact').click(function () {
      $('.p-discount_wrapper').fadeOut();
      $('.heading-style-h2.is-keilla.is-popup').text('Contact');
    });

    $('.a--p-contact-hero').click(function () {
      $('.p-discount_wrapper').fadeOut();
      $('.heading-style-h2.is-keilla.is-popup').text('Nous contacter');
      $('.form_field-wrapper.is-linkedin').hide();
      $('.form_field-wrapper.is-choix-formation-long').show();
      // add required on open<
      $('#choix-formation-long').prop('required', true);
    });

    $('.a--p-inscrivez-vous').click(function () {
      $('.p-discount_wrapper').fadeOut();
      $('.heading-style-h2.is-keilla.is-popup').text('Inscription');
      $('.form_field-wrapper.is-linkedin').hide();
      $('.form_field-wrapper.is-choix-formation-short').show();
      // add required on open
      $('#choix-formation-short').prop('required', true);
    });

    $('.p-general_close-w').click(function () {
      $('.p-discount_wrapper').fadeOut();
      setTimeout(function () {
        $('.form_field-wrapper.is-linkedin').show();
        $('.form_field-wrapper.is-choix-formation-short').hide();
        $('.form_field-wrapper.is-choix-formation-long').hide();
        // remove required on close
        $('#choix-formation-long').prop('required', false);
        $('#choix-formation-short').prop('required', false);
      }, 500);
    });
  });

  // Add query param in form
  $(document).ready(function () {
    $('.a--p-entretien').click(function () {
      $('#general-form-origin').val('entretien');
    });
    $('.a--p-contact').click(function () {
      $('#general-form-origin').val('contact');
    });
    $('.a--p-brochure').click(function () {
      $('#general-form-origin').val('brochure');
    });
    $('.a--p-discount').click(function () {
      $('#general-form-origin').val('discount');
    });
    $('.a--p-contact.is-financement').click(function () {
      $('#general-form-origin').val('financement');
    });
    $('.a--p-contact-hero').click(function () {
      $('#general-form-origin').val('contact-hero');
    });
    $('.a--p-inscrivez-vous').click(function () {
      $('#general-form-origin').val('inscrivez-vous');
    });
  });

  // Add Required prop if visible
}

export { jqueryCC };
