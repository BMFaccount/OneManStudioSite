import {React, useState} from "react";
import './gameContent.css';
import './arrows.css';
const tryRequire = (path) => {
    try {
     return require(`${path}`);
    } catch (err) {
     return null;
    }
  };

function GameContent({game}){
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <>
            <div className="GameContentContainer">
                <div className="GameView">
                    <div className="ImageContainer">
                        <div className="gameTitle setBackgroundColorToSecondaryColor">
                            <h2 className="setColorToPrimaryColor">{game.name}</h2>
                        </div>
                        <div className="gameImg ">
                            <a href="#"><span class="arrow left"></span></a>
                            <img className="setBackgroundColorToSecondaryColor" src={"./gifs/"+game.imgAndGifsPaths[imgIndex]}/>
                            <a href="#"><span class="arrow right"></span></a>
                        </div>
                    </div>
                    <div className="StatsContainer">
                        <div className="StatsTitle setBackgroundColorToPrimaryColor"><h1 className="setColorToBackgroundColor">STATS</h1></div>
                        <div className="Stats">
                            <div className="Stat setBackgroundColorToSecondaryColor"><h1 className="setColorToPrimaryColor">50M+ DOWNLOADS</h1></div>
                            <div className="Stat setBackgroundColorToSecondaryColor"><h1 className="setColorToPrimaryColor">50 users</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GameContent;