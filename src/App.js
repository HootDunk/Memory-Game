
import './App.css';
import React, {useState} from 'react';
import charactersList from './characters'
import Scoreboard from './Components/Scoreboard'
import CardWrapper from './Components/CardWrapper'

function App() {
  const [characters, setCharacters] = useState(charactersList)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  // create a score board component
  // create a card component and then another component to hold the cards
  // card holding coponent will render x amount of cards based on props

  return (
    <div className="App">
      <Scoreboard />
      <CardWrapper />
    </div>
  );
}

export default App;
