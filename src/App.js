import React, { Component } from 'react';
import './App.css';

import data from './data';

import AppIntro from './components/App/AppIntro';
import PodcastIndex from './components/Podcasts/PodcastIndex';
import PodcastShow from './components/Podcasts/PodcastShow';
import InfoAbout from './components/Info/InfoAbout';
import TopicIndex from './components/Topics/TopicIndex';
import EpisodeIndex from './components/Episodes/EpisodeIndex';

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
  setView(view, podcastIndex = null, episodeIndex = null) {
    this.setState({view, podcastIndex, episodeIndex});
  }
  getPodcast(index) {
    return data.podcasts[index];
  }
  getEpisode(index, podcast) {
    return podcast.episodes[index];
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
        const podcast = this.getPodcast(this.state.podcastIndex)
        return <PodcastShow 
          setView={this.setView} 
          podcast={podcast}
          podcastIndex={this.state.podcastIndex} />
      case 'EpisodeIndex':
        const ePodcast = this.getPodcast(this.state.podcastIndex)
        return <EpisodeIndex 
          setView={this.setView} 
          podcast={ePodcast}
          podcastIndex={this.state.podcastIndex} />
      case 'InfoAbout':
        return <InfoAbout 
          setView={this.setView} />
      case 'TopicIndex':
        return <TopicIndex 
          setView={this.setView} 
          topics={data.topics} />
      default:
        throw new Error('Unknown view name: '+renderView);
        return;
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
