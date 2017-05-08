import React from 'react';
import './PlayerDefinitionDetail.css';

export default class PlayerDefinitionDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    let imageUrl = `/images/${this.props.definition.image}`;
    let def = this.props.definition;
    return (
      <div className="PlayerDefinitionDetail">
        <ul className="table-view">
          <li className="table-view-cell sentence-head">
            <h3 className="">
              {def.word}
            </h3>
          </li>
          <li className="table-view-cell">
            <p>
              {def.definition}
            </p>
          </li>
          <li className="table-view-cell">
            <p>
              <img alt={def.word} src={imageUrl} />
            </p>
          </li>
        </ul>
      </div>
    )
  }

}
