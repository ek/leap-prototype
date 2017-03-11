import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';
import moment from 'moment';

export default class Player extends React.Component {
  constructor() {
    super();
    this.onPaused = this.onPaused.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.state = {
      paused: false,
      time: null,
      seconds: null
    }
  }
  onPlay() {
    console.log('on play');
  }
  onListen(seconds) {
    let secs = Math.round(seconds * 1000)/1000;
    if(secs < 10) { secs = "0"+secs; }
    const time = moment("00:00:" + secs, "HH:mm:ss.SSS");
    console.log(time);
    this.setState({ seconds, time });
  }
  onPaused(isPaused) {
    this.setState({isPaused});
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
          <PlayerAudio 
            url={mp3} 
            onListen={this.onListen} 
            onPlay={this.onPlay} 
            isPaused={this.state.isPaused} />
          <PlayerTranscript 
            seconds={this.state.seconds}
            time={this.state.time}
            onPaused={this.onPaused}
            transcript={transcript} />
        </div>
      </div>
    )
  }

}