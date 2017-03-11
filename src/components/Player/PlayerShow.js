import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';

export default class Player extends React.Component {
  
  constructor() {
    super();
    this.onPaused = this.onPaused.bind(this);
    this.state = {
      paused: false
    }
  }
  
  onPaused(isPaused) {
    this.setState({
      isPaused: isPaused
    });
  }

  render() {

    const { setView } = this.props.setView;
    const { title, transcript, mp3 } = this.props.episode;

    return (
      <div>
        <Header
          setView={setView}
          title={title}
          previousView='EpisodeShow' />
        <div className='content'>
          <PlayerAudio url={mp3} isPaused={this.state.isPaused} />
          <PlayerTranscript
            onPaused={this.onPaused}
            transcript={transcript} />
        </div>
      </div>
    )

  }

}