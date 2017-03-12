import React from 'react';
import './PlayerDefinitions.css';

export default class PlayerDefinitions extends React.Component {
  constructor(props) {
    super(props);
    this.returnStateFromProps = this.returnStateFromProps.bind(this);
    this.state = this.returnStateFromProps(props);
  }
  returnStateFromProps(props) {
    const definitions = this.props.sentence.sections.map(s=>{
      return s.items.map(i=>{
        return i;
      })
    }).reduce(function(prev, curr) {
      return prev.concat(curr); // reduce multidimensional array
    });
    return { definitions }
  }
  render() {
    return (
      <div className="PlayerDefinitions PlayerTranscript">
        <ul className="table-view">
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
        <li className="table-view-cell" key={index}>
          {d.word}: {d.definition}
        </li>
      )
    });
  }
}