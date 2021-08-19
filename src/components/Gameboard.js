import React, { useState, useEffect } from 'react';
import Gamecard from './Gamecard';



const Gameboard = () => {

    const [gameCards, setGameCards] = useState([{id:1, letter:'A'}, {id:2, letter: 'B'}, {id:3, letter: 'C'}, {id:4, letter: 'D'}, {id:5, letter: 'E'}]);
    const [pickedCardIds, setPickedCardIds] = useState([]);

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
        } else {
            console.log("Correct!");
            setPickedCardIds([...pickedCardIds, id]);
            console.log(pickedCardIds);
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
            <h1>Game board</h1>
            
            <div>
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