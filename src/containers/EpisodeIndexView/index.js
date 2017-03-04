import React, {Component} from 'react';
import {Title, TableView, TableViewCell} from 'react-ratchet';
import PodcastTableViewCell from '../../components/PodcastTableViewCell';

import './index.css';

export default class EpisodeIndexView extends Component {
  renderPodcasts() {
    const { setPage, podcasts } = this.props; 

    return podcasts.map((podcast, index) => {
      return (
        <PodcastTableViewCell {...podcast} onClick={() => setPage('show', index)} />
      );
    });
  }
  render() {
    return (
      <div>
        <Title className="bar bar-tall">The Daily</Title>
        <div className="content">
          <TableView>
            <TableViewCell divider>Episodes</TableViewCell>
            {this.renderPodcasts()}
          </TableView>
        </div>
      </div>
    )
  }
}
