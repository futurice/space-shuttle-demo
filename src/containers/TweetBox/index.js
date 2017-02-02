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

    fetch('https://www.reddit.com/r/worldnews.json').then((res) => res.json())
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
        <h3>News from planet earth</h3>
        {
          this.state.redditThreads.map((tweet) => {
            return (
              <div className="tweet-box__tweet" key={tweet.id}>
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
