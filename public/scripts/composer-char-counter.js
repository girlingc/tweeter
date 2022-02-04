$(document).ready(function() {
  // Disable button on initial load
  $('#tweet-button').prop('disabled', true).addClass('disabled')

  // Character counter and handling for invalid input
  $("#tweet-text").on("input", function(e) {
    const tweetLength = this.value.length;
    const charCounter = $(this).next().children("#counter");

    if ((140 - tweetLength) < 0) {
      charCounter.addClass('counter-over');
      $('#tweet-button').prop('disabled', true).addClass('disabled');
    } 
    else if (tweetLength === 0 || this.value.trim().length === 0) {
      $('#tweet-button').prop('disabled', true).addClass('disabled');
    } 
    else {
      charCounter.removeClass('counter-over');
      $('#tweet-button').prop('disabled', false).removeClass('disabled');
    }
    charCounter.text(140 - tweetLength);
    
  });
});