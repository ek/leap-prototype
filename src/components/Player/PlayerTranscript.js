import React from 'react';
import PlayerSentence from './PlayerSentence';
import moment from 'moment';
import './PlayerTranscript.css';

/*
http://jsfiddle.net/nT75k/2/
var $cont = $('.container');
$cont[0].scrollTop = $cont[0].scrollHeight;

$('.inp').keyup(function(e) {
    if (e.keyCode == 13) {
        $cont.append('<p>' + $(this).val() + '</p>');
        $cont[0].scrollTop = $cont[0].scrollHeight;
        $(this).val('');
    }
})
.focus();
*/

export default class PlayerTranscript extends React.Component {
  constructor(props) {
    super(props);
    this.chooseSentence = this.chooseSentence.bind(this);
    const sentences = props.transcript.map((s,i,a) => {
      s.playing = false;
      s.startMoment = moment(s.start, "HH:mm:ss.SSS");
      if(i) {
        a[i-1].endMoment = s.startMoment;
      }
      return s;
    });
    this.state = { sentences };
  }
  render() {
    return (
      <div className="PlayerTranscript">
        <ul className="table-view">
          {this.renderSentences(this.state.sentences)}
        </ul>
      </div>
    )
  }
  componentWillReceiveProps(props) {
    const time = props.time || moment("00:00:00.000", "HH:mm:ss.SSS");
    let changedFlag = false;
    const sentences = this.state.sentences.map((s,i) => {
      const previouslyVisible = s.visible;
      s.key = i;
      s.visible = s.startMoment.isBefore(time);
      s.playing = time.isAfter(s.startMoment) && time.isBefore(s.endMoment);
      changedFlag = previouslyVisible !== s.visible ? true : changedFlag;
      return s;
    });
    if(changedFlag) {
      this.setState({sentences});
    }
  }
  chooseSentence(sentence) {
    this.props.onPaused(true);
  }
  renderSentences(sentences) {
    const chooseSentence = this.chooseSentence;
    return sentences.map((sentence, index) => {
      return (
        <div key={index}>
          <PlayerSentence
            clicked={chooseSentence}
            sentence={sentence}
            visible={sentence.visible}>
          </PlayerSentence>
        </div>
      )
    });
  }
  componentDidMount() {
    
  }
  
}