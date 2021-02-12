import React from 'react'
import '../styles/CardWrapper.css'
import Card from './Card'
import characters from '../characters'

export default function CardWrapper() {
  return (
    <div className="card-container">
      {characters.map(character => <Card key={character.id} character={character}/>)}
    </div>
  )
}
