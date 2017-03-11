import React from 'react';
import PlayerSentence from './PlayerSentence';

export default class PlayerTranscript extends React.Component {
  
  constructor() {
    super();
    this.chooseSentence = this.chooseSentence.bind(this);
  }

  chooseSentence() {
    
  }

  renderSentences(sentences) {
    const chooseSentence = this.chooseSentence;
    return sentences.map((sentence, index) => {
      return (
        <PlayerSentence
          clicked={chooseSentence}
          sentence={sentence}
          key={index}>
        </PlayerSentence>
      )
    });
  }

  render() {
    
    const sentences = this.props.transcript.map(s => {
      s.playing = false;
      return s;
    });

    return (
      <ul className="table-view">
        {this.renderSentences(sentences)}
      </ul>
    )

  }

}