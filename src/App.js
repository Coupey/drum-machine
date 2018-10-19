import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="beatgrid">
            <div className="beat inline current-beat"></div>
            <div className="beat inline"></div>
            <div className="beat inline selected-beat"></div>
            <div className="beat inline"></div>
            <div className="beat inline"></div>
            <div className="beat inline"></div>
            <div className="beat inline"></div>
            <div className="beat inline"></div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
