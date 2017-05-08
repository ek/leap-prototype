import React from 'react';
import cx from 'classnames';
import './PlayerSentence.css'

export default class PlayerSentence extends React.Component {
  constructor() {
    super();
    this.chooseSentence = this.chooseSentence.bind(this);
    this.state = { anim: false };
  }
  chooseSentence() {
    this.props.clicked(this.props.sentence);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.visible) {
      const _this = this;
      setTimeout(function(){
        _this.setState({ anim: true });
      }, 1);
    }
  }
  render() {
    let classNames = cx({
      'sentence-visible': this.props.visible,
      'table-view-cell': true,
      'sentence-cell': true,
      'playing': this.props.sentence.playing,
      'anim': this.state.anim
    });
    return (
      <li className={classNames}>
        <a onClick={this.chooseSentence}>
          {this.props.sentence.text}
          <button onClick={this.chooseSentence}
            className="btn btn-primary btn-outlined">
            Definitions
          </button>
        </a>
      </li>
    )
  }
}
