// Reducers specify how application's state changes in response to actions sent to the store
import { ADD_TWEET, LIKE_TWEET, SET_TWEETS } from '../actions/actions';

const initialState =
  process.env.NODE_ENV === 'test'
    ? []
    : [
        { id: 1, text: 'very cool', likes: 9, createdAt: new Date() },
        { id: 2, text: 'great', likes: 7, createdAt: new Date() }
      ];

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case SET_TWEETS:
      return action.tweets;
    case ADD_TWEET:
      return [...state, action.tweet];
    case LIKE_TWEET:
      return state.map(x => (x.id === action.id ? { ...x, likes: x.likes + 1 } : x));
    default:
      return state;
  }
};

export default tweets;
