import React, { Component } from 'react';
import Beat from './components/beat';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    const bpm = 100;
    const bpmDelay = Math.floor(60000 / bpm / 4);
    let myTimer;

    this.state = {
      bpm,
      bpmDelay,
      beatDivisions: 16,
      currentBeat: 0
    };
  }

  updateBeat = () => {
    console.log('beat ' + this.state.currentBeat);
    if (this.state.currentBeat === this.state.beatDivisions){
      this.setState({currentBeat: 0});
    }
    this.setState({ currentBeat: this.state.currentBeat + 1});
  };

  startMachine = () => {
    this.stopMachine();
    this.setState({currentBeat: 1});
    this.myTimer = setInterval(this.updateBeat, this.state.bpmDelay);
  };

  stopMachine = () => {
    this.setState({currentBeat: 0});
    clearInterval(this.myTimer);
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
