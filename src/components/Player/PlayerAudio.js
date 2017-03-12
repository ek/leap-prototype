import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './PlayerAudio.css';

export default class PlayerAudio extends React.Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.isPaused === true) {
      this.pause();
    }
  }
  pause(a) {
    this.state.audioEl.pause();
  }
  componentDidMount() {
    // extracts html audioElement from ReactAudioPlayer
    const audioEl = this.rap.audioEl;
    audioEl.volume = 0.8;
    this.setState({audioEl});
  }
  render() {
    const listenInterval = 200;
    return (
      <div className="PlayerAudio">
        <ReactAudioPlayer
          autoPlay
          src={this.props.url}
          listenInterval={listenInterval}
          onListen={this.props.onListen}
          onPlay={this.props.onPlay}
          ref={c => this.rap = c } />
      </div>
    )
  }
}
