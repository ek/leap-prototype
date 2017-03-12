import React from 'react';
import './PlayerDefinitions.css';

export default class PlayerDefinitions extends React.Component {
  constructor(props) {
    super(props);
    this.returnStateFromProps = this.returnStateFromProps.bind(this);
    this.state = this.returnStateFromProps(props);
  }
  returnStateFromProps(props) {
    const sentence = this.props.sentence;
    const definitions = sentence.sections.map(s=>{
      return s.items.map(i=>{
        return i;
      });
    });
    console.log(definitions)
    return { sentence, definitions }
  }
  render() {
    return (
      <div className="PlayerDefinitions">
        <ul className="table-view">
          {this.renderDefinitions(this.state.definitions)}
        </ul>
      </div>
    )
  }
  componentWillReceiveProps(props) {
    this.setState(this.returnStateFromProps(props))
  }
  renderDefinitions(definitions) {
    return definitions.map((d, index) => {
      return (
        <li key={index}>
          
        </li>
      )
    });
  }
  chooseSentence(sentence) {
    this.props.chooseSentence(sentence);
  }  
}