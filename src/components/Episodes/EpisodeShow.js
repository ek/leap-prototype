import React from 'react';
import Header from '../shared/Header';
import classNames from 'classnames';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';


import './EpisodeShow.css';

export default class EpisodeShow extends React.Component {
  constructor() {
    super();
    this.chooseSentence = this.chooseSentence.bind(this);
  }
  onPlay() {
    console.log('on play');
  }
  
  onListen(seconds) {
    // console.log(moment(seconds));
  }

  chooseSentence(a) {
    console.log(a);
    this.state.audioEl.pause();
  }

  componentDidMount() {
    const audioEl = this.rap.audioEl;
    this.setState({audioEl});
  }

  render() {
    const { setView } = this.props.setView;
    const { title, transcript, mp3 } = this.props.episode;
    const sentences = transcript.map(s => {
      s.playing = false;
      return s;
    });
    const preload = true;
    const listenInterval = 100;
    return (
      <div>
        <ReactAudioPlayer
          src={mp3}
          listenInterval={listenInterval}
          onPlay={this.onPlay}
          onListen={this.onListen}
          ref={c => this.rap = c }
          autoPlay
        />
        <Header
          setView={setView}
          title={title}
          previousView='EpisodeIndex' />
        <div className='content'>
          <ul className="table-view">
            {this.renderSentences(sentences)}
          </ul>
        </div>
      </div>
    )
  }

  renderSentences(sentences) {
    const chooseSentence = this.chooseSentence;
    return sentences.map((sentence, index) => {
      return (
        <EpisodeSentence 
          clicked={chooseSentence}
          sentence={sentence}
          key={index}>
        </EpisodeSentence>
      )
    });
  }

}

class EpisodeSentence extends React.Component {
  render() {
    let liClassNames = classNames({
      'table-view-cell': true,
      'sentence-cell': true,
      'playing': this.props.sentence.playing
    });
    return (
      <li className={liClassNames}>
        <a onClick={this.props.clicked}>
          {this.props.sentence.text}
        </a>
      </li>
    )
  }
}