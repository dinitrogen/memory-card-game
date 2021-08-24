import React, { useState, useEffect } from 'react';

const Gamecard = ({id, clicked}) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [boss, setBoss] = useState({});
    const [bossName, setBossName] = useState('');
    const [hover, setHover] = useState(false);
    


    useEffect(() => {
        const abortController = new AbortController();

        fetch(`https://megaman-robot-masters.herokuapp.com/byId/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBoss(result);
                    setBossName(result.name.toUpperCase());
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        
            return () => {
            abortController.abort();
        }

    }, );

    const mouseEntered = () => {
        setHover(true);
        // console.log('hover on ' + boss.name)
    }

    const mouseLeft = () => {
        setHover(false);
        // console.log('hover off ' + boss.name)
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="loadingDiv">Loading...</div>;
    } else {
        return (
            
                    <div className="gameCardDiv" onClick={clicked} onMouseEnter={mouseEntered} onMouseLeave={mouseLeft}>
                        <div className="bossFrameOuter">
                            <div className="bossFrameMiddle">
                                <div className="bossFrameInner">
                                    <span className={hover ? 'bossCornerHover secondCorner' : 'bossCorner secondCorner'}></span>
                                    <span className={hover ? 'bossCornerHover firstCorner' : 'bossCorner firstCorner'}></span>
                                    <span className={hover ? 'bossCornerHover thirdCorner' : 'bossCorner thirdCorner'}></span>
                                    <span className={hover ? 'bossCornerHover fourthCorner' : 'bossCorner fourthCorner'}></span>
                                    <div className="bossImgDiv">
                                        <img className="bossImg" src={boss.avatar} alt={bossName}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bossName">{bossName}</div>
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