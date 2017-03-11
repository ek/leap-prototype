import React from 'react';
import PlayerSentence from './PlayerSentence';
import moment from 'moment';

export default class PlayerTranscript extends React.Component {
  constructor(props) {
    super(props);
    this.chooseSentence = this.chooseSentence.bind(this);
    const sentences = props.transcript.map(s => {
      s.playing = false;
      s.moment = moment(s.start, "HH:mm:ss.SSS");
      return s;
    });
    this.state = {
      sentences
    }
  }
  render() {
    return (
      <ul className="table-view">
        {this.renderSentences(this.state.sentences)}
      </ul>
    )
  }
  componentWillReceiveProps(props) {
    const time = props.time || moment("00:00:00.000", "HH:mm:ss.SSS");
    const sentences = this.state.sentences.map(s => {
      s.visible = s.moment.isBefore(time);
      return s;
    });
    this.setState({sentences});
  }
  chooseSentence(sentence) {
    this.props.onPaused(true);
  }
  renderSentences(sentences) {
    const chooseSentence = this.chooseSentence;
    return sentences.map((sentence, index) => {
      return (
        <PlayerSentence
          clicked={chooseSentence}
          sentence={sentence}
          key={index}
          visible={sentence.visible}>
        </PlayerSentence>
      )
    });
  }
  componentDidMount() {
    
  }
  
}