import React from 'react';
import Header from '../shared/Header';
import PlayerTranscript from './PlayerTranscript';
import PlayerAudio from './PlayerAudio';

export default class Player extends React.Component {
  
  constructor() {
    super();
    this.chooseSentence = this.chooseSentence.bind(this);
  }

  chooseSentence(s) {
    console.log(s)
  }

  render() {

    const { setView } = this.props.setView;
    const { title, transcript, mp3 } = this.props.episode;
    // <PlayerAudio url={mp3} />
    return (
      <div>
        
        <Header
          setView={setView}
          title={title}
          previousView='EpisodeShow' />
        <div className='content'>
          <PlayerTranscript
            transcript={transcript} />
        </div>
      </div>
    )

  }

}