import React from 'react';
import cx from 'classnames';
import './PlayerDefinition.css'

export default class PlayerDefinition extends React.Component {
  constructor() {
    super();
    this.chooseDefinition = this.chooseDefinition.bind(this);
  }
  chooseDefinition() {
    this.props.clicked(this.props.definition);
  }
  render() {
    let classNames = cx({
      'table-view-cell': true,
      'definition-cell': true,
      'navigate-right': true
    });
    return (
      <li
        className={classNames}>
        <a onClick={this.chooseDefinition}>
          <h4>{this.props.definition.word}</h4>
        </a>
      </li>
    )
  }
}
