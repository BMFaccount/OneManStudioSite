import {React, useState} from "react";
import './gameContent.css';

function GameContent({game}){
    console.log(JSON.stringify(game));
    return (
        <>
            <div className="GameContentContainer">
                <div className="GameView">
                    <div className="ImageContainer">
                        <div className="gameTitle">
                            <h2>{game.name}</h2>
                        </div>
                        <img src="./gifs/losttroopergif.gif"/>
                    </div>
                    <div className="StatsContainer">
                        <div className="StatsTitle"><h1>Stats</h1></div>
                        <div className="Stats">
                            <div className="Stat"><h1>50M+ DOWNLOADS</h1></div>
                            <div className="Stat"><h1>50 users</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameContent;