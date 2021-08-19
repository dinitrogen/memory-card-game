import React, { useState } from 'react';

const Header = () => {

    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);


    return (
        <div>
            <h1>Memory game</h1>
            <h2>Score: {score}</h2>
            <h2>High Score: {highScore}</h2>

        </div>
    )


}


export default Header;