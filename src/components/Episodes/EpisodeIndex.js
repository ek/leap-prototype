import React, {Component} from 'react';
import {TableView} from 'react-ratchet';
import EpisodeTableViewCell from './EpisodeTableViewCell';
import Header from '../shared/Header';

export default class EpisodeIndex extends Component {
  
  render() {
    const { setView } = this.props.setView;
    const { title } = this.props.podcast;
    return (
      <div>
        <Header
          setView={setView}
          title={title}
          previousView='PodcastShow' />
        <div className='content'>
          <TableView>
            {this.renderEpisodes()}
          </TableView>
        </div>
      </div>
    )
  }

  renderEpisodes() {
    const { setView, podcastIndex, podcast} = this.props;
    return podcast.episodes.map((episode, episodeIndex) => {
      const {
        image,
        title,
        author,
        published,
        vocabLevel,
        pace,
        duration,
        accent
      } = episode;
      return (
        <EpisodeTableViewCell 
          key={episodeIndex}
          image={image}
          title={title}
          author={author}
          published={published}
          vocabLevel={vocabLevel}
          pace={pace}
          duration={duration}
          accent={accent}
          onClick={() => setView('EpisodeShow', {podcastIndex,episodeIndex}) } />
      );
    });
  }

}
