import React, { useState, useEffect } from 'react';

const Gamecard = ({id, clicked, mouseEntered, mouseLeft}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [boss, setBoss] = useState({});


    useEffect(() => {
        fetch(`https://megaman-robot-masters.herokuapp.com/byId/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBoss(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, );

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            
                    <div className="gameCardDiv" onClick={clicked} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}>
                        <div className="bossFrame">
                            <span className="bossCorner secondCorner"></span>
                            <span className="bossCorner firstCorner"></span>
                            <span className="bossCorner thirdCorner"></span>
                            <span className="bossCorner fourthCorner"></span>
                            <div className="bossImgDiv">
                                <img className="bossImg" src={boss.avatar} alt={boss.name}/>
                            </div>
                            
                        </div>
                        <div className="bossName">{boss.name}</div>
                    </div>
            
        );
    }




    // return (
    //     <div>
            
    //         <div className="gameCardDiv" onClick={clicked}>
    //             {letter}
    //         </div>

    //     </div>
    // )

}


export default Gamecard;