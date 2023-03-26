import "./App.css";
import MainGame from "./Components/MainGame";
import { useState } from "react";
import { fruits as initFruitsList } from "./Data/fruitsData";
import InstructionNamePopup from "./Components/InstructionNamePopup";
import GameOverPopup from "./Components/GameOverPopup";
import { v4 as uuidv4 } from "uuid";
import { fruitImageClickCount } from "./Data/fruitsData";

// Constant Variables
// Size of randomly generated fruits array
const RANDOM_ARR_LEN = 12;

const makeRandomArr = (mainArr, N, K) => {
	let randomFruits = [];
	for (let i = 0; i < K; i++) {
		randomFruits[i] = {
			fruitName: mainArr[Math.floor(Math.random() * N)],
			uniqueId: uuidv4(),
		};
	}
	return randomFruits;
};

function App() {
	const [playerName, setPlayerName] = useState("");

	const [randomFruits, setRandomFruits] = useState(
		makeRandomArr(initFruitsList, initFruitsList.length, RANDOM_ARR_LEN)
	);
	const [imageClickCount, setImageClickCount] =
		useState(fruitImageClickCount);
	const [bestScore, setBestScore] = useState(0);

	const [playerScore, setPlayerScore] = useState(0);

	const resetGame = () => {
		// Reseting the imageClickCount
		setImageClickCount(fruitImageClickCount);
		// Reseting the randomFruitsArr
		setRandomFruits(
			makeRandomArr(initFruitsList, initFruitsList.length, RANDOM_ARR_LEN)
		);
		// Reseting the playerScore
		setPlayerScore(0);
	};

	return (
		<div className="App">
			<MainGame
				fruits={initFruitsList}
				playerScore={playerScore}
				setPlayerScore={setPlayerScore}
				bestScore={bestScore}
				setBestScore={setBestScore}
				randomFruits={randomFruits}
				setRandomFruits={setRandomFruits}
				imageClickCount={imageClickCount}
				setImageClickCount={setImageClickCount}
				makeRandomArr={makeRandomArr}
				randomArrLen={RANDOM_ARR_LEN}
			/>
			<InstructionNamePopup
				playerName={playerName}
				setPlayerName={setPlayerName}
			/>
			<GameOverPopup resetGame={resetGame} />
		</div>
	);
}

export default App;
