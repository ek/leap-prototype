import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './PlayerAudio.css';

export default class PlayerAudio extends React.Component {
  constructor() {
    super();
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.isPaused === true && this.props.isPaused !== true) {
      this.pause();
    } else if(nextProps.isPaused === false && this.props.isPaused !== false) {
      this.play();
    }
  }
  pause(a) {
    this.state.audioEl.pause();
  }
  play(a) {
    this.state.audioEl.play();
  }
  componentDidMount() {
    // extracts html audioElement from ReactAudioPlayer
    const audioEl = this.rap.audioEl;
    audioEl.volume = 0.005;
    this.setState({audioEl});
  }
  render() {
    const listenInterval = 200;
    return (
      <div className="PlayerAudio">
        <ReactAudioPlayer
          preload="true"
          onCanPlay={this.props.onCanPlay}
          src={this.props.url}
          listenInterval={listenInterval}
          onListen={this.props.onListen}
          onPlay={this.props.onPlay}
          ref={c => this.rap = c } />
      </div>
    )
  }
}
