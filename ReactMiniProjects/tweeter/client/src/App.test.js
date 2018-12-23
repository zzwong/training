import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tweetsApp from './reducers/tweetsApp';

const store = createStore(tweetsApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
