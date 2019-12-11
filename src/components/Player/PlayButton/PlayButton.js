import React from 'react'
import classes from './PlayButton.module.css'

const PlayButton = ({onPlayerClick}) => {
    return (
        <svg className={classes.PlayButton} viewBox="0 0 60 60" onClick={onPlayerClick}>
          <polygon points="0,0 50,30 0,60" />
        </svg>
    )
}

export default PlayButton;