import React from "react";
import "../Styles/CardGrid.css";
import fruitImages from "../Assets/Images";

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
			console.log("game over!!");
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
