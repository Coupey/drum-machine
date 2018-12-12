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

    this.preloadAudio([kickdrum, snaredrum, hihat]);

    this.state = {
      bpm,
      bpmDelay,
      beatDivisions: 16,
      currentBeat: 0,
      config: [
        { soundfile: hihat, soundtype: 'rhythm', label: 'Hi Hat'},
        { soundfile: snaredrum, soundtype: 'rhythm', label: 'Snare' },
        { soundfile: kickdrum, soundtype: 'rhythm', label: 'Kick' }
      ]
    };
  }

  preloadAudio = (soundfiles) => {
    for (const s of soundfiles) {
      let audio = new Audio();
      audio.addEventListener('canplaythrough', console.log('audio loaded'), false);
      audio.src = s;
    }
  };

  updateBeat = () => {
    // console.log('beat ' + this.state.currentBeat);

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

  returnLabel = (instrument) => {
    return this.state.config[instrument].label;
  };

  render() {

    let masterBeatsHolder = [[],[],[]];

    for(let i=1; i<=this.state.beatDivisions; i++) {
      const myKey = 'beat' + i;
      const currentBeat = (this.state.currentBeat === i);
      const keyBeat = ((i-1) % 4 === 0);

        for (let j=0;  j<this.state.config.length; j++) {
          const soundfile = this.state.config[j].soundfile;
          masterBeatsHolder[j].push((<Beat key={myKey} beatId={i} currentBeat={currentBeat} soundfile={soundfile} keyBeat={keyBeat} />));
        }
    }

    return (
      <div className="App">
        <div className="App-body">
          <BeatRow sounds={this.state.config} beatDivisions={this.state.beatDivisions} currentBeat={this.state.currentBeat} />
            {masterBeatsHolder.map((beatsRow, index) =>
              <div className="beat-grid">
               <span className="row-label">{this.returnLabel(index)}</span>{beatsRow}
            </div>
            )}
          <div className="controls">
          <button onClick={this.startMachine}>Play</button>
          <button onClick={this.stopMachine}>Stop</button>
          </div>
        </div>
      </div>
    );
  }
}

class BeatRow extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.state = {
      'beatsHolder': {}
    }

  }

  render() {

    for (const thisSound of this.props.sounds) {
      for(let i=1; i<=this.props.beatDivisions; i++) {
        const myKey = 'beat' + i;
        const currentBeat = (this.props.currentBeat === i);
        const keyBeat = ((i-1) % 4 === 0);
      }
    }

    return (
      <div>{this.beatsHolder}</div>
    )
  }

}

export default App;
