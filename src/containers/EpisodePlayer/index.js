import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import './index.css';

export default class EpisodePlayer extends React.Component {
  render() {
    const { setPage, audioUrl } = this.props;

    const url = '/audio/the-daily.mp3';

    return (
      <div className='player-view'>
        <button onClick={() => setPage('overview')}>Back</button>
        Player View
        <AudioPlayer audioUrl={url}></AudioPlayer>
      </div>
    )
  }
}