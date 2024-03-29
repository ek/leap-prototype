import React from 'react';
import Header from '../shared/Header';

import './PodcastShow.css';

export default class PodcastShow extends React.Component {

  render() {
    const { setView, podcastIndex, podcast} = this.props;
    const { title, author, image, description } = podcast;
    return (
      <div className='podcast-show'>
        <Header 
          setView={setView} 
          previousView='PodcastIndex'
          title={title} />
        <div className='content'>
          <div className='content-padded'>
            <img className="image-centered image-large"
              src={image}
              alt={title}>
            </img>
            <h1 className="centered">{title}</h1>
            <h4 className="centered">by {author}</h4>
            <p className="gray">{description}</p>
            <button 
              className="btn btn-primary btn-block"
              onClick={()=>setView('EpisodeIndex', {podcastIndex} )}>
              Choose an episode
            </button>
            </div>
        </div>
      </div>
    )
  }
}