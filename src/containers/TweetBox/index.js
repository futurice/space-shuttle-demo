import React, { Component } from 'react';
import Monitor from '../../components/Monitor';
import { getTweets } from '../../modules/spacebook';
import './index.css';

class TweetBox extends Component {
  state = {
    tweets: []
  }
  componentDidMount = async () => {
    const tweets = await getTweets();
    this.setState({ tweets: tweets });
  }
  render() {
    return (
      <Monitor className="tweet-box">
        <h3>Recent tweets from Spacebook</h3>
        {
          this.state.tweets.map((tweet) => {
            return (
              <div className="tweet-box__tweet" key={tweet.id}>
                <strong>{tweet.nick}</strong><br />
                {tweet.message}<br />
                ---------------------------
              </div>
            )
          })
        }
      </Monitor>
    );
  }
}

export default TweetBox;
