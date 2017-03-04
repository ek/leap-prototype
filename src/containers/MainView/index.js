import React, {Component} from 'react';
import {Title, TableView, TableViewCell} from 'react-ratchet';
import PodcastTableViewCell from '../../components/PodcastTableViewCell';

import './index.css';

export default class MainView extends Component {
  renderPodcasts() {
    const { Podcasts } = this.props.data;
    return Podcasts.map((podcast) => {
      return (
        <PodcastTableViewCell {...podcast} />
      );
    });
  }
  render() {
    console.log(this.props.data);
    return (
      <div className='mainview'>
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
