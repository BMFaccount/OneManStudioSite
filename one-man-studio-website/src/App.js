import './App.css';
import {React, useState} from "react";
import NavBar from "./components/navbar/navbar.js";
import GameList from "./components/GameListShowcase/gameList.js";
import GameContent from "./components/GameContent/gameContent.js";
import {games} from "./components/GameData.js";
function App() {
	const [game, setGame] = useState(games.lostTrooper);
	return (
		<div className="App">
			<GameList setGame={setGame}/>
			<div className='RightContentContainer'>
				<NavBar/>
				<GameContent game={game}></GameContent>
			</div>
		</div>
	);
}

export default App;
