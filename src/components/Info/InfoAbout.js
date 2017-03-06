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
          title="How?"></Header>
        <div className='content content-padded'>
          <h4 className='italic'>
            Can listening to podcasts
            <br/>
            help you master the
            <br/>
            English language?
          </h4>
          <p>
            To move from novice to expert you need to listen to a lot of spoken English.  This means that practically speaking you need to modify your media habits to include English content as much as possible. 
          </p>
          <p>
            One excellent source are podcasts. 
          </p>
          <p>
            LEAP is a tool to help you access and move through English language podcast content, leveraging it for your own language learning practice.
          </p>
        </div>
      </div>
    )
  }
}