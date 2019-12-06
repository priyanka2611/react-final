import React from 'react'
import classes from './PauseButton.module.css'

const PauseButton = ({onPlayerClick}) => {
  return (
    <svg className={classes.pauseButton} viewBox="0 0 60 60" onClick={onPlayerClick}>
      <polygon points="0,0 15,0 15,60 0,60" />
      <polygon points="25,0 40,0 40,60 25,60" />
    </svg>
  )
}

export default PauseButton;