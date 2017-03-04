import React, { Component } from 'react';
import { Title, TableView, TableViewCell } from 'react-ratchet';
import PodcastTableViewCell from './PodcastTableViewCell.js'
import './App.css';


class PodcastTableView extends React.Component {
  render() {
    return (
        <TableView>
          <TableViewCell divider>Episodes</TableViewCell>
          <PodcastTableViewCell />
          <PodcastTableViewCell />
          <PodcastTableViewCell />
          <PodcastTableViewCell />
          <PodcastTableViewCell />
        </TableView>
    );
  }
}





class App extends Component {
  render() {
    return (
      <div className="App">
        <Title className="bar bar-tall">The Daily</Title>
        <div className="content">
          <PodcastTableView></PodcastTableView>
        </div>
      </div>
    );
  }
}

export default App;
