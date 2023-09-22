import {React, useState} from "react";
import './gameContent.css';
import './socialMedia.css';
async function GetListOfImages(imgSrcPath){
    let i = 0;
    let imgAndGifsPaths = [];
    const loadImage = src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve(
            imgAndGifsPaths.push(src)
          );
          img.src = src;
          img.onerror = reject;
        });
      };
    let fileTypes = [".png", ".gif"]
    let promises = [];
    while(true){
        i++;
        fileTypes.map(type =>
            {
                promises.push(loadImage(imgSrcPath + "image"+i+type))
            }
        )
        try {
            await Promise.all(promises); // just to make while stop
        } catch (e) {
            break;
        }
        if (i >= 10) break;
    }
    console.log(imgAndGifsPaths)
    return imgAndGifsPaths;
}

function GameContent({game, imgUseState}){
    function GetImgSrcPath(){
        switch(game.name){
            case "Lost Trooper":
                return "./images/gamescreenshots/lostTrooperScreens/"
            case "Train your penguin":
                return "./images/gamescreenshots/penguinTrainScreens/"
            case "Castle crusher":
                return "./images/gamescreenshots/castleCrusherScreens/"
        }
    }
    let imgSrcPath = GetImgSrcPath();
    let imgAndGifsPaths = GetListOfImages(imgSrcPath);
    return (
        <>
            <div className="GameView">
                <div className="ImageContainer">
                    <div className="gameImg ">
                        <div className="gameTitle setBackgroundColorToSecondaryColor">
                            <h2 className="setColorToPrimaryColor">{game.name}</h2>
                        </div>
                        <img className="setBackgroundColorToSecondaryColor" src={

                            imgAndGifsPaths[imgUseState.imgIndex]
                        }/>
                    </div>
                    <div className="ImageSelections">
                        {
                            imgAndGifsPaths.map((imgPath, index) => {
                                return (
                                    <>
                                        <img onClick={() => imgUseState.setImgIndex(index)} className={imgUseState.imgIndex == index? "SelectedImgStyle" : ""} src={imgPath}/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="StatsContainer">
                    <div className="StatsTitle setBackgroundColorToPrimaryColor"><h1 className="setColorToBackgroundColor">STATS</h1></div>
                    <div className="Stats">
                        {game.stats.map((stat) => {
                            return (
                                <>
                                    <div className="Stat setBackgroundColorToSecondaryColor"><h1 className="setColorToPrimaryColor">{stat}</h1></div>
                                </>
                            );
                        })}
                    </div>
                    <div className="SocialMediaLinks">
                        <ul> 
                            {
                                game.mediaIcons.map((mediaString, index) => {
                                    let myAttr = ""
                                    let string = "" 
                                    switch(mediaString) {
                                        case "unity":
                                            string = "Made in Unity"
                                            break;
                                        case "youtube":
                                            myAttr = {"href": '#'}
                                            string = "Watch on Youtube"
                                            break;
                                        case "google-play":
                                            myAttr = {"href": '#'}
                                            string = "Play on play store"
                                            break;
                                        case "epic":
                                            myAttr = {"href": '#'}
                                            string = "Play on Epic games"
                                            break;
                                        case "steam":
                                            myAttr = {"href": '#'}
                                            string = "Play on  Steam"
                                            break;
                                        default:
                                    }
                                    return(
                                        <li className={mediaString}>
                                            <a {...myAttr} >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class={"companyTitle fa-brands fa-"+mediaString}>
                                                {
                                                    mediaString == "epic"?
                                                        <>
                                                            <img className="customMediaIcon" src="./images/Logos/Epicgames.png"></img>
                                                        </>
                                                        :
                                                        <></>
                                                }
                                                </span>
                                                <a class="socialMediaTxt">{string}</a>
                                            </a> 
                                        </li>
                                    )
                                })
                            }
                        </ul>  
                    </div> 
                </div>
            </div>
        </>
    )
}
export default GameContent;