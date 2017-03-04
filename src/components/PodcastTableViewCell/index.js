import React, { Component } from 'react';
import { TableViewCell } from 'react-ratchet';
import moment from 'moment';
import './index.css';

/*
@prop [divider] {Boolean} Renders a divider cell
@prop [navigateRight] {Boolean} Right-wards chevron 
@prop [navigateLeft] {Boolean} Left-wards chevron
@prop [href] {String} Assigns the given href to the child anchor
@prop [className] {String} Merges with the Ratchet predefined CSS classes
*/
export default class PodcastTableViewCell extends React.Component {
  render() {
    const { image, title, published, vocabLevel, pace, duration, accent } = this.props;

    return (
      <TableViewCell className="podcast-view-cell media">
        <img className="media-object pull-left"
          src={image}>
        </img>
        <div className="media-body">
          <h4>{title}</h4>
          <p>
            Published on {moment(published).format('dddd, MMM. DD, YYYY')} with a Level {vocabLevel} vocabulary, {pace} pace, {duration} duration, and an {accent} accent.
          </p>
        </div>
      </TableViewCell>
    );
  }
}
