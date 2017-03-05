import React from 'react';

export default class EpisodeOverview extends React.Component {
  render() {
    const { setPage, title, description } = this.props;

    return (
      <div className="content">
        {title}
        <button onClick={() => setPage('player')}>Play</button>
      </div>
    )
  }
}