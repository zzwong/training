// Sorts tweets according to the sort condition (newest, upvotes)
// import React, { Component } from 'react';
import { connect } from 'react-redux';

import { likeTweet } from '../actions/actions';

import TweetList from '../components/TweetList';

const mapStateToProps = state => ({
  tweets: state.tweets,
  sortFilter: state.sortFilter
});

const mapDispatchToProps = dispatch => ({
  onTweetLike: id => {
    dispatch(likeTweet(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);
