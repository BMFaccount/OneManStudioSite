import React from "react";
import './gameList.css';
import '../../App.css';
import {games} from "../GameData.js";
function GetGameObjByName(name){
    return Object.values(games).find(game => game.name === name)
}
function GameContainer({name, imgLink, setGame}){
    const handleClick = (name) => {
        console.log(GetGameObjByName(name))
        setGame(GetGameObjByName(name))
    }

    var imgLinkString = "./images/gamescreenshots/" + imgLink
    return(
        <>
            <div onClick={() => handleClick(name)} className="GameContainer">
                <img src={imgLinkString}></img>
                <div className="GameTitle backgroundColor">
                    <h1 className="setColorToPrimaryColor">{name}</h1>
                </div>
            </div>
        </>
    )
}

function GameList({setGame}){
    return (
        <>
            <div className="GameListContainer">
                <div className="GameList">
                    {Object.keys(games).map(game => (
                        <GameContainer name={games[game].name} imgLink={games[game].iconPath} setGame={setGame}></GameContainer>
                    ))}
                </div>
            </div>
        </>
    )
}
export default GameList;