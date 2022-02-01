$(document).ready(function() {
  $("#tweet-text").on("input", function(e) {
    const tweetLength = this.value.length;
    const charCounter = $(this).next().children(".counter");

    if ((140 - tweetLength) < 0) {
      charCounter.addClass('counterOver')
    } else {
      charCounter.removeClass('counterOver');
    }
    charCounter.text(140 - tweetLength)
  });
});