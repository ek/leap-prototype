import React from 'react';
import './index.css';

export default class EpisodePlayer extends React.Component {
  render() {
    const { setPage } = this.props;

    return (
      <div className='player-view'>
        <button onClick={() => setPage('overview')}>Back</button>
        Player View
      </div>
    )
  }
}