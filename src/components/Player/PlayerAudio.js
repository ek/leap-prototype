import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';

export default class PlayerAudio extends React.Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
  }
  onPlay() {
    console.log('on play');
  }
  onListen(seconds) {
    console.log(moment(seconds));
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.isPaused === true) {
      console.log('isPaused', nextProps.isPaused)
      this.pause();
    }
  }
  pause(a) {
    this.state.audioEl.pause();
  }
  componentDidMount() {
    // extracts html audioElement from ReactAudioPlayer
    const audioEl = this.rap.audioEl;
    audioEl.volume = 0.1;
    this.setState({audioEl});
  }
  render() {
    const listenInterval = 100;
    return <ReactAudioPlayer
            src={this.props.url}
            listenInterval={listenInterval}
            onPlay={this.onPlay}
            onListen={this.onListen}
            ref={c => this.rap = c }
            autoPlay />
  }

}
