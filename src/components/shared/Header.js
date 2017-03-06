import React from 'react';

export default class PodcastIndex extends React.Component {
  render() {
    const { setView, title, previousView } = this.props;
    return (
      <header className="bar bar-nav">
          <button 
            className="btn btn-link btn-nav pull-left"
            onClick={() => setView(previousView)}>
            <span className="icon icon-left-nav"></span>
            &nbsp;
          </button>
          <h2 className='title'>{title}</h2>
        </header>
    )
  }
}