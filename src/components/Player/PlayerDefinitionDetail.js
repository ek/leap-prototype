import React from 'react';
import './PlayerDefinitionDetail.css';

export default class PlayerDefinitionDetail extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="PlayerDefinitionDetail">
        <ul className="table-view">
          <li className="table-view-cell sentence-head">
            <h3 className="">
              {this.props.definition.definition}
            </h3>
            <p>
              {this.props.definition.definition}
            </p>
          </li>
        </ul>
      </div>
    )
  }

}
