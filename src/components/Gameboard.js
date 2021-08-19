import React, { useState, useEffect } from 'react';
import Gamecard from './Gamecard';



const Gameboard = () => {

    const [gameCards, setGameCards] = useState([{id:1, letter:'A'}, {id:2, letter: 'B'}, {id:3, letter: 'C'}, {id:4, letter: 'D'}, {id:5, letter: 'E'}]);
    const [pickedCardIds, setPickedCardIds] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    // useEffect(() => {
    //     shuffleCards();
    // });

    const handleCardSelect = (id) => {
        console.log('you clicked card ' + id);
        checkCard(id);
        shuffleCards();
    }

    
    const checkCard = (id) => {
        if (pickedCardIds.includes(id)) {
            console.log("Already picked! Reset!");
            setPickedCardIds([]);
            setScore(0);
        } else {
            console.log("Correct!");
            setPickedCardIds([...pickedCardIds, id]);
            console.log(pickedCardIds);
            increaseScore();
        }
    }

    const increaseScore = () => {
        let newScore = score + 1;
        setScore(newScore)
        if (newScore > highScore) {
            setHighScore(newScore);
        }
    }


    // Shuffle array function (https://bost.ocks.org/mike/shuffle/)
    const shuffle = (array) => {
        let m = array.length, t, i;
    
      // While there remain elements to shuffle…
        while (m) {
    
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
    
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
    
        return array;
      } 

    const shuffleCards = () => {
        let shuffledCards = shuffle([...gameCards]);
        setGameCards(shuffledCards);
        console.log(gameCards);
    }    

    return (
        <div>
            <h1>Memory Game</h1>
            <p>Don't select the same card twice!</p>
            <h2>Score: {score}</h2>
            <h2>High score: {highScore}</h2>
            <div className="gameCardGridDiv">
                {gameCards.map((gameCard) => {
                    return (
                        <Gamecard
                            letter={gameCard.letter}
                            key={gameCard.id}
                            id={gameCard.id}
                            clicked={() => handleCardSelect(gameCard.id)}
                        />
                    );
                })}
            </div>

        </div>
    );


}


export default Gameboard;