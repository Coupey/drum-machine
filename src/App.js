import React, { Component } from 'react';
import Beat from './components/beat';
import './App.scss';
import kickdrum from './sounds/kick-electro01.mp3';
import snaredrum from './sounds/snare-808.mp3';
import hihat from './sounds/hihat-808.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    const bpm = 110;
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
    let beatsHolder2 = [];
    let beatsHolder3 = [];
    for(let i=1; i<=this.state.beatDivisions; i++) {
      const myKey = 'beat' + i;
      const currentBeat = (this.state.currentBeat === i);
      beatsHolder.push(
        (<Beat key={myKey} beatId={i} currentBeat={currentBeat} soundfile={kickdrum} />)
      );
        beatsHolder2.push(
            (<Beat key={myKey} beatId={i} currentBeat={currentBeat} soundfile={snaredrum} />)
        );
        beatsHolder3.push(
            (<Beat key={myKey} beatId={i} currentBeat={currentBeat} soundfile={hihat} />)
        );
    }

    return (
      <div className="App">
        <div className="App-body">
          <div className="beat-grid">
            {beatsHolder3}
          </div>
          <div className="beat-grid">
            {beatsHolder2}
          </div>
          <div className="beat-grid">
            {beatsHolder}
          </div>
          <div className="controls">
          <button onClick={this.startMachine}>Start</button>
          <button onClick={this.stopMachine}>Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
