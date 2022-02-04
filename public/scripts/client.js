/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  // Method to steralize user input
  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Creates the HTML of an entire tweet
  const createTweetElement = (tweet) => {
    const $article = $(`
      <article class="tweet"> 
        <header>
          <div class="avatar-name">
            <img src=${tweet.user.avatars}>
            <span class="name">${tweet.user.name}</span>
          </div>
          <div class="handle">
            <span>${tweet.user.handle}</span>
          </div>
        </header>
        <div class="text">${escape(tweet.content.text)}</div>
        <footer>
          <span class="date">${timeago.format(tweet.created_at)}</span>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $article;
  };

  // Renders all tweets in /tweets to screen
  const $tweetContainer = $('#tweet-container');

  const renderTweets = () => {
    $.ajax({
      url: '/tweets',
      method:'GET'
      
    }).then((tweets) => {
      console.log(tweets);

      $tweetContainer.empty();

      for (const tweetKey in tweets) {
        const $tweet = createTweetElement(tweets[tweetKey]);
        $tweetContainer.append($tweet);
      }
    });
  };
  
  renderTweets();

  // Takes created tweet and adds it to /tweets, then reloads the page
  $('#new-tweet-form').on('submit', function(e) {
    e.preventDefault();
    const data = $(this).serialize();

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(() => {
      renderTweets();
      $(this).find("#counter").text('140');
    });

    $('#new-tweet-form').each(function() {
      this.reset();
    });
  });
});
