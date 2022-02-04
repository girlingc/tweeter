// Scroll to top and toggle 'compose tweet' 
$(document).ready( () => {

  // Hide scroll to top button on load
  $('.navbar button.to-top').hide()

  // Animation to toggle 'compose tweet'
  $('.navbar button.nav-write').on('click', e => {
    $('.new-tweet').slideToggle();
    document.getElementById('tweet-text').focus();
  });

  let scrollValue = 200;

  // Shows scroll up when scrolling down, 'compose tweet' when scrolling up
  $(window).on('scroll', e => {
    const st = $(window).scrollTop();
    if (st > scrollValue) {
      $('.navbar button.to-top').show();
      $('.navbar button.nav-write').hide();
    } 
    else {
      $('.navbar button.to-top').hide();
      $('.navbar button.nav-write').show();
    }
    scrollValue = st;
  })

  // Scroll up to top of page, show 'compose tweet'
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