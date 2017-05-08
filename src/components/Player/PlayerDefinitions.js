import React from 'react';
import PlayerDefinition from './PlayerDefinition';
import './PlayerDefinitions.css';

export default class PlayerDefinitions extends React.Component {
  constructor(props) {
    super(props);
    this.returnStateFromProps = this.returnStateFromProps.bind(this);
    this.clickedDefinition = this.clickedDefinition.bind(this);
    this.state = this.returnStateFromProps(props);
  }
  clickedDefinition(e) {
    this.props.onChooseDefinition(e);
  }
  returnStateFromProps(props) {
    let sections = this.props.sentence.sections;
    const definitions = sections.map(s=>{
      return s.items.length ? s.items.map(i=>{return i;}) : [];
    }).reduce(function(prev, curr) {
      return curr.length ? prev.concat(curr) : prev; // reduce multidimensional array
    });
    return { definitions }
  }
  render() {
    return (
      <div className="PlayerDefinitions">
        <ul className="table-view">
          <li className="table-view-cell sentence-head">
            <h6 className="">{this.props.sentence.text}</h6>
          </li>
          {this.renderDefinitions(this.state.definitions)}
        </ul>
      </div>
    )
  }
  componentWillReceiveProps(newProps) {
    this.setState(this.returnStateFromProps(newProps))
  }
  renderDefinitions(definitions) {
    return definitions.map((d, index) => {
      return (
        <PlayerDefinition
          order={index}
          clicked={this.clickedDefinition}
          definition={d}
          key={index}>
        </PlayerDefinition>
      )
    });
  }
}
