import React from "react";
import './gameList.css';

function GameList(){
    return (
        <>
            <div className="GameListContainer">
                <div className="GameList">
                    <div className="GameContainer">
                        <img src="./images/penguinscreenshot.png"></img>
                        <div className="GameTitle">
                            <h1>TRAIN YOUR PENGUIN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameList;