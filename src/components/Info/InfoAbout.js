import React from 'react';
import Header from '../shared/Header';

export default class InfoAbout extends React.Component {
  render() {
    const { setView } = this.props;
    return (
      <div className="info-about">
        <Header 
          setView={setView} 
          previousView='AppIntro'
          title="About LEAP"></Header>
        <div className='content content-padded content-info'>
          <h4 className='italic'>
            Can listening to podcasts
            help you master the
            English language?
          </h4>
          <p>
            To move from novice to expert you need to listen to a lot of spoken English.  This means that practically speaking you need to modify your media habits to include English content as much as possible. 
          </p>
          <p>
            <i className="italic">One excellent source are podcasts.</i>
          </p>
          <p>
            <strong>LEAP</strong> is a tool to help you access and move through English language podcast content, leveraging it for your own language learning practice.
          </p>
          <button
            onClick={()=>setView('TopicIndex')} 
            className="btn btn-primary">
            Start Learning
          </button>
        </div>
      </div>
    )
  }
}