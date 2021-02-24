import React from 'react'
import '../styles/Card.css'
import characters from '../characters'

export default function Card(props) {
  return (
    <div className="card" onClick={() => props.handleClick(props.character.id, props.character.clicked)}>
      <img src={props.character.image} />
      <h1>{props.character.name}</h1>
    </div>
  )
}
