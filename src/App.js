
import './App.css';
import React, {useState, useEffect} from 'react';
import charactersList from './characters'
import Scoreboard from './Components/Scoreboard'
import CardWrapper from './Components/CardWrapper'

function App() {
  const [characters, setCharacters] = useState(charactersList)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  // need game over state

  useEffect(() => {
    showRandomCards(characters);
  }, [])
  // create useEffect for gameOver Change
  // or do it for currentScore and only apply it if the currentScore gets set to 0
  // useEffect(() => {

  // }, [])


  const handleClick = (id, clicked) => { 
    if(clicked){
      console.log("game over")
      if(currentScore > highScore){
        setHighScore(currentScore)
        setCurrentScore(0)
      }
    }
    else {
      const index = characters.findIndex(item => item.id === id)
      const newArray = [...characters]
      newArray[index].clicked = !newArray[index].clicked;

      setCurrentScore(prevScore => prevScore + 1)
      setCharacters(newArray);
      showRandomCards();
    }
  }


  // break this up more
  // fix this to call it at the start (in the hook) and on click
  const showRandomCards = () => {
    let numNotClicked;
    let numClicked;
    if(currentScore < 4){
      numNotClicked = 5 - currentScore;
      numClicked = currentScore
    }
    else {
      numNotClicked = Math.floor(1 + Math.random() * Math.floor(5))
      numClicked = 5 - numNotClicked;
    }

    let newArray = [...characters]
    newArray = newArray.map(character => character.showing? character = {...character, showing: !character.showing} : character)
    const randomNums = [];
    for(let i = 0; i < numClicked; i++){
      let index = Math.floor(Math.random() * Math.floor(newArray.length))
      if(randomNums.indexOf(index) === -1){
        randomNums.push(index)
        newArray[index].showing = true;
      } else{
        do {
          index = Math.floor(Math.random() * Math.floor(newArray.length))
          newArray[index].showing = true;
        }while(randomNums.indexOf(index) !== -1)
      }
    }
    for(let i = 0; i < numNotClicked; i++){
      let index = Math.floor(Math.random() * Math.floor(newArray.length))
      if(randomNums.indexOf(index) === -1){
        randomNums.push(index)
        newArray[index].showing = true;
      } else{
        do {
          index = Math.floor(Math.random() * Math.floor(newArray.length))
          newArray[index].showing = true;
        }while(randomNums.indexOf(index) !== -1)
      }
    }
    setCharacters(newArray)
  }

  

  return (
    <div className="App">
      <Scoreboard 
        currentScore={currentScore}
        highScore={highScore}
      />
      <CardWrapper
        characters={characters}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
