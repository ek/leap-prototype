import React from 'react';
import { TableViewCell } from 'react-ratchet';
import './PodcastTableViewCell.css';

export default class PodcastTableViewCell extends React.Component {
  render() {
    const { image, title, description, onClick } = this.props;
    return (
      <TableViewCell className="podcast-table-view-cell media" onClick={onClick}>
        <img className="media-object pull-left"
          src={image}
          alt={title}>
        </img>
        <div className="media-body">
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
      </TableViewCell>
    );
  }
}
