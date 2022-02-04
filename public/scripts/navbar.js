// Scroll to top and toggle 'compose tweet'
$(document).ready(() => {

  // Hide scroll to top button on load
  $('.navbar button.to-top').hide();

  // Animation to toggle 'compose tweet'
  $('.navbar button.nav-write').on('click', e => {
    $('html, body').animate(
      { scrollTop: 0 },
    );
    $('.new-tweet').slideToggle();
    document.getElementById('tweet-text').focus();
  });

  let scrollValue = 20;

  // Shows button when not at top of the page
  $(window).on('scroll', e => {
    const bodyValue = document.body.scrollTop;
    const eleValue = document.documentElement.scrollTop;
    if (bodyValue > scrollValue || eleValue > scrollValue) {
      $('.navbar button.to-top').show();
    }
    else {
      $('.navbar button.to-top').hide();
      $('.navbar button.nav-write').show();
    }
  });

  // Scroll up to top of page
  $('.navbar button.to-top').on('click', () => {
    $('html, body').animate(
      { scrollTop: 0 },
      () => {
        $('.navbar button.nav-write').show();
        $('.navbar button.to-top').hide();
        $('.new-tweet').slideDown();
        document.getElementById('tweet-text').focus();
      }
    );
    return false;
  });

});