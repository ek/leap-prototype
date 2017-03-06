import React from 'react';
import Header from '../shared/Header';

export default class TopicIndex extends React.Component {
  render() {
    const {setView} = this.props;
    return (
      <div className='topic-index'>
        <Header 
          setView={setView}
          previousView='AppIntro'
          title='Topics'></Header>
        <div className="content">
          <ul className='table-view'>
            {this.renderTopics()}
          </ul>
        </div>
      </div>
    )
  }
  renderTopics() {
    const { setView } = this.props; 
    return this.props.topics.map((topic, index) => {
      return (
        <li
          className='table-view-cell'
          onClick={() => setView('PodcastIndex', topic)}
          key={index}>
          <a className='navigate-right'>
            {topic}
          </a>
        </li>
      );
    });
  }
}
