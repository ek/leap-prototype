import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';
import PlayerDefinitions from './PlayerDefinitions';
import PlayerDefinitionDetail from './PlayerDefinitionDetail';
import zf from 'zero-fill';
import moment from 'moment';
import cx from 'classnames';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.onChooseSentence = this.onChooseSentence.bind(this);
    this.onChooseDefinition = this.onChooseDefinition.bind(this);
    this.localSetView = this.localSetView.bind(this);
    this.globalSetView = props.setView;
    this.onPaused = this.onPaused.bind(this);
    this.onListen = this.onListen.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onCanPlay = this.onCanPlay.bind(this);
    this.setPreviousView = this.setPreviousView.bind(this);
    this.state = {
      setView: this.globalSetView,
      paused: false,
      time: null,
      seconds: null,
      sentence: null,
      transcript: props.episode.transcript,
      view: 'transcript' // may be 'transcript', 'definitions', or 'definition'
    }
  }
  onChooseDefinition(definition) {
    this.setState({
      view:'definition',
      definition: definition
    });
  }
  setStateOnSeconds(seconds) {
    const hrs = Math.floor(seconds/3600);
    const mins = Math.floor((seconds-(hrs*60))/60);
    const secs = Math.floor(((seconds-(hrs*3600)-(mins*60))*1000)/1000);
    const timeString = `${zf(2,hrs)}:${zf(2,mins)}:${zf(2,secs)}.000`;
    const momentFormat = "HH:mm:ss.SSS";
    const time = moment(timeString, momentFormat);
    this.setState({ seconds, time });
  }
  onPlay() {
    if(this.state.seconds === null) {
      this.setStateOnSeconds(0);
    }
    console.log('on play');
  }
  onPaused() {
    console.log('on paused');
  }
  onListen(seconds) {
    if(seconds >= 86) {
      location.reload();
    }
    this.setStateOnSeconds(seconds);
  }
  onCanPlay(e) {
    this.setState({
      isPaused: false
    });
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
  setPreviousView(view) {
    const _that = this;
    setTimeout(function(){
      _that.setState({
        previousView: view,
        setView: view === 'PodcastIndex' ? _that.globalSetView : _that.localSetView
      });
    }, 10);
  }
  localSetView(view) {
    this.setState({
      view,
      setView: view === 'definitions' ? this.globalSetView : this.localSetView,
      isPaused: view === 'definitions' ? true : false
    });
  }
  render() {
    const { title, mp3 } = this.props.episode;
    const playerClassNames = cx({
      'dn': this.state.view !== 'transcript',
      'PlayerAudio': true
    });
    return (
      <div>
        <Header
          setView={this.state.setView}
          title={title}
          previousView={this.state.previousView} />
        <div className='content contentPlayerShow'>
          <div
            className={playerClassNames}>
            <PlayerAudio
              url={mp3}
              onCanPlay={this.onCanPlay}
              onListen={this.onListen}
              onPlay={this.onPlay}
              isPaused={this.state.isPaused}>
            </PlayerAudio>
          </div>
          {this.renderView(this.state)}
        </div>
      </div>
    )
  }
  renderView(state) {
    switch(state.view) {
      case 'transcript':
        this.setPreviousView('PodcastIndex');
        return <PlayerTranscript
            setPreviousView={this.setPreviousView}
            seconds={state.seconds}
            time={state.time}
            onChooseSentence={this.onChooseSentence}
            transcript={state.transcript} />
      case 'definitions':
        this.setPreviousView('transcript');
        return <PlayerDefinitions
            setPreviousView={this.setPreviousView}
            onChooseDefinition={this.onChooseDefinition}
            sentence={state.sentence} />
      case 'definition':
        this.setPreviousView('definitions');
        return <PlayerDefinitionDetail
            setPreviousView={this.setPreviousView}
            definition={state.definition} />
      default:
        throw new Error('Unknown view name in PlayerShow: ' + state.view);
    }
  }

}
