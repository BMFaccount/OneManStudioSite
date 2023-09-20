import './App.css';
import NavBar from "./components/navbar/navbar.js";
import GameList from "./components/GameListShowcase/gameList.js";
import GameContent from "./components/GameContent/gameContent.js";

function App() {
	return (
		<div className="App">
			<GameList/>
			<div className='RightContentContainer'>
				<NavBar/>
				<GameContent></GameContent>
			</div>
		</div>
	);
}

export default App;
