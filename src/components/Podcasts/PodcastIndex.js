import React from 'react';
import { TableView } from 'react-ratchet';
import Header from '../shared/Header';
import PodcastTableViewCell from './PodcastTableViewCell';

import './PodcastIndex.css';

export default class PodcastIndex extends React.Component {
  render() {
    const { setView } = this.props;
    return (
      <div className='podcast-index'>
        <Header 
          setView={setView} 
          previousView='TopicIndex' 
          title='News Podcasts' />
        <div className='content'>
          <TableView>
            {this.renderPodcasts()}
          </TableView>
        </div>
      </div>
    )
  }
  renderPodcasts() {
    const {setView,podcasts} = this.props; 
    return podcasts.map((podcast, index) => {
      const {key,title,author,image } = podcast;
      return (
        <PodcastTableViewCell 
          {...{ key,title,author,image}} 
          onClick={() => setView('PodcastShow', index)} />
      );
    });
  }
}