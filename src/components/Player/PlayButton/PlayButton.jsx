import React from 'react'
import './PlayButton.css';

const PlayButton = ({onPlayerClick}) => {
    return (
        <svg className="playButton" viewBox="0 0 60 60" onClick={onPlayerClick}>
          <polygon points="0,0 50,30 0,60" />
        </svg>
    )
}

export default PlayButton;