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

  setView(view, opts = {}) {
    console.log('opts', opts)
    const newState = { view };
    if(opts.topic) {
      newState.topic = opts.topic;
    }
    if(typeof opts.podcastIndex !== 'undefined') {
      console.log('setting podcast');
      newState.podcastIndex = opts.podcastIndex;
      newState.podcast = this.getPodcast(opts.podcastIndex);
    }
    if(typeof opts.episodeIndex !== 'undefined') {
      newState.episodeIndex = opts.episodeIndex;
      newState.episode = this.getEpisode(opts.episodeIndex);
    }
    console.log('newstate', newState)
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
        console.log(this.state)
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
