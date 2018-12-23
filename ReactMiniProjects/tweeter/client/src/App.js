import React, { Component } from 'react';
import './App.css';
import AddTweet from './containers/AddTweet';
import SortableTweetList from './containers/SortableTweetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTweet />
        <SortableTweetList />
      </div>
    );
  }
}

export default App;
