import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const TweetList = ({ tweets, onTweetLike }) => {
  return (
    <ul>
      {tweets.map((tweet, i) => (
        <Tweet key={i} {...tweet} onLike={() => onTweetLike(tweet.id)} />
      ))}
    </ul>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  onTweetLike: PropTypes.func.isRequired
};

export default TweetList;
