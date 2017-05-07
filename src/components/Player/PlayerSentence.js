import React from 'react';
import cx from 'classnames';
import './PlayerSentence.css'

export default class PlayerSentence extends React.Component {
  constructor() {
    super();
    this.chooseSentence = this.chooseSentence.bind(this);
  }
  chooseSentence() {
    this.props.clicked(this.props.sentence);
  }
  render() {
    let classNames = cx({
      'sentence-visible': this.props.visible,
      'table-view-cell': true,
      'sentence-cell': true,
      'playing': this.props.sentence.playing
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
