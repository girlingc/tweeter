$(document).ready( () => {

  $('.navbar button.to-top').hide()

  $('.navbar button.nav-write').on('click', e => {
    $('.new-tweet').slideToggle();
    document.getElementById('tweet-text').focus();
  });

  $(window).on('unload', () => {
    $(window).scrollTop(0);
  });


  let scrollValue = 0;

  $(window).on('scroll', e => {
    const st = $(window).scrollTop();
    if (st > scrollValue) {
      $('.navbar button.to-top').show();
      $('.navbar button.nav-write').hide();
    } else {
      $('.navbar button.to-top').hide();
      $('.navbar button.nav-write').show();
    }
    scrollValue = st;
  })

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