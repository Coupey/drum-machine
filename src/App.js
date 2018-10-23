import React, { Component } from 'react';
import Beat from './components/beat';
import './App.scss';

let bpm = 120;
let bpmDelay = Math.floor(60000 / bpm);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 120,
      beatDivisions: 16
    };
  }

  render() {
    let beatsHolder = [];
    for(let i=0; i<this.state.beatDivisions; i++) {
      const myKey = 'beat' + (i+1);
      beatsHolder.push(
        (<Beat key={myKey} beatId={myKey}/>)
      );
    }

    return (
      <div className="App">
        <div className="App-body">
          <div className="beat-grid">
            {beatsHolder}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
