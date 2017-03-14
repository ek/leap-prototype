import React, { Component } from 'react';
import './App.css';

import data from './data';

import AppIntro from './components/App/AppIntro';
import PodcastIndex from './components/Podcasts/PodcastIndex';
import PodcastShow from './components/Podcasts/PodcastShow';
import InfoAbout from './components/Info/InfoAbout';
import TopicIndex from './components/Topics/TopicIndex';
import EpisodeIndex from './components/Episodes/EpisodeIndex';
import EpisodeShow from './components/Episodes/EpisodeShow';
import PlayerShow from './components/Player/PlayerShow';

class App extends Component {

  constructor() {
    super();
    this.setView = this.setView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.getPodcast = this.getPodcast.bind(this);
    this.getEpisode = this.getEpisode.bind(this);
    this.state = {
      view: 'AppIntro',
      podcasts: data.podcasts,
      topics: data.topics
    }
  }
  
  componentDidMount() {
    this.setView('AppIntro', {
      episodeIndex: 0,
      podcastIndex: 0
    });
  }

  setView(view, opts = {}) {
    const newState = { view };
    if(opts.topic) {
      newState.topic = opts.topic;
    }
    if(typeof opts.podcastIndex !== 'undefined') {
      newState.podcastIndex = opts.podcastIndex;
      newState.podcast = this.getPodcast(opts.podcastIndex);
    }
    if(typeof opts.episodeIndex !== 'undefined') {
      newState.episodeIndex = opts.episodeIndex;
      const podcast = this.getPodcast(opts.podcastIndex);
      console.log(podcast)
      newState.episode = this.getEpisode(opts.episodeIndex, podcast);
    }
    this.setState(newState);
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
        return <PodcastIndex 
          setView={this.setView} 
          podcasts={this.state.podcasts} />
      case 'PodcastShow':
        return <PodcastShow 
          setView={this.setView} 
          podcast={this.state.podcast} 
          podcastIndex={this.state.podcastIndex} />
      case 'EpisodeIndex':
        return <EpisodeIndex 
          setView={this.setView} 
          podcast={this.state.podcast}
          podcastIndex={this.state.podcastIndex} />
      case 'EpisodeShow':
        return <EpisodeShow 
          setView={this.setView} 
          episode={this.state.episode}
          episodeIndex={this.state.episodeIndex} />
      case 'PlayerShow':
        return <PlayerShow 
          setView={this.setView} 
          episode={this.state.episode}
          podcastIndex={this.state.episodeIndex} />
      case 'InfoAbout':
        return <InfoAbout 
          setView={this.setView} />
      case 'TopicIndex':
        return <TopicIndex 
          setView={this.setView} 
          topics={this.state.topics} />
      default:
        throw new Error('Unknown view name: '+view);
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
