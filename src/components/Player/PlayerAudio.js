import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';

export default class PlayerAudio extends React.Component {
  constructor() {
    super();
  }
  
  onPlay() {
    console.log('on play');
  }

  onListen(seconds) {
    console.log(moment(seconds));
  }

  chooseSentence(a) {
    console.log(a);
    this.state.audioEl.pause();
  }

  componentDidMount() {
    // extracts html audioElement from ReactAudioPlayer
    const audioEl = this.rap.audioEl;
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
