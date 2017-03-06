import React, { Component } from 'react';

import EpisodeIndex from './components/EpisodeIndex';
import EpisodeShow from './components/EpisodeShow';

class App extends Component {
  constructor() {
    super();

    this.setPage = this.setPage.bind(this);
    this.renderPage = this.renderPage.bind(this);

    this.state = {
      selectedIndex: null,
      page: 'list'
    }
  }
  setPage(page, selectedIndex = null) {
    this.setState({page, selectedIndex});
  }
  renderPage() {
    const { page, selectedIndex } = this.state;
    const { Podcasts } = data;
    console.log(selectedIndex)

    switch(page) {
      case 'list':
        return <EpisodeIndexView 
          podcasts={Podcasts} 
          setPage={this.setPage} />
      case 'show':
        return <EpisodeShowView 
          podcast={Podcasts[selectedIndex]} 
          setPage={this.setPage} />
      default:
        throw new Error('Invariant');
        return;
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    );
  }
}