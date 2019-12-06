import React from 'react';
import './Player.css'
import PlayButton from './PlayButton/PlayButton';
import PauseButton from './PauseButton/PauseButton';
import { connect } from 'react-redux';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
    }

    handlePlayerClick = () => {
        if (!this.state.playing) {
            this.setState({playing: true})
        } else {
            this.setState({playing: false})
        }
        this.props.togglePlayerStatus();
    }

    render() {
        return(
            <div className="playerSection">
                {
                    this.state.playing ? 
                    <PauseButton onPlayerClick={this.handlePlayerClick} /> : 
                    <PlayButton onPlayerClick={this.handlePlayerClick} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        playing: state.playerReducer.player
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePlayerStatus: () => { dispatch({type: 'TOGGLE_PLATER_STATUS'}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);