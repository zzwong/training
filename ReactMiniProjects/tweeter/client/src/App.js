import React, { Component } from 'react';
import './App.css';
import SortableTweetList from './containers/SortableTweetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SortableTweetList />
      </div>
    );
  }
}

export default App;
