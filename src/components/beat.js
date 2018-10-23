import React, { Component } from 'react';

class Beat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onClick = () => {
    console.log('hello' + this.props.beatId);
    this.setState({
      selected: !this.state.selected
    });
    console.log(this.state.selected);
  };

  render() {
    return (
      <div
        className = {'beat inline ' + (this.state.selected ? 'selected-beat': '')}
        onClick={this.onClick}>
      </div>
    )
  }
}

export default Beat;
