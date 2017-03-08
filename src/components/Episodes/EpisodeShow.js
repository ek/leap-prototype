import React from 'react';
import Header from '../shared/Header';

import './EpisodeShow.css';

export default class EpisodeShow extends React.Component {
  
  render() {
    const { setView } = this.props.setView;
    const { title, transcript } = this.props.episode;
    return (
      <div>
        <Header
          setView={setView}
          title={title}
          previousView='EpisodeIndex' />
        <div className='content'>
          <ul className="table-view">
            {this.renderSentences(transcript)}
          </ul>
        </div>
      </div>
    )
  }

  renderSentences(transcript) {
    return transcript.map((sentence, index) => {
      return (
        <li key={index} className="table-view-cell sentence-cell">
          <a className="">
            {sentence.text}
          </a>
        </li>
      )
    });
  }

}