import React, { Component } from 'react';
import Monitor from '../../components/Monitor';
import { getTweets } from '../../modules/spacebook';
import './index.css';

class TweetBox extends Component {
  state = {
    tweets: [],
    redditThreads: []
  }
  componentDidMount = async () => {
    const tweets = await getTweets();

    fetch('https://www.reddit.com/r/Suomi.json').then((res) => res.json())
      .then((response) => {
        this.setState({
          redditThreads: response.data.children.map(({data: {title, author, id}}) => ({title, author, id}))
        })
      })

    this.setState({ tweets: tweets });
  }
  render() {
    return (
      <Monitor className="tweet-box">
        <h3>Recent tweets from Spacebook</h3>
        {
          this.state.redditThreads.map((tweet) => {
            return (
              <div className="tweet-box__tweet" key={tweet.id}>
                <strong>{tweet.author}</strong><br />
                {tweet.title}<br />
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
