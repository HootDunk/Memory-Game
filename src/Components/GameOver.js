import React from 'react'
import bomb from '../smash-characters/bomb.png'
import crown from '../smash-characters/mario-win.png'
import '../styles/GameOver.css'
export default function GameOver(props) {
  return (
    <div className="game-over-wrapper">
      {props.isBeaten?
        <div className="game-over">
          <div>
            <h1>You Win!</h1>
            <p>that's all the characters I imported  :)</p>
          </div>
          <img src={crown} className="mario-win"/>
          <div>
            <button onClick={props.playAgain} className="play-again">Play Again!</button>
          </div>
        </div>
      :
      <div className="game-over">
        <div>
          <h1>Game Over</h1>
        </div>
        <img src={bomb} className="bomb-guy"/>
        <div>
          <button onClick={props.playAgain} className="play-again">Play Again!</button>
        </div>
      </div>
      }
    </div>
  )
}
