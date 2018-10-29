import React, {Component} from 'react';

class Beat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    onClick = () => {
        console.log('Toggling beat ' + this.props.beatId);
        this.setState({
            selected: !this.state.selected
        });
    };

    render() {
        if (this.state.selected && this.props.currentBeat) {
            new Audio(this.props.soundfile).play();
        }
        return (
            <div
                className={'beat inline '
                + (this.state.selected ? 'selected-beat' : '') + ' '
                + (this.props.currentBeat ? 'current-beat' : '')}
                onClick={this.onClick}>
            </div>
        )
    }
}

export default Beat;
