
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
    showRandomCards();
    // add gameStatus to dependency array
    // if gameStatus.gameOver === true
      // if gameStatus.gameBeaten === true
        // display winnning message and option to play again
      // else if gameStatus.gameBeaten === false
        // display losing message and option to play again
  }, [currentScore])



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
      newArray[index].clicked = true;

      setCurrentScore(prevScore => prevScore + 1)
      setCharacters(newArray);
      
    }
  }

  // returns list of ids from list of characters
  const getUniqueIDs = (newArray, numNotClicked, numClicked) => {
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


  const showRandomCards = () => {
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
      numNotClicked = characters.length - currentScore;
      numClicked = 5 - numNotClicked;
    }
    else {
      // random number from 1 to 4
      numNotClicked = 1 + Math.floor(Math.random() * Math.floor(4))
      numClicked = 5 - numNotClicked;
    }

    let newArray = [...characters]
    // set all characters .showing values to false
    newArray = newArray.map(character => character.showing? character = {...character, showing: !character.showing} : character)

    // get ID's for each category (clicked and not clicked)
    const randomIDs = getUniqueIDs(newArray, numNotClicked, numClicked)
    // find each card specified by randomID and set it to showing
    randomIDs.forEach(id => {
      let index = newArray.findIndex(character => character.id === id);
      newArray[index].showing = true;
    })

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
