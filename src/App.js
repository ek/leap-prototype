import React, { Component } from 'react';
import './App.css';

import data from './data';

import AppIntro from './components/App/AppIntro';
import PodcastIndex from './components/Podcasts/PodcastIndex';
import PodcastShow from './components/Podcasts/PodcastShow';
import InfoIndex from './components/Info/InfoIndex';
import InfoAbout from './components/Info/InfoAbout';
import TopicIndex from './components/Topics/TopicIndex';

class App extends Component {
  constructor() {
    super();
    this.setView = this.setView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.getPodcast = this.getPodcast.bind(this);
    this.state = {
      view: 'AppIntro'
    }
  }
  setView(view, index = null) {
    this.setState({view, index});
  }
  getPodcast(index) {
    return data.podcasts[this.state.index];
  }
  renderView(view) {
    switch(view) {
      case 'AppIntro':
        return <AppIntro 
          setView={this.setView} />
      case 'PodcastIndex':
        const podcasts = data.podcasts;
        return <PodcastIndex 
          setView={this.setView} 
          podcasts={podcasts} />
      case 'PodcastShow':
        const podcast = this.getPodcast(this.state.index)
        console.log(podcast)
        return <PodcastShow 
          setView={this.setView} 
          podcast={podcast} />
      case 'InfoIndex':
        return <InfoIndex 
          setView={this.setView} />
      case 'InfoAbout':
        return <InfoAbout 
          setView={this.setView} />
      case 'TopicIndex':
        return <TopicIndex 
          setView={this.setView} 
          topics={data.topics} />
      default:
        return <AppIntro 
          setView={this.setView} />
    }
  }
  render() {
    return (
      <div className="App">
        {this.renderView(this.state.view)}
      </div>
    )
  }
}

export default App;
