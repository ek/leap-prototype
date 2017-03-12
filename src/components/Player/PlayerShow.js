import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';
import PlayerDefinitions from './PlayerDefinitions';
import zf from 'zero-fill';
import moment from 'moment';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.onChooseSentence = this.onChooseSentence.bind(this);
    this.localSetView = this.localSetView.bind(this);
    this.globalSetView = props.setView;
    this.onPaused = this.onPaused.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.state = {
      setView: this.globalSetView,
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
    const hrs = Math.floor(seconds/3600);
    const mins = Math.floor((seconds-(hrs*60))/60);
    const secs = Math.floor(((seconds-(hrs*3600)-(mins*60))*1000)/1000);
    const timeString = `${zf(2,hrs)}:${zf(2,mins)}:${zf(2,secs)}`;
    const momentFormat = "HH:mm:ss";
    const time = moment(timeString, momentFormat);
    this.setState({ seconds, time });
  }
  onChooseSentence(sentence) {
    this.setState({
      isPaused: true,
      sentence,
      view: 'definitions',
      previousView: 'transcript',
      setView: this.localSetView
    });
  }
  localSetView(view) {
    this.setState({
      view, 
      setView: this.globalSetView,
      isPaused: false
    });
  }
  render() {
    const { title, mp3 } = this.props.episode;
    return (
      <div>
        <Header
          setView={this.state.setView}
          title={title}
          previousView={this.state.previousView} />
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
            onChooseSentence={this.onChooseSentence}
            transcript={state.transcript} />
      case 'definitions':
        return <PlayerDefinitions 
            sentence={state.sentence} />
      default:
        throw new Error('Unknown view name in PlayerShow: ' + state.view);
    }
  }

}