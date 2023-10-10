import React from "react";
import './gameList.css';
import '../../App.css';
import {games} from "../GameData.js";
function GetGameObjByName(name){
    return Object.values(games).find(game => game.name === name)
}
function GameContainer({game, setGame, setImgIndex}){
    let gameObj = games[game];
    let name = gameObj.name;
    let imgLink = gameObj.iconPath;
    const handleClick = (name) => {
        //console.log(GetGameObjByName(name))
        setGame(GetGameObjByName(name))
        setImgIndex(0)
    }

    var imgLinkString = "./images/gameicons/" + imgLink
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

function GameList({setGame, setImgIndex}){
    return (
        <>
            <div className="GameListContainer">
                <div className="GameList">
                    {Object.keys(games).map(game => (
                        <GameContainer game={game} setGame={setGame} setImgIndex={setImgIndex}></GameContainer>
                    ))}
                </div>
                
            </div>
        </>
    )
}
export default GameList;