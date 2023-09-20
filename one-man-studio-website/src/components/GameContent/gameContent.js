import React from "react";
import './gameContent.css';

function GameContent(){
    return (
        <>
            <div className="GameContentContainer">
                <div className="GameView">
                    <div className="ImageContainer">
                        <div className="gameTitle">
                            <h2>TRAIN YOUR PENGUIN</h2>
                        </div>
                        <img src="./gifs/losttroopergif.gif"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameContent;