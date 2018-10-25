import React, { Component } from 'react';
import Beat from './components/beat';
import './App.scss';

let bpm = 100;
let bpmDelay = Math.floor(60000 / bpm / 4);
let myTimer;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bpm,
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
    this.stopMachine();
    this.setState({currentBeat: 1});
    myTimer = setInterval(this.updateBeat, bpmDelay);
  };

  stopMachine = () => {
    this.setState({currentBeat: 0});
    clearInterval(myTimer);
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
          <div onClick={this.startMachine}>Start!</div>
          <div onClick={this.stopMachine}>Stop!</div>
        </div>
      </div>
    );
  }
}

export default App;
