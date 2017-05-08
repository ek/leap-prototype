import React from 'react';
import cx from 'classnames';
import './PlayerDefinition.css'

export default class PlayerDefinition extends React.Component {
  constructor() {
    super();
    this.chooseDefinition = this.chooseDefinition.bind(this);
    this.state = { mounted: false, anim: false };
  }
  chooseDefinition() {
    this.props.clicked(this.props.definition);
  }
  componentDidMount() {
    this.setState({ mounted: true });
    const _this = this;
    setTimeout(function(){
      _this.setState({ anim: true });
    }, 100 * this.props.order);
  }
  render() {
    let classNames = cx({
      'table-view-cell': true,
      'definition-cell': true,
      'navigate-right': true,
      'dn': !this.state.mounted,
      'anim': this.state.anim
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
