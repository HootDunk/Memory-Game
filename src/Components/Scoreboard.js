import React from 'react'
import smashBanner from '../smash-characters/smash-banner.svg'
import '../styles/Scoreboard.css'

export default function Scoreboard(props) {
  // props of current score and highschore needed
  return (
    <div className="score-board-container">
      <div className="title">
        <img src={smashBanner} alt="Smash Logo" />

        <p>A memory game with Super Smash characters!</p>
        <div className="scores">
          <h1>Current Score: {props.currentScore}</h1>
          <h1>High Score: {props.highScore}</h1>
        </div>
      </div>
    </div>
  )
}
