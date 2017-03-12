import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';
import PlayerDefinitions from './PlayerDefinitions';
import moment from 'moment';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.chooseSentence = this.chooseSentence.bind(this);
    this.onPaused = this.onPaused.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.state = {
      paused: false,
      time: null,
      seconds: null,
      sentence: null,
      transcript: props.episode.transcript,
      view: 'transcript' // may be 'transcript' or 'definitions'
    }
  }
  onPlay() {
    console.log('on play');
  }
  onPaused() {
    console.log('on paused');
  }
  onListen(seconds) {
    let secs = Math.round(seconds * 1000)/1000;
    if(secs < 10) { secs = "0"+secs; }
    const time = moment("00:00:" + secs, "HH:mm:ss.SSS");
    this.setState({ seconds, time });
  }
  chooseSentence(sentence) {
    this.setState({sentence});
  }
  render() {
    const { setView } = this.props.setView;
    const { title, mp3 } = this.props.episode;
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
          {this.renderView(this.state)}
        </div>
      </div>
    )
  }
  renderView(state) {
    switch(state.view) {
      case 'transcript':
        return <PlayerTranscript 
            seconds={state.seconds}
            time={state.time}
            chooseSentence={this.chooseSentence}
            transcript={state.transcript} />
      case 'definitions':
        return <PlayerDefinitions 
            sentence={state.sentence} />
      default:
        throw new Error('Unknown view name in PlayerShow: ' + state.view);
    }
  }

}