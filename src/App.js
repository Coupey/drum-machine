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
      beatDivisions: 16,
      currentBeat: 0
    };
  }

  updateBeat = () => {
    console.log('beat!');
    if (this.state.currentBeat === this.state.beatDivisions){
      this.setState({currentBeat: 0});
    }
    this.setState({ currentBeat: this.state.currentBeat + 1});
  };

  startMachine = () => {
    this.setState({currentBeat: 1});
    setInterval(this.updateBeat, bpmDelay);
  };



  render() {
    let beatsHolder = [];
    for(let i=1; i<=this.state.beatDivisions; i++) {
      const myKey = 'beat' + i;
      const currentBeat = (this.state.currentBeat === i);
      beatsHolder.push(
        (<Beat key={myKey} beatId={myKey} currentBeat={currentBeat}/>)
      );
    }

    return (
      <div className="App">
        <div className="App-body">
          <div className="beat-grid">
            {beatsHolder}
          </div>
        </div>
        <div onClick={this.startMachine}>Start!</div>
      </div>
    );
  }
}

export default App;
