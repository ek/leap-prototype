import React from 'react';
import cx from 'classnames';


export default class PlayerSentence extends React.Component {
  
  render() {
    
    let classNames = cx({
      'table-view-cell': true,
      'sentence-cell': true,
      'playing': this.props.sentence.playing
    });

    return (
      <li className={classNames}>
        <a onClick={this.props.clicked}>
          {this.props.sentence.text}
        </a>
      </li>
    )
    
  }

}