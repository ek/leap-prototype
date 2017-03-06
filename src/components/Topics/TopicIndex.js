import React from 'react';
import Header from '../shared/Header';

export default class TopicIndex extends React.Component {
  render() {
    const {setView, topics} = this.props;
    return (
      <div className='topic-index'>
        <Header 
          setView={setView}
          previousView='AppIntro'
          title='Topics'></Header>
        <ul class='table-view'>
          {this.renderTopics()}
        </ul>
      </div>
    )
  }
  renderTopics() {
    const { setView, topics } = this.props; 
    return topics.map((topic) => {
      return (
        <li
          className='table-view-cell'
          onClick={() => setView('PodcastIndex', topic)}>
          <a className='navigate-right'>
            {topic}
          </a>
        </li>
      );
    });
  }
}
