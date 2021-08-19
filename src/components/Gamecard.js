import React, { useState } from 'react';

const Gamecard = ({id, letter, clicked}) => {


    return (
        <div>
            
            <div className="gameCardDiv" onClick={clicked}>
                {letter}
            </div>

        </div>
    )

}


export default Gamecard;