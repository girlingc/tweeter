/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

  const escape = str => {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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

  $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#to-top').fadeIn();
    } else {
        $('#to-top').fadeOut();
    }
});

  $('#new-tweet-form').on('submit', function(e) {
    e.preventDefault();
    const data = $(this).serialize();

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(() => {
      console.log('tweet created successfully');
      renderTweets();
    });

    $('#new-tweet-form').each(function() {
      this.reset();
    });
  });
});
