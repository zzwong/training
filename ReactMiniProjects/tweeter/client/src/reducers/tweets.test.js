import * as actions from '../actions/actions';
import tweets from '../reducers/tweets';

describe('tweets reducer', () => {
  it('should return the initial state', () => {
    expect(tweets(undefined, {})).toEqual([]);
  });

  it('shoul handle ADD_TWEET', () => {
    const now = new Date();
    expect(
      tweets([], {
        type: actions.ADD_TWEET,
        tweet: {
          text: 'abc',
          likes: 1,
          id: 0,
          createdAt: now
        }
      })
    ).toEqual([
      {
        text: 'abc',
        likes: 1,
        id: 0,
        createdAt: now
      }
    ]);
  });

  it('should handle LIKE_TWEET', () => {
    const now = new Date();
    expect(
      tweets(
        [
          {
            text: 'abc',
            likes: 1,
            id: 0,
            createdAt: now
          }
        ],
        {
          type: actions.LIKE_TWEET,
          id: 0
        }
      )
    ).toEqual([
      {
        text: 'abc',
        likes: 2,
        id: 0,
        createdAt: now
      }
    ]);
  });
});
