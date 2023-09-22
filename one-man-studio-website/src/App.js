import './App.css';
import {React, useState} from "react";
import NavBar from "./components/navbar/navbar.js";
import GameList from "./components/GameListShowcase/gameList.js";
import GameContent from "./components/GameContent/gameContent.js";
import {games} from "./components/GameData.js";
function App() {
	const [game, setGame] = useState(games.lostTrooper);
	const [imgIndex, setImgIndex] = useState(0)
	var imgUseState = {
		imgIndex : imgIndex,
		setImgIndex : setImgIndex
	}
	return (
		<div className="App">
			<GameList setImgIndex={setImgIndex} setGame={setGame}/>
			<div className='RightContentContainer'>
				<NavBar/>
				<GameContent imgUseState={imgUseState} game={game}></GameContent>
			</div>
		</div>
	);
}

export default App;
