import { combineReducers } from 'redux';

import tweets from './tweets';
import sortFilter from './sortFilter';

const tweetsApp = combineReducers({
  tweets,
  sortFilter
});

export default tweetsApp;
