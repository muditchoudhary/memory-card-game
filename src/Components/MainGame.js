import React, { useState } from "react";
import "../Styles/MainGame.css";
import CardGrid from "./CardGrid";
import { fruitImageClickCount } from "../Data/fruitsData";

// Constant Variables
// Size of randomly generated fruits array
const RANDOM_ARR_LEN = 12;

const makeRandomArr = (mainArr, N, K) => {
	let randomFruits = [];
	for (let i = 0; i < K; i++) {
		randomFruits[i] = mainArr[Math.floor(Math.random() * N)];
	}
	return randomFruits;
};

const MainGame = (props) => {
	const [randomFruits, setRandomFruits] = useState(
		makeRandomArr(props.fruits, props.fruits.length, RANDOM_ARR_LEN)
	);
	const [imageClickCount, setImageClickCount] =
		useState(fruitImageClickCount);

	const [playerScore, setPlayerScore] = useState(0);
	return (
		<div className="Main-Game">
			<div className="header">
				<div className="hdr-child-first">
					<p>Your Score:</p>
					<p>{playerScore}</p>
				</div>
				<div className="hdr-child-second">
					<p>Memory Game</p>
				</div>
				<div className="her-child-third">
					<p>Best Score:</p>
					<p>18</p>
					<p>By Some Person</p>
				</div>
			</div>
			<div className="box">
				<CardGrid
					randomFruits={randomFruits}
					setRandomFruits={setRandomFruits}
					imageClickCount={imageClickCount}
					setImageClickCount={setImageClickCount}
					makeRandomArr={makeRandomArr}
					fruits={props.fruits}
					randomArrLen={RANDOM_ARR_LEN}
                    playerScore={playerScore}
                    setPlayerScore={setPlayerScore}
				/>
			</div>
		</div>
	);
};

export default MainGame;
