import React, { useState, useEffect } from 'react';
import Gamecard from './Gamecard';


const getCards = () => {
    // Get randomized array of boss ids. Empty deps array means this will only run once when Gameboard mounts
    let bossIdArray = [];
    let bossCards = [];
    let numCards = 9; // Adjust for number of cards
        while (bossIdArray.length < numCards) {
            let id = Math.floor(Math.random() * 31) + 10

            // if (id < 10) {
            //     id = '00' + id;
            // } else {
            //     id = '0' + id;
            // }
            
            if (!bossIdArray.includes(id)) {
                bossIdArray.push(id);
                bossCards.push({id:id});
            } 
        }  
    // console.log(bossIdArray);
    // console.log(bossCards);
    return bossCards;
    
}


const Gameboard = () => {

    const [gameCards, setGameCards] = useState(getCards());
    const [pickedCardIds, setPickedCardIds] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);


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
            <div className="headerDiv">
                <div className="titleDiv">
                    <div className="titleLineGroup">
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                    </div>
                    <div className="titleText">MEMORY GAME</div>
                    <div className="titleLineGroup">
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                    </div>
                </div>
                <h3>Don't select the same boss twice!</h3>
                <div className="scoreDiv">
                    <span>Score: {score}</span>
                    <span>High score: {highScore}</span>
                </div>
            </div>
            <div className="gameCardGridDiv">
                {gameCards.map((gameCard) => {
                    return (
                        <Gamecard
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