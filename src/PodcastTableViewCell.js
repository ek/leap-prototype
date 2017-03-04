import React from 'react';
import { TableViewCell } from 'react-ratchet';

/*
@prop [divider] {Boolean} Renders a divider cell
@prop [navigateRight] {Boolean} Right-wards chevron 
@prop [navigateLeft] {Boolean} Left-wards chevron
@prop [href] {String} Assigns the given href to the child anchor
@prop [className] {String} Merges with the Ratchet predefined CSS classes
*/
export default class PodcastTableViewCell extends React.Component {
  render() {
    return (
      <TableViewCell className="podcast-view-cell media">
        <img className="media-object pull-left " 
          src="images/the-daily.jpg">
        </img>
        <div className="media-body">
          <h4>Trump Predicts His Own Headlines</h4>
          <p>
            Published on Friday, Feb. 17, 2017 with a Level 2 vocabulary, rapid pace, 8 minute duration, and an American accent.
          </p>
        </div>
      </TableViewCell>
    );
  }
}
