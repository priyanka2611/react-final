import React from 'react';
import './Player.css'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import { connect } from 'react-redux';
import { togglePlayerStatus } from '../../redux/actions/Player';

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
        playing: state.player
    }
}

const mapDispatchToProps = dispatch => {
    return {
        togglePlayerStatus: () => { dispatch(togglePlayerStatus()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);