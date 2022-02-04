$(document).ready(function() {
  // Disable button on initial load
  $('#tweet-button').prop('disabled', true).addClass('disabled')
  $("#tweet-text").on("input", function(e) {
    const tweetLength = this.value.length;
    const charCounter = $(this).next().children(".counter");

    if ((140 - tweetLength) < 0) {
      charCounter.addClass('counterOver');
      $('#tweet-button').prop('disabled', true).addClass('disabled');
    } 
    else if (tweetLength === 0 || this.value.trim().length === 0) {
      $('#tweet-button').prop('disabled', true).addClass('disabled');
    } 
    else {
      charCounter.removeClass('counterOver');
      $('#tweet-button').prop('disabled', false).removeClass('disabled');
    }
    charCounter.text(140 - tweetLength);
  });
});