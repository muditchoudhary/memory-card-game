import React from "react";
import "../Styles/CardGrid.css";
import fruitImages from "../Assets/Images";

const isBestscore = (bestScore, currentScore) => {
	if (currentScore > bestScore) return true;
	return false;
};

const CardGrid = (props) => {
	const clickOnFruit = (fruitName) => {
		if (props.imageClickCount[fruitName] < 1) {
			// Increment the count of the fruit in hashmap
			props.setImageClickCount({
				...props.imageClickCount,
				[fruitName]: (props.imageClickCount[fruitName] += 1),
			});

			// Set the random fruits array to new random array
			props.setRandomFruits(
				props.makeRandomArr(
					props.fruits,
					props.fruits.length,
					props.randomArrLen
				)
			);

			// Increment Score
			props.setPlayerScore((score) => score + 1);
		} else {
			document.querySelector(".gameover-overlay").classList.add("active");
			if (isBestscore(props.bestScore, props.playerScore)) {
				props.setBestScore(props.playerScore);
			}
		}
	};

	return (
		<div className="grid-container">
			{props.randomFruits.map((fruitObj) => {
				return (
					<div
						className="grid-cell"
						key={fruitObj.uniqueId}
						onClick={(e) => {
							clickOnFruit(e.target.alt);
						}}
					>
						<div>
							<img
								src={fruitImages[fruitObj.fruitName]}
								alt={fruitObj.fruitName}
							/>
						</div>
						<p>{fruitObj.fruitName.replace("_", " ")}</p>
					</div>
				);
			})}
		</div>
	);
};

export default CardGrid;
