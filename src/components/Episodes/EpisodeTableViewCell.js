import React from 'react';
import moment from 'moment';

import './EpisodeTableViewCell.css'

export default class PodcastTableViewCell extends React.Component {
  render() {
    const { 
      image, 
      title, 
      published, 
      vocabLevel, 
      pace, 
      duration, 
      accent, 
      onClick 
    } = this.props;

    return (
      <li className="table-view-cell episode-view-cell media"
        onClick={onClick}>
          <img className="media-object pull-left"
            src={image}
            alt={title} />
          <div className="media-body">
            <h4 className="episode-title">{title}</h4>
            <p className="gray">
              Published on {moment(published).format('dddd, MMM. DD, YYYY')} with a Level {vocabLevel} vocabulary,  {pace} pace, {duration} duration, and an {accent} accent.
            </p>
          </div>
      </li>
    )
  }
}
