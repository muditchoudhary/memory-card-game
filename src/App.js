import "./App.css";
import MainGame from "./Components/MainGame";
import { useState } from "react";
import { fruits as initFruitsList } from "./Data/fruitsData";
import InstructionNamePopup from "./Components/InstructionNamePopup";

function App() {
	const [fruits, setFruits] = useState(initFruitsList);
	const [playerName, setPlayerName] = useState("");

	return (
		<div className="App">
			<MainGame fruits={fruits} />
			<InstructionNamePopup
				playerName={playerName}
				setPlayerName={setPlayerName}
			/>
		</div>
	);
}

export default App;
