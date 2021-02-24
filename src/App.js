
import './App.css';
import React, {useState, useEffect} from 'react';
import charactersList from './characters'
import Scoreboard from './Components/Scoreboard'
import CardWrapper from './Components/CardWrapper'
import GameOver from './Components/GameOver'
function App() {
  const [characters, setCharacters] = useState(charactersList)
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [gameStatus, setGameStatus] = useState({isOver: false, isBeaten: false,})

  useEffect(() => {
    if(currentScore === characters.length){
      setGameStatus({isOver: true, isBeaten: true,})
    }
    showRandomCards();
  
  }, [currentScore])

  useEffect(() => {
    if(currentScore > highScore){
      setHighScore(currentScore)
    }
    
  }, [gameStatus])

  const playAgain = () => {
    setGameStatus({isOver: false, isBeaten: false,})
    setCurrentScore(0)

    const newArray = characters.map(character => {
      return character = {
        ...character,
        clicked: false,
        showing: false,
      }
    })
    setCharacters(newArray)
    
  }

  const handleClick = (id, clicked) => { 
    if(clicked){
      setGameStatus({isOver: true, isBeaten: false,})

    }
    else {
      const index = characters.findIndex(item => item.id === id)
      const newArray = [...characters]
      newArray[index].clicked = true;
      setCharacters(newArray);
      setCurrentScore(prevScore => prevScore + 1)
    }
  }

  // returns list of ids from list of characters
  const getUniqueIDs = (newArray, numClicked, numNotClicked) => {
    // get ID's for each category (clicked and not clicked)
    const randomIDs = [];
    const charactersNotClicked = newArray.filter(character => !character.clicked);

    while(numNotClicked > 0){
      // get random card from 0 to array length. set it to true if it isn't already
      let index = Math.floor(Math.random() * Math.floor(charactersNotClicked.length));
      let id = charactersNotClicked[index].id;
      if(randomIDs.indexOf(id) === -1){
        randomIDs.push(charactersNotClicked[index].id)
        numNotClicked--;
      }
    }
    const charactersClicked = newArray.filter(character => character.clicked);
    while (numClicked > 0){
      let index = Math.floor(Math.random() * Math.floor(charactersClicked.length));
      let id = charactersClicked[index].id;
      if(randomIDs.indexOf(id) === -1){
        randomIDs.push(charactersClicked[index].id)
        numClicked--;
      }
    }
    // find each card specified by randomID and set it to showing
    randomIDs.forEach(id => {
      let index = newArray.findIndex(character => character.id === id);
      newArray[index].showing = true;
    })

    return randomIDs;
  }
  // returns an array of the number of each card type(clicked/notClicked) we wish to show.
  const getNumberOfCardTypes = () => {
    // desired number of clicked and not clicked cards we would like to show
    let numNotClicked;
    let numClicked;
    // assign numbers based on state of game (account for beginning and end)
    // game is at the beginning (make sure to show cards that have been clicked as they appear)
    if(currentScore < 4){
      numNotClicked = 5 - currentScore;
      numClicked = currentScore;
    }
    // When less than 5 cards away from the end, show as many cards that haven't been clicked as possible
    else if (currentScore > characters.length - 5){
      //31. need 3 not clicked and 2 clicked
      numNotClicked = characters.length - currentScore;
      numClicked = 5 - numNotClicked;
    }
    else {
      // random number from 1 to 4
      numNotClicked = 1 + Math.floor(Math.random() * Math.floor(4))
      numClicked = 5 - numNotClicked;
    }

    return [numClicked, numNotClicked]
  }


  const showRandomCards = () => {
    // get amount of clicked and not clicked cards we wish to show
    const [clicked, notClicked] = getNumberOfCardTypes();
    // create deep copy of state array
    let newArray = [...characters]
    // set all characters .showing values to false
    newArray = newArray.map(character => character.showing? character = {...character, showing: !character.showing} : character)
    // get ID's for each character to show (clicked and not clicked). ensures each card is unique to the list.
    const randomIDs = getUniqueIDs(newArray, clicked, notClicked)
    // find each character specified by randomID and set it to showing
    randomIDs.forEach(id => {
      let index = newArray.findIndex(character => character.id === id);
      newArray[index].showing = true;
    })
    // update the state array
    setCharacters(newArray)
  }


  

  return (
    <div className="App">
      <Scoreboard 
        currentScore={currentScore}
        highScore={highScore}
      />
      {gameStatus.isOver? 
        <GameOver 
          isBeaten={gameStatus.isBeaten}
          playAgain={playAgain}
        />
      :
        <CardWrapper
          characters={characters}
          handleClick={handleClick}
        /> 
      }

    </div>
  );
}

export default App;
