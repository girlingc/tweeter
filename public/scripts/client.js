/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready( () => {
    const tweetData = {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
        },
      "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
      "created_at": 1461116232227
  }

  const createTweetElement = function(tweet) {
    const $article = $('<article>').addClass('tweet');
    const $header = $(`         
      <header>
        <div class="avatar-name">
          <img src=${tweet.user.avatars}>
          <span class="name">${tweet.user.name}</span>
        </div>
        <div class="handle">
          <span>${tweet.user.handle}</span>
        </div>
      </header>`);
    const $content = $('<div>').addClass('text').text(`${tweet.content.text}`);
    const $footer = $(`         
      <footer>
        <span class="date">${timeago.format(tweet.created_at)}</span>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>`)

      $article.append($header, $content, $footer)
    return $article
  };
  const $tweetContainer = $('#tweet-container')

  const fetchTweets = () => {
    $.ajax({
      url: '/tweets',
      method:'GET'
    }).then((tweets) => {
      console.log(tweets);

      $tweetContainer.empty();

      for (const tweetKey in tweets) {
        const $tweet = createTweetElement(tweets[tweetKey]);
        $tweetContainer.append($tweet)
      }
    });
  };
  
  fetchTweets();
});