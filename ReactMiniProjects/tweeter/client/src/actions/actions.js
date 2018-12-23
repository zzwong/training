// Actions are payloads of information that send data from application to store
// they are the only source of information for the store
// Actions are sent to the store via store.dispatch()

// ACTION TYPES
export const ADD_TWEET = 'ADD_TWEET';
export const LIKE_TWEET = 'LIKE_TWEET';
export const SET_TWEETS = 'SET_TWEETS'; // Receive
export const FETCH_TWEETS = 'FETCH_TWEETS'; // ASYNC ACTION TYPE

// MISC CONSTANTS
export const SortFilters = {
  CREATE_TIME: 'CREATE_TIME',
  LIKE_COUNT: 'LIKE_COUNT'
};

// ACTION CREATORS (function that creates actions)
// example usage: dispatch(addTweet({}))
export const addTweet = tweet => ({
  type: ADD_TWEET,
  tweet
});

export const likeTweet = id => ({
  type: LIKE_TWEET,
  id
});

export const setTweets = tweets => ({
  type: SET_TWEETS,
  tweets
});

export const fetchTweets = () => ({
  type: FETCH_TWEETS
});
