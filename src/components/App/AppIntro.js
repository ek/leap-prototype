import React, { Component } from 'react';

export default class AppIntro extends Component {
  constructor(props) {
    super(props);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleInfoClick = this.handleInfoClick.bind(this);
  }
  handleStartClick() {
    this.props.setView('TopicIndex')
  }
  handleInfoClick() {
    this.props.setView('InfoAbout')
  }
  render () {
    return (
      <div className="content content-padded">
        <h1 className="centered italic logo">LEAP</h1>
        <h4 className="centered tagline">
          Learn English with any podcast
        </h4>
        <br/>
        <button
          onClick={this.handleStartClick} 
          className="btn btn-primary btn-block">
          Start Learning
        </button>
        <br/>
        <p className="centered">
          <button 
            onClick={this.handleInfoClick} 
            className="btn btn-link btn-multiline">
            How can listening to podcasts
            <br/>
            improve your English?
          </button>
        </p>
      </div>
    )
  }
}