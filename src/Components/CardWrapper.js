import React from 'react'
import '../styles/CardWrapper.css'
import Card from './Card'

export default function CardWrapper() {
  return (
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
