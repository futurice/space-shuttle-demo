import React from 'react';
import { mount } from 'enzyme';
import TweetBox from './index';

const wait = (ms) =>
  new Promise((resolve) => setInterval(resolve, ms));

test('Tweetbox renders tweets from nearby planets', async () => {
  const tweetBox = mount(<TweetBox />);

  await wait(1);

  expect(tweetBox.find('.tweet-box__tweet').length).toBeGreaterThan(0);
});
