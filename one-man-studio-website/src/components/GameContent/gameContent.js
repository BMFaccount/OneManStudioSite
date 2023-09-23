import {React, useState, useEffect} from "react";
import './gameContent.css';
import './socialMedia.css';
async function GetImagePromise(imgSrcPath){
    let i = 0;
    let imgAndGifsPaths2 = [];
    let fileTypes = [".png", ".gif"]
    let bool = true
    while(bool){
        i++;
        fileTypes.map(async type =>
            {
                let src = imgSrcPath + "image"+i+type
                const response = await fetch(src).then((res) => {
                    if(res.headers.get("content-type") != "text/html; charset=utf-8"){
                        imgAndGifsPaths2.push(src)
                    }else{
                        bool = false
                    }
                })
            }
        )
        if (i >= 7) break; // 7 IMAGES MAX
    }
    return imgAndGifsPaths2
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
    
    const [imgAndGifsPaths, setImgPaths] = useState([]) //adding this use state makes it go kuku.......
    //let imgAndGifsPaths = [];
    useEffect(() => {
        GetImagePromise(GetImgSrcPath()).then((a) => {
            //console.log(a)
            setImgPaths(a)
        })
    }, [game])
    console.log(imgAndGifsPaths)
    return (
        <>
            <div className="GameView">
                <div className="ImageContainer">
                    <div className="gameImg ">
                        <div className="gameTitle setBackgroundColorToSecondaryColor">
                            <h2 className="setColorToPrimaryColor">{game.name}</h2>
                        </div>
                        <img className="setBackgroundColorToSecondaryColor" src={
                            imgAndGifsPaths.length > 0?
                            imgAndGifsPaths[imgUseState.imgIndex] : "#"
                        }/>
                    </div>
                    <div className="ImageSelections">
                        {
                            imgAndGifsPaths.length > 0?
                            imgAndGifsPaths.map((imgPath, index) => {
                                return (
                                    <>
                                        <img onClick={() => imgUseState.setImgIndex(index)} className={imgUseState.imgIndex == index? "SelectedImgStyle" : ""} src={imgPath}/>
                                    </>
                                )
                            }) :
                            (
                                <>
                                </>
                            )
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