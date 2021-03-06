var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (author, text) {
  //   var tweet = { author: author, text: text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 10 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm author="Author Name" text="Type your tweet here" />
        <TweetList data={ this.props.data } />
      </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm">
        <input type="text" placeholder="Author Name" /> &nbsp;
        <input type="text" placeholder="Type your tweet here" /> &nbsp;
        <button type="submit" className="btn btn-info">Tweet</button>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var tweets = this.props.data.map(function(tweet){
      return (<div><Tweet text={tweet.text} author={tweet.author} /></div>);
    });
    return (
      <div className="tweetList">
        {tweets}
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h2>{this.props.text}</h2>
        <h4><i> - {this.props.author}</i></h4>
      </div>
    );
  }
});

ReactDOM.render(
  <Twitter data={data} />,
  document.getElementById('tweets')
);
