import * as actions from './actions';

describe('actions', () => {
  it('should create an action to add a tweet', () => {
    const tweet = {};
    const expectedAction = {
      type: actions.ADD_TWEET,
      tweet
    };
    expect(actions.addTweet(tweet)).toEqual(expectedAction);
  });

  it('should create an action to like a tweet', () => {
    const id = 1;
    const expectedAction = {
      type: actions.LIKE_TWEET,
      id
    };
    expect(actions.likeTweet(id)).toEqual(expectedAction);
  });

  it('should create an action to set tweets', () => {
    const tweets = [];
    const expectedAction = {
      type: actions.SET_TWEETS,
      tweets
    };
    expect(actions.setTweets(tweets)).toEqual(expectedAction);
  });
});
