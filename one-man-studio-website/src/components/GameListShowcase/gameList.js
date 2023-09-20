import React from "react";
import './gameList.css';
import '../../App.css';
import {games} from "../GameData.js";

function GameList({setGame}){

    function GameContainer({name, imgLink}){
        const handleClick = (name) => {
            setGame(games[name])
        }
    
        var imgLinkString = "./images/gamescreenshots/" + imgLink
        return(
            <>
                <div onClick={handleClick(name)} className="GameContainer">
                    <img src={imgLinkString}></img>
                    <div className="GameTitle">
                        <h1>{name}</h1>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="GameListContainer">
                <div className="GameList">
                    {Object.keys(games).map(game => (
                        <GameContainer name={games[game].name} imgLink={games[game].iconPath}></GameContainer>
                    ))}
                </div>
            </div>
        </>
    )
}
export default GameList;