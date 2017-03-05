import React from 'react';
import EpisodeOverview from '../../components/EpisodeOverview';
import EpisodePlayer from '../EpisodePlayer';

export default class EpisodeShowView extends React.Component {
  constructor() {
    super();

    this.setPage = this.setPage.bind(this);

    this.state = {
      selectedIndex: null,
      page: 'overview'
    }
  }
  setPage(page) {
    this.setState({page});
  }
  renderPage() {
    const { page } = this.state;
    const { podcast } = this.props;

    switch (page) {
      case 'overview':
        return <EpisodeOverview setPage={this.setPage} {...podcast} />
      case 'player':
        return <EpisodePlayer setPage={this.setPage} {...podcast} />
      default:
        break;
    }
  }
  render() {
    const { setPage } = this.props;

    return (
      <div>
        <header className="bar title bar-nav">
          <button 
            className="btn pull-left"
            onClick={() => setPage('list')}>
            Back
          </button>
          <button class="btn pull-right">
            Right
          </button>
          <h1 class="title">Title</h1>
        </header>
        
        {this.renderPage()}
      </div>
    );
  }
};
