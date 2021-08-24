import React, { useState, useEffect } from 'react';
import Gamecard from './Gamecard';


const getCards = () => {
    // Get randomized array of boss ids. Empty deps array means this will only run once when Gameboard mounts
    let bossIdArray = [];
    let bossCards = [];
    let numCards = 9; // Adjust for number of cards
        while (bossIdArray.length < numCards) {
            let id = Math.floor(Math.random() * 32) + 9

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
    const [hardMode, setHardMode] = useState(false);
    const [resultText, setResultText] = useState('');


    const handleCardSelect = (id) => {
        console.log('you clicked card ' + id);
        setResultText('');
        checkCard(id);

        if (!hardMode) {
            shuffleCards();
        } else {
            dealNewCards();
        }


    }

    const checkCard = (id) => {
        if (pickedCardIds.includes(id)) {
            console.log("Already picked! Reset!");
            setResultText('Try again!')
            setPickedCardIds([]);
            setScore(0);
        } else {
            console.log("Correct!");
            setPickedCardIds([...pickedCardIds, id]);
            //console.log(pickedCardIds);
            increaseScore();
        }
    }

    const increaseScore = () => {
        let newScore = score + 1;
        setScore(newScore)
        if (newScore > highScore) {
            setHighScore(newScore);
        }
        if (!hardMode && newScore === 9) {
            setResultText('You win! Select any boss to reset');
        }
        if (hardMode && newScore === 32) {
            setResultText('You win! Select any boss to reset');
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


    const dealNewCards = () => {
            let newCards = getCards();    

            while (checkCardsForMatch(newCards, pickedCardIds) === true && pickedCardIds.length < 32) {
                console.log('no unique bosses');
                newCards = getCards();
            }
            console.log(newCards);
            setGameCards(newCards);
        
    }

    const checkCardsForMatch = (newCards, pickedCardIds) => {
        let newCardsIds = newCards.map(newCard => newCard.id);
        console.log(newCardsIds);
        for (let i = 0; i < newCardsIds.length; i++) {
            if (pickedCardIds.indexOf(newCardsIds[i]) === -1) {
                return false;
            }
        }
        return true;
    }

    const toggleDifficulty = () => {
        setHardMode(!hardMode);
        setPickedCardIds([]);
        setScore(0);
        dealNewCards();
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
                <h3>Change difficulty:</h3>
                <div><button className="gameButton" onClick={toggleDifficulty}>{hardMode ? '- HARD -' : '- NORMAL -'}</button></div>
                <div className="scoreDiv">
                    <span>Score: {score}</span>
                    <span>High score: {highScore}</span>
                </div>
            </div>

            <div className="bodyDiv">
                <div className="bodyLinesDiv">
                        <div className="bodyLinesGroup">
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bigBodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
                        </div>
                        <div className="bodyLinesGroup">
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bigBodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
                        </div>
                        <div className="bodyLinesGroup">
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bigBodyLines"></div>
                            <div className="bodyLines"></div>
                            <div className="bodyLines"></div>
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

            <div className="footerDiv">
                <div className="titleDiv">
                    <div className="titleLineGroup">
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                    </div>
                    <div className="footerText">{resultText}</div>
                    <div className="titleLineGroup">
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                        <div className="titleLines"></div>
                    </div>
                </div>
            </div>
        </div>
    );


}


export default Gameboard;