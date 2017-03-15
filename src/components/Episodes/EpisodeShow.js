import React from 'react';
import Header from '../shared/Header';

import './EpisodeShow.css';

export default class EpisodeShow extends React.Component {
  render() {
    const { setView } = this.props;
    const { title, description, image } = this.props.episode;
    return (
      <div>
        <Header
          setView={setView}
          title={title}
          previousView='EpisodeIndex' />
        <div className='content content-padded'>
          <div className='media episode-media'>
            <img 
              className='media-object pull-left' 
              src={image}
              alt={title} />
            <div className='media-body'>
              <h4 className='episode-title'>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
          <button 
            className='btn btn-primary btn-block'
            onClick={() => setView('PlayerShow', {})}>
            &#x25b6;&nbsp;Play Episode
          </button>
        </div>
      </div>
    )
  }
}
