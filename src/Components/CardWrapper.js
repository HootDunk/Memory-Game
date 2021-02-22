import React from 'react'
import '../styles/CardWrapper.css'
import Card from './Card'


export default function CardWrapper(props) {



  return (
    <div className="card-container">
      {props.characters.map((character, index) => (
        (character.showing) && <Card key={character.id} character={character} handleClick={props.handleClick}/>
      ))}
    </div>
  )
}
