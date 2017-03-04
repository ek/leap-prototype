import React, { Component } from 'react';
// import PodcastTableViewCell from './PodcastTableViewCell.js'
import logo from './logo.svg';
import './App.css';

import data from './data';
import MainView from './containers/MainView';

class App extends Component {
  renderPage() {
    
  }
  render() {
    return (
      <div className="App">
        <MainView data={data} />
      </div>
    );
  }
}

export default App;
