import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ onLike, text, likes }) => {
  return (
    <div>
      {likes}
      <button onClick={onLike}>Like</button>
      <p>{text}</p>
    </div>
  );
};

Tweet.propTypes = {
  onLike: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Tweet;
