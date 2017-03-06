import React from 'react';
import Header from '../shared/Header';

import './PodcastShow.css';

export default class PodcastShow extends React.Component {
  render() {
    const {setView} = this.props;
    const {title,author,image,description} = this.props.podcast;
    return (
      <div className='podcast-show'>
        <Header 
          setView={setView} 
          previousView='PodcastIndex'
          title={title} />
        <div className='content content-padded'>
          <img className="image-centered image-large"
            src={image}
            alt={title}>
          </img>
          <h1 className="centered">{title}</h1>
          <h5 className="centered">by {author}</h5>
          <p>{description}</p>
          <button className="btn btn-block">
            Play
          </button>
        </div>
      </div>
    )
  }
}